import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  EnglishTestPreparation,
  ExploreAustralia,
  ImportantContacts,
  PrPointsCalculator,
  ScholarshipFinder,
  UniversityFinder,
  UsefulLinks,
  UsefulVideos,
} from "./AllTools";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const ToolsScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <View style={styles.toolsContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headingText}>Useful Tools</Text>
        </View>

        {/* List tools here */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <PrPointsCalculator navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ExploreAustralia navigation={navigation} />
          </View>
          <View style={styles.container}>
            <UniversityFinder navigation={navigation} />
          </View>
          <View style={styles.container}>
            <UsefulLinks navigation={navigation} />
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <ImportantContacts navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ScholarshipFinder navigation={navigation} />
          </View>
          <View style={styles.container}>
            <EnglishTestPreparation navigation={navigation} />
          </View>
          <View style={styles.container}>
            <UsefulVideos navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 15,
    // marginVertical: 20
  },
  toolsContainer: {
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "white",
  },
  headingText: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    fontSize: 22,
  },
  seeMoreText: {
    textAlign: "center",
    color: "#1267E9",
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  innerContainer: {
    // marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    // width: "16%"
  },
  toolsImage: {
    width: 40,
    height: 40,
    tintColor: "#1267E9",
    resizeMode: "contain",
  },
  toolsName: {
    marginTop: 10,
    textAlign: "center",
    // fontSize: 12
    // color: "#1267E9"
  },
});
