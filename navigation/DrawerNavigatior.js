import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import DonateScreen from "../components/drawer/DonateScreen";
import AboutusScreen from "../components/drawer/AboutusScreen";
import HomeStack from "./HomeStack";
import PostScreen from "../components/post/PostsScreen";
import NewsPost from "../home/NewsPost";
import NewsPostScreen from "../home/NewsPostScreen";
import ToolsScreen from "../components/tools/ToolsScreen";
import ReportScreen from "../components/drawer/ReportScreen";

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
      <Drawer.Screen name="Posts" component={PostScreen} />
      <Drawer.Screen name="News" component={NewsPostScreen} />
      <Drawer.Screen name="Tools" component={ToolsScreen} />
      <Drawer.Screen name="Support us" component={DonateScreen} />
      <Drawer.Screen name="Report an issue" component={ReportScreen} />
      <Drawer.Screen name="About us" component={AboutusScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;
