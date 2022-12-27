import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import ToolsScreen from "../components/tools/ToolsScreen";
import PrPointsCalculator from "../components/tools/PrPointsCalculator";
import UniversityFinder from "../components/tools/UniversityFinder";
import ExpenseEstimator from "../components/tools/ExpenseEstimator";
import PostScreen from "../components/post/PostsScreen";
import ExploreAustralia from "../components/tools/ExploreAustralia";
import DonateScreen from "../components/drawer/DonateScreen";
import VideoScreen from "../components/learn/VideoScreen";
import NewsPostScreen from "../home/NewsPostScreen";
import ReportScreen from "../components/drawer/ReportScreen";
import AboutusScreen from "../components/drawer/AboutusScreen";
import PrivacyPolicy from "../components/drawer/PrivacyPolicy";
import LearnScreen from "../components/learn/LearnScreen";
import ProfileStack from "./ProfileStack";
import NotificationScreen from "../components/notifications/NotificationScreen";

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
      <Stack.Screen name="Posts" component={PostScreen} />
      <Stack.Screen name="Tools" component={ToolsScreen} />
      <Stack.Screen
        name="PR Points Calculator"
        component={PrPointsCalculator}
      />
      <Stack.Screen name="University Finder" component={UniversityFinder} />
      <Stack.Screen name="Expense Estimator" component={ExpenseEstimator} />
      <Stack.Screen name="Explore Australia" component={ExploreAustralia} />
      <Stack.Screen name="Support us" component={DonateScreen} />
      <Stack.Screen name="Videos" component={VideoScreen} />
      <Stack.Screen name="News" component={NewsPostScreen} />
      <Stack.Screen name="Report an issue" component={ReportScreen} />
      <Stack.Screen name="About us" component={AboutusScreen} />
      <Stack.Screen name="Privacy policy" component={PrivacyPolicy} />
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen name="New post" component={NewsPostScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
