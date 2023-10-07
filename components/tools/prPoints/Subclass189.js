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
import {
  Age,
  AusStudy,
  AustralianEmployment,
  Education,
  EnglishLanguage,
  Naati,
  OverseasEmployment,
  PartnerSkills,
  ProfYear,
  RegionalStudy,
  Result,
  SpecEdu,
} from "./PoinsTable";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const Subclass189 = () => {
  const [pointsAge, setPointsAge] = useState(0);

  return (
    <ScrollView>
      <Text style={styles.headingText}>
        Check your points for Skilled Independent visa
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <Age  setPointsAge={setPointsAge}/>
      <EnglishLanguage />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <OverseasEmployment />
      <AustralianEmployment />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <Education />
      <SpecEdu />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
      </View>
      <AusStudy />
      <RegionalStudy />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <ProfYear />
      <Naati />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <PartnerSkills />
    {/* Calculate now */}
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <Result pointsAge={pointsAge}/>
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
