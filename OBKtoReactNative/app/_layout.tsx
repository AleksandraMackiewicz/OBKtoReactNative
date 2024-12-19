// app/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#F7F7F7' },
        tabBarActiveTintColor: '#FFA500',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: 'Home', tabBarIcon: () => null }} // Add icon here if desired
      />
      <Tabs.Screen
        name="offers"
        options={{ title: 'Offers', tabBarIcon: () => null }} // Add icon here if desired
      />
    </Tabs>
  );
}
