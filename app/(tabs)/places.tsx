
import React from 'react';
import { StyleSheet, ScrollView, View, FlatList, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { PlaceCard } from '@/components/PlaceCard';

export default function PlacesScreen() {
  const places = [
    {
      id: '1',
      name: 'مكة المكرمة',
      image: require('@/assets/images/mecca.png'),
      description: 'مسقط رأس النبي محمد صلى الله عليه وسلم ومهد الإسلام، وفيها الكعبة المشرفة والمسجد الحرام.',
      route: '/places/mecca'
    },
    {
      id: '2',
      name: 'المدينة المنورة',
      image: require('@/assets/images/medina.png'),
      description: 'المدينة التي هاجر إليها النبي محمد صلى الله عليه وسلم، وفيها المسجد النبوي وقبره الشريف.',
      route: '/places/medina'
    },
    {
      id: '3',
      name: 'غار حراء',
      image: require('@/assets/images/cave.png'),
      description: 'الغار الذي كان يتعبد فيه النبي محمد صلى الله عليه وسلم، وفيه نزل الوحي لأول مرة.',
      route: '/places/hira'
    },
    {
      id: '4',
      name: 'الطائف',
      image: require('@/assets/images/taif.png'),
      description: 'المدينة التي ذهب إليها النبي صلى الله عليه وسلم للدعوة إلى الإسلام بعد وفاة عمه أبي طالب.',
      route: '/places/taif'
    },
    {
      id: '5',
      name: 'القدس',
      image: require('@/assets/images/jerusalem.png'),
      description: 'المدينة التي أسري إليها النبي محمد صلى الله عليه وسلم، وفيها المسجد الأقصى المبارك.',
      route: '/places/jerusalem'
    }
  ];

  return (
    <ThemedView style={styles.container}>
      <Header title="أماكن من السيرة" />
      <Sidebar />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.intro}>
          <ThemedText type="title" style={styles.title}>
            أماكن مقدسة وتاريخية
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            تعرف على الأماكن التي ارتبطت بحياة النبي محمد صلى الله عليه وسلم
          </ThemedText>
        </View>

        <View style={styles.placesSection}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            الأماكن الرئيسية
          </ThemedText>
          <FlatList
            data={places}
            renderItem={({ item }) => (
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
          <View style={styles.importanceCard}>
            <ThemedText style={styles.importanceText}>
              تحمل هذه الأماكن أهمية كبيرة في تاريخ الإسلام لارتباطها بحياة النبي محمد صلى الله عليه وسلم وأحداث السيرة النبوية.
              تعتبر هذه المواقع شاهدة على أحداث مهمة في تاريخ الإسلام، من مولد النبي ونشأته في مكة، إلى الهجرة للمدينة وتأسيس الدولة الإسلامية الأولى.
            </ThemedText>
          </View>
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
    paddingBottom: 24,
  },
  intro: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 24,
    textAlign: 'right',
  },
  placesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 16,
    textAlign: 'right',
  },
  carousel: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  importanceSection: {
    padding: 16,
  },
  importanceCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(200, 200, 200, 0.1)',
  },
  importanceText: {
    lineHeight: 24,
    textAlign: 'right',
  }
});
