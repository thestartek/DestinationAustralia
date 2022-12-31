import { ScrollView, View, Text, Image, StyleSheet, Alert, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../Firebase";

import * as WebBrowser from "expo-web-browser";

const { width } = Dimensions.get("window");

const Video4home = ({ video }) => {
  const user = auth.currentUser;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync(video.videoLink)}
        >
        <ThumbnailImage video={video} />
        </TouchableOpacity>

        <VideoHeader video={video} />
      </View>
    </View>
  );
};

const VideoHeader = ({ video }) => (
  <View style={{ margin: 10, maxHeight: 80 }}>
    <TouchableOpacity
      onPress={() => WebBrowser.openBrowserAsync(video.videoLink)}
    >
      <Text style={styles.titleText}>{video.title}</Text>
    </TouchableOpacity>

    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => WebBrowser.openBrowserAsync(video.channelLink)}
      >
        <Text style={styles.timstampText}>{video.channelName}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ThumbnailImage = ({ video }) => (
  <View>
    {video.thumbnail ? (
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnailImage} />
    ) : (
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/JourneytoAustralia_colored.png?alt=media&token=b3fabee8-8a76-41ad-adec-250b21c6fd76",
        }}
        style={styles.thumbnailImage}
      />
    )}
    {/* <Image source={{ uri: video.thumbnail }} style={styles.thumbnailImage} /> */}
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FplayButtonIcon.png?alt=media&token=1d40a234-b110-436b-8c5d-db993c852b55",
      }}
      style={styles.playButton}
    />
  </View>
);

export default Video4home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    width: width -40,
    height: 110
  },
  videoContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    // alignItems: 'center'
    // backgroundColor: "lightgrey",
  },
  thumbnailImage: {
    height: 90,
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
    opacity: 0.5,
    tintColor: "black",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1267E9",
    maxWidth: width -170,
  },
  timstampText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    color: "#545050",
  },
});
