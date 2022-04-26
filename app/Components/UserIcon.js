import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function UserIcon({ name, bgColor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <AppText style={styles.initials}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default UserIcon;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  initials: {
    textTransform: "uppercase",
    fontSize: 45,
    fontWeight: "bold",
  },
});
