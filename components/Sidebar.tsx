
import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSidebar } from '@/contexts/SidebarContext';
import { router } from 'expo-router';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export function Sidebar() {
  const { isOpen, close } = useSidebar();
  const translateX = useSharedValue(-width);
  const opacity = useSharedValue(0);
  
  const iconColor = useThemeColor({}, 'icon');
  const tintColor = useThemeColor({}, 'tint');
  
  useEffect(() => {
    if (isOpen) {
      translateX.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      translateX.value = withTiming(-width, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
      opacity.value = withTiming(0, { duration: 300 });
    }
  }, [isOpen]);

  const sidebarStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      display: opacity.value === 0 ? 'none' : 'flex',
    };
  });

  const navigateTo = (path: string) => {
    router.push(path);
    close();
  };

  return (
    <>
      <Animated.View 
        style={[styles.overlay, overlayStyle]}
        pointerEvents={isOpen ? 'auto' : 'none'}
      >
        <TouchableOpacity 
          style={{ width: '100%', height: '100%' }}
          onPress={close}
          activeOpacity={1}
        />
      </Animated.View>
      
      <Animated.View style={[styles.sidebar, sidebarStyle]}>
        <ThemedView style={styles.container} lightColor="#fff" darkColor="#242728">
          <View style={styles.header}>
            <TouchableOpacity onPress={close} style={styles.closeButton}>
              <Feather name="x" size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.content}>
            <SidebarItem 
              icon="home" 
              label="الرئيسية"
              onPress={() => navigateTo('/')}
            />
            <SidebarItem 
              icon="book-open" 
              label="السيرة"
              onPress={() => navigateTo('/biography')}
            />
            <SidebarItem 
              icon="feather" 
              label="الأحاديث"
              onPress={() => navigateTo('/teachings')}
            />
            <SidebarItem 
              icon="map-pin" 
              label="أماكن"
              onPress={() => navigateTo('/places')}
            />
            <SidebarItem 
              icon="info" 
              label="حول التطبيق"
              onPress={() => navigateTo('/about')}
            />
          </View>
          
          <View style={styles.footer}>
            <ThemedText style={styles.copyright}>
              صنع من طرف شايبي وائل
            </ThemedText>
            <ThemedText style={styles.version}>
              © 2025 سيرة الرسول
            </ThemedText>
          </View>
        </ThemedView>
      </Animated.View>
    </>
  );
}

interface SidebarItemProps {
  icon: any;
  label: string;
  onPress: () => void;
}

function SidebarItem({ icon, label, onPress }: SidebarItemProps) {
  const tintColor = useThemeColor({}, 'tint');
  
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7}>
      <Feather name={icon} size={20} color={tintColor} />
      <ThemedText style={styles.itemLabel}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '80%',
    maxWidth: 300,
    zIndex: 101,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  closeButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  itemLabel: {
    marginLeft: 16,
    fontFamily: 'Amiri',
    fontSize: 18,
  },
  footer: {
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  copyright: {
    textAlign: 'center',
    fontFamily: 'Amiri',
    fontSize: 14,
    marginBottom: 4,
  },
  version: {
    textAlign: 'center',
    fontFamily: 'Amiri',
    fontSize: 12,
    opacity: 0.7,
  },
});
