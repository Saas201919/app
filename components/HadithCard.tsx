import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming 
} from 'react-native-reanimated';
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
  const colorScheme = useColorScheme();

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
    <View
      style={[
        styles.container, 
        { 
          borderColor: colorScheme === 'dark' 
            ? 'rgba(255,255,255,0.1)' 
            : 'rgba(0,0,0,0.1)' 
        }
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.hadithText, { color: Colors[colorScheme].text }]}>
          {hadith}
        </Text>
      </View>

      <View style={styles.sourceContainer}>
        <Text style={[styles.source, { color: Colors[colorScheme].textSecondary }]}>
          {source}
        </Text>
      </View>

      {explanation && (
        <>
          <TouchableOpacity 
            style={styles.expandButton} 
            onPress={toggleExpand}
            activeOpacity={0.7}
          >
            <Text style={[styles.expandButtonText, { color: Colors[colorScheme].tint }]}>
              {expanded ? 'إخفاء التفسير' : 'عرض التفسير'}
            </Text>
            <Feather 
              name={expanded ? "chevron-up" : "chevron-down"} 
              size={16} 
              color={Colors[colorScheme].tint} 
              style={styles.expandIcon}
            />
          </TouchableOpacity>

          {expanded && (
            <View style={styles.explanationContainer}>
              <Text style={[styles.explanation, { color: Colors[colorScheme].text }]}>
                {explanation}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  header: {
    marginBottom: 10,
  },
  hadithText: {
    fontFamily: 'AmiriBold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'right',
  },
  sourceContainer: {
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  source: {
    fontFamily: 'Amiri',
    fontSize: 14,
  },
  expandButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  expandButtonText: {
    fontFamily: 'Amiri',
    fontSize: 14,
    marginRight: 5,
  },
  expandIcon: {
    marginTop: 2,
  },
  explanationContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(200,200,200,0.1)',
    borderRadius: 8,
  },
  explanation: {
    fontFamily: 'Amiri',
    fontSize: 14,
    lineHeight: 22,
  },
});