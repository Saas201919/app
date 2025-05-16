import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface PlaceCardProps {
  id: string;
  name: string;
  image: any;
  description: string;
  route: string;
}

export function PlaceCard({ id, name, image, description, route }: PlaceCardProps) {
  return (
    <Link href={route as any} asChild>
      <TouchableOpacity 
        style={styles.container}
        activeOpacity={0.9}
      >
        <Image 
          source={image}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>
            {description.length > 50 ? description.substring(0, 50) + '...' : description}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 180,
    marginRight: 15,
    borderRadius: 12,
    overflow: 'hidden',
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
    height: '50%',
    paddingHorizontal: 15,
    paddingBottom: 15,
    justifyContent: 'flex-end',
  },
  name: {
    fontFamily: 'AmiriBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  description: {
    fontFamily: 'Amiri',
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});