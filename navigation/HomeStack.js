import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/HomeScreen";
// import ToolsScreen from "../components/tools/ToolsScreen";
import DonateScreen from "../components/drawer/DonateScreen";
import VideoScreen from "../components/learn/VideoScreen";
import NewsPostScreen from "../home/NewsPostScreen";
import NewPostScreen from "../components/newPost/NewPostScreen";
import ReportScreen from "../components/drawer/ReportScreen";
import PrivacyPolicy from "../components/drawer/PrivacyPolicy";
import LearnScreen from "../components/learn/EnglishTestsScreen";
import ProfileStack from "./ProfileStack";
import NotificationScreen from "../components/notifications/NotificationScreen";
import PostStack from "./PostStack";
import PrPointsCalculatorScreen from "../components/tools/prPoints/PrPointsCalculatorScreen";
import UniversityFinderScreen from "../components/tools/UniversityFinderScreen";
import ExploreAustraliaScreen from "../components/tools/ExploreAustraliaScreen";
import AllArticles from "../components/articles/AllArticles";
import UsefulLinksScreen from "../components/tools/UsefulLinksScreen";
import ImportantContactsScreen from "../components/tools/ImportantContactsScreen";
import ScholarshipFinderScreen from "../components/tools/ScholarshipFinderScreen";
import LearnStack from "./LearnStack";
import ResumeBuilderScreen from "../components/tools/ResumeBuilderScreen";
import PrPointsStack from "./PrPointsStack";
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
      {/* <Stack.Screen name="Tools" component={ToolsScreen} /> */}
      <Stack.Screen
        name="PR Points"
        component={PrPointsStack}
      />
      <Stack.Screen
        name="University Finder"
        component={UniversityFinderScreen}
      />
      <Stack.Screen
        name="Explore Australia"
        component={ExploreAustraliaScreen}
      />
      <Stack.Screen name="Useful Links" component={UsefulLinksScreen} />
      <Stack.Screen name="English Tests Preparation" component={LearnStack} />
      <Stack.Screen
        name="Important Contacts"
        component={ImportantContactsScreen}
      />
      <Stack.Screen
        name="Scholarship Finder"
        component={ScholarshipFinderScreen}
      />
      <Stack.Screen name="Resume Builder" component={ResumeBuilderScreen} />
      <Stack.Screen name="Useful Videos" component={VideoScreen} />
      <Stack.Screen name="Support us" component={DonateScreen} />
      <Stack.Screen name="Videos" component={VideoScreen} />
      <Stack.Screen name="News" component={NewsPostScreen} />
      <Stack.Screen name="Report an issue" component={ReportScreen} />
      <Stack.Screen name="Privacy policy" component={PrivacyPolicy} />
      <Stack.Screen name="Learn" component={LearnScreen} />
      <Stack.Screen name="New post" component={NewPostScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      {/* <Stack.Screen name="Notifications" component={SendNotifications} /> */}
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="All articles" component={AllArticles} />
    </Stack.Navigator>
  );
};

export default HomeStack;
