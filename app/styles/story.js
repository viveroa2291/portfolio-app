import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 20
    }, 
    picker: {
        marginTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        textAlign: 'center'
    },
    dropDownContainer: {
        alignSelf: 'center',
        marginTop: 25,
        width: '50%'
    }, 
    storiesScroll: {
        marginBottom: 200
    },
    stories: {
        flex: 1
    },
    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
        marginBottom: 25,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowOpacity: 0.25,
        padding: 25,
        borderWidth: 2, borderColor: 'black', borderRadius: 10
    },
    images: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 200,
        width: 300
    }, 
    title: {
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        marginTop: 25
    },
    description: {
        fontSize: 12,
        color: 'light-black',
        marginTop: 10, 
        marginBottom: 10
    },
    date: {
        fontSize: 8
    }, 
    category: {
        color: 'blue',
        textAlign: 'right',
        marginTop: -15,
        fontSize: 10
    }
});

export default styles;