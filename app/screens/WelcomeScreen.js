import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import GreetingMessage from "../Components/GreetingMessage";
import Screen from "../Components/Screen";
import Users from "../Components/Users";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <GreetingMessage />
      <Users onPress={() => navigation.navigate("DashboardScreen")} />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
