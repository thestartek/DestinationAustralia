import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import DonateScreen from "../components/drawer/DonateScreen";
import AboutusScreen from "../components/drawer/AboutusScreen";
import HomeStack from "./HomeStack";
import PostScreen from "../components/post/PostsScreen";
import NewsPostScreen from "../home/NewsPostScreen";
import ContactScreen from "../components/drawer/ContactScreen";
import ReportScreen from "../components/drawer/ReportScreen";
import PrivacyPolicy from "../components/drawer/PrivacyPolicy";
import VideoScreen from "../components/learn/VideoScreen";
import ToolsStack from "./ToolsStack";

const Drawer = createDrawerNavigator();

const DrawerNavigatior = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeStack}
      />
      {/* <Drawer.Screen name="Posts" component={PostScreen} /> */}
      <Drawer.Screen name="News" component={NewsPostScreen} />
      <Drawer.Screen name="Videos" component={VideoScreen} />
      <Drawer.Screen name="Tools" component={ToolsStack} />
      <Drawer.Screen name="Support us" component={DonateScreen} />
      <Drawer.Screen name="Report an issue" component={ReportScreen} />
      <Drawer.Screen name="Get in touch" component={ContactScreen} />
      <Drawer.Screen name="Our website" component={AboutusScreen} />
      <Drawer.Screen name="Privacy policy" component={PrivacyPolicy} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;
