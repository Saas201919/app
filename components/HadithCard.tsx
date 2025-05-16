
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

type HadithCardProps = {
  hadith: string;
  source: string;
  explanation?: string;
};

export default function HadithCard({ hadith, source, explanation }: HadithCardProps) {
  const [expanded, setExpanded] = useState(false);
  const colorScheme = useColorScheme();
  
  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

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
