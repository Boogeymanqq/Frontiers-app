import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app1!</Text>
      <Text style={styles.text1}>
        Open up App.js to start working on your app1!
      </Text>
      <Text style={styles.text2}>
        Open up App.js to start working on your app1!
      </Text>
      <Text style={styles.text3}>
        Open up App.js to start working on your app1!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  text1: {
    fontFamily: "Inter-Bold",
  },
  text2: {
    fontFamily: "Inter-Regular",
  },
  text3: {
    fontFamily: "Inter-ExtraBold",
  },
});
