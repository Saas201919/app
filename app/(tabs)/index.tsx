
import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { SplashAnimation } from '@/components/SplashAnimation';
import { BiographyCard } from '@/components/BiographyCard';
import { HadithCard } from '@/components/HadithCard';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const showSplash = useSharedValue(true);
  const iconColor = useThemeColor({}, 'icon');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      showSplash.value = withTiming(false, { duration: 500 });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const splashStyle = useAnimatedStyle(() => {
    return {
      opacity: showSplash.value ? 1 : 0,
      display: showSplash.value ? 'flex' : 'none',
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.View style={[styles.splashContainer, splashStyle]}>
        <SplashAnimation />
      </Animated.View>
      
      <Header title="سيرة الرسول" />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <LinearGradient
          colors={Colors[colorScheme].gradient}
          style={styles.banner}
        >
          <ThemedText style={styles.welcomeText} lightColor="#fff" darkColor="#fff">
            بسم الله الرحمن الرحيم
          </ThemedText>
          <ThemedText style={styles.quoteText} lightColor="#fff" darkColor="#fff">
            "إنما بعثت لأتمم مكارم الأخلاق"
          </ThemedText>
        </LinearGradient>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              السيرة النبوية
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/biography')}>
              <ThemedText style={{ color: Colors[colorScheme].tint }}>
                عرض الكل
              </ThemedText>
            </TouchableOpacity>
          </View>
          
          <BiographyCard 
            id="birth"
            title="مولد النبي"
            description="ولد النبي محمد صلى الله عليه وسلم في مكة المكرمة عام الفيل"
            image={require('@/assets/images/mecca.png')}
            route="/biography/birth"
          />
          
          <BiographyCard 
            id="prophecy"
            title="بعثة النبي"
            description="نزول الوحي على النبي محمد في غار حراء"
            image={require('@/assets/images/prophecy.png')}
            route="/biography/prophecy"
          />
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              أحاديث نبوية
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/teachings')}>
              <ThemedText style={{ color: Colors[colorScheme].tint }}>
                عرض الكل
              </ThemedText>
            </TouchableOpacity>
          </View>
          
          <HadithCard 
            hadith="إنما الأعمال بالنيات وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه."
            source="متفق عليه"
            explanation="هذا الحديث يدل على أهمية النية في الأعمال، وأن الأعمال تقيم بحسب النية."
          />
        </View>
        
        <View style={styles.getStartedSection}>
          <ThemedText type="subtitle" style={styles.getStartedTitle}>
            تعرف على حياة النبي
          </ThemedText>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => router.push('/biography')}
          >
            <LinearGradient
              colors={Colors[colorScheme].gradient}
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <ThemedText style={styles.buttonText} lightColor="#fff" darkColor="#fff">
                ابدأ الرحلة
              </ThemedText>
              <Feather name="arrow-right" size={18} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
  banner: {
    padding: 20,
    borderRadius: 0,
    marginBottom: 16,
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'AmiriBold',
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  quoteText: {
    fontFamily: 'Amiri',
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'AmiriBold',
    textAlign: 'right',
  },
  getStartedSection: {
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  getStartedTitle: {
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'AmiriBold',
  },
  getStartedButton: {
    width: '80%',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontFamily: 'AmiriBold',
    fontSize: 16,
    marginRight: 8,
  },
});
