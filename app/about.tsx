
import React from 'react';
import { StyleSheet, ScrollView, View, Linking, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function AboutScreen() {
  const iconColor = useThemeColor({}, 'icon');
  const colorScheme = useColorScheme();
  
  return (
    <ThemedView style={styles.container}>
      <Header 
        title="حول التطبيق"
        rightIcon={<Feather name="x" size={24} color={iconColor} />}
        onRightIconPress={() => router.back()}
      />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <LinearGradient
          colors={Colors[colorScheme].gradient}
          style={styles.logoContainer}
        >
          <ThemedText style={styles.logoText} lightColor="#fff" darkColor="#fff">
            سيرة الرسول
          </ThemedText>
          <ThemedText style={styles.logoSubtitle} lightColor="#fff" darkColor="#fff">
            v1.0.0
          </ThemedText>
        </LinearGradient>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            عن التطبيق
          </ThemedText>
          <ThemedText style={styles.aboutText}>
            تطبيق "سيرة الرسول" هو مصدر شامل للتعرف على حياة النبي محمد صلى الله عليه وسلم. يهدف التطبيق إلى تقديم معلومات موثوقة وصحيحة عن سيرة النبي، وتعاليمه، والأماكن المرتبطة بحياته.
          </ThemedText>
          <ThemedText style={styles.aboutText}>
            جميع المعلومات المقدمة في هذا التطبيق مستمدة من مصادر إسلامية موثوقة، وتم التحقق منها للتأكد من صحتها.
          </ThemedText>
        </View>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            المطور
          </ThemedText>
          <ThemedView style={styles.developerCard}>
            <ThemedText type="defaultSemiBold" style={styles.developerName}>
              شايبي وائل
            </ThemedText>
            <ThemedText style={styles.developerInfo}>
              مطور تطبيقات ومصمم واجهات مستخدم
            </ThemedText>
            <ThemedText style={styles.developmentYear}>
              طُوِّر هذا التطبيق في سنة 2025
            </ThemedText>
          </ThemedView>
        </View>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            المصادر
          </ThemedText>
          <ThemedView style={styles.sourcesCard}>
            <SourceItem title="صحيح البخاري" />
            <SourceItem title="صحيح مسلم" />
            <SourceItem title="سنن الترمذي" />
            <SourceItem title="سنن أبي داود" />
            <SourceItem title="السيرة النبوية لابن هشام" />
            <SourceItem title="الرحيق المختوم" />
          </ThemedView>
        </View>
        
        <View style={styles.footer}>
          <ThemedText style={styles.footerText}>
            جميع الحقوق محفوظة © 2025
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

interface SourceItemProps {
  title: string;
}

function SourceItem({ title }: SourceItemProps) {
  const borderColor = useThemeColor({}, 'border');
  return (
    <View style={[styles.sourceItem, { borderBottomColor: borderColor }]}>
      <ThemedText style={styles.sourceTitle}>
        {title}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  logoContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontFamily: 'AmiriBold',
    fontSize: 32,
    marginBottom: 8,
  },
  logoSubtitle: {
    fontFamily: 'Amiri',
    fontSize: 16,
    opacity: 0.8,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'AmiriBold',
    textAlign: 'right',
    marginBottom: 16,
  },
  aboutText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'right',
    marginBottom: 12,
  },
  developerCard: {
    padding: 16,
    borderRadius: 12,
  },
  developerName: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  developerInfo: {
    fontFamily: 'Amiri',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  developmentYear: {
    fontFamily: 'Amiri',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  },
  sourcesCard: {
    borderRadius: 12,
  },
  sourceItem: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sourceTitle: {
    fontFamily: 'Amiri',
    fontSize: 16,
    textAlign: 'right',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Amiri',
    fontSize: 14,
    opacity: 0.7,
  },
});
