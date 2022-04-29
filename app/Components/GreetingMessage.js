import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import moment, { weekdays } from "moment";

import colors from "../config/colors";
import AppText from "./AppText";

const dayToday = moment(new Date()).format("dddd");

function GreetingMessage(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.greetingName}>Hello Victoria,</AppText>
      <AppText style={styles.greeting}>Happy {dayToday}!</AppText>
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
  greeting: {
    fontSize: 25,
  },
  greetingName: {
    fontWeight: "500",
    fontSize: 40,
    paddingVertical: 10,
  },
});

export default GreetingMessage;
