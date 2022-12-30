import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-paper";
import PTE from "./PTE";
import IELTS from "./IELTS";
import TOEFL from "./TOEFL";
import VideoScreen from "./VideoScreen";

const LearnScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Divider bold={true} />
      <Text style={styles.mainHeader}>Learning material for you</Text>

      <PTE />
      <IELTS />
      <TOEFL />

      {/* ///////// Videos /////// */}
      <View style={{ margin: 18 }}></View>
      <Divider style={{ height: 8 }} />
      <View>
        <Text style={styles.mainHeader}>Useful videos for you</Text>
      </View>
      <VideoScreen />
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
