import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "../components/Header";

import colors from "../styles/colors";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
