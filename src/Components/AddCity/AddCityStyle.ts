import { StyleSheet } from "react-native";
import { TEXT_COLOR } from "../../Configs/MeteoConfig";


export const styles : any = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',        
        alignSelf: 'center',
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    button: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: TEXT_COLOR,
        borderWidth: 1,
    },
    textColor : {
       color: TEXT_COLOR, 
    },
    labelText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: TEXT_COLOR, 
    },
});