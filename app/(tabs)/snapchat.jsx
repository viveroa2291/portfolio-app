import { View, Text, Image, ScrollView, TextInput, Linking, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText'
import styles from '../styles/snapchat';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { lenses } from './lenses';

export default function SnapchatScreen() { 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [categories, setCategories] = useState([
        {label: "All", value: "all"},
        {label: "College", value: "college"},
        {label: "High School", value: 'high school'},
        {label: "Kanye", value: "kanye"},
        {label: "Brands", value: "brands"},
        {label: "Countries", value: "countries"},
        {label: "NFL", value: "nfl"},
        {label: "Programming Languages", value: "programminglanguages"},
        {label: "Other", value: "other"}
    ])
    const handleLink = (url) => {
        Linking.openURL(url);
    }
    const handleFilter = (newValue) => {
        setSelectedFilter(newValue);
        setValue(newValue);
    }
    const renderItem = ({ item, index }) => (
        <View key={index} style={styles.content}> 
            {item.image.map((lenses, lenseIndex) => (
                <Image style={styles.lenseImage} key={lenseIndex} source={lenses}/>
        ))}                            
            <Text style={styles.lenseLink} onPress={() => handleLink(item.link)} >{item.title}</Text>
        </View>
    );

    const filteredLenses = lenses.filter(lense => selectedFilter === 'all' || lense.category.toLowerCase() === selectedFilter);
    return (
        <View style={styles.container}>
            <ThemedText style={styles.header}>Snapchat Lenses</ThemedText>
            <View style={styles.line} />
            <Text style={styles.greeting}>Here are my Snapchat Lenses</Text>
            <DropDownPicker style={styles.picker} open={open} value={value} items={categories} setOpen={setOpen} setValue={setValue} setItems={setCategories} 
            onChangeValue={(value) => handleFilter(value)}
            dropDownContainerStyle={styles.dropDownContainer}
            />
            <FlatList 
                style={styles.lensesScroll}
                data={filteredLenses}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}   
                contentContainerStyle={styles.lenses}
                numColumns={2}
            />
        </View>
    )
}