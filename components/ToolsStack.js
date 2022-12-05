import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CommentsScreen from "../screens/CommentsScreen";
import CommunityStack from "./CommunityStack";
import ToolsScreen from "./tools/ToolsScreen";
import PrPointsCalculator from "./tools/PrPointsCalculator";
import IncomeCalculator from "./tools/IncomeCalculator";
import UniversityFinder from "./tools/UniversityFinder";
import ExpenseEstimator from "./tools/ExpenseEstimator";
// import NewPostScreen from "../screens/NewPostScreen";

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
