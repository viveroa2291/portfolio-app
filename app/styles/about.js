import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
    {
        headerText: {
            fontSize: 25,
            textAlign: 'center',
            marginTop: 105
        }, 
        header: {
            fontSize: 25,
            textAlign: 'center'
        },
        containerImage: {
            width: 200,
            height: 200,
            borderRadius: 100, // To make it circular
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 25
        },
        selfie: {
            width: 250,
            height: 250,
            position: 'absolute',
            marginLeft: 'auto',
            left: -20,
            top: -25
        },
        introduction: {
            textAlign: 'center',
            marginTop: 25,
            fontSize: 12
        },
        me: {
            fontSize: 25,
            marginTop: 25,
            fontStyle: 'bold',
            textAlign: 'center'
        },
        aboutMe: {
            fontSize: 14,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 25,
            width: '85%',
            fontFamily: 'Cochin'
        },
        line: {
            width: '75%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            marginTop: 25,
            marginBottom: 25
        },
        techStack: {
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        plImages: {
            marginTop: 10,
            margin: 1,
            height: 25
        },
        jobTitle: {
            fontSize: 20,
            marginLeft: 10
        },
        jobDate: {
            fontSize: 15,
            marginTop: 10,
            marginLeft: 25
        },
        filmTitle: {
            textAlign: 'center',
            marginTop: 25,
        },
        webView: {
            height: 225,
            width: '65%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 5,
            marginTop: 25
        }
    }
)

export default styles;