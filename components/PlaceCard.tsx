
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');

interface PlaceCardProps {
  id: string;
  name: string;
  image: any;
  description: string;
  route: string;
}

export function PlaceCard({ id, name, image, description, route }: PlaceCardProps) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <Link href={route} asChild>
        <TouchableOpacity 
          style={[
            styles.card, 
            { borderColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
          ]}
          activeOpacity={0.8}
        >
          <Image source={image} style={styles.image} />
          <View style={styles.content}>
            <Text style={[styles.name, { color: Colors[colorScheme].text }]}>
              {name}
            </Text>
            <Text 
              style={[styles.description, { color: Colors[colorScheme].textSecondary }]} 
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    width: width * 0.75,
    maxWidth: 300,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontFamily: 'AmiriBold',
    marginBottom: 6,
    textAlign: 'right',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Amiri',
    textAlign: 'right',
  }
});
