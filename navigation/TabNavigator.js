import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./DrawerNavigatior";
import ProfileStack from "./ProfileStack";
import NewPostScreen from "../components/newPost/NewPostScreen";
import LearnScreen from "../components/learn/LearnScreen";
import PostStack from "./PostStack";

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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FhomeIcon_Active.png?alt=media&token=1a44acea-55f5-4676-9eda-d31f4051cd62",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
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
          name="Posts"
          component={PostStack}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FcommentIcon_Active.png?alt=media&token=f560024d-a9ed-4917-8473-4bc1bbe5ade7",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Community
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FplusIcon.png?alt=media&token=0708de8d-6ae2-4ce9-adcf-4421c8351b47",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FlearnIcon.png?alt=media&token=758a9d79-0c98-440f-922d-9309c64c57df",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Learn
                </Text>
              </View>
            ),
          }}
        />

        {/* <Tab.Screen
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FnotificationIcon_Active.png?alt=media&token=98374cc5-0a7d-461b-a826-a3cacc0a2b6c",
                  }}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text
                  style={{ color: focused ? "#1267E9" : "grey", fontSize: 12 }}
                >
                  Notifications
                </Text>
              </View>
            ),
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            // headerShown: false,
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
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
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
