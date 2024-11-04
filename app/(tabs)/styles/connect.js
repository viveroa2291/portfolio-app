import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        textAlign: 'center',
        marginTop: 105,
        fontSize: 24
    },  
    line: {
        marginLeft: 'auto',
        marginRight: 'auto',
        borderBottomColor: '#000',
        borderBottomWidth: .5,
        width: 150,
        marginVertical: 10, // Adjust spacing as needed
    },
    image: {
        width: 350,
        height: 350,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    bottomText: {
        marginTop: 50,
        textAlign: 'center'
    }
});

export default styles;