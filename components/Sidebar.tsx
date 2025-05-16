import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useSidebar } from '@/contexts/SidebarContext';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function Sidebar() {
  const { sidebarVisible, closeSidebar } = useSidebar();
  const colorScheme = useColorScheme();

  if (!sidebarVisible) {
    return null;
  }

  const menuItems = [
    { title: 'الرئيسية', icon: 'home', route: '/' },
    { title: 'السيرة النبوية', icon: 'book-open', route: '/biography' },
    { title: 'الأحاديث النبوية', icon: 'feather', route: '/teachings' },
    { title: 'الأماكن المقدسة', icon: 'map-pin', route: '/places' },
    { title: 'حول التطبيق', icon: 'info', route: '/about' },
  ];

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayBg} onPress={closeSidebar} />
      <LinearGradient
        colors={
          colorScheme === 'dark'
            ? ['#1A1A1A', '#121212']
            : ['#FFFFFF', '#F5F5F5']
        }
        style={styles.sidebar}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
            سيرة الرسول
          </Text>
          <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
            <Feather name="x" size={24} color={Colors[colorScheme].text} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              asChild
              onPress={() => closeSidebar()}
            >
              <TouchableOpacity style={styles.menuItem}>
                <Feather
                  name={item.icon as any}
                  size={20}
                  color={Colors[colorScheme].text}
                  style={styles.menuIcon}
                />
                <Text style={[styles.menuText, { color: Colors[colorScheme].text }]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: Colors[colorScheme].text }]}>
            صنع من طرف شايبي وائل
          </Text>
          <Text style={[styles.footerText, { color: Colors[colorScheme].textSecondary }]}>
            الإصدار 1.0 © 2025
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
  },
  overlayBg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    width: 280,
    backgroundColor: '#FFF',
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 22,
  },
  closeButton: {
    padding: 5,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontFamily: 'Amiri',
    fontSize: 18,
  },
  footer: {
    padding: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  footerText: {
    fontFamily: 'Amiri',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
});