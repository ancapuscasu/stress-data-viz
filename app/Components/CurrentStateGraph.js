/**
 * Component showing a gradient with a dot indicating the current anxietyState.
 * The dot changes position to reflect the different anxiety states.
 *
 * Color/left position by anxiety status:
 * Normal: green / "-1%"
 * Low: yellow / "33%"
 * Medium: orange / "66%"
 * High: red / "101%"
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";

function CurrentStateGraph({ lastLog, style }) {
  //Anxiety state from the most recent log
  const anxietyState = lastLog.anxietyState;

  let dotPosition;

  if (anxietyState === "HIGH") {
    dotPosition = "101%";
  } else if (anxietyState === "MEDIUM") {
    dotPosition = "66%";
  } else if (anxietyState === "LOW") {
    dotPosition = "33%";
  } else if (anxietyState === "NORMAL") {
    dotPosition = "-1%";
  }

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[colors.greenGra, colors.redGra]}
        style={styles.gradient}
        start={[0, 1]}
        end={[1, 0]}
      />
      <View style={styles.circleWrapper}>
        <View style={[styles.circle, { left: dotPosition }]} />
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
  },
  circleWrapper: {
    height: 50,
    width: "100%",
    position: "absolute",
    paddingHorizontal: 25,
    marginLeft: 20,
  },
  container: {
    height: 50,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  gradient: {
    height: 30,
    borderRadius: 10,
  },
});
export default CurrentStateGraph;
