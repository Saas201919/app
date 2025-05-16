
import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

const { width, height } = Dimensions.get('window');

export function SplashAnimation() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);
  const translateY = useSharedValue(20);
  
  const tintColor = useThemeColor({}, 'tint');
  
  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) }),
      withDelay(1500, withTiming(0, { duration: 500 }))
    );
    
    scale.value = withSequence(
      withTiming(1.1, { duration: 800, easing: Easing.out(Easing.cubic) }),
      withTiming(1, { duration: 200 }),
      withDelay(1300, withTiming(0.8, { duration: 500 }))
    );
    
    translateY.value = withSequence(
      withTiming(0, { duration: 800, easing: Easing.out(Easing.cubic) }),
      withDelay(1500, withTiming(-20, { duration: 500 }))
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { scale: scale.value },
        { translateY: translateY.value }
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <ThemedText 
          style={[styles.title, {color: tintColor}]} 
          lightColor={tintColor} 
          darkColor={tintColor}
        >
          سيرة الرسول
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          محمد صلى الله عليه وسلم
        </ThemedText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'AmiriBold',
    fontSize: 42,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Amiri',
    fontSize: 24,
    marginTop: 16,
    textAlign: 'center',
  },
});
