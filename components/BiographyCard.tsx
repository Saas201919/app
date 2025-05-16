import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

type BiographyCardProps = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  route: string;
};

export default function BiographyCard({ id, title, description, image, route }: BiographyCardProps) {
  const colorScheme = useColorScheme();

  return (
    <Link href={route as any} asChild>
      <TouchableOpacity style={styles.cardContainer}>
        <LinearGradient
          colors={
            colorScheme === 'dark'
              ? ['#2A2A2A', '#1A1A1A']
              : ['#FFFFFF', '#F5F5F5']
          }
          style={[
            styles.card,
            { 
              borderColor: colorScheme === 'dark'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.1)'
            }
          ]}
        >
          <Image source={image} style={styles.image} resizeMode="cover" />
          <View style={styles.content}>
            <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
              {title}
            </Text>
            <Text
              style={[styles.description, { color: Colors[colorScheme].textSecondary }]}
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Amiri',
    fontSize: 14,
    lineHeight: 20,
  },
});