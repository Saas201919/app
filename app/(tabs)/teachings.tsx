import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { HadithCard } from '@/components/HadithCard';
import { Colors } from '@/constants/Colors';
import useColorScheme from '@/hooks/useColorScheme';

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
    explanation: 'يبين هذا الحديث معيار البر والإثم، فالبر هو حسن الخلق، والإثم ما تردد في النفس وشك فيه الإنسان وخشي أن يطلع عليه الناس.',
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
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Header title="الأحاديث النبوية" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.introContainer}>
          <Text style={[styles.introTitle, { color: Colors[colorScheme].text }]}>
            من أحاديث الرسول ﷺ
          </Text>
          <Text style={[styles.introText, { color: Colors[colorScheme].textSecondary }]}>
            مجموعة مختارة من أحاديث النبي محمد صلى الله عليه وسلم، وما فيها من حكم وتوجيهات لحياة المسلم.
          </Text>
        </View>

        <View style={styles.hadithsContainer}>
          {hadithData.map((item) => (
            <HadithCard
              key={item.id}
              hadith={item.text}
              source={item.source}
              explanation={item.explanation}
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
  introContainer: {
    padding: 20,
    marginBottom: 10,
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
  },
  hadithsContainer: {
    padding: 15,
  },
  hadithCard: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  hadithText: {
    fontFamily: 'AmiriBold',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 10,
    textAlign: 'right',
  },
  sourceText: {
    fontFamily: 'Amiri',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
  },
  expandButton: {
    fontFamily: 'Amiri',
    fontSize: 14,
    marginVertical: 8,
    textAlign: 'center',
  },
  explanationText: {
    fontFamily: 'Amiri',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(200,200,200,0.1)',
    borderRadius: 8,
  },
});