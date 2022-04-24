/**
 * Component showing a gradient with a circle indicating the current stressStatus.
 * The circel changes position to reflex the different state status.
 *
 * Color/left position by stress status:
 * Normal: green / "0%"
 * Low: yellow / "33%"
 * Medium: orange / "66%"
 * High: red / "100%"
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { userData } from "../assets/userData";
import colors from "../config/colors";

function CurrentStateGraph(props) {
  const DATA = JSON.parse(JSON.stringify(userData));

  const lastLog = DATA[0];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.greenGra, colors.redGra]}
        style={styles.gradient}
        start={[0, 1]}
        end={[1, 0]}
      />
      <View style={styles.circleWrapper}>
        <View style={[styles.circle]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: colors.darkGrey,
    position: "absolute",
    left: "66%",
  },
  circleWrapper: {
    height: 50,
    width: "100%",
    position: "absolute",
    paddingHorizontal: 25,
    marginLeft: 40,
  },
  container: {
    height: 50,
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "center",
  },
  gradient: {
    height: 30,
    borderRadius: 10,
  },
});
export default CurrentStateGraph;
