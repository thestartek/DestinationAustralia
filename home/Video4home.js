import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import React from "react";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../Firebase";
import { ThumbnailImage } from "../components/learn/Video";
import { VideoHeader } from "../components/learn/Video";

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

export default Video4home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    width: width - 40,
    height: 120,
  },
  videoContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    width: "90%",
    // alignItems: 'center'
    // backgroundColor: "lightgrey",
  },
});
