
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

interface PlaceCardProps {
  id: string;
  name: string;
  image: any;
  description: string;
  route: string;
}

export default function PlaceCard({ id, name, image, description, route }: PlaceCardProps) {
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
