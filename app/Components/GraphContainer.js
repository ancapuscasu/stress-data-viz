import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function GraphContainer({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    backgroundColor: colors.white,
    marginVertical: 40,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default GraphContainer;
