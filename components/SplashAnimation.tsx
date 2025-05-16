
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SplashAnimation() {
  const colorScheme = useColorScheme();
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={
        colorScheme === 'dark'
          ? ['#1A1A1A', '#121212']
          : ['#FFFFFF', '#F5F5F5']
      }
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require('@/assets/images/splash-icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            { color: colorScheme === 'dark' ? '#FFFFFF' : '#000000' },
          ]}
        >
          سيرة الرسول
        </Text>
        <Text
          style={[
            styles.subtitle,
            {
              color:
                colorScheme === 'dark'
                  ? 'rgba(255,255,255,0.7)'
                  : 'rgba(0,0,0,0.7)',
            },
          ]}
        >
          محمد صلى الله عليه وسلم
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Amiri',
    fontSize: 18,
  },
});
