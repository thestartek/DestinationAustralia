import "react-native-gesture-handler";
import React from "react";
import AuthNavigation from "./navigation/AuthNavigation";
import LoginStack from "./navigation/LoginStack";

export default function App() {
  // return <LoginStack />
  return <AuthNavigation />;
}
