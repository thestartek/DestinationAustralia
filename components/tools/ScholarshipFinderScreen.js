import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
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
  
  const ScholarshipFinderScreen = ({ navigation }) => {
    return (
      <View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>
        <ScrollView
          style={{
            marginHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 8,
          }}
        >
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
  
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default ScholarshipFinderScreen;
  
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
  