import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR } from "../../Configs/MeteoConfig";


export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: PRIMARY_COLOR,
    },
    header : {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    subtitle : {
        fontSize: 24,
        color: TEXT_COLOR,
    },
    skyIcon: {
        width: 140,
        height: 140,
    },
    currentTemperature: {
        fontSize: 50,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    currentTemperatureWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hourlyTemperatureWrapper: {
        marginHorizontal: 20,
        marginBottom: 25,
    },
    hourlyTemperature: {
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        paddingVertical: 10,
    },
    text : {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 3,
        color: TEXT_COLOR,
    },
    dailyTemperatureWrapper: {
        marginHorizontal: 20,
        paddingBottom: 15,
    },
    backButton : {
        position: 'absolute',
        top: 10, 
        left: 10,
        padding: 10
    },
})