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
      <View style={{ margin: 5 }}></View>
      <View style={styles.learnContainer}>
        <PTE />
        <IELTS />
        <TOEFL />
        <View style={{ margin: 10 }}></View>
      </View>

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
  learnContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
  },
});
