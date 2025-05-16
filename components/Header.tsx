
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSidebar } from '@/contexts/SidebarContext';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type HeaderProps = {
  title?: string;
};

export default function Header({ title }: HeaderProps) {
  const { toggleSidebar } = useSidebar();
  const colorScheme = useColorScheme();

  return (
    <View style={[
      styles.header, 
      { backgroundColor: Colors[colorScheme].background }
    ]}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
        <Feather name="menu" size={24} color={Colors[colorScheme].text} />
      </TouchableOpacity>
      {title && (
        <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
          {title}
        </Text>
      )}
      <View style={styles.iconPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  menuButton: {
    padding: 5,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  iconPlaceholder: {
    width: 34,
    height: 34,
  },
});
