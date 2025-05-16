import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="حول التطبيق" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
          colors={
            colorScheme === 'dark'
              ? ['#2C3E50', '#1A1A1A']
              : ['#4A7856', '#2E5E40']
          }
          style={styles.header}
        >
          <Image
            source={require('@/assets/images/app-icon.png')}
            style={styles.appIcon}
            resizeMode="contain"
          />
          <Text style={styles.appName}>سيرة الرسول</Text>
          <Text style={styles.appVersion}>الإصدار 1.0</Text>
        </LinearGradient>

        <View style={styles.content}>
          <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
            عن التطبيق
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            هذا التطبيق مخصص لتقديم سيرة النبي محمد صلى الله عليه وسلم بأسلوب سهل وميسر، ويهدف إلى نشر السيرة النبوية العطرة بين الناس، خاصة فئة الشباب.
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            يحتوي التطبيق على معلومات موثوقة من مصادر معتمدة في السيرة النبوية، كما يتميز بواجهة سهلة الاستخدام وتصميم أنيق.
          </Text>

          <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
            المطور
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            تم تطوير هذا التطبيق من قبل شايبي وائل في عام 2025، بهدف نشر السيرة النبوية وتعريف الناس بحياة النبي محمد صلى الله عليه وسلم.
          </Text>

          <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
            شكر خاص
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            نتقدم بالشكر لكل من ساهم في هذا العمل، ونشكر جميع المستخدمين على دعمهم المستمر.
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            نرجو أن يكون هذا التطبيق مفيدًا لكم، وأن يساهم في نشر سيرة النبي محمد صلى الله عليه وسلم في مختلف أنحاء العالم.
          </Text>

          <Text style={[styles.footer, { color: Colors[colorScheme].textSecondary }]}>
            جميع الحقوق محفوظة © 2025
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 30,
  },
  header: {
    padding: 30,
    alignItems: 'center',
  },
  appIcon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  appName: {
    fontFamily: 'AmiriBold',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 5,
  },
  appVersion: {
    fontFamily: 'Amiri',
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 10,
    textAlign: 'justify',
  },
  footer: {
    fontFamily: 'Amiri',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },
});