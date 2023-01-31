import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.push("Edit profile")}
        >
          <View style={styles.settingBlock}>
            <Text style={styles.textStyle}>Edit profile</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <Divider bold={true} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.push("Reset password")}
        >
          <View style={styles.settingBlock}>
            <Text style={styles.textStyle}>Reset password</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <Divider bold={true} style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.push("Delete account")}
        >
          <View style={styles.settingBlock}>
            <Text style={[styles.textStyle, { color: "red" }]}>
              Delete account
            </Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="red" />
          </View>

          <Divider
            bold={true}
            style={{ marginHorizontal: 10, marginBottom: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
      </View>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  outerContainer: {},
  innerContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  settingBlock: {
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 18,
    // fontWeight: "bold",
  },
});
