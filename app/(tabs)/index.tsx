
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import SplashAnimation from '@/components/SplashAnimation';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashAnimation />;
  }

  const sections = [
    {
      id: 'biography',
      title: 'السيرة النبوية',
      description: 'تعرف على حياة النبي محمد صلى الله عليه وسلم',
      icon: 'book-open',
      route: '/biography',
    },
    {
      id: 'teachings',
      title: 'الأحاديث النبوية',
      description: 'مجموعة مختارة من أحاديث النبي محمد صلى الله عليه وسلم',
      icon: 'feather',
      route: '/teachings',
    },
    {
      id: 'places',
      title: 'الأماكن المقدسة',
      description: 'الأماكن التي ارتبطت بحياة النبي محمد صلى الله عليه وسلم',
      icon: 'map-pin',
      route: '/places',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Header title="سيرة الرسول" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.heroContainer}>
          <LinearGradient
            colors={
              colorScheme === 'dark'
                ? ['#2C3E50', '#1A1A1A']
                : ['#4A7856', '#2E5E40']
            }
            style={styles.heroGradient}
          >
            <Text style={styles.heroTitle}>بسم الله الرحمن الرحيم</Text>
            <Text style={styles.heroSubtitle}>
              سيرة النبي محمد صلى الله عليه وسلم
            </Text>
            <Text style={styles.heroText}>
              "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا"
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.sectionsContainer}>
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.route as any}
              asChild
            >
              <TouchableOpacity>
                <LinearGradient
                  colors={
                    colorScheme === 'dark'
                      ? ['#2A2A2A', '#1A1A1A']
                      : ['#FFFFFF', '#F5F5F5']
                  }
                  style={[
                    styles.sectionCard,
                    { 
                      borderColor: colorScheme === 'dark' 
                        ? 'rgba(255,255,255,0.1)' 
                        : 'rgba(0,0,0,0.1)' 
                    }
                  ]}
                >
                  <View style={styles.sectionIconContainer}>
                    <Feather name={section.icon as any} size={24} color={Colors[colorScheme].tint} />
                  </View>
                  <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
                    {section.title}
                  </Text>
                  <Text style={[styles.sectionDescription, { color: Colors[colorScheme].textSecondary }]}>
                    {section.description}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View style={styles.quoteContainer}>
          <Text style={[styles.quoteText, { color: Colors[colorScheme].text }]}>
            "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ"
          </Text>
          <Text style={[styles.quoteSource, { color: Colors[colorScheme].textSecondary }]}>
            رواه البخاري
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
    paddingBottom: 50,
  },
  heroContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heroGradient: {
    padding: 25,
    alignItems: 'center',
  },
  heroTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontFamily: 'Amiri',
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 15,
    textAlign: 'center',
  },
  heroText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 26,
  },
  sectionsContainer: {
    padding: 20,
  },
  sectionCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
  },
  sectionIconContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    marginBottom: 8,
  },
  sectionDescription: {
    fontFamily: 'Amiri',
    fontSize: 14,
    lineHeight: 20,
  },
  quoteContainer: {
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  quoteText: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  quoteSource: {
    fontFamily: 'Amiri',
    fontSize: 14,
  },
});
