import { Alert } from "react-native";
import { KEY_OPENWEATHER } from "../Configs/MeteoConfig"
import { Badge } from "../Models/MeteoModel";
import { capitalizeFirstLetter, fromKelvinToCelsius } from "../Utils/utils";

export const getMeteoData = (city: string): Promise<void | Badge> => {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${KEY_OPENWEATHER}`)
        .then((res) => res.json())
        .then((res) => {
            const { lat, lon } = res[0];

            return fetch(`https:/api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${KEY_OPENWEATHER}`)
        })
        .then((res) => res.json())
        .then((res) => {
            const currUtcDate = new Date().getTime();
            const localTime = new Date(currUtcDate + res.timezone_offset * 1000);
          
            const badge: Badge = {
              city: capitalizeFirstLetter(city),
              time: localTime.getHours().toString().padStart(2, '0') + ':' + localTime.getMinutes().toString().padStart(2, '0'),
              temperature: fromKelvinToCelsius(res.current.temp),
              day: capitalizeFirstLetter(localTime.toLocaleDateString('it-IT', {
                weekday: 'long',
                day: '2-digit'
              })),
              month: capitalizeFirstLetter(localTime.toLocaleDateString('it-IT', {
                month: 'long'
              })),
              hourlyPrevision: res.hourly.slice(0, 25).map((hourly: any) => {
                const date = new Date((hourly.dt * 1000) + res.timezone_offset * 1000);
                return {
                  temperature: fromKelvinToCelsius(hourly.temp),
                  time: date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0'),
                  skyIcon: hourly.weather[0].icon
                }
              }),
              dailyPrevision: res.daily.slice(0, 7).map((daily : any) => {
                const date = new Date((daily.dt * 1000) + res.timezone_offset * 1000);
                return {
                  day: capitalizeFirstLetter(date.toLocaleDateString('it-IT', { weekday: 'long' })),
                  temperature: fromKelvinToCelsius(daily.temp.day),
                  skyIcon: daily.weather[0].icon
                };
              }),
              skyIcon: res.current.weather[0].icon
            };
          
            return badge;
          })
          
        .catch((error) => {
            console.error(error);
            Alert.alert('Errore', 'Città non trovata');
        });
}

