
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';

interface HadithCardProps {
  hadith: string;
  source: string;
  explanation?: string;
}

export function HadithCard({ hadith, source, explanation }: HadithCardProps) {
  const [expanded, setExpanded] = useState(false);
  const rotateValue = useSharedValue(0);
  const heightValue = useSharedValue(0);
  
  const tintColor = useThemeColor({}, 'tint');
  const borderColor = useThemeColor({}, 'border');

  const toggleExpand = () => {
    setExpanded(!expanded);
    rotateValue.value = withTiming(expanded ? 0 : 1, { duration: 300 });
    heightValue.value = withTiming(expanded ? 0 : 1, { duration: 300 });
  };

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateValue.value * 180}deg` }],
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value === 0 ? 0 : 'auto',
      opacity: heightValue.value,
      overflow: 'hidden',
    };
  });

  return (
    <ThemedView
      style={[styles.container, { borderColor }]}
      lightColor="rgba(255,255,255,0.7)"
      darkColor="rgba(36,39,40,0.7)"
    >
      <View style={styles.header}>
        <ThemedText type="defaultSemiBold" style={styles.hadithText}>
          {hadith}
        </ThemedText>
      </View>
      
      <View style={styles.sourceContainer}>
        <ThemedText style={styles.source}>
          {source}
        </ThemedText>
      </View>
      
      {explanation && (
        <>
          <TouchableOpacity 
            style={styles.expandButton} 
            onPress={toggleExpand}
            activeOpacity={0.7}
          >
            <ThemedText style={{ color: tintColor }}>
              {expanded ? 'إخفاء التفسير' : 'عرض التفسير'}
            </ThemedText>
            <Animated.View style={iconStyle}>
              <Feather name="chevron-down" size={16} color={tintColor} />
            </Animated.View>
          </TouchableOpacity>
          
          <Animated.View style={contentStyle}>
            <ThemedText style={styles.explanation}>
              {explanation}
            </ThemedText>
          </Animated.View>
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  header: {
    marginBottom: 12,
  },
  hadithText: {
    fontFamily: 'Amiri',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'right',
  },
  sourceContainer: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  source: {
    fontFamily: 'Amiri',
    fontSize: 14,
    textAlign: 'left',
    opacity: 0.7,
    fontStyle: 'italic',
  },
  expandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  explanation: {
    fontFamily: 'Amiri',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'right',
    paddingTop: 8,
  },
});
