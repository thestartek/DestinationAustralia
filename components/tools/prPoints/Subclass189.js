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
import { Divider } from "react-native-paper";
// import YoutubePlayer from "react-native-youtube-iframe";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { Age, EnglishLanguage } from "./PoinsTable";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const Subclass189 = () => {
  return (
    <ScrollView>
      <Text style={styles.headingText}>
        Check your points for Skilled Independent visa
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <Age />
      <EnglishLanguage />
    </ScrollView>
  );
};

export default Subclass189;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
