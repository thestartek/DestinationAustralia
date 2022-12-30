import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculator from "../components/tools/PrPointsCalculator";
import UniversityFinder from "../components/tools/UniversityFinder";
import ExpenseEstimator from "../components/tools/ExpenseEstimator";

const Stack = createNativeStackNavigator();

const ToolsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tools"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Tools"
        component={ToolsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PR Points Calculator"
        component={PrPointsCalculator}
      />
      <Stack.Screen name="Income Calculator" component={IncomeCalculator} />
      <Stack.Screen name="University Finder" component={UniversityFinder} />
      <Stack.Screen name="Expense Estimator" component={ExpenseEstimator} />
    </Stack.Navigator>
  );
};

export default ToolsStack;
