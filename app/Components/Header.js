import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import WatchData from "./WatchData";
import colors from "../config/colors";

function Header({ data }) {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={35} color={colors.darkGrey} />
      <WatchData data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 2,
  },
});
export default Header;
