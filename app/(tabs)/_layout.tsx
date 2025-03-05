// app/(tabs)/_layout.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { theme } from '@/theme'; // Adjust import path as needed
import { Header } from '@/components/tabs/header'; // Your static header component
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';
export default function TabLayout() {
  return (
    <SafeAreaContainer>
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false, // Hide the default header
          tabBarActiveTintColor: theme.colors.accent,
          tabBarStyle: {
            backgroundColor: theme.colors.black,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="workouts"
          options={{
            title: 'Workouts',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'barbell' : 'barbell-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="progress"
          options={{
            title: 'Progress',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'stats-chart' : 'stats-chart-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'person-circle' : 'person-circle-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});
