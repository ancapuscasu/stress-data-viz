import react from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import TestScreen from "./app/screens/TestScreen";
import CurrentStateGraph from "./app/Components/CurrentStateGraph";
import CurrentState from "./app/Components/CurrentState";

export default function App() {
  return <CurrentState />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
