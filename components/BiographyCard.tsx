
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { ThemedText } from './ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

interface BiographyCardProps {
  id: string;
  title: string;
  description: string;
  image: any;
  route: string;
}

export function BiographyCard({ id, title, description, image, route }: BiographyCardProps) {
  const colorScheme = useColorScheme();
  const router = useRouter();
  
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => router.push(route)}
    >
      <LinearGradient
        colors={Colors[colorScheme].gradient}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <ThemedText type="subtitle" style={styles.title} lightColor="#fff" darkColor="#fff">
              {title}
            </ThemedText>
            <ThemedText style={styles.description} lightColor="#fff" darkColor="#fff">
              {description}
            </ThemedText>
          </View>
          {image && (
            <Image 
              source={image}
              style={styles.image}
              contentFit="cover"
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  gradient: {
    borderRadius: 16,
    padding: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'right',
  },
  description: {
    fontFamily: 'Amiri',
    fontSize: 16,
    opacity: 0.9,
    textAlign: 'right',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
