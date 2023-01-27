import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
import ToolsScreen from "../components/tools/ToolsScreen";
import DonateScreen from "../components/drawer/DonateScreen";
import VideoScreen from "../components/learn/VideoScreen";
import NewsPostScreen from "../home/NewsPostScreen";
import NewPostScreen from "../components/newPost/NewPostScreen";
import ReportScreen from "../components/drawer/ReportScreen";
import AboutusScreen from "../components/drawer/AboutusScreen";
import PrivacyPolicy from "../components/drawer/PrivacyPolicy";
import LearnScreen from "../components/learn/LearnScreen";
import ProfileStack from "./ProfileStack";
import NotificationScreen from "../components/notifications/NotificationScreen";
import PostStack from "./PostStack";
import ForYouScreen from "../components/forYou/ForYouScreen";
import RentHouseScreen from "../components/forYou/RentHouseScreen";
import FindJobScreen from "../components/forYou/FindJobScreen";
import GetTFNScreen from "../components/forYou/GetTFNScreen";
import BeforeVisaScreen from "../components/forYou/BeforeComingAus";
import PrPointsCalculatorScreen from "../components/tools/PrPointsCalculatorScreen";
import UniversityFinderScreen from "../components/tools/UniversityFinderScreen";
import ExpenseEstimatorScreen from "../components/tools/ExpenseEstimatorScreen";
import ExploreAustraliaScreen from "../components/tools/ExploreAustraliaScreen";
import BeforeComingAus from "../components/forYou/BeforeComingAus";

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
      <Stack.Screen name="Posts" component={PostStack} />
      <Stack.Screen name="Tools" component={ToolsScreen} />
      <Stack.Screen
        name="PR Points Calculator"
        component={PrPointsCalculatorScreen}
      />
      <Stack.Screen name="University Finder" component={UniversityFinderScreen} />
      <Stack.Screen name="Expense Estimator" component={ExpenseEstimatorScreen} />
      <Stack.Screen name="Explore Australia" component={ExploreAustraliaScreen} />
      <Stack.Screen name="Support us" component={DonateScreen} />
      <Stack.Screen name="Videos" component={VideoScreen} />
      <Stack.Screen name="News" component={NewsPostScreen} />
      <Stack.Screen name="Report an issue" component={ReportScreen} />
      <Stack.Screen name="About us" component={AboutusScreen} />
      <Stack.Screen name="Privacy policy" component={PrivacyPolicy} />
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen name="New post" component={NewPostScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      {/* <Stack.Screen name="Notifications" component={SendNotifications} /> */}
      <Stack.Screen name="Profile" component={ProfileStack} />
      {/* For you pages */}
      <Stack.Screen name="For you" component={ForYouScreen} />
      <Stack.Screen name="Finding a job" component={FindJobScreen} />
      <Stack.Screen name="Finding a rental place" component={RentHouseScreen} />
      <Stack.Screen name="Getting TFN, ABN and Super" component={GetTFNScreen} />
      <Stack.Screen name="Before coming to Australia" component={BeforeComingAus} />
    </Stack.Navigator>
  );
};

export default HomeStack;
