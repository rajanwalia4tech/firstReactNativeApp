import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";

// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "Page">;

export default function Page({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World Rajan</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
      <Button title="Go to Second Page" onPress={() => navigation.navigate("SecondPage")} />
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
  subtitle: {
    fontSize: 36,
    color: "white",
  },
});
