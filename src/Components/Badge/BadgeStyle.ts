import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: 1,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstColumn: {
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    skyIcon: {
        width: 100,
        height: 100,
    },
})