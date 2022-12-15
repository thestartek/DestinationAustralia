import { View, Text, Button } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
// import { Button } from "react-native-paper";

const PrPointsCalculator = ({ navigation }) => {
  return (
    <View style={{alignItems: 'center', margin: 10}}>
      <Text style={{fontSize: 16}}>Calculate your points for Permanent residency application: </Text>
      <Button
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://immi.homeaffairs.gov.au/help-support/tools/points-calculator"
          )
        }
        title="Start here"
        // color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default PrPointsCalculator;
