import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";
const logoImg = require("../assets/images/adaptive-icon.png");

// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "SecondPage">;

export default function SecondPage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Second Page</Text>
      <Image source={logoImg} style={{width:200, height:200}}></Image>
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
