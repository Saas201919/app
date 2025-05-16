
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useSidebar } from '@/contexts/SidebarContext';

interface HeaderProps {
  title: string;
  showMenu?: boolean;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export function Header({ title, showMenu = true, rightIcon, onRightIconPress }: HeaderProps) {
  const iconColor = useThemeColor({}, 'icon');
  const { toggle } = useSidebar();
  
  return (
    <View style={styles.header}>
      {showMenu && (
        <TouchableOpacity onPress={toggle} style={styles.menuButton}>
          <Feather name="menu" size={24} color={iconColor} />
        </TouchableOpacity>
      )}
      
      <ThemedText type="subtitle" style={styles.title}>
        {title}
      </ThemedText>
      
      {rightIcon ? (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightButton}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.rightPlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuButton: {
    padding: 8,
  },
  rightButton: {
    padding: 8,
  },
  rightPlaceholder: {
    width: 40,
  },
  title: {
    fontFamily: 'AmiriBold',
    textAlign: 'center',
    flex: 1,
  },
});
