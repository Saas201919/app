
import React from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { PlaceCard } from '@/components/PlaceCard';

const placesData = [
  {
    id: 'mecca',
    name: 'مكة المكرمة',
    image: require('@/assets/images/mecca.png'),
    description: 'مسقط رأس النبي محمد ومكان نزول الوحي، وفيها الكعبة المشرفة أول بيت وضع للناس',
    route: '/places/mecca',
  },
  {
    id: 'medina',
    name: 'المدينة المنورة',
    image: require('@/assets/images/medina.png'),
    description: 'المدينة التي هاجر إليها النبي وفيها المسجد النبوي الشريف وقبر النبي',
    route: '/places/medina',
  },
  {
    id: 'cave',
    name: 'غار حراء',
    image: require('@/assets/images/cave.png'),
    description: 'الغار الذي كان النبي يتعبد فيه وفيه نزل الوحي عليه لأول مرة',
    route: '/places/cave',
  },
  {
    id: 'jerusalem',
    name: 'المسجد الأقصى',
    image: require('@/assets/images/jerusalem.png'),
    description: 'المسجد الذي أسري بالنبي إليه ومنه عرج به إلى السماء',
    route: '/places/jerusalem',
  },
  {
    id: 'taif',
    name: 'الطائف',
    image: require('@/assets/images/taif.png'),
    description: 'المدينة التي ذهب إليها النبي ليدعو أهلها للإسلام بعد وفاة عمه أبي طالب',
    route: '/places/taif',
  },
];

export default function PlacesScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="أماكن مقدسة" />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <ThemedText style={styles.introText}>
            الأماكن المقدسة والتاريخية المرتبطة بسيرة النبي محمد صلى الله عليه وسلم
          </ThemedText>
        </View>
        
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          معالم إسلامية
        </ThemedText>
        
        <View style={styles.carouselContainer}>
          <FlatList
            data={placesData}
            renderItem={({item}) => (
              <PlaceCard
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                route={item.route}
              />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
          />
        </View>
        
        <View style={styles.importanceSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            أهمية هذه الأماكن
          </ThemedText>
          <ThemedView style={styles.importanceCard}>
            <ThemedText style={styles.importanceText}>
              تحمل هذه الأماكن أهمية كبيرة في تاريخ الإسلام لارتباطها بحياة النبي محمد صلى الله عليه وسلم وأحداث السيرة النبوية. تعتبر هذه المواقع شاهدة على أحداث مهمة في تاريخ الإسلام، من مولد النبي ونشأته في مكة، إلى الهجرة للمدينة وتأسيس الدولة الإسلامية الأولى.
            </ThemedText>
          </ThemedView>
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
  sectionTitle: {
    fontFamily: 'AmiriBold',
    textAlign: 'right',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  carouselContainer: {
    marginBottom: 24,
  },
  carousel: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  importanceSection: {
    paddingHorizontal: 16,
  },
  importanceCard: {
    padding: 16,
    borderRadius: 12,
  },
  importanceText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'right',
  },
});
