import { View, StyleSheet } from "react-native";
import React from "react";
import {
  EnglishTestPreparation,
  ExpenseEstimator,
  ExploreAustralia,
  ImportantContacts,
  PrPointsCalculator,
  ScholarshipFinder,
  UniversityFinder,
  UsefulLinks,
  UsefulVideos,
} from "../components/tools/AllTools";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const Tools4Home = ({ navigation }) => {
  return (
    <View>
      <View style={styles.toolsContainer}>
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

        <View style={{ alignItems: "center" }}>
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

export default Tools4Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
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
});
