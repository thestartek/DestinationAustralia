import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrPointsCalculatorScreen from "../components/tools/prPoints/PrPointsCalculatorScreen";
import Subclass189 from "../components/tools/prPoints/Subclass189";
import Subclass190 from "../components/tools/prPoints/Subclass190";
import Subclass491 from "../components/tools/prPoints/Subclass491";
import Subclass489 from "../components/tools/prPoints/Subclass489";

const Stack = createNativeStackNavigator();

const PrPointsStack = () => {
  return (
    <Stack.Navigator initialRouteName="PR Points Calculator">
      <Stack.Screen
        options={{ headerShown: false }}
        name="PR Points Calculator"
        component={PrPointsCalculatorScreen}
      />
      <Stack.Screen name="Subclass 189" component={Subclass189} />
      <Stack.Screen name="Subclass 190" component={Subclass190} />
      <Stack.Screen name="Subclass 491" component={Subclass491} />
      <Stack.Screen name="Subclass 489" component={Subclass489} />
    </Stack.Navigator>
  );
};

export default PrPointsStack;
