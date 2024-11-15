import React from "react";
import { StyleSheet, Text, View, Button, Image, Modal, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";
import { useState } from "react";
const logoImg = require("../assets/images/adaptive-icon.png");

// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "SecondPage">;

export default function SecondPage({ navigation }: Props) {
  const [isModalVisible,setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Second Page</Text>
      <Image source={logoImg} style={{width:200, height:200}}></Image>
      <Button title="Go Back" color="#f194ff" onPress={() => navigation.goBack()} />
      <Button title="Open Modal" onPress={()=>setIsModalVisible(true)} ></Button>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        onRequestClose={()=>setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View>
          <Text>Modal Content</Text>
          <Button 
          title="Close" 
          color="midnightblue" 
          onPress={()=>setIsModalVisible(false)}></Button>
        </View>
      </Modal>  
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
  button: {
    backgroundColor: 'red', // Background color
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'green', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
