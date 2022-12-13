import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
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
import CommentModal from "../components/post/CommentModal";
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
      <PostHeader post={post} />
      {post.caption != null ? <Caption post={post} /> : null}
      <Divider bold={true} style={{ marginHorizontal: 10 }} />
      <View style={styles.postFooterContainer}>
        <LikeButton post={post} handleLike={handleLike} />
        {/* <Divider /> */}
        <CommentButton post={post} navigation={navigation} />
      </View>
      <Divider bold={true} style={{ marginHorizontal: 10 }} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const user = post.user;

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(doc(db, "users", user), (doc) => {
      setCurrentLoggedInUser({
        fullname: doc.data().fullname,
        profile_picture: doc.data().profile_picture,
      });
    });
    return unsubscribe;
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <View
      style={{ flexDirection: "row", marginVertical: 10, marginHorizontal: 10 }}
    >
      <TouchableOpacity>
        {!currentLoggedInUser.profile_picture ? (
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
            }}
            style={styles.profileThumbnail}
          />
        ) : (
          <Image
            source={{ uri: currentLoggedInUser.profile_picture }}
            style={styles.profile}
          />
        )}
        {/* where post.user == user.email*/}
      </TouchableOpacity>

      <View style={{ flexDirection: "column", height: 50 }}>
        <TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 10,
              marginTop: 4,
              fontWeight: "bold",
              fontSize: 15,
              color: "#1267E9",
              maxWidth: 150,
              // maxHeight: 50
            }}
          >
            {currentLoggedInUser.fullname}
          </Text>
        </TouchableOpacity>
        <Text style={styles.timstampText}>{post.postedDate}</Text>
      </View>
    </View>
  );
};

const Caption = ({ post }) => (
  <Text
    style={{
      marginLeft: 14,
      // marginBottom: -20,
      maxWidth: 160,
      height: 60,
    }}
  >
    {post.caption}
  </Text>
);

const LikeButton = ({ post, handleLike, focused }) => {
  // onLiked = post.liked ? "like1" : "like2";
  const onLikedColor = post.likes.includes(auth.currentUser.email)
    ? "#1267E9"
    : "#545050";

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          handleLike(post);
        }}
      >
        {post.likes.includes(auth.currentUser.email) ? (
          <AntDesign name="like1" size={25} color="#1267E9" />
        ) : (
          <AntDesign name="like2" size={25} color="#545050" />
        )}
        {/* <AntDesign name={onLiked} size={25} color={onLikedColor} /> */}
        {/* <AntDesign name={onLiked} size={25} style={styles.buttonStyle} /> */}

        {!!post.likes.length && (
          <Text style={[styles.postFooterIconsText, { color: onLikedColor }]}>
            {post.likes.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const CommentButton = ({ post, postId, navigation }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push("Posts")}
        style={{ flexDirection: "row" }}
      >
        <CommentModal post={post} />
        {/* <FontAwesome name="commenting-o" size={20} color="#545050" /> */}

        {!!post.comments.length && (
          <Text style={styles.postFooterIconsText}>
            {/* View
            {post.comments.length > 1 ? " all " : " "} */}
            {post.comments.length}
            {/* {post.comments.length > 1 ? " comments" : " comment"} */}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Post4home;

const styles = StyleSheet.create({
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    // tintColor: "#3a3b3c"
  },
  profileThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 22,
    tintColor: "grey",
  },
  timstampText: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    color: "grey",
  },

  postFooterContainer: {
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
    marginVertical: 5,
  },

  postFooterIconsText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 5,
    color: "#545050",
  },
});
