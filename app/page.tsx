import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";
const logoImg = require("../assets/images/adaptive-icon.png");
// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "Page">;

export default function Page({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World Rajansdfsd</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
      {/* for network images width and height is mandatory */}
      <Image source={{uri:"https://picsum.photos/300"}} style={{width:200, height:200}}></Image>
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
