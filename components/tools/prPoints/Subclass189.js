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
  Result189,
  SpecEdu,
} from "./PoinsTable";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const Subclass189 = () => {
  const [pointsAge, setPointsAge] = useState(0);
  const [pointsEng, setPointsEng] = useState(0);
  const [pointsOVemp, setPointsOVemp] = useState(0);
  const [pointsAUemp, setPointsAUemp] = useState(0);
  const [pointsEdu, setPointsEdu] = useState(0);
  const [pointsSepcEdu, setPointsSpecEdu] = useState(0);
  const [pointsAusStudy, setPointsAusStudy] = useState(0);
  const [pointsRegStudy, setPointsRegStudy] = useState(0);
  const [pointsProfYear, setPointsProfYear] = useState(0);
  const [pointsNaati, setPointsNaati] = useState(0);
  const [pointsPartner, setPointsPartner] = useState(0);

  return (
    <ScrollView>
      <Text style={styles.headingText}>
        Check your points for Skilled Independent visa
      </Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <Age  setPointsAge={setPointsAge}/>
      <EnglishLanguage setPointsEng={setPointsEng}/>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <OverseasEmployment setPointsOVemp={setPointsOVemp}/>
      <AustralianEmployment setPointsAUemp={setPointsAUemp}/>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <Education setPointsEdu={setPointsEdu}/>
      <SpecEdu setPointsSpecEdu={setPointsSpecEdu}/>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
      </View>
      <AusStudy setPointsAusStudy={setPointsAusStudy}/>
      <RegionalStudy setPointsRegStudy={setPointsRegStudy}/>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <ProfYear setPointsProfYear={setPointsProfYear}/>
      <Naati setPointsNaati={setPointsNaati}/>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <PartnerSkills setPointsPartner={setPointsPartner}/>
    {/* Calculate now */}
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <Result189 pointsAge={pointsAge} pointsEng={pointsEng} pointsOVemp={pointsOVemp}
      pointsAUemp={pointsAUemp} pointsEdu={pointsEdu} pointsSepcEdu={pointsSepcEdu}
      pointsAusStudy={pointsAusStudy} pointsRegStudy={pointsRegStudy} pointsProfYear={pointsProfYear}
      pointsNaati={pointsNaati} pointsPartner={pointsPartner}/>
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
