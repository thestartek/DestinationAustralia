import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import CommentsScreen from "../components/post/CommentsScreen";
import CommunityStack from "./CommunityStack";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculator from "../components/tools/PrPointsCalculator";
import IncomeCalculator from "../components/tools/IncomeCalculator";
import UniversityFinder from "../components/tools/UniversityFinder";
import ExpenseEstimator from "../components/tools/ExpenseEstimator";
import PostScreen from "../components/post/PostsScreen";
import ExploreAustralia from "../components/tools/ExploreAustralia";
// import NewPostScreen from "../screens/NewPostScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Posts" component={PostScreen} />
      <Stack.Screen name="Tools" component={ToolsScreen} />
      <Stack.Screen
        name="PR Points Calculator"
        component={PrPointsCalculator}
      />
      <Stack.Screen name="Income Calculator" component={IncomeCalculator} />
      <Stack.Screen name="University Finder" component={UniversityFinder} />
      <Stack.Screen name="Expense Estimator" component={ExpenseEstimator} />
      <Stack.Screen name="Explore Australia" component={ExploreAustralia} />
    </Stack.Navigator>
  );
};

export default HomeStack;
