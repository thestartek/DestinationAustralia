import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import CommentsScreen from "../components/post/CommentsScreen";
import CommunityStack from "./PostStack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculator from "../components/tools/PrPointsCalculator";
import IncomeCalculator from "../components/tools/IncomeCalculator";
import UniversityFinder from "../components/tools/UniversityFinder";
import ExpenseEstimator from "../components/tools/ExpenseEstimator";
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