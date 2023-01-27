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
import { AntDesign } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const LearnScreen = ({ navigation }) => {
  return (
    <View>
      <Divider bold={true} />
      <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      <ScrollView>
        <View style={{ margin: 5 }}></View>
        <View style={styles.learnContainer}>
          <Text style={styles.mainHeader}>Learning material for you</Text>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => navigation.push("PTE Academic")}
          >
            <Text style={styles.titleText}>PTE Academic</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => navigation.push("IELTS")}
          >
            <Text style={styles.titleText}>IELTS</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => navigation.push("TOEFL iBT")}
          >
            <Text style={styles.titleText}>TOEFL iBT</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>

          <View style={{ margin: 10 }}></View>
        </View>

        {/* ///////// Videos /////// */}
        <View style={{ margin: 18 }}></View>
        <Divider style={{ height: 8 }} />
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        <View>
          <Text style={styles.mainHeader}>Useful videos for you</Text>
        </View>
        <VideoScreen />
      </ScrollView>
    </View>
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
  learnContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  titleContainer: {
    backgroundColor: "#1267E9",
    padding: 12,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    padding: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
