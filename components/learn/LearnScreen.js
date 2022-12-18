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
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { Divider } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import YoutubePlayer from "react-native-youtube-iframe";
import PTE from "./PTE";

const LearnScreen = ({ navigation }) => {
  const [collapsePTE, setCollapsePTE] = useState(true);
  const [collapseP1, setCollapseP1] = useState(true);
  const [collapseP11, setCollapseP11] = useState(true);
  const [collapseP12, setCollapseP12] = useState(true);
  const [collapseP13, setCollapseP13] = useState(true);
  const [collapseP14, setCollapseP14] = useState(true);
  const [collapseP15, setCollapseP15] = useState(true);
  const [collapseP16, setCollapseP16] = useState(true);
  const [collapseP17, setCollapseP17] = useState(true);

  const [collapseP2, setCollapseP2] = useState(true);
  const [collapseP3, setCollapseP3] = useState(true);

  const [collapseIELTS, setCollapseIELTS] = useState(true);
  const [collapseTOEFL, setCollapseTOEFL] = useState(true);

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
      <Divider bold={true} />
      <Text style={styles.mainHeader}>Learning material for you</Text>

      <PTE />
      {/* ///////// IELTS Collapsible //////////// */}
      <TouchableOpacity
        onPress={() => [
          setCollapsePTE(true),
          setCollapseIELTS(!collapseIELTS),
          setCollapseTOEFL(true),
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>IELTS</Text>
          {collapseIELTS ? (
            <AntDesign name="downcircleo" size={20} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={collapseIELTS} align="center">
        <View style={styles.content}>
          <Text style={styles.contentText}>
            This is a dummy text of Single Collapsible View jkdhr hskfha haf
            ajhfa ahfkjah afhksfha fhshf asfh hfjkhaf skhz fiah fkahfji hzkh fz
          </Text>
        </View>
      </Collapsible>

      {/* ///////// TOEFL Collapsible //////////// */}
      <TouchableOpacity
        onPress={() => [
          setCollapsePTE(true),
          setCollapseIELTS(true),
          setCollapseTOEFL(!collapseTOEFL),
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>TOEFL</Text>
          {collapseTOEFL ? (
            <AntDesign name="downcircleo" size={20} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={collapseTOEFL} align="center">
        <View style={styles.content}>
          <Text style={styles.contentText}>
            This is a dummy text of Single Collapsible View jkdhr hskfha haf
            ajhfa ahfkjah afhksfha fhshf asfh hfjkhaf skhz fiah fkahfji hzkh fz
          </Text>
        </View>
      </Collapsible>

      {/* ///////// Videos /////// */}
      <View style={{ margin: 18 }}></View>
      <Divider style={{ height: 8 }} />
      <View>
        <Text style={styles.mainHeader}>Useful videos for you</Text>
      </View>
      {videos.map((video, index) => (
        <Video video={video} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default LearnScreen;

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
