/**
 * Component that displays watch data (icon and battery percentage)
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function WatchData({ data }) {
  //Function to get battery percentage of last log - uses toFixed() to limit decimal places to 0
  const batteryPercent = (data.state.batteryLevel * 100).toFixed(0);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="watch" size={35} color={colors.darkGrey} />
      <AppText style={styles.text}>{batteryPercent}%</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default WatchData;
