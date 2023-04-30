import { Text, View, StyleSheet } from "react-native";
import React from "react";
import {
  useFonts,
  Roboto_100Thin_Italic,
  Roboto_400Regular,
  Roboto_500Medium_Italic,
} from "@expo-google-fonts/roboto";

export default function LoginScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_100Thin_Italic,
    Roboto_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 30 }}>
        Inter Black
      </Text>
      <Text style={{ fontFamily: " Roboto_100Thin_Italic", fontSize: 40 }}>
        Platform Default 6
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
