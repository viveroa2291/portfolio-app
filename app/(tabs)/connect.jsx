import {View, Text, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/connect';
import { useWindowDimensions } from 'react-native';
export default function ConnectScreen() { 
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Connect with me</Text>
            <View style={styles.line} />
            <View style={styles.imageContainer}>
                <Image style={[styles.image, {borderRadius: 175}]} source={require('./images/professional-image.jpeg')} resizeMethod='cover' />
            </View>
            <Text style={[styles.bottomText, { width: width * .5}]}>Here are some links on where you can connect with me.</Text>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/adan-vivero-a93970156/')}>
                    <Icon name="logo-linkedin" size={50} color="#0077B5" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://stackoverflow.com/users/10572727/adan-vivero?tab=profile')}>
                    <Icon name="logo-stackoverflow" size={50} color="#F48024" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://discord.com/channels/719094259051135027/719094260174946329')}>
                    <Icon name="logo-discord" size={50} color="#7289DA" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/?ogbl#inbox')}>
                    <Icon name="mail" size={50} color="#D14836" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/viveroa2291')}>
                    <Icon name="logo-github" size={50} color="#333" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://medium.com/@adan_vivero')}>
                    <Icon name="logo-medium" size={50} color="#00AB6C" style={{marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://gitlab.com/viveroa2291')}>
                    <Icon name="logo-gitlab" size={50} color="orange" style={{marginLeft: 10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}