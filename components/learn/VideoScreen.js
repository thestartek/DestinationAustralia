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
import { Divider } from "react-native-paper";

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
    <ScrollView>
      {/* <Divider bold={true} /> */}

      {/* ///////// Videos /////// */}
      <View style={{ margin: 5 }}></View>
      <View>
      </View>
      {videos.map((video, index) => (
        <Video video={video} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 26,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#1267E9",
    padding: 12,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    padding: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentHeading: { fontSize: 16, marginTop: 10, marginBottom: 5 },
  contentText: { margin: 5, color: "#545050" },
  moreButton: {
    // backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    // marginVertical: 5,
  },
  videoContent: {
    marginHorizontal: 15,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
  },
});
