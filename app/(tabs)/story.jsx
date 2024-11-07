import { useState } from 'react';
import {View, Text, Image, Linking, ScrollView, TextInput, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles/story';
export default function StoryScreen() { 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'All', value: 'all'},
        {label: 'Java', value: 'java'},
        {label: 'React.js', value: 'react'},
        {label: 'Other', value: 'other'} 
    ]);
    const handleLinkPress = (url) => {
        Linking.openURL(url);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Here are my stories</Text>
            <DropDownPicker style={styles.picker} open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} 
            dropDownContainerStyle={styles.dropDownContainer}
            />
            <ScrollView style={styles.storiesScroll}>
                <View style={styles.stories}>
                    {[  
                        { image: [require("./thumbnails/coke.jpg")], category: 'Other', title: 'Share A Coke Draws People In', link: "https://medium.com/@avivero6487/share-a-coke-draws-people-in-d86bec99c5d8", description: "Many advertisements have a Unique Selling Proposition, and Coke’s is “Share A Coke”.", date: "22 Oct 2015"},
                        { image: [require("./thumbnails/oop.png")], category: 'Java', title: 'Object Oriented Programming', link: "https://medium.com/@adan_vivero/introduction-to-object-oriented-programming-cba5acaee45b", description: "Object-Oriented Programming is a model that organizes code into reusable chunks of units wrapped into what is called objects.", date: "4 Feb 2024"},
                        { image: [require("./thumbnails/threads.png")], category: 'Java', title: 'Threads', link: "https://medium.com/@adan_vivero/threads-in-java-programming-f5a196de8c72", description: "Threads in Java are a key component in Java Programming, allowing programmers to execute multiple tasks at a time within a single program.", date: "13 Feb 2024"},
                        { image: [require("./thumbnails/exceptions.png")], category: 'Java', title: 'Exceptions', link: 'https://medium.com/@adan_vivero/java-exceptions-7bf11e69ea4a', description: "Exceptions in Java are a crucial element of Java Programming as it is a way for developers to debug unexpected events or errors within a program.", date: '14 Feb 2024'},
                        { image: [require("./thumbnails/interface.png")], category: 'Java', title: 'Interfaces', link: 'https://medium.com/@adan_vivero/java-interfaces-9e4d59188409', description: 'In the realm of Java Development, interfaces plays a pivotal role in how classes implement functionality.', date: '8 Feb 2024'},
                        { image: [require("./thumbnails/jvm.png")], category: 'Java', title: 'Java Virtual Machine (JVM)', link: 'https://medium.com/@adan_vivero/java-virtual-machine-501d00a6d1f6', description: 'The Java Virtual Machine (JVM) is a virtualized execution environment that enables Java applications to run on various different hardware devices.', date: '14 Feb 2024'},
                        { image: [require("./thumbnails/abstract.png")], category: 'Java', title: 'Abstract Classes', link: 'https://medium.com/@adan_vivero/abstract-classes-in-java-6579d0d2a9a7', description: 'An Abstract Class in Java is a class that can’t be instantiated on its own and typically functions as a blueprint for other classes.', date: '15 Feb 2024'},
                        { image: [require("./thumbnails/useState.png")], category: 'React.js', title: 'useState Hook', link: 'https://medium.com/@adan_vivero/usestate-in-react-a-simple-guide-c477fb9f839d', description: 'The ‘useState’ hook in React is used in functional components, providing a mechanism to update the component’s state.', date: '23 Feb 2024'}
                    ].map((story, index) => (
                        <View key={index} style={styles.content}>
                            {story.image.map((stories, storyIndex) => (
                            <Image style={styles.images} key={storyIndex} source={stories}/>
                            ))}
                            <Text style={styles.category}>{story.category}</Text>
                            <Text style={styles.title} onPress={() => handleLinkPress(story.link)}>{story.title}</Text>
                            <Text style={styles.description}>{story.description}</Text>
                            <Text style={styles.date}>{"Last Updated: " + story.date}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}            