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
import RenderHtml from 'react-native-render-html';

export default function AboutScreen() {

  const cognixiaContent =  
  `
  <ul style="width: 95%; font-size: 12px;">
      <li>
        Cognixia’s JUMP program is a hyper-intense technical training program that gives top STEM talent from across the U.S. the equivalent of 12-18 months of industry experience. Not only do they up-skill their technical abilities, they also evolve their digital mindset to successfully adapt and utilize technology in an efficient manner so they can JUMP start their careers via deployment with Collabera clients.</li>
      <li>Design Flexibility – experience with DAO and DTO design patterns, JDBC, JPA and Hibernate for interfacing with Data Persistence.</li>
      <li>Collaborative Development – used Git CLI and GitHub under AGILE Methodology with teammates to develop a Full Stack Application.</li>
    </ul>
  `
  const sportContent =
  `
  <ul style="width: 95%; font-size: 12px;">
    <li>Displayed the ability to lead classes and train new employees to lead on their own.</li>
    <li>Stressed teamwork, leadership, skill development, and the importance of having fun to children and young adults.</li>
    <li>Always enforced safety first and proper procedures in case of an accident or injury.</li>
  </ul>   
  `
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
      <View style={styles.line} />
      <ThemedText style={styles.header}>My Tech Stack</ThemedText>
      <View style={styles.line} />
      <ThemedText style={styles.header}>Where I've Worked</ThemedText>
      <View style={styles.line} />
      <Text style={styles.jobTitle}>Cognixia - Full Stack Java Developer</Text>
      <Text style={styles.jobDate}>January 2023 - May 2023</Text>
      <RenderHtml contentWidth={5} source={{html: cognixiaContent}} />
      <Text style={styles.jobTitle}>SportKids - Instructuor | Coach</Text>
      <Text style={styles.jobDate}>June 2016 - August 2017</Text>
      <RenderHtml contentWidth={5} source={{html: sportContent}} />
    </ScrollView>
  );
}