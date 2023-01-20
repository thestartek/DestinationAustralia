import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import { Divider } from "react-native-paper";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../Firebase";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { CommentButton, LikeButton, PostHeader } from "../components/post/Post";
//import { color } from "react-native-reanimated";

const Post4home = ({ post, navigation }) => {
  const user = auth.currentUser;
  // const thumbnailPic = (
  //   <Image source={require("../../assets/profileIcon.png")} />
  // );

  const handleLike = (post) => {
    const currentLikeStatus = !post.likes.includes(user.email);
    updateDoc(doc(db, "posts", post.id), {
      likes: currentLikeStatus
        ? arrayUnion(user.email)
        : arrayRemove(user.email),
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push("Posts")}>
        <PostHeader post={post} />
        <Caption post={post} /> 
      </TouchableOpacity>

      <Divider bold={true} style={{ marginHorizontal: 10, marginTop: 8 }} />
      <View style={styles.postFooterContainer}>
        <LikeButton post={post} handleLike={handleLike} />
        {/* <Divider /> */}
        <CommentButton post={post} navigation={navigation} />
      </View>
      <Divider bold={true} style={{ marginHorizontal: 10 }} />
    </View>
  );
};


const Caption = ({ post }) => (
  <Text
    style={{
      marginHorizontal: 14,
      maxWidth: 150,
      height: 60,
      lineHeight: 20,
    }}
  >
    {post.caption}
  </Text>
);

export default Post4home;

const styles = StyleSheet.create({
  postFooterContainer: {
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
    marginVertical: 5,
  },

});
