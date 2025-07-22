import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message';
import { CustomToast } from '../components/CustomToast/CustomToast';
import { View } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

const toastConfig: ToastConfig = {
  success: ({ text1 }) => <CustomToast text1={text1 ?? ""} type="success" />,
  error: ({ text1 }) => <CustomToast text1={text1 ?? ""} type="error" />,
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <Toast config={toastConfig}/>
        <StatusBar style="light" />
      </>
    </ThemeProvider>
  );
}
