// src/screens/Home.js
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function HomeScreen({ route }) {
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Seja bem-vindo: {name} 👟🦈</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});