import { View, Text } from "react-native";
import React from "react";
import LearnScreen from "../components/learn/LearnScreen";
import PTE from "../components/learn/PTE";
import IELTS from "../components/learn/IELTS";
import TOEFL from "../components/learn/TOEFL";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LearnStack = () => {
  return (
    <Stack.Navigator initialRouteName="Learn Screen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Learn Screen"
        component={LearnScreen}
      />
      <Stack.Screen name="PTE Academic" component={PTE} />
      <Stack.Screen name="IELTS" component={IELTS} />
      <Stack.Screen name="TOEFL iBT" component={TOEFL} />
    </Stack.Navigator>
  );
};

export default LearnStack;
