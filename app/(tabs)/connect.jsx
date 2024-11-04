import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import styles from './styles/connect'; // Adjust the path if necessary

export default function ConnectScreen() { 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Connect with me</Text>
            <View style={styles.line} />
            <Image style={styles.image} source={require('./images/professional-image.jpeg')}/>
            <Text style={styles.bottomText}>Here are some links on where you can connect with me.</Text>
        </View>
    )
}