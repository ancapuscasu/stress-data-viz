import React from "react";
import { View, StyleSheet } from "react-native";
import moment from "moment";

import AppText from "./AppText";
import CurrentStateGraph from "./CurrentStateGraph";
import { userData } from "../assets/userData";

function CurrentState(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.stressStatus}>hello</AppText>
      <AppText style={styles.stressStatus}>High</AppText>
      <CurrentStateGraph />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  stressStatus: {
    fontWeight: "500",
    fontSize: 40,
  },
});

export default CurrentState;
