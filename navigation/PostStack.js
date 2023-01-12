import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPostScreen from "../components/newPost/NewPostScreen";
import PostScreen from "../components/post/PostsScreen";
import Comments from "../components/post/Comments";
import Post from "../components/post/Post";

const Stack = createNativeStackNavigator();

const PostStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      //screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Post" component={Post} /> */}
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="New post" component={NewPostScreen} />
    </Stack.Navigator>
  );
};

export default PostStack;
