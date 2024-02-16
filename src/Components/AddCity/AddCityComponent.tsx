import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AddCityProps } from "../../Models/MeteoModel";
import AddCityModalComponent from "./AddCityModal/AddCityModalComponent";
import { styles } from "./AddCityStyle";


const AddCityComponent = ({onAddCity} : AddCityProps): React.JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openAddCityModal = (): void => {
        setModalVisible(true)
    }

    return (
        <TouchableOpacity onPress={openAddCityModal} style={styles.wrapper}>
            <View style={styles.button}>
                <Text style={styles.textColor}>+</Text>
            </View>
            <Text style={styles.labelText}>Aggiungi città</Text>
            <AddCityModalComponent
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                onAddCity={onAddCity}
            />
        </TouchableOpacity>
    )
}

export default AddCityComponent