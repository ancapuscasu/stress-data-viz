/**
 * Component that displays a FlatList of client icons - users refers to watch wearers
 * Uses a mock user list
 */
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import UserIcon from "./UserIcon";
import colors from "../config/colors";
import AppText from "./AppText";

function Users({ onPress }) {
  const USERS = [
    {
      id: "1",
      name: "LM",
      bgColor: colors.blue,
    },
    {
      id: "2",
      name: "AP",
      bgColor: colors.red,
    },
    {
      id: "3",
      name: "MD",
      bgColor: colors.green,
    },
    {
      id: "4",
      name: "RN",
      bgColor: colors.orange,
    },
    {
      id: "5",
      name: "SR",
      bgColor: "pink",
    },
  ];

  return (
    <View style={styles.container}>
      <AppText style={styles.message}>Choose your client:</AppText>
      <FlatList
        contentContainerStyle={styles.iconContainer}
        key={(user) => user.id}
        keyExtractor={(user) => user.id}
        horizontal={false}
        numColumns={3}
        data={USERS}
        renderItem={({ item }) => (
          <UserIcon name={item.name} bgColor={item.bgColor} onPress={onPress} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 50,
    width: "100%",
  },
  iconContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  message: {
    marginVertical: 20,
  },
});
export default Users;
