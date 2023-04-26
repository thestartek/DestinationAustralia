import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const LearnScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      <ScrollView>
        <View style={styles.learnContainer}>
          <TouchableOpacity
            style={[styles.titleContainer, { backgroundColor: "#00afaf" }]}
            onPress={() => navigation.push("PTE Academic")}
          >
            <Text style={styles.titleText}>PTE Academic</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.titleContainer, { backgroundColor: "#bf0a30" }]}
            onPress={() => navigation.push("IELTS")}
          >
            <Text style={styles.titleText}>IELTS</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => navigation.push("TOEFL iBT")}
          >
            <Text style={styles.titleText}>TOEFL iBT</Text>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>

          <View style={{ margin: 10 }}></View>
        </View>
        <View style={{ alignItems: "center", marginTop: 50, marginBottom: 150 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  learnContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  titleContainer: {
    backgroundColor: "#1267E9",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    // padding: 2,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
});
