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
    projects: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    project: {
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
    title: {
        textAlign: 'center'
    },  
    line: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 10
    },
    webview: {
        width: '100%',
        height: 200,
        marginTop: 10
    },
    technologiesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    badge: {
        width: 150,
        height: 30,
        margin: 1,
        aspectRatio: 5, // Adjust this based on your image's ratio (width/height of original image)
        resizeMode: 'contain'
    }
});

export default styles;