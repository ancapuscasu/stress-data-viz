import React from "react";
import { StyleSheet } from "react-native";

// import react native gesture handler
import "react-native-gesture-handler";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import CurrentStateGraph from "./app/Components/CurrentStateGraph";
import CurrentState from "./app/Components/CurrentState";
import HorizontalBarGraph from "./app/Components/HorizontalBarGraph";
import LineGraph from "./app/Components/LineGraph";

// Create the navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="WelcomeScreen"
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
