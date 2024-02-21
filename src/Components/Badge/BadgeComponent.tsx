import { Image, Text, TouchableOpacity, View } from "react-native"
import { BadgeComponentProps } from "../../Models/MeteoModel"
import { styles } from "./BadgeStyle"
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../Models/NavigatorModel";
import { StackNavigationProp } from '@react-navigation/stack';

const BadgeComponent = ({ badge }: BadgeComponentProps): React.JSX.Element => {
    const  navigation  = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('DetailsComponent', {badge})}>
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
        </TouchableOpacity>
    )
}

export default BadgeComponent