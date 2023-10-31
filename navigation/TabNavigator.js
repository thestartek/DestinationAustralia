import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./DrawerNavigatior";
import ProfileStack from "./ProfileStack";
import NewPostScreen from "../components/newPost/NewPostScreen";

import {
  requestUserPermission,
  getDeviceToken,
  handleIncomingNotification,
  handleForegroundNotification,
  handleBackgroundNotification,
} from "../Firebase";
import VideoScreen from "../components/learn/VideoScreen";
import NewsPostScreen from "../home/NewsPostScreen";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
};

const TabNavigator = (navigation) => {
  useEffect(() => {
    // Request user permission for push notifications
    requestUserPermission();
    handleForegroundNotification();
    handleBackgroundNotification();

    // Get the device token for push notifications
    getDeviceToken();

    // Handle incoming push notifications
    handleIncomingNotification((remoteMessage) => {
      console.log("Remote message:", remoteMessage);
      // Do something with the remote message
    });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="DrawerNavigatorHome"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FhomeIcon_Active.png?alt=media&token=1a44acea-55f5-4676-9eda-d31f4051cd62",
                  }}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#1267E9" : "grey" },
                  ]}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="News"
          component={NewsPostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FNews_article_icon.png?alt=media&token=4a3c9969-cd67-44ef-884b-298c57d9dae3",
                  }}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#1267E9" : "grey" },
                  ]}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  News
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="New post"
          component={NewPostScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FplusIcon.png?alt=media&token=0708de8d-6ae2-4ce9-adcf-4421c8351b47",
                  }}
                  style={{
                    tintColor: focused ? "#1267E9" : "grey",
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Post
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Videos"
          component={VideoScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FVideoIcon.png?alt=media&token=ec5b432a-fbda-4d57-a558-321054fcf055",
                  }}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#1267E9" : "grey" },
                  ]}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Videos
                </Text>
              </View>
            ),
          }}
        />


        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabIconView}>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
                  }}
                  style={[
                    styles.tabIcon,
                    { tintColor: focused ? "#1267E9" : "grey" },
                  ]}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabIconView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
