import AsyncStorage from '@react-native-async-storage/async-storage';
import { Badge } from '../Models/MeteoModel';
import { BADGES_KEY } from '../Configs/MeteoConfig';

export const saveBadges = async (value: Badge[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(BADGES_KEY, JSON.stringify(value));
    } catch (error) {
        console.error(error);
    }
}

export const getBadges = async (): Promise<Badge[]> => {
    try {
        const value = await AsyncStorage.getItem(BADGES_KEY);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (error) {
        console.error(error);
    }

    return [];
}

export const removeBadges = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(BADGES_KEY);
    } catch (error) {
        console.error(error);
    }
}