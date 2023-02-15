import React, { useEffect, useState, createContext } from "react";
import TabNavigator from "./TabNavigator";
import LoginStack from "./LoginStack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";
import { ActivityIndicator, View, Image } from "react-native";

const LoginContex = createContext();

const LoadingIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1267E9",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/appIcon_transparent.png")}
        style={{ width: 140, height: 140 }}
      />
      <ActivityIndicator
        color="white"
        size="large"
        style={{ color: "white", size: "large" }}
      />
    </View>
  );
};

const AuthNavigation = ({ Children }) => {
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const useHandler = (user) => {
    user
      ? [setCurrentUser(user), setLoading(false)]
      : [setCurrentUser(null), setLoading(false)];
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => useHandler(user));
  }, []);

  return loading ? (
    <LoadingIndicator />
  ) : currentUser ? (
    <TabNavigator />
  ) : (
    <LoginStack />
  );

  // <LoginContex.Provider value={{loggedIn, setLoggedIn}}>
  //     {Children}
  // </LoginContex.Provider>
};

export default AuthNavigation;
