import { View, Text, Image } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import DonateScreen from "./drawer/DonateScreen";
import AboutusScreen from "./drawer/AboutusScreen";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const MenuButton = () => {
  return (
    <Image
      style={{ height: 40, width: 30 }}
      source={require("../assets/menuBar.png")}
    />
  );
};

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
      <Drawer.Screen name="Donate" component={DonateScreen} />
      <Drawer.Screen name="About us" component={AboutusScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatior;
