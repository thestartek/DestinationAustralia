import { View, ScrollView } from "react-native";
import React from "react";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Tools4Home from "../../home/Tools4Home";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const ToolsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>

      <Tools4Home navigation={navigation} />

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
    </ScrollView>
  );
};

export default ToolsScreen;
