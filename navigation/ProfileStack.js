import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../components/profile/ProfileScreen";
import EditProfileScreen from "../components/profile/EditProfileScreen";
import ResetPassScreen from "../components/profile/ResetPassScreen";
import DeleteAccountScreen from "../components/profile/DeleteAccountScreen";
import VerifyAccountScreen from "../components/profile/VerifyAccountScreen";
import LoginStack from "./LoginStack";

const Stack = createNativeStackNavigator();

// const screenOptions = {
//     headerShown: false
// }

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Edit profile" component={EditProfileScreen} />
      <Stack.Screen name="Reset password" component={ResetPassScreen} />
      <Stack.Screen name="Delete account" component={DeleteAccountScreen} />
      <Stack.Screen name="Verify account" component={VerifyAccountScreen} />
      {/* <Stack.Screen name="Login" component={LoginStack} /> */}
    </Stack.Navigator>
  );
}

export default ProfileStack;
