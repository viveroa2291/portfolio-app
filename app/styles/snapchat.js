import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const styles = StyleSheet.create(
    {
        header: {
            marginTop: 100,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 22
        },
        line: {
            borderWidth: '.25',
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%'
        },
        greeting: {
            marginTop: 25,
            textAlign: 'center'
        },
        picker: {
            width: '50%',
            marginTop: 25,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        dropDownContainer: {
            alignSelf: 'center',
            marginTop: 25,
            width: '50%',
            textAlign: 'auto'
        },
        lenseImage: {
            height: 100,
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            resizeMode: 'contain'
        },
        lenseLink: {
            textAlign: 'center',
            color: 'blue'
        }
    } 
)

export default styles;