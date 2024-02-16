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
            console.log(res);
            
            const badge: Badge = {
                city: capitalizeFirstLetter(city),
                time: localTime.getHours() + ':' + localTime.getMinutes(),
                temperature: fromKelvinToCelsius(res.current.temp),
                day: capitalizeFirstLetter(localTime.toLocaleDateString('it-IT', {
                    weekday: 'long',
                    day: '2-digit'
                })),
                month: capitalizeFirstLetter(localTime.toLocaleDateString('it-IT', {
                    month: 'long'
                })),
                skyIcon: res.current.weather[0].icon
            }
            return badge
        })
        .catch((error) => {
            console.error(error);
            Alert.alert('Errore', 'Città non trovata');
        });
}

