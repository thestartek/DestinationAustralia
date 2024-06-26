import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProfileScreen from "../components/profile/ProfileScreen";
import EditProfileScreen from "../components/profile/EditProfileScreen";
import ResetPasswordScreen from "../components/login/ResetPasswordScreen";
import DeleteAccountScreen from "../components/profile/DeleteAccountScreen";
import VerifyAccountScreen from "../components/profile/VerifyAccountScreen";
import SettingsScreen from "../components/profile/SettingsScreen";
import UserProfile from "../components/profile/UserProfile";

const Stack = createNativeStackNavigator();

// const screenOptions = {
//     headerShown: false
// }

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Your profile"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Your profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Edit profile" component={EditProfileScreen} />
      <Stack.Screen name="Reset password" component={ResetPasswordScreen} />
      <Stack.Screen name="Delete account" component={DeleteAccountScreen} />
      <Stack.Screen name="Verify account" component={VerifyAccountScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
