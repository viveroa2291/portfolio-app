import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, Linking, StyleSheet, Image, TextInput, ScrollView, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from '../styles/about';

export default function AboutScreen() {

  const handleLinkPress = (url) => {
    Linking.openURL(url);
}

  return (
    <ScrollView>
      <ThemedText style={styles.headerText}>About</ThemedText>
      <View style={styles.containerImage}>
        <Image style={[styles.selfie, {borderRadius: 175}]} source={require('./images/selfie.jpeg')} resizeMode='cover' />
      </View>
      <Text style={styles.introduction}>Hey! I'm Adan. Take some time to dive into my about me.</Text>
      <ThemedText style={styles.me}>Me in 20 Seconds</ThemedText>
      <Text style={styles.aboutMe}>I've been programming since I was a senior in high school working with IOS apps, in particular with Swift. 
      Since graduating high school, I attended the University of Wisconsin - Eau Claire in which I graduated with a bachelor's degree majoring in computer science.
      </Text>
      <Text style={styles.aboutMe}>
      Since graduating college, I've had a role as a full stack java developer at Cognixia in which I worked extensively with Java along with building web applications utilizing React.js and AWS.
            During my role at Cognixia, I've worked in a collaborative environment with others building web applications on the full stack working with databases, cloud, and API's utilizing Java's Spring framework
            but also using AWS to host our sites and databases. 
      </Text>
      <Text style={styles.aboutMe}>
      Aside from my experience, I have worked with all sorts of tech stacks. My most proficient programming languages would have to be C++, Java, Javascript, and React.js. I have also worked with C, Python, Kotlin, Typescript, React-Native, Next.js, Node.js, and PHP.
      </Text>
      <Text style={styles.aboutMe}>
      In my free time, I like to build projects and learn with different technologies. I also like to engage in tech communities such as <Text style={styles.theHunt} onPress={() => handleLinkPress("https://x.com/TheHuntSpaces")}>The Hunt</Text> on X, 
          where we discuss all tech related subjects such as the tech market, AI, and programming langauges. Aside from that, I like to create Snapchat lenses, listen to the 
          <Text style={styles.swePodcast} onPress={() => handleLinkPress("https://open.spotify.com/show/6UO3XQclSuNnGxB39QdAnL?si=a9453dfe57b54d2a")}>Software Engineering podcast</Text>, and engage in tech related streams on Twitch.
      </Text>
      <Text style={styles.aboutMe}>I'm living in Chicago, Illinois.</Text>
    </ScrollView>
  );
}