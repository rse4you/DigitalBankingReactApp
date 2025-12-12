import { Stack } from 'expo-router';
import { ImageBackground, Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function RootLayout() {

  return (
      <ImageBackground style={{height: "100%", width: "100%", flex: 1}} source={require('../assets/images/background.png')}>
        <SafeAreaView style={{flex: 1}}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false, contentStyle: {backgroundColor: 'transparent'}}} />
                <Stack.Screen name="notifications/notifications" options={{
                  headerShown: false,
                  animation: 'slide_from_bottom',
                  contentStyle: {backgroundColor: 'transparent'},
                }} />
                <Stack.Screen name="pay-all-due/pay-all-due" options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                  contentStyle: {backgroundColor: 'transparent'},
                }} />
                <Stack.Screen name="camera-modal/camera-modal" options={{
                  headerShown: false,
                  animation: 'slide_from_right',
                  contentStyle: {backgroundColor: 'transparent'},
                }} />
            </Stack> 
        </SafeAreaView>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
