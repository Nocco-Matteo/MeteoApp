import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import AddCityComponent from "../../Components/AddCity/AddCityComponent";
import BadgeComponent from "../../Components/Badge/BadgeComponent";
import { HOME_TITLE } from "../../Configs/MeteoConfig";
import { Badge } from "../../Models/MeteoModel";
import * as MeteoService from "../../Services/MeteoService";
import * as AsyncStorageService from "../../Services/AsyncStorageService";
import { styles } from "./HomeStyle";


const HomeComponent = ({ navigation }: any): React.JSX.Element => {
    const [badges, setBadges] = useState<Badge[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const init = (): void => {
        setIsLoading(true)
        AsyncStorageService.getBadges()
            .then((badges) => {
                if (badges) setBadges(badges);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const addCity = (cityName: string): void => {
        setIsLoading(true);
        MeteoService.getMeteoData(cityName)
            .then((badge) => {
                if (!badge) return;

                AsyncStorageService.saveBadges([...badges, badge]);
                setBadges((prevBadges) => [...prevBadges, badge]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const deleteCities = (): void => {
        AsyncStorageService.removeBadges();
        setBadges([]);
    }

    const reloadCities = (): void => {
        Promise.all(badges.map((badge) => MeteoService.getMeteoData(badge.city)))
            .then((reloadedBadges) => reloadedBadges.filter((badge) => badge !== null) as Badge[])
            .then((reloadedBadges) => {
                if (!reloadedBadges) return;

                AsyncStorageService.saveBadges(reloadedBadges);
                setBadges(reloadedBadges.filter((badge) => badge !== null) as Badge[]);
            })
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    {HOME_TITLE}
                </Text>
            </View>

            {/* Button Add City */}
            <View>
                <AddCityComponent onAddCity={addCity}></AddCityComponent>
            </View>

            {/* Badges */}
            <FlatList data={badges}
                renderItem={({ item }) => <BadgeComponent badge={item} />}
                keyExtractor={(item) => item.city}
                refreshing={isLoading}
                onRefresh={reloadCities}
                scrollEnabled={true} />

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button2} onPress={deleteCities}>
                    <Text style={styles.buttonText}>Svuota</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeComponent;