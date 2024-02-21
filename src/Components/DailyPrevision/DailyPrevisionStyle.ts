import { StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "../../Configs/MeteoConfig";


export const styles = StyleSheet.create({
    wrapper: {
        width: 150,
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 20,
        margin: 10,
    },
    skyIcon : {
        width: 120,
        height: 120,
    },
    day : {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    temperature : {
        fontSize: 18,
        fontWeight: 'bold',
    }
})