import React from "react";
import { Text } from "react-native";

export const Chat = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <Text onPress={() => navigation.goBack()}>{user} Chat and go Back</Text>
  );
};
