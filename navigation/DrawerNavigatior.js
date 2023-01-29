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
import CustomDrawer from "../components/drawer/CustomDrawer";
import { Image, StyleSheet } from "react-native";

const Drawer = createDrawerNavigator();

const homeIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FhomeIcon_Active.png?alt=media&token=1a44acea-55f5-4676-9eda-d31f4051cd62",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const newsIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FNews_article_icon.png?alt=media&token=4a3c9969-cd67-44ef-884b-298c57d9dae3",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const videoIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fvideo-icon.webp?alt=media&token=1f527c62-3d89-4709-9d3e-1110addb2df4",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const toolsIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FtoolsIcon.png?alt=media&token=716f087d-75c1-41ea-9b0e-f32ca82a825f",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const supportUsIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fsupport-icon.png?alt=media&token=39b58a00-d045-49c3-9fcd-0f0d0ee0ceee",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const reportIssueIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Freport_issue_icon.png?alt=media&token=3f68264f-90e2-4f5d-a37d-dec0b7a217d7",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const privacyIcon = ({ focused }) => (
  <Image
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fprivacy-policy-icon.png?alt=media&token=8fd58ea4-391f-4c9d-a236-74d87205a3b6",
    }}
    style={[styles.iconStyle, { tintColor: focused ? "#1267E9" : "grey" }]}
  />
);

const DrawerNavigatior = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{ headerShown: false, drawerIcon: homeIcon }}
        name="Home"
        component={HomeStack}
      />
      {/* <Drawer.Screen name="Posts" component={PostScreen} /> */}
      <Drawer.Screen
        options={{ drawerIcon: newsIcon }}
        name="News"
        component={NewsPostScreen}
      />
      <Drawer.Screen
        options={{ drawerIcon: videoIcon }}
        name="Videos"
        component={VideoScreen}
      />
      <Drawer.Screen
        options={{ drawerIcon: toolsIcon }}
        name="Tools"
        component={ToolsStack}
      />
      <Drawer.Screen
        options={{ drawerIcon: supportUsIcon }}
        name="Support us"
        component={DonateScreen}
      />
      <Drawer.Screen
        options={{ drawerIcon: reportIssueIcon }}
        name="Report an issue"
        component={ReportScreen}
      />
      <Drawer.Screen
        options={{ drawerIcon: privacyIcon }}
        name="Privacy policy"
        component={PrivacyPolicy}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
