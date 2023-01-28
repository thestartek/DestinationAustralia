import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
// import { Button } from "react-native-paper";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const PrPointsCalculatorScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <Text style={{ fontSize: 26, margin: 20 }}>
          Calculate your points for Permanent residency application:{" "}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://immi.homeaffairs.gov.au/help-support/tools/points-calculator"
            )
          }
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Start here
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
      </View>
    </View>
  );
};

export default PrPointsCalculatorScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 60,
  },
});
