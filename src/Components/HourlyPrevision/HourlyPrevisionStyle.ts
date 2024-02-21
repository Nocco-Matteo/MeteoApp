import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../../Configs/MeteoConfig";


export const styles = StyleSheet.create({
    wrapper: {
        height: 100,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    skyIcon : {
        width: 50,
        height: 50,
    },
    text : {
        fontSize: 17,
        fontWeight: 'bold',
    }
})