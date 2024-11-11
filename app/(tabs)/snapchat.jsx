import {View, Text, Image, ScrollView, TextInput, Linking} from 'react-native';
import { ThemedText } from '@/components/ThemedText'
import styles from '../styles/snapchat';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

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
    return (
        <View>
            <ThemedText style={styles.header}>Snapchat Lenses</ThemedText>
            <View style={styles.line} />
            <Text style={styles.greeting}>Here are my Snapchat Lenses</Text>
            <DropDownPicker style={styles.picker} open={open} value={value} items={categories} setOpen={setOpen} setValue={setValue} setItems={setCategories} 
            onChangeValue={(value) => handleFilter(value)}
            dropDownContainerStyle={styles.dropDownContainer}
            />
            <ScrollView style={styles.lensesScroll}>
                <View style={styles.lenses}>
                    {[
                        {image: [require('./snapchat-lenses/badger.png')], category: "college", title: "Wisconsin Badgers Hat", link: "https://www.snapchat.com/lens/25765196f6f7451284c212f8267d4a16?type=SNAPCODE&metadata=01"},
                        {image: [require('./snapchat-lenses/sami.png')], category: "other", title: "Sami's Birthday Crown", link: "https://www.snapchat.com/lens/3f3b83e64d7a4b1e9b06e9c2e27b4ecc?type=SNAPCODE&metadata=01"},
                        {image: [require('./snapchat-lenses/hoosier.png')], category: "college", title: "Indiana Hoosier Hat", link: "https://www.snapchat.com/lens/c87bbf617ea84322abe17eaf7d96be3a?type=SNAPCODE&metadata=01"},
                        {image: [require('./snapchat-lenses/prospect.png')], category: "high school", title: "Prospect Knights Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a43f71255a884f9198adc6f2a66dfdb7&metadata=01"},
                        {image: [require('./snapchat-lenses/uwec.png')], category: "college", title: "UWEC Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9e3e2ca11741485cb6d4edc502f24a03&metadata=01"},
                        {image: [require('./snapchat-lenses/mizzou.png')], category: "college", title: "Mizzou Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7e58cc67ada749fe8000fb3c3c5a9b30&metadata=01"},
                        {image: [require('./snapchat-lenses/northwestern.png')], category: "college", title: "Northwestern Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=dc42b76120a4462b86f1118f4ccb44f1&metadata=01"},
                        {image: [require('./snapchat-lenses/niu.png')], category: "college", title: "Northern Illinois University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f069714dfe4d4c0097712310413165f8&metadata=01"},
                        {image: [require('./snapchat-lenses/isu.png')], category: "college", title: "Illinois State University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0d1c9a88891f4c318f19b6cb4516e228&metadata=01"},
                        {image: [require('./snapchat-lenses/npu.png')], category: "college", title: "North Park University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=16559c3fbdab4b3ca76cf1654b13c69f&metadata=01"},
                        {image: [require('./snapchat-lenses/edinburgh.png')], category: "college", title: "University of Edinburgh Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=44c16227e1a04971a4e60395414abb91&metadata=01"},
                        {image: [require('./snapchat-lenses/illinois.png')], category: "college", title: "University of Illinois Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0c62205101ab454ea1db6d2406f65ba0&metadata=01"},
                        {image: [require('./snapchat-lenses/dayton.png')], category: "college", title: "University of Dayton Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6840c3926e71493fa632e2babe497cfa&metadata=01"},
                        {image: [require('./snapchat-lenses/hersey.png')], category: "high school", title: "John Hersey Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=983f25767aed43f19a12ad3869a5ebfe&metadata=01"},
                        {image: [require('./snapchat-lenses/whitewater.png')], category: "college", title: "University of Wisconsin - Whitewater Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=de64fae7aec44b9b81eb6ef063315b17&metadata=01"},
                        {image: [require('./snapchat-lenses/xavier.png')], category: "college", title: "Xavier University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=243f0f514974486bb427326395c13a36&metadata=01"},
                        {image: [require('./snapchat-lenses/uic.png')], category: "college", title: "UIC Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6411b577d78e4e84a081061952fd8e9a&metadata=01"},
                        {image: [require('./snapchat-lenses/ohio.png')], category: "college", title: "Ohio State University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=782e604579df46e5bcb90806c2cf2ead&metadata=01"},
                        {image: [require('./snapchat-lenses/minnesota.png')], category: "college", title: "University of Minnesota Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c3672ee982a54ec9ac86404ec6e71787&metadata=01"},
                        {image: [require('./snapchat-lenses/bear.png')], category: "kanye", title: "Kanye West Graduation Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0ca61f5d5f454bd6872575d1e25abe5a&metadata=01"}, 
                        {image: [require('./snapchat-lenses/lifeofpablo.png')], category: "kanye", title: "Life of Pablo Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ca1135ae6c46485b9e5ebb7188042cba&metadata=01"},
                        {image: [require('./snapchat-lenses/yeezus.png')], category: "kanye", title: "Yeezus Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3aaff9ce79a14c29a66430fd02b4f259&metadata=01"},
                        {image: [require('./snapchat-lenses/college-dropout.png')], category: "kanye", title: "College Dropout Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=9bb0b40ee55f4e0cb4bf4825772b105b&metadata=01"},
                        {image: [require('./snapchat-lenses/mbdtf.png')], category: "kanye", title: "MBDTF Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b1ae5c22fb884083a6a050368775116d&metadata=01"},
                        {image: [require('./snapchat-lenses/late-registration.png')], category: "kanye", title: "Late Registration Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=a824af2bd6f94c98a5e6f8d2758afbb7&metadata=01"},
                        {image: [require('./snapchat-lenses/ksg.png')], category: "kanye", title: "Kids See Ghosts Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7538d27556d6415a9ce94d9a0ece5849&metadata=01" },
                        {image: [require('./snapchat-lenses/ye.png')], category: "kanye", title: "Ye Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f9fe340378c04c91862de6b5ca58e991&metadata=01"},
                        {image: [require('./snapchat-lenses/full-send.png')], category: "brands", title: "Full Send Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0ade7c50fbf14bbf894080cb3612d3ae&metadata=01"}, 
                        {image: [require('./snapchat-lenses/happy-dad.png')], category: "brands", title: "Happy Dad Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=aa3f4287eae14aad9511f6b79881effa&metadata=01"},
                        {image: [require('./snapchat-lenses/wwe.png')], category: "brands", title: "WWE Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1e4ab74821a64c09a5b65182f760a888&metadata=01"},
                        {image: [require('./snapchat-lenses/arizona.png')], category: "college", title: "Arizona State University Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3e0e562cb2fb415f8fb82918a74f20a4&metadata=01"},
                        {image: [require('./snapchat-lenses/usa.png')], category: "countries", title: "USA Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c962e90c97584247b15a6b29e80ce749&metadata=01"},
                        {image: [require('./snapchat-lenses/germany.png')], category: "countries", title: "Germany Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e739f64edff54f66aa9f5b0ac81bf519&metadata=01"},
                        {image: [require('./snapchat-lenses/mexico.png')], category: "countries", title: "Mexico Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=3a58a485c5de490695fdce117e6714fc&metadata=01"},
                        {image: [require('./snapchat-lenses/india.png')], category: "countries", title: "India Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d39557a7f27c4544bfbc2d634e0fde96&metadata=01"},
                        {image: [require('./snapchat-lenses/poland.png')], category: "countries", title: "Poland Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=979e12b627d04d6da168e3bd46deda03&metadata=01"},
                        {image: [require('./snapchat-lenses/ukraine.png')], category: "countries", title: "Ukraine Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=c1a080be5ccf44b4878b36aad6f2b1fd&metadata=01"},
                        {image: [require('./snapchat-lenses/greece.png')], category: "countries", title: "Greece Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=81e811492567442d84c9aac582e8053c&metadata=01"},
                        {image: [require('./snapchat-lenses/ireland.png')], category: "countries", title: "Ireland Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1aa896d81d5f4f27b894d62b657e6c35&metadata=01"},
                        {image: [require('./snapchat-lenses/saudi.png')], category: "countries", title: "Saudi Arabia Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7e9317a193da46a0a5bdb3337d1879f5&metadata=01"},
                        {image: [require('./snapchat-lenses/russia.png')], category: "countries", title: "Russia Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=89ed228af2984555b8bad80b1f7a6185&metadata=01"},
                        {image: [require('./snapchat-lenses/chiefs.png')], category: "nfl", title: "Kansas City Chiefs Hat", link: "https://www.snapchat.com/lens/6661e11a84c74e32a11eb693640d9710?type=SNAPCODE&metadata=01"},
                        {image: [require('./snapchat-lenses/css.png')], category: "programming langauges", title: "Cascade Styling Sheet Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e6c7a2ad882148f39558237c76d1fa27&metadata=01"},
                        {image: [require('./snapchat-lenses/java.png')], category: "programming langauges", title: "Java Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=7de0a63072ba4a27a4755cd808a59069&metadata=01"},                        
                        {image: [require('./snapchat-lenses/niners.png')], category: "nfl", title: "San Francisco 49ers Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=51776309eb174146a0f1a8c257dd62ca&metadata=01"},
                        {image: [require('./snapchat-lenses/puppy.png')], category: "other", title: "Puppy Eyes", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=42a09f0081e54ff985941c8048362859&metadata=01"},
                        {image: [require('./snapchat-lenses/sahyc.png')], category: "other", title: "Sahyc Filter", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=038229e91bb64f82a428d1b09a98b556&metadata=01"},
                        {image: [require('./snapchat-lenses/ufc.png')], category: "brands", title: "UFC Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=5fd9deeec8fe4f8eb8d4e15fc59ba974&metadata=01"},
                        {image: [require('./snapchat-lenses/pepe.png')], category: "other", title: "Pepe's Fist Hat", link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=de28144201ba491ab708076790711403&metadata=01"},

                    ].filter((lense) => selectedFilter === 'all' || lense.category.toLowerCase() == selectedFilter)
                    .map((lense, index) => (
                    <View key={index} style={styles.content}> 
                        {lense.image.map((lenses, lenseIndex) => (
                            <Image style={styles.lenseImage} key={lenseIndex} source={lenses}/>
                        ))}                            
                        <Text style={styles.lenseLink} onPress={() => handleLink(lense.link)} >{lense.title}</Text>
                    </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}