import React from "react";
import { StyleSheet } from "react-native";

import GreetingMessage from "../Components/GreetingMessage";
import Screen from "../Components/Screen";
import Users from "../Components/Users";

function WelcomeScreen() {
  return (
    <Screen>
      <GreetingMessage />
      <Users />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
