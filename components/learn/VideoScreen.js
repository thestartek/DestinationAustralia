import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";
import Video from "./Video";
import { db, auth } from "../../Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const VideoScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "videos")), (snapshot) => {
      setVideos(
        snapshot.docs.map((video) => ({
          id: video.id,
          ...video.data(),
        }))
      );
      if (loading) {
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <ScrollView>
        {/* ///////// Videos /////// */}
        {/* <View style={{ margin: 5 }}></View> */}
        {videos.map((video, index) => (
          <Video video={video} key={index} navigation={navigation} />
        ))}
        <View
          style={{ alignItems: "center", marginBottom: 100, marginTop: 20 }}
        >
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;