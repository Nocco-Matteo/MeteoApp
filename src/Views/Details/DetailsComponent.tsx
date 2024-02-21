import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-remix-icon';
import { DailyPrevisionComponent } from "../../Components/DailyPrevision/DailyPrevisionComponent";
import { HourlyPrevisionComponent } from "../../Components/HourlyPrevision/HourlyPrevisionComponent";
import { TEXT_COLOR } from "../../Configs/MeteoConfig";
import { styles } from "./DetailsStyle";

export const DetailsComponent = ({ route, navigation }: any): React.JSX.Element => {
    const { badge } = route.params;
    return (
        <View style={styles.wrapper}>
            {/* Go Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                <Icon name="ri-arrow-go-back-line" size="24" color={TEXT_COLOR} />
            </TouchableOpacity>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{badge.city}</Text>
                <Text style={styles.subtitle}>{badge.day}, {badge.month}</Text>
            </View>

            {/* Current Temperature */}
            <View style={styles.currentTemperatureWrapper}>
                <Image
                    style={styles.skyIcon}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${badge.skyIcon}.png`,
                    }}
                />
                <Text style={styles.currentTemperature}>{badge.temperature}°</Text>
            </View>

            {/* Hourly Temperature */}
            <View style={styles.hourlyTemperatureWrapper}>
                <Text style={styles.text}>Previsione Oraria</Text>
                <View style={styles.hourlyTemperature}>
                    <FlatList
                        data={badge.hourlyPrevision}
                        renderItem={({ item, index }) => (
                            <HourlyPrevisionComponent data={item} isFirst={index === 0}></HourlyPrevisionComponent>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* Daily Temperature */}
            <View style={styles.dailyTemperatureWrapper}>
                <Text style={styles.text}>Previsione Giornaliera</Text>
                <FlatList
                    data={badge.dailyPrevision}
                    renderItem={({ item }) => (
                        <DailyPrevisionComponent data={item}></DailyPrevisionComponent>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}