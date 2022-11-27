import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import CommunityScreen from "../screens/CommunityScreen";
import DonateScreen from "../screens/DonateScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "../components/DrawerNavigatior";
import ProfileStack from "./ProfileStack";
import NewPostScreen from "../screens/NewPostScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommunityStack from "./CommunityStack";

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
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityStack}
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
                  source={require("../assets/commentIcon_Active.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>
                  Community
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Tools"
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
                  source={require("../assets/classifiedIcon_Active.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>Tools</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Support"
          component={DonateScreen}
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
                  source={require("../assets/donateIcon_Active.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>Support</Text>
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
                  source={require("../assets/profileIcon.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#1267E9" : "grey",
                  }}
                />
                <Text style={{ color: focused ? "#1267E9" : "grey" }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
