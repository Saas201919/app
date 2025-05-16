
import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from 'expo-router';

export default function BirthScreen() {
  const iconColor = useThemeColor({}, 'icon');
  
  return (
    <ThemedView style={styles.container}>
      <Header 
        title="مولد النبي"
        rightIcon={<Feather name="arrow-right" size={24} color={iconColor} />}
        onRightIconPress={() => router.back()}
        showMenu={false}
      />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('@/assets/images/mecca.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            ولادة النبي محمد صلى الله عليه وسلم
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            ولد النبي محمد صلى الله عليه وسلم في مكة المكرمة، في صباح يوم الاثنين، في شهر ربيع الأول من عام الفيل، الموافق لعام 570 أو 571 ميلادي. وسمي عام الفيل لأنه في ذلك العام حاول أبرهة الحبشي هدم الكعبة المشرفة، فأرسل الله عليه طيراً أبابيل ترميهم بحجارة من سجيل.
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            ولد النبي يتيم الأب، حيث توفي والده عبد الله بن عبد المطلب قبل ولادته بأشهر، وهو في طريق عودته من رحلة تجارية إلى بلاد الشام. وقد تولت أمه آمنة بنت وهب رعايته في بداية حياته، وأرضعته حليمة السعدية.
          </ThemedText>
        </View>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            نسبه الشريف
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            هو محمد بن عبد الله بن عبد المطلب بن هاشم بن عبد مناف بن قصي بن كلاب بن مرة بن كعب بن لؤي بن غالب بن فهر بن مالك بن النضر بن كنانة بن خزيمة بن مدركة بن إلياس بن مضر بن نزار بن معد بن عدنان. وينتهي نسبه إلى سيدنا إسماعيل بن إبراهيم عليهما السلام.
          </ThemedText>
        </View>
        
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            أحداث مهمة عند ولادته
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            رُوي أن ليلة مولده صلى الله عليه وسلم شهدت أحداثاً عجيبة، منها سقوط شرفات إيوان كسرى ملك الفرس، وخمود نار فارس التي كانت تعبد من دون الله، وغيض بحيرة ساوة. وهذه الأحداث كانت إشارات إلى ظهور نبي آخر الزمان الذي سيغير وجه الأرض.
          </ThemedText>
          <ThemedText style={styles.paragraph}>
            كما رأت أمه آمنة في منامها عند حملها به أن نوراً خرج منها أضاءت له قصور بصرى من أرض الشام، وهذا إشارة إلى النور الذي سيخرج على يديه ويمتد إلى أنحاء الأرض.
          </ThemedText>
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
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
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
  paragraph: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'right',
    marginBottom: 12,
  },
});
