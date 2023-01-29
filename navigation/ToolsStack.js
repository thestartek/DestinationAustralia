import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculator from "../components/tools/PrPointsCalculatorScreen";
import UniversityFinder from "../components/tools/UniversityFinderScreen";
import ExpenseEstimator from "../components/tools/ExpenseEstimatorScreen";
import ExploreAustralia from "../components/tools/ExploreAustraliaScreen";
import PrPointsCalculatorScreen from "../components/tools/PrPointsCalculatorScreen";
import ExploreAustraliaScreen from "../components/tools/ExploreAustraliaScreen";
import UniversityFinderScreen from "../components/tools/UniversityFinderScreen";
import ExpenseEstimatorScreen from "../components/tools/ExpenseEstimatorScreen";

const Stack = createNativeStackNavigator();

const ToolsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tools"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="All tools"
        component={ToolsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PR Points Calculator"
        component={PrPointsCalculatorScreen}
      />
      <Stack.Screen name="Explore Australia" component={ExploreAustraliaScreen} />
      <Stack.Screen name="University Finder" component={UniversityFinderScreen} />
      <Stack.Screen name="Expense Estimator" component={ExpenseEstimatorScreen} />
    </Stack.Navigator>
  );
};

export default ToolsStack;
