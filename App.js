import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { globalFonts } from "./assets/styles";
import { Header } from "./src/components/Header/Header";
import styled from "styled-components";

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

  const TextFont = styled.Text`
    font-family: ${globalFonts.bold};
    font-size: 30;
  `;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <TextFont>Open up App.js to start working on your app1213!</TextFont>
      <Text style={styles.text1}>
        Open up App.js to start working on your app1!
      </Text>
      <Text style={styles.text2}>
        Open up App.js to start working on your app1!
      </Text>
      <Text style={styles.text3}>
        Open up App.js to start working on your app1213!
      </Text>
      <Header />
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
    // fontFamily: `${primaryFont}`,
  },
  text2: {
    fontFamily: "Inter-Regular",
  },
  text3: {
    fontFamily: "Inter-ExtraBold",
  },
});
