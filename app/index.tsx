import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page from "./page";
import SecondPage from "./secondPage";
import "react-native-gesture-handler";

// Define types for navigation
export type RootStackParamList = {
  Page: undefined; // No params for this route
  SecondPage: undefined; // No params for this route
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page">
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
