import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        marginVertical: 10
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100, // To make it circular
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50
    },
    image: {
        width: 300,
        height: 300,
        position: 'absolute',
        marginLeft: 'auto',
        left: -60,
        top: -70
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10
    },
    bottomText: {
        marginTop: 50,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
        width: '75%'
    },
});

export default styles;