import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunityScreen from "../components/learn/LearnScreen";
import CommentsScreen from "../components/post/CommentsScreen";
import NewPostScreen from "../components/newPost/NewPostScreen";

const Stack = createNativeStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CommunityScreen"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="New post" component={NewPostScreen} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
