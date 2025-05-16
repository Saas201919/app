
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import Header from '@/components/Header';

export default function BirthScreen() {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="مولد النبي ﷺ" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('@/assets/images/mecca.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
            مولد النبي محمد ﷺ
          </Text>
          
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            وُلد النبي محمد صلى الله عليه وسلم في مكة المكرمة في عام الفيل، الموافق لعام 570 أو 571 ميلادياً، في شهر ربيع الأول. كانت ولادته حدثاً مميزاً في تاريخ البشرية، حيث تزامنت مع أحداث عظيمة.
          </Text>
          
          <Text style={[styles.subTitle, { color: Colors[colorScheme].text }]}>
            نسبه الشريف
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            هو محمد بن عبد الله بن عبد المطلب بن هاشم بن عبد مناف، من قبيلة قريش المكية المشهورة. وُلد يتيماً، فقد توفي والده عبد الله قبل ولادته، وكانت أمه آمنة بنت وهب.
          </Text>
          
          <Text style={[styles.subTitle, { color: Colors[colorScheme].text }]}>
            الرضاعة
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            أرضعته أمه أياماً ثم أرضعته ثويبة مولاة أبي لهب، ثم انتقل إلى البادية، حيث أرضعته حليمة السعدية من بني سعد بن بكر، وبقي عندها نحو أربع سنوات، وقد شهد خلالها حادثة شق الصدر الشهيرة.
          </Text>
          
          <Text style={[styles.subTitle, { color: Colors[colorScheme].text }]}>
            وفاة أمه
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            عاد إلى أمه آمنة بعد البادية، وعندما بلغ الـسادسة من عمره، توفيت أمه في الأبواء بين مكة والمدينة، وذلك بعد زيارتها لقبر زوجها عبد الله في المدينة المنورة.
          </Text>
          
          <Text style={[styles.subTitle, { color: Colors[colorScheme].text }]}>
            في كفالة جده
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            بعد وفاة أمه، تولى جده عبد المطلب كفالته ورعايته، وأظهر له حباً شديداً واهتماماً كبيراً. بقي النبي في كفالة جده لمدة سنتين، حتى توفي عبد المطلب وعمر النبي ثماني سنوات.
          </Text>
          
          <Text style={[styles.subTitle, { color: Colors[colorScheme].text }]}>
            في كفالة عمه
          </Text>
          <Text style={[styles.paragraph, { color: Colors[colorScheme].text }]}>
            بعد وفاة جده، كفله عمه أبو طالب، وضمه إلى أولاده، وأحاطه بالعناية والرعاية، وظل يدافع عنه ويحميه بعد البعثة، رغم أنه لم يدخل في الإسلام، وبقي النبي معه حتى توفي أبو طالب والنبي في الخمسين من عمره.
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
    paddingBottom: 30,
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 24,
    marginBottom: 15,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 8,
  },
  paragraph: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 10,
    textAlign: 'justify',
  },
});
