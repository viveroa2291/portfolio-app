import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    content: {
        width: '48%', 
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    images: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 100,
        width: 150
    }, 
    category: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 10
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
    },
    description: {
        fontSize: 12,
        color: 'light-black',
        marginTop: 10, 
        marginBottom: 10
    },
    date: {
        fontSize: 8
    }
});

export default styles;