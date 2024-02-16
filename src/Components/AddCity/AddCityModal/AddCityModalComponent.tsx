import { Button, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AddCityModalProps } from "../../../Models/MeteoModel";
import { styles } from "./AddCityModalStyle";
import { useState } from "react";

const AddCityModalComponent = ({ isModalVisible, setModalVisible, onAddCity } : AddCityModalProps) => {
    const [cityName, setCityName] = useState('');

    const addCity = (): void => {
        onAddCity(cityName);
        setModalVisible(!isModalVisible);
        setCityName('');
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                setModalVisible(!isModalVisible);
            }}>
            <TouchableOpacity
                style={styles.centeredView}
                activeOpacity={1}
                onPressOut={() => {}}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Inserisci il nome della città"
                        value={cityName}
                        onChangeText={setCityName}
                    />
                    <Button
                        title="Aggiungi Città"
                        onPress={addCity}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default AddCityModalComponent;