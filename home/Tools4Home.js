import { View, StyleSheet, Text } from "react-native";
import React from "react";
import {
  EnglishTestPreparation,
  ExploreAustralia,
  ImportantContacts,
  PrPointsCalculator,
  ResumeBuilder,
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
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.headingText}>Useful Tools</Text>
        </View>
        {/* List tools here */}
        <View style={styles.innerContainer}>
          <PrPointsCalculator navigation={navigation} />
          <ExploreAustralia navigation={navigation} />
          <UniversityFinder navigation={navigation} />
          {/* <UsefulLinks navigation={navigation} /> */}
          <EnglishTestPreparation navigation={navigation} />
        </View>

        {/* <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>

        <View style={styles.innerContainer}>
          <ImportantContacts navigation={navigation} />
          <ScholarshipFinder navigation={navigation} />
          <EnglishTestPreparation navigation={navigation} />
          <ResumeBuilder navigation={navigation}/>
        </View> */}
        <View style={{ height: 20 }}></View>
      </View>
    </View>
  );
};

export default Tools4Home;

const styles = StyleSheet.create({
  toolsContainer: {
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "white",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headingText: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
});
