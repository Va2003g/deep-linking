import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
const DynamicRoute = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dynamic Route</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default DynamicRoute;

const styles = StyleSheet.create({});
