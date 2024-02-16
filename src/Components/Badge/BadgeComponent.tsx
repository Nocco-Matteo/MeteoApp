import { Image, Text, View } from "react-native"
import { Badge, BadgeComponentProps } from "../../Models/MeteoModel"
import { styles } from "./BadgeStyle"

const BadgeComponent = ({ badge }: BadgeComponentProps): React.JSX.Element => {
    return (
        <View style={styles.wrapper}>
            {/* City Data */}
            <View style={[styles.column, styles.firstColumn]}>
                <View>
                    <Text style={styles.city}>{badge.city}</Text>
                </View>
                <View>
                    <Text>{badge.day},</Text>
                    <Text>{badge.month}</Text>
                </View>
                <View>
                    <Text>{badge.time}</Text>
                </View>
            </View>

            {/* Sky image */}
            <View style={styles.column}>
                <Image
                    style={styles.skyIcon}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${badge.skyIcon}.png`,
                    }}
                />
            </View>

            {/* Temperature */}
            <View style={styles.column}>
                <Text style={styles.temperature}>{badge.temperature}°</Text>
            </View>
        </View>
    )
}

export default BadgeComponent