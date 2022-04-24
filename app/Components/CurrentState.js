/**
 * Component shows the current anxietyState, how long ago the state was updated and the
 * CurrentStateGraph gradient meter to visually show the anxietyState
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import moment from "moment";

import AppText from "./AppText";
import CurrentStateGraph from "./CurrentStateGraph";
import colors from "../config/colors";

function CurrentState({ userData, style }) {
  // Most recent object (log) from userData array
  const lastLog = userData[0];

  //Function to get time ago of the latest log (compares updatedAt time to current time)
  const lastUpdate = moment.utc(`${lastLog.updatedAt.$date}`).local().fromNow();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.messageContainer}>
        <AppText style={styles.stressStatus}>{lastLog.anxietyState}</AppText>
        <AppText style={styles.updateMsg}>Last updated {lastUpdate}</AppText>
      </View>
      <CurrentStateGraph style={styles.graph} lastLog={lastLog} />
      <View style={styles.button}>
        <AppText style={styles.buttonText}>Add A Note</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 45,
  },
  buttonText: {
    fontWeight: "400",
    color: colors.white,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  graph: {
    marginBottom: 45,
    margin: 20,
  },
  messageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 45,
  },
  stressStatus: {
    fontWeight: "500",
    fontSize: 55,
    textTransform: "capitalize",
  },
  updateMsg: {
    fontSize: 18,
  },
});

export default CurrentState;
