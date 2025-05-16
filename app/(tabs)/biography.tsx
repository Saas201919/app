
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { BiographyCard } from '@/components/BiographyCard';

const biographyData = [
  {
    id: 'birth',
    title: 'مولد النبي',
    description: 'ولد النبي محمد صلى الله عليه وسلم في مكة المكرمة عام الفيل',
    image: require('@/assets/images/mecca.png'),
    route: '/biography/birth',
  },
  {
    id: 'childhood',
    title: 'طفولته ونشأته',
    description: 'نشأ النبي يتيمًا في كنف جده عبد المطلب ثم عمه أبي طالب',
    image: require('@/assets/images/childhood.png'),
    route: '/biography/childhood',
  },
  {
    id: 'prophecy',
    title: 'بعثة النبي',
    description: 'نزول الوحي على النبي محمد في غار حراء',
    image: require('@/assets/images/prophecy.png'),
    route: '/biography/prophecy',
  },
  {
    id: 'migration',
    title: 'الهجرة إلى المدينة',
    description: 'هجرة النبي من مكة إلى المدينة المنورة بعد اشتداد أذى قريش',
    image: require('@/assets/images/migration.png'),
    route: '/biography/migration',
  },
  {
    id: 'battles',
    title: 'الغزوات والمعارك',
    description: 'غزوات النبي والمعارك التي خاضها المسلمون لنشر الدين الإسلامي',
    image: require('@/assets/images/battles.png'),
    route: '/biography/battles',
  },
  {
    id: 'conquest',
    title: 'فتح مكة',
    description: 'عودة النبي فاتحًا إلى مكة المكرمة بعد ثمان سنوات من الهجرة',
    image: require('@/assets/images/conquest.png'),
    route: '/biography/conquest',
  },
  {
    id: 'farewell',
    title: 'حجة الوداع',
    description: 'خطبة النبي الأخيرة للمسلمين في حجة الوداع',
    image: require('@/assets/images/farewell.png'),
    route: '/biography/farewell',
  },
  {
    id: 'death',
    title: 'وفاة النبي',
    description: 'وفاة النبي صلى الله عليه وسلم في المدينة المنورة',
    image: require('@/assets/images/death.png'),
    route: '/biography/death',
  },
];

export default function BiographyScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="السيرة النبوية" />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <ThemedText style={styles.introText}>
            تعرف على حياة النبي محمد صلى الله عليه وسلم منذ مولده وحتى وفاته، ومعجزاته وأخلاقه وصفاته
          </ThemedText>
        </View>
        
        <View style={styles.biographyList}>
          {biographyData.map((item) => (
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
    </ThemedView>
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
  intro: {
    padding: 16,
    marginBottom: 16,
  },
  introText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  biographyList: {
    paddingHorizontal: 16,
  },
});
