import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculatorScreen from "../components/tools/PrPointsCalculatorScreen";
import ExploreAustraliaScreen from "../components/tools/ExploreAustraliaScreen";
import UniversityFinderScreen from "../components/tools/UniversityFinderScreen";
import ExpenseEstimatorScreen from "../components/tools/ExpenseEstimatorScreen";
import UsefulLinksScreen from "../components/tools/UsefulLinksScreen";
import ImportantContactsScreen from "../components/tools/ImportantContactsScreen";
import ScholarshipFinderScreen from "../components/tools/ScholarshipFinderScreen";

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
      <Stack.Screen
        name="Explore Australia"
        component={ExploreAustraliaScreen}
      />
      <Stack.Screen
        name="University Finder"
        component={UniversityFinderScreen}
      />
      <Stack.Screen
        name="Expense Estimator"
        component={ExpenseEstimatorScreen}
      />
      <Stack.Screen name="Useful Links" component={UsefulLinksScreen} />
      <Stack.Screen
        name="Important Contacts"
        component={ImportantContactsScreen}
      />
      <Stack.Screen
        name="Scholarship Finder"
        component={ScholarshipFinderScreen}
      />
    </Stack.Navigator>
  );
};

export default ToolsStack;
