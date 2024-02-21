import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from "../../Configs/MeteoConfig";


export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
    },
    header: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        marginHorizontal: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: TEXT_COLOR,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    button1: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: '#F44336',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    loaderContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)', 
    }
})
