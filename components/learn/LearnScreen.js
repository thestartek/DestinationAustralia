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

const LearnScreen = ({ navigation }) => {
  const [collapsePTE, setCollapsePTE] = useState(true);
  const [collapseIELTS, setCollapseIELTS] = useState(true);
  const [collapseTOEFL, setCollapseTOEFL] = useState(true);

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "videos"), orderBy("date", "desc")),
      (snapshot) => {
        setVideos(
          snapshot.docs.map((video) => ({
            id: video.id,
            ...video.data(),
          }))
        );
        if (loading) {
          setLoading(false);
        }
      }
    );
    return unsub;
  }, []);

  return (
    <ScrollView>
      <Text style={styles.mainHeader}>
        Learning material for you
      </Text>
      {/* ///////PTE Collapsible //////////*/}
      <TouchableOpacity onPress={() => setCollapsePTE(!collapsePTE)}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Pearson test of English (PTE)</Text>
          {collapsePTE ? (
            <AntDesign name="downcircleo" size={20} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      <Collapsible collapsed={collapsePTE} align="center">
        <View style={styles.content}>
          <Text style={styles.contentText}>
            This is a dummy text of Single Collapsible View jkdhr hskfha haf
            ajhfa ahfkjah afhksfha fhshf asfh hfjkhaf skhz fiah fkahfji hzkh fz
          </Text>
        </View>
      </Collapsible>
      {/* ///////// IELTS Collapsible //////////// */}
      <TouchableOpacity onPress={() => setCollapseIELTS(!collapseIELTS)}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            The International English Language Testing System (IELTS)
          </Text>
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
      <TouchableOpacity onPress={() => setCollapseTOEFL(!collapseTOEFL)}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Test of English as a Foreign Language (TOEFL)
          </Text>
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
      <View>
        <Text style={[styles.mainHeader, {marginBottom: 10}]}>Useful videos for you</Text>
      </View>
      {videos.map((video, index) => (
        <Video video={video} key={index} navigation={navigation} />
      ))}
      <View></View>
    </ScrollView>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1267E9",
    padding: 12,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainHeader: {
    fontSize: 26,
    marginHorizontal: 20,
    marginTop: 20,
    // marginBottom: 10,
  },
  headerText: {
    // textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
  },
  contentText: {},
  videoContent: {
    marginHorizontal: 15,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
  },
});
