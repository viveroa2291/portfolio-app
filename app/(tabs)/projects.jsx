import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../styles/projects';

export default function ProjectScreen() { 
    const handleLinkPress = (url) => {
        Linking.openURL(url);
    }
    return (
        <View style={styles.container}>        
            <Text style={styles.text}>Here are some of my Personal Projects</Text>
            <ScrollView style={styles.projectsContainer}> 
                <View style={styles.projects}>
                    {[  
                        { title: 'Tic Tac Toe', webviewSource: 'https://viveroa2291.github.io/Tic-Tac-Toe/', technologies: [require("./PL-SVG/html.png"), require("./PL-SVG/CSS.png"), require("./PL-SVG/javascript.png"), require("./PL-SVG/git.png")] },
                        { title: 'Cancun Mexican Grill', webviewSource: 'https://viveroa2291.github.io/Cancun/', technologies: [require("./PL-SVG/html.png"), require("./PL-SVG/CSS.png"), require("./PL-SVG/javascript.png"), require("./PL-SVG/git.png")] },
                        { title: 'Mappins', webviewSource: 'https://www.youtube.com/watch?v=tDRNQQE5oJo', technologies: [require("./PL-SVG/kotlin.png"), require("./PL-SVG/firebase.png"), require("./PL-SVG/git.png")] },
                        { title: 'Developer Site', webviewSource: 'https://viveroa2291.github.io/Developer-Site/', technologies: [require("./PL-SVG/html.png"), require("./PL-SVG/CSS.png"), require("./PL-SVG/javascript.png"), require("./PL-SVG/git.png")] },
                        { title: 'Personalized LinkTree Site', webviewSource: 'https://viveroa2291.github.io/adansLinkTree/', technologies: [require("./PL-SVG/html.png"), require("./PL-SVG/CSS.png"), require("./PL-SVG/javascript.png"), require("./PL-SVG/git.png")] },
                        { title: 'Blog Site', webviewSource: 'https://adansblog.vercel.app/', technologies: [require("./PL-SVG/react.png"), require("./PL-SVG/CSS.png"), require("./PL-SVG/git.png")] }
                    ].map((project, index) => (
                        <View key={index} style={styles.project}>
                            <Text style={styles.title} onPress={() => handleLinkPress(project.webviewSource)}>{project.title}</Text>
                            <View style={styles.line} />
                            {project.webviewSource && (
                                <WebView style={styles.webview} source={{uri: project.webviewSource}} javaScriptEnabled={project.title == 'Blog Site'} scalesPageToFit={true} scrollEnabled={false} mediaPlaybackRequiresUserAction={true} />
                            )}
                            <View style={styles.lineTwo} />
                            <Text style={{textAlign: 'center', marginBottom: 5}}>Technologies Used:</Text>
                            <View style={styles.technologiesRow}>
                                {project.technologies.map((tech, techIndex) => (
                                    <Image key={techIndex} style={styles.badge} source={tech} />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}