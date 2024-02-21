import { Image, Text, View } from "react-native"
import { DailyPrevisionProps } from "../../Models/MeteoModel"
import { styles } from "./DailyPrevisionStyle"


export const DailyPrevisionComponent = ({ data }: DailyPrevisionProps): React.JSX.Element => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.day}>{data.day}</Text>
            <Text style={styles.temperature}>{data.temperature}°</Text>
            <Image
                style={styles.skyIcon}
                source={{
                    uri: `http://openweathermap.org/img/wn/${data.skyIcon}.png`,
                }}
            />
        </View>
    )
}