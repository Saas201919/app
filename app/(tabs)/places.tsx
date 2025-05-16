
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
            showsHorizontalScrolimport React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import Header from '@/components/Header';
import { LinearGradient } from 'expo-linear-gradient';

function PlaceCard({ name, image, description }) {
  const colorScheme = useColorScheme();
  
  return (
    <TouchableOpacity 
      style={styles.placeCard}
      activeOpacity={0.9}
    >
      <Image 
        source={image}
        style={styles.placeImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.gradient}
      >
        <Text style={styles.placeName}>{name}</Text>
        <Text style={styles.placeDescription}>
          {description.length > 50 ? description.substring(0, 50) + '...' : description}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default function PlacesScreen() {
  const colorScheme = useColorScheme();
  
  const places = [
    {
      id: 'mecca',
      name: 'مكة المكرمة',
      image: require('@/assets/images/mecca.png'),
      description: 'مسقط رأس النبي محمد ﷺ ومكان نزول الوحي',
    },
    {
      id: 'medina',
      name: 'المدينة المنورة',
      image: require('@/assets/images/medina.png'),
      description: 'المدينة التي هاجر إليها النبي ﷺ وبنى فيها أول مسجد',
    },
    {
      id: 'jerusalem',
      name: 'القدس',
      image: require('@/assets/images/jerusalem.png'),
      description: 'المسجد الأقصى ومسرى النبي ﷺ ليلة الإسراء والمعراج',
    },
    {
      id: 'cave',
      name: 'غار حراء',
      image: require('@/assets/images/cave.png'),
      description: 'المكان الذي نزل فيه الوحي لأول مرة على النبي ﷺ',
    },
    {
      id: 'taif',
      name: 'الطائف',
      image: require('@/assets/images/taif.png'),
      description: 'المدينة التي ذهب إليها النبي ﷺ للدعوة',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Header title="الأماكن المقدسة" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.introContainer}>
          <Text style={[styles.introTitle, { color: Colors[colorScheme].text }]}>
            الأماكن المرتبطة بحياة النبي ﷺ
          </Text>
          <Text style={[styles.introText, { color: Colors[colorScheme].textSecondary }]}>
            تعرف على الأماكن التي ارتبطت بحياة النبي محمد ﷺ وشهدت أحداث مهمة في السيرة النبوية
          </Text>
        </View>
        
        <View style={styles.placesContainer}>
          <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlaceCard
                name={item.name}
                image={item.image}
                description={item.description}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carousel}
          />
        </View>
        
        <View style={styles.importanceSection}>
          <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
            أهمية هذه الأماكن
          </Text>
          <View style={[styles.importanceCard, { backgroundColor: colorScheme === 'dark' ? '#2A2A2A' : '#F5F5F5' }]}>
            <Textmestyle={[styles.importanceText, { color: Colors[colorScheme].text }]}>
              تحمل هذه الأماكن أهمية كبيرة في تاريخ الإسلام لارتباطها بحياة النبي محمد صلى الله عليه وسلم وأحداث السيرة النبوية. تعتبر هذه المواقع شاهدة على أحداث مهمة في تاريخ الإسلام، من مولد النبي ونشأته في مكة، إلى الهجرة للمدينة وتأسيس الدولة الإسلامية الأولى.
            </Text>
          </View>
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
  introContainer: {
    padding: 20,
  },
  introTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  introText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  placesContainer: {
    marginBottom: 20,
  },
  carousel: {
    paddingHorizontal: 15,
  },
  placeCard: {
    width: 250,
    height: 180,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  placeImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    paddingHorizontal: 15,
    paddingBottom: 15,
    justifyContent: 'flex-end',
  },
  placeName: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  placeDescription: {
    fontFamily: 'Amiri',
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  importanceSection: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  importanceCard: {
    padding: 15,
    borderRadius: 12,
  },
  importanceText: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
}); {
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
