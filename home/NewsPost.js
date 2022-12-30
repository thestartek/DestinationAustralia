import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../Firebase";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment
} from "firebase/firestore";

import * as WebBrowser from "expo-web-browser";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const NewsPost = ({ newspost, navigation }) => {
  const user = auth.currentUser;
  // const thumbnailPic = (
  //   <Image source={require("../../assets/profileIcon.png")} />
  // );

  const handleLike = (newspost) => {
    const currentLikeStatus = !newspost.likes.includes(user.email);
    updateDoc(doc(db, "newsposts", newspost.id), {
      likes: currentLikeStatus
        ? arrayUnion(user.email)
        : arrayRemove(user.email),
    });
  };

  return (
    <View style={styles.newsContainer}>
      {/* <TouchableOpacity
        onPress={() => WebBrowser.openBrowserAsync(newspost.link)}
      > */}
      <View style={{ margin: 5 }}>
        {newspost.image != null ? <NewsImage newspost={newspost} /> : null}
      </View>
      {/* </TouchableOpacity> */}
      <NewsHeader newspost={newspost} />
      {newspost.abstract != null ? <Caption newspost={newspost} /> : null}

      {/* {newspost.imageUrl != null ? <PostImage newspost={newspost} /> : <Divider />} */}

      <View style={styles.postFooterContainer}>
        <LikeButton newspost={newspost} handleLike={handleLike} />
        <ShareButton newspost={newspost} />
      </View>
      {/* const CommentInput  */}
      <Divider bold={true} />
    </View>
  );
};

const NewsHeader = ({ newspost }) => (
  <View style={{ marginHorizontal: 10 }}>
    <TouchableOpacity
      onPress={() => WebBrowser.openBrowserAsync(newspost.link)}
    >
      <Text
        style={{
          // marginLeft: 5,
          // marginTop: 4,
          fontWeight: "bold",
          fontSize: 18,
          color: "#1267E9",
        }}
      >
        {newspost.title}
      </Text>
    </TouchableOpacity>

    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={styles.timstampText}>{newspost.media}</Text>
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FdotIcon.png?alt=media&token=68370fe8-e55e-41ff-8a19-eda08ca7016d",
        }}
        style={{ width: 20, height: 20, tintColor: "grey" }}
      />
      <Text style={styles.timstampText}>{newspost.date}</Text>
    </View>
  </View>
);

const Caption = ({ newspost }) => (
  <View>
    <Text
      style={{
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 15,
        lineHeight: 20,
      }}
    >
      {newspost.abstract}
    </Text>
  </View>
);

const NewsImage = ({ newspost }) => (
  <TouchableWithoutFeedback
    onPress={() => WebBrowser.openBrowserAsync(newspost.link)}
  >
    <Image
      source={{ uri: newspost.image }}
      style={{
        height: 200,
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
      }}
    />
  </TouchableWithoutFeedback>
);

const LikeButton = ({ newspost, handleLike, focused }) => {
  // onLiked = post.liked ? "like1" : "like2";
  const onLikedColor = newspost.likes.includes(auth.currentUser.email)
    ? "#1267E9"
    : "#545050";

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          handleLike(newspost);
        }}
      >
        {newspost.likes.includes(auth.currentUser.email) ? (
          <AntDesign name="like1" size={25} color="#1267E9" />
        ) : (
          <AntDesign name="like2" size={25} color="#545050" />
        )}
        {/* <AntDesign name={onLiked} size={25} color={onLikedColor} /> */}
        {/* <AntDesign name={onLiked} size={25} style={styles.buttonStyle} /> */}

        {!!newspost.likes.length && (
          <Text style={[styles.postFooterIconsText, { color: onLikedColor }]}>
            {newspost.likes.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ShareButton = ({ newspost }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Journey to Australia:" +
          "\n" +
          "Recent news form " +
          newspost.media +
          ": " +
          newspost.title,
        // url: newspost.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          updateDoc(
            doc(db, "newsposts", newspost.id),
            {
              shares: increment(1),
              // shares: arrayUnion(auth.currentUser.email + "; " + new Date()),
            },
            { merge: true }
          );
          Alert.alert("Shared successfully");
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

        {!!newspost.shares && (
          <Text style={styles.postFooterIconsText}>{newspost.shares}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default NewsPost;

const styles = StyleSheet.create({
  newsContainer: {
    // borderRadius: 10,
    // marginVertical: 4,
    backgroundColor: "white",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profileThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 22,
    tintColor: "grey",
  },
  timstampText: {
    // marginLeft: 5,
    marginTop: 2,
    fontSize: 14,
    color: "#545050",
  },

  postFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginBottom: 20,
    // width: "80%"
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
});
