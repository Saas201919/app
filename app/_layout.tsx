
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SidebarProvider } from '@/contexts/SidebarContext';

// منع شاشة البداية من الإخفاء التلقائي
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Amiri: require('../assets/fonts/Amiri-Regular.ttf'),
    AmiriBold: require('../assets/fonts/Amiri-Bold.ttf'),
  });

  // استخدام حدود الخطأ لالتقاط الأخطاء في شجرة التنقل
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SidebarProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'صفحة غير موجودة' }} />
          <Stack.Screen name="about" options={{ title: 'حول التطبيق' }} />
          <Stack.Screen name="biography/birth" options={{ title: 'مولد النبي' }} />
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </SidebarProvider>
    </ThemeProvider>
  );
}
