import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../components/login/RegisterScreen";
import LoginScreen from "../components/login/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import ResetPasswordScreen from "../components/login/ResetPasswordScreen";
import PrivacyPolicy from "../components/drawer/PrivacyPolicy";
import SignupScreen from "../components/login/SignupScreen";

const Stack = createNativeStackNavigator();

// const screenOptions = {
//     headerShown: false
// }

function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign up"
        //screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Reset password" component={ResetPasswordScreen} />
        <Stack.Screen name="Privacy policy" component={PrivacyPolicy} />
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Edit profile" component={EditProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginStack;
