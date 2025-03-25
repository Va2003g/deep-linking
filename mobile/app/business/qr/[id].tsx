import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams, Redirect } from "expo-router";
export default function BusinessEntry() {
  const { id, name } = useLocalSearchParams();
  console.log("id >", id);
  console.log("name >", name);
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
    //     Business QR
    //   </Text>
    //   <Text style={{ fontSize: 16, color: "white" }}>{id}</Text>
    // </View>
    <Redirect href={`/business/${id}`} />
  );
}
