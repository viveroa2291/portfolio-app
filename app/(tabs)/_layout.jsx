import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from 'react-native-vector-icons/Ionicons';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const TabBarIcon = ({ name, color, size }) => (
    <Icon name={name} size={20} color={color} />
  );
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, headerShown: false, }}>
      <Tabs.Screen name="index" options={{ title: 'Adan Vivero', tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} /> ),
        }}
      />
      <Tabs.Screen name="about" options={{ title: 'About',tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color /> ),
      }}
      />
      <Tabs.Screen name="story"
        options={{ title: 'Story', tabBarIcon: ({ color, focused }) => ( <TabBarIcon name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} /> ),
        }}
      />
      <Tabs.Screen name="connect" options={{ title: 'Connect', tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} /> ),
        }}
      />
      <Tabs.Screen name="snapchat"
        options={{ title: 'Snapchat', tabBarIcon: ({ color, focused }) => ( <TabBarIcon name='logo-snapchat' color={color} /> ),
        }}
      />
      <Tabs.Screen name="projects"
        options={{ title: 'Projects', tabBarIcon: ({ color, focused }) => ( <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} /> ),
        }}
      />
    </Tabs>
  );
}