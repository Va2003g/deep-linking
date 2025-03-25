import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Business() {
  const id = useLocalSearchParams();
  console.log(id);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Business</Text>
    </View>
  );
}
