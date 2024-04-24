import { View, Text } from "react-native";
import React from "react";
import { SplashScreen, Stack } from "expo-router";


// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;
