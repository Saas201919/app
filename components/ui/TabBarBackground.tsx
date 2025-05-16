
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabBarBackground() {
  const colorScheme = useColorScheme();
  
  return (
    <View 
      style={[
        StyleSheet.absoluteFill, 
        { backgroundColor: Colors[colorScheme].tabBarBackground }
      ]} 
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
