import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AddCityComponent from "../../Components/AddCity/AddCityComponent";
import BadgeComponent from "../../Components/Badge/BadgeComponent";
import { HOME_TITLE } from "../../Configs/MeteoConfig";
import { Badge } from "../../Models/MeteoModel";
import * as MeteoService from "../../Services/MeteoService";
import { styles } from "./HomeStyle";

const HomeComponent = (): React.JSX.Element => {
    const [badges, setBadges] = useState<Badge[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const addCity = (cityName: string): void => {
        setIsLoading(true);
        MeteoService.getMeteoData(cityName)
            .then((badge) => {
                if (!badge) return;

                setBadges((prevBadges) => [...prevBadges, badge!]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const deleteCities = (): void => {
        setBadges([]);
    }

    const reloadCities = (): void => {
        Promise.all(badges.map((badge) => MeteoService.getMeteoData(badge.city)))
            .then((reloadedBadges) => {
                setBadges(reloadedBadges.filter((badge) => badge !== null) as Badge[]);
            })
    }
    return (
        <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    {HOME_TITLE}
                </Text>
            </View>
            {/* Loader */}
            {isLoading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}

            {/* Button Add City */}
            <View>
                <AddCityComponent onAddCity={addCity}></AddCityComponent>
            </View>
            {/* Badges */}
            <ScrollView style={styles.body}>
                {badges.map((badge, index) => {
                    return (
                        <BadgeComponent key={index} badge={badge}></BadgeComponent>
                    )
                })}
            </ScrollView>
            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button1} onPress={reloadCities}>
                    <Text style={styles.buttonText}>Aggiorna</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={deleteCities}>
                    <Text style={styles.buttonText}>Svuota</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeComponent;