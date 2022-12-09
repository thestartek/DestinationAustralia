import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import NotificationScreen from "./notifications/NotificationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "../components/DrawerNavigatior";
import ProfileStack from "./ProfileStack";
import NewPostScreen from "../screens/NewPostScreen";
import LearnScreen from "./learn/LearnScreen";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
};

const TabNavigator = (navigation) => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="DrawerNavigatorHome"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../assets/homeIcon_Active.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={LearnScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../assets/learnIcon.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
                  Learn
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
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../assets/plusIcon.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
                  Post
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../assets/notificationIcon_Active.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
                  Notifications
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
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
