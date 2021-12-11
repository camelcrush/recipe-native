import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Game from "../screens/Game";

const Stack = createNativeStackNavigator();

const Stacks = () => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: "rgba(255,255,255,0.8)",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Game" component={Game} />
  </Stack.Navigator>
);

export default Stacks;
