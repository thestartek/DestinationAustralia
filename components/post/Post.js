import { ScrollView, View, Text, Image, StyleSheet, Alert, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider } from "react-native-paper";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../../Firebase";

import { AntDesign, Feather } from "@expo/vector-icons";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";
import Comments from "./Comments";
import AddComment from "./AddComment";
import CommentModal from "./CommentModal";
//import { color } from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width

const Post = ({ post, navigation }) => {

  const user = auth.currentUser;
  // const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
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
    <View style={styles.postContainer}>
      <PostHeader post={post} />
      {/* <Text style={styles.timstampText}>{post.postedDate}</Text> */}
      {post.caption != null ? <Caption post={post} /> : null}
      {/* {post.imageUrl != null ? <PostImage post={post} /> : <Divider />} */}

      <View style={styles.postFooterContainer}>
        <LikeButton post={post} handleLike={handleLike} />
        <Divider />
        {/* <CommentModal post={post} /> */}
        <CommentButton post={post} navigation={navigation} />
        <Divider />
        <ShareButton post={post} />
      </View>
      <Divider bold={true} />
    <ScrollView nestedScrollEnabled = {true} style={{maxHeight: 250}}>
    <Comments post={post} />
    </ScrollView>
      
      <AddComment post={post} />
      <Divider style={{ height: 6 }} />
    </View>
  );
};

export const PostHeader = ({ post }) => {
  return (
    <View
      style={{ flexDirection: "row", marginVertical: 10, marginHorizontal: 10 }}
    >
      <TouchableOpacity>
        {!post.profile_picture ? (
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
            }}
            style={styles.profileThumbnail}
          />
        ) : (
          <Image
            source={{ uri: post.profile_picture }}
            style={styles.profile}
          />
        )}
        {/* where post.user == user.email*/}
      </TouchableOpacity>

      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 4,
              fontWeight: "bold",
              fontSize: 15,
              color: "#1267E9",
            }}
          >
            {post.fullname}
          </Text>
        </TouchableOpacity>
        <Text style={styles.timstampText}>{post.postedDate}</Text>
      </View>
    </View>
  );
};

export const Caption = ({ post }) => (
  <Text style={{ marginHorizontal: 20, marginBottom: 10, lineHeight: 20, maxWidth: windowWidth - 30 }}>
    {post.caption}
  </Text>
);

// const PostImage = ({ post }) => (
//   <View style={{ width: "100%", maxHeight: 300 }}>
//     <Image
//       source={{ uri: post.imageUrl }}
//       style={{ height: "100%", resizeMode: "cover" }}
//     />
//   </View>
// );

// const onLiked=(post) => (post.liked ?
// <AntDesign name={onLiked} size={25} style={styles.buttonStyle} /> :
// <AntDesign name={onLiked} size={25} style={styles.buttonStyle} />);

export const LikeButton = ({ post, handleLike, focused }) => {
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

export const CommentButton = ({ post, postId, navigation }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.push("Comments")}
        style={{ flexDirection: "row" }}
      >
        <CommentModal post={post} />
        {/* <FontAwesome name="commenting-o" size={25} color="#545050" /> */}

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

export const ShareButton = ({ post }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Journey to Australia Mobile App: " +
          "\n" +
          post.fullname +
          "'s" +
          " Post: " +
          post.caption,
        // url: "https://starteknp.com/journeytoaustralia",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          updateDoc(doc(db, "posts", post.id), {
            shares: increment(1),
            // shares: arrayUnion(auth.currentUser.email + "; " + new Date()),
          });
          Alert.alert("Shared successful");
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        //alert("Sharing cancelled")
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onShare} style={{ flexDirection: "row" }}>
        <Feather name="share" size={24} color="#545050" />
        {!!post.shares && (
          <Text style={styles.postFooterIconsText}>{post.shares}</Text>
        )}

        {/* {!!post.shares.length && (
          <Text style={styles.postFooterIconsText}>{post.shares.length}</Text>
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "white",
    marginVertical: 4,
    // borderBottomLeftRadius: 8,
    // borderBottomRightRadius: 8
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // tintColor: "#3a3b3c",
  },
  profileThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    tintColor: "grey",
  },
  timstampText: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    color: "#545050",
  },

  postFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginVertical: 10,
  },

  postFooterIcons: {
    height: 25,
    width: 25,
    //tintColor: "grey",
  },

  postFooterIconsText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 5,
    color: "#545050",
  },

  // buttonStyle: (focused) => ({
  //   tintColor: focused ? "red" : "grey",
  // }),

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
