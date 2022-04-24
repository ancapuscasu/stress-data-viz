import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const dayToday = new Date().toLocaleString(window.navigator.language, {
  weekday: "long",
});

function GreetingMessage(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.greetingName}>Hello Victoria,</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: colors.blue,
  },
  greetingName: {
    fontWeight: "500",
    fontSize: 40,
    paddingVertical: 10,
  },
});

export default GreetingMessage;
