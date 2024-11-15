import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";

// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "SecondPage">;

export default function SecondPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Second Page</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#072c66",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
});
