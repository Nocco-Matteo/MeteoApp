import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 25,
      paddingVertical: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '80%',
      
  },
  closeButton: {
      alignSelf: 'flex-end',
      marginBottom: 10,      
  },
  closeButtonText: {
      fontSize: 18,
      color: '#333',
  },
  input: {
      height: 40,
      width: '100%',
      marginBottom: 20,
      borderWidth: 1,
      padding: 10,
  },
});