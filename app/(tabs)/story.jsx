import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
export default function StoryScreen() { 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Story page</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})