import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const textLink = (name, link) => {
  return (
    <Text
      style={styles.linkText}
      onPress={() => WebBrowser.openBrowserAsync(link)}
    >
      {name}
    </Text>
  );
};

const BeforeComingAus = ({ navigation }) => {
  const appLink = (name, page) => {
    return (
      <Text style={styles.linkText} onPress={() => navigation.push(page)}>
        {name}
      </Text>
    );
  };
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <ScrollView style={styles.container}>
        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Fman-at-airport-with-suitcase.webp?alt=media&token=11901552-09fd-41ca-a907-d9c49a0b5ec1",
            }}
          />

          <Text style={styles.text}>
            There are several things to consider before coming to Australia.
            Some of the main things to consider are:
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Accommodation{"\n"}
            </Text>
            Research different{" "}
            {appLink("options for accomodation", "Finding a rental place")},
            such as student housing, homestays, or renting an apartment.
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Cost of living{"\n"}
            </Text>
            Consider the cost of living in Australia, including expenses for
            things like food, transportation, and healthcare.
          </Text>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.push("Expense Estimator")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Calculate cost of living</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Climate{"\n"}
            </Text>
            Be aware of the weather in the area where you will be living, as it
            can vary greatly depending on the region.
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Cultural differences{"\n"}
            </Text>
            Be aware of cultural differences and customs in Australia, as well
            as any cultural or language barriers you may encounter.
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Employment{"\n"}
            </Text>
            If you plan to work while in Australia, research the job market and
            understand the laws and regulations related to working in the
            country.
          </Text>
          <View style={{ alignItems: "center" }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
          </View>
          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Transport{"\n"}
            </Text>
            Research the different transportation options available in the area
            where you will be living, including the availability of public
            transport.
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Safety{"\n"}
            </Text>
            Research the safety of the area where you will be living, and
            familiarize yourself with emergency procedures and contact
            information.
          </Text>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}Legal requirements{"\n"}
            </Text>
            Familiarize yourself with the legal requirements for international
            students, such as visa conditions, and understand the rights and
            responsibilities of living in Australia.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
      </ScrollView>
    </View>
  );
};

export default BeforeComingAus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 200,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    lineHeight: 28,
    padding: 10,
    fontSize: 17,
  },
  boldText: {
    lineHeight: 28,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    lineHeight: 28,
    padding: 10,
    fontSize: 18,
    color: "#1267E9",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#1267E9",
    width: "60%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
