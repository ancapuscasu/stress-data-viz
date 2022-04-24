import React from "react";
import { StyleSheet } from "react-native";

import { userData } from "../assets/userData";
import CurrentState from "../Components/CurrentState";
import Screen from "../Components/Screen";
import colors from "../config/colors";

function HomeScreen() {
  const DATA = JSON.parse(JSON.stringify(userData));

  return (
    <Screen style={styles.container}>
      <CurrentState style={styles.currentState} userData={DATA} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  currentState: {
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
