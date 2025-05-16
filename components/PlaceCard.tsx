
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface PlaceCardProps {
  id: string;
  name: string;
  image: any;
  description: string;
  route: string;
}

export function PlaceCard({ id, name, image, description, route }: PlaceCardProps) {
  const router = useRouter();
  
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => router.push(route)}
    >
      <Image 
        source={image}
        style={styles.image}
        contentFit="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.gradient}
      >
        <ThemedText type="defaultSemiBold" style={styles.name} lightColor="#fff" darkColor="#fff">
          {name}
        </ThemedText>
        <ThemedText style={styles.description} lightColor="#fff" darkColor="#fff">
          {description.length > 50 ? description.substring(0, 50) + '...' : description}
        </ThemedText>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: 180,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    justifyContent: 'flex-end',
  },
  name: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'right',
  },
  description: {
    fontFamily: 'Amiri',
    fontSize: 14,
    opacity: 0.9,
    textAlign: 'right',
  },
});
