
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { HadithCard } from '@/components/HadithCard';

const hadithData = [
  {
    id: 'hadith1',
    text: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه.',
    source: 'متفق عليه',
    explanation: 'هذا الحديث يدل على أهمية النية في الأعمال، وأن الأعمال تقيم بحسب النية. فالنية هي أساس قبول العمل ورفضه.',
  },
  {
    id: 'hadith2',
    text: 'من حسن إسلام المرء تركه ما لا يعنيه.',
    source: 'رواه الترمذي',
    explanation: 'يوضح الحديث أن من علامات إيمان المسلم الصحيح أن يترك ما لا يفيده في دينه ودنياه، من الكلام والفعل والاهتمام.',
  },
  {
    id: 'hadith3',
    text: 'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.',
    source: 'متفق عليه',
    explanation: 'يشير هذا الحديث إلى قيمة المحبة والإيثار بين المسلمين، وأن المؤمن الحق يتمنى لإخوانه المسلمين ما يتمناه لنفسه من الخير.',
  },
  {
    id: 'hadith4',
    text: 'البر حسن الخلق، والإثم ما حاك في صدرك وكرهت أن يطلع عليه الناس.',
    source: 'رواه مسلم',
    explanation: 'يوضح هذا الحديث مفهوم البر والإثم، فالبر هو حسن الخلق الذي يتحلى به المسلم، والإثم هو ما يشعر المرء بعدم ارتياح في نفسه عند فعله ويكره أن يطلع الناس عليه.',
  },
  {
    id: 'hadith5',
    text: 'الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن - أو تملأ - ما بين السماوات والأرض.',
    source: 'رواه مسلم',
    explanation: 'يبين هذا الحديث أهمية الطهارة والأذكار، فالطهارة نصف الإيمان، والتسبيح والتحميد لهما أجر عظيم عند الله.',
  },
  {
    id: 'hadith6',
    text: 'اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.',
    source: 'رواه الترمذي',
    explanation: 'يوصي هذا الحديث المسلم بتقوى الله في كل أحواله، وأن يتبع السيئة بالحسنة لتمحوها، وأن يعامل الناس بأخلاق حسنة.',
  },
  {
    id: 'hadith7',
    text: 'المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه.',
    source: 'متفق عليه',
    explanation: 'يوضح هذا الحديث صفة المسلم الحقيقي بأنه الذي يسلم المسلمون من أذاه بلسانه ويده، وأن المهاجر الحقيقي هو من ترك ما نهى الله عنه.',
  },
];

export default function TeachingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header title="الأحاديث النبوية" />
      <Sidebar />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.intro}>
          <ThemedText style={styles.introText}>
            مجموعة من الأحاديث النبوية الصحيحة التي تحتوي على الحكمة والتعاليم الإسلامية
          </ThemedText>
        </View>
        
        <View style={styles.hadithList}>
          {hadithData.map((hadith) => (
            <HadithCard
              key={hadith.id}
              hadith={hadith.text}
              source={hadith.source}
              explanation={hadith.explanation}
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
  hadithList: {
    paddingHorizontal: 16,
  },
});
