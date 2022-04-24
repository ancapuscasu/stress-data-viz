import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors.js";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.darkGrey,
  },
});

export default AppText;
