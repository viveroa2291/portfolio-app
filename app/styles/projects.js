import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    text: {
        fontSize: 20,
        marginTop: 105,
        textAlign: 'center'
    },
    projectsContainer: {
        flex: 1,
        marginTop: 20
    },
    /*
    projects: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    */
    project: {
        width: '98%', 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        padding: 25,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: '.5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        textAlign: 'center'
    },  
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 10
    },
    lineTwo: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginTop: 15,
        marginBottom: 10
    },
    webview: {
        width: '100%',
        height: 450,
        marginTop: 10,
        borderWidth: '.5',
        borderColor: 'black'
    },
    technologiesRow: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    badge: {
        width: 80,
        height: 30,
        margin: 1,
        // aspectRatio: 5,
        resizeMode: 'contain'
    }
});

export default styles;