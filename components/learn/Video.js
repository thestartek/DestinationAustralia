import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../../Firebase";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  onSnapshot,
  increment,
} from "firebase/firestore";

import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";

const Video = ({ video }) => {
  const user = auth.currentUser;

  const handleLike = (video) => {
    const currentLikeStatus = !video.likes.includes(user.email);
    updateDoc(doc(db, "videos", video.id), {
      likes: currentLikeStatus
        ? arrayUnion(user.email)
        : arrayRemove(user.email),
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync(video.videoLink)}
        >
          {video.thumbnail != null ? <ThumbnailImage video={video} /> : null}
        </TouchableOpacity>

        <VideoHeader video={video} />
      </View>

      <View style={styles.postFooterContainer}>
        <LikeButton video={video} handleLike={handleLike} />
        <ShareButton video={video} />
      </View>
    </View>
  );
};

const VideoHeader = ({ video }) => (
  <View style={{ margin: 10 }}>
    <TouchableOpacity
      onPress={() => WebBrowser.openBrowserAsync(video.videoLink)}
    >
      <Text style={styles.titleText}>{video.title}</Text>
    </TouchableOpacity>

    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(video.channelLink)}>
        <Text style={styles.timstampText}>{video.channel}</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FdotIcon.png?alt=media&token=68370fe8-e55e-41ff-8a19-eda08ca7016d",
        }}
        style={{ width: 20, height: 20, tintColor: "grey" }}
      />
      <Text style={styles.timstampText}>{video.date}</Text>
    </View>
  </View>
);

const ThumbnailImage = ({ video }) => (
  <View>
    <Image source={{ uri: video.thumbnail }} style={styles.thumbnailImage} />
    <Image
      source={{
        uri: "https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-25.png",
      }}
      style={styles.playButton}
    />
  </View>
);

const LikeButton = ({ video, handleLike, focused }) => {
  // onLiked = post.liked ? "like1" : "like2";
  const onLikedColor = video.likes.includes(auth.currentUser.email)
    ? "#1267E9"
    : "#545050";

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          handleLike(video);
        }}
      >
        {video.likes.includes(auth.currentUser.email) ? (
          <AntDesign name="like1" size={25} color="#1267E9" />
        ) : (
          <AntDesign name="like2" size={25} color="#545050" />
        )}

        {!!video.likes.length && (
          <Text style={[styles.postFooterIconsText, { color: onLikedColor }]}>
            {video.likes.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ShareButton = ({ video }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Recent video form " +
          video.channel +
          " on Journey to Australia App: " +
          video.title,
        url: video.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          updateDoc(
            doc(db, "videos", video.id),
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

        {!!video.shares && (
          <Text style={styles.postFooterIconsText}>{video.shares}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  videoContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    // alignItems: 'center'
    // backgroundColor: "lightgrey",
  },
  thumbnailImage: {
    height: 100,
    width: 100,
    marginVertical: 5,
    borderRadius: 10,
    opacity: 0.9,
  },
  playButton: {
    height: 50,
    width: 50,
    marginTop: -80,
    marginLeft: 25,
    opacity: 0.6,
    tintColor: "black",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1267E9",
    maxWidth: "90%",
  },
  timstampText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: "#545050",
  },

  postFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginVertical: 15,
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
