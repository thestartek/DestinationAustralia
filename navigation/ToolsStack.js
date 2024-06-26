import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculatorScreen from "../components/tools/prPoints/PrPointsCalculatorScreen";
import ExploreAustraliaScreen from "../components/tools/ExploreAustraliaScreen";
import UniversityFinderScreen from "../components/tools/UniversityFinderScreen";
import UsefulLinksScreen from "../components/tools/UsefulLinksScreen";
import ImportantContactsScreen from "../components/tools/ImportantContactsScreen";
import ScholarshipFinderScreen from "../components/tools/ScholarshipFinderScreen";
import LearnStack from "./LearnStack";
import ResumeBuilderScreen from "../components/tools/ResumeBuilderScreen";
import PrPointsStack from "./PrPointsStack";

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
        component={PrPointsStack}
      />
      <Stack.Screen
        name="Explore Australia"
        component={ExploreAustraliaScreen}
      />
      <Stack.Screen
        name="University Finder"
        component={UniversityFinderScreen}
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
      <Stack.Screen name="English Tests Preparation" component={LearnStack} />
      <Stack.Screen name="Resume Builder" component={ResumeBuilderScreen} />
    </Stack.Navigator>
  );
};

export default ToolsStack;
