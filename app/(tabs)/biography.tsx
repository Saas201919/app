import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';
import BiographyCard from '@/components/BiographyCard';

export default function BiographyScreen() {
  const colorScheme = useColorScheme();

  const biographyItems = [
    {
      id: 'birth',
      title: 'مولد النبي ﷺ',
      description: 'مولد الرسول ونشأته في مكة المكرمة عام الفيل',
      image: require('@/assets/images/mecca.png'),
      route: '/biography/birth',
    },
    {
      id: 'childhood',
      title: 'طفولته ونشأته',
      description: 'نشأته في بني سعد وكفالة جده وعمه له',
      image: require('@/assets/images/childhood.png'),
      route: '#',
    },
    {
      id: 'prophecy',
      title: 'البعثة النبوية',
      description: 'نزول الوحي وبداية الدعوة الإسلامية',
      image: require('@/assets/images/prophecy.png'),
      route: '#',
    },
    {
      id: 'migration',
      title: 'الهجرة إلى المدينة',
      description: 'رحلة الهجرة وبناء الدولة الإسلامية الأولى',
      image: require('@/assets/images/migration.png'),
      route: '#',
    },
    {
      id: 'battles',
      title: 'الغزوات والمعارك',
      description: 'غزوات الرسول وانتصارات المسلمين',
      image: require('@/assets/images/battles.png'),
      route: '#',
    },
    {
      id: 'conquest',
      title: 'فتح مكة',
      description: 'عودة المسلمين إلى مكة منتصرين',
      image: require('@/assets/images/conquest.png'),
      route: '#',
    },
    {
      id: 'farewell',
      title: 'حجة الوداع',
      description: 'خطبة الوداع وتعاليم النبي الأخيرة',
      image: require('@/assets/images/farewell.png'),
      route: '#',
    },
    {
      id: 'death',
      title: 'وفاة النبي ﷺ',
      description: 'مرض النبي ووفاته وحزن المسلمين',
      image: require('@/assets/images/death.png'),
      route: '#',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Header title="السيرة النبوية" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <View style={styles.introContainer}>
          <Text style={[styles.introTitle, { color: Colors[colorScheme].text }]}>
            سيرة النبي محمد ﷺ
          </Text>
          <Text style={[styles.introText, { color: Colors[colorScheme].textSecondary }]}>
            تعرف على حياة النبي محمد صلى الله عليه وسلم منذ ولادته وحتى وفاته، واقرأ عن أهم الأحداث في حياته المباركة.
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {biographyItems.map((item) => (
            <BiographyCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              route={item.route}
            />
          ))}
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
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  introContainer: {
    padding: 20,
  },
  introTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  introText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
});