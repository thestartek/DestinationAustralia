import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Collapsible from "react-native-collapsible";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const Age = () => {
  return (
    <View>
      <Text>Age related content goes here</Text>
    </View>
  );
};

const PrPointsCalculatorScreen = ({ navigation }) => {
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
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.contentHeading}>Select visa subclass</Text>
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => navigation.push("Subclass 189")}
            >
              <Text style={styles.titleText}>
                Skilled Independent Visa (Subclass 189)
              </Text>

              <AntDesign name="rightcircleo" size={18} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => navigation.push("Subclass 190")}
            >
              <Text style={styles.titleText}>
                Skilled Nominated Visa (Subclass 190)
              </Text>

              <AntDesign name="rightcircleo" size={18} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => navigation.push("Subclass 491")}
            >
              <Text style={styles.titleText}>
                Skilled Work Regional Visa (Subclass 491)
              </Text>

              <AntDesign name="rightcircleo" size={18} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => navigation.push("Subclass 489")}
            >
              <Text style={styles.titleText}>
                Skilled Regional Visa (Subclass 489)
              </Text>

              <AntDesign name="rightcircleo" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 100 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
      </ScrollView>
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
  titleContainer: {
    backgroundColor: "#1267E9",
    padding: 8,
    // marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    // padding: 2,
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
  contentHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  contentText: {
    lineHeight: 24,
  },
});
