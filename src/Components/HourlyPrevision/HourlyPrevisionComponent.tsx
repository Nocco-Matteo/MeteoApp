import { Image, Text, View } from "react-native"
import { HourlyPrevisionProps } from "../../Models/MeteoModel"
import { styles } from "./HourlyPrevisionStyle"


export const HourlyPrevisionComponent = ({ data, isFirst }:HourlyPrevisionProps): React.JSX.Element => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{data.temperature}°</Text>
            <Image
                style={styles.skyIcon}
                source={{
                    uri: `http://openweathermap.org/img/wn/${data.skyIcon}.png`,
                }}
            />
            <Text style={styles.text}>{isFirst? "ORA" : data.time}</Text>
        </View>
    )
}