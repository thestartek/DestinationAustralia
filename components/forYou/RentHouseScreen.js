import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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

const RentHouseScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2FRentalHome.jpg?alt=media&token=9d165241-64a1-4077-90b9-b4d66d1ea6df",
          }}
        />
        <Text style={styles.text}>
          Finding accommodation in Australia as an international student can be
          a bit challenging, but there are several options available. Some
          popular options include:
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}1. On-campus housing{"\n"}
          </Text>
          On-campus housing: Many universities and colleges in Australia offer
          on-campus housing for international students. This is usually a
          convenient option, as it is close to classes and other campus
          facilities. You can find more about on-campus accommodation on the
          respective universities' websites or you can directly contact student
          services on campus.
        </Text>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}2. Homestay{"\n"}
          </Text>
          Homestay is a great option for international students who want to live
          with a local family and experience Australian culture. You will have
          your own room, and meals are usually included.
        </Text>

        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}3. Share accommodations{"\n"}
          </Text>
          You can share a house or apartment with other students. Websites such
          as <Text>{textLink("Flatmates", "https://flatmates.com.au/")}</Text>,{" "}
          <Text>
            {textLink(
              "Flatmate Finders",
              "https://www.flatmatefinders.com.au/"
            )}
          </Text>
          , <Text>{textLink("Gumtree", "https://www.gumtree.com.au/")}</Text>,
          can help you find a shared accommodation. Many Facebook pages and
          groups are also dedicated to help search for accommodation.
        </Text>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}4. Rental accommodation{"\n"}
          </Text>
          You can also find rental accommodation like apartments, houses, or
          granny flats on the above-mentioned websites. It's important to make
          sure you are aware of the lease agreement and the cost associated with
          it.
        </Text>

        <Text style={styles.text}>
          You can apply for rental through agencies' websites or through rental
          sites such as:{" "}
          <Text>
            {textLink("realestate.com.au", "https://www.realestate.com.au/")}
          </Text>
          , <Text>{textLink("Domain", "https://www.domain.com.au/")}</Text>,{" "}
          <Text>{textLink("rent.com.au", "https://www.rent.com.au/")}</Text>,{" "}
          <Text>{textLink("Property", "https://www.property.com.au/")}</Text>,{" "}
          <Text>{textLink("Homely", "https://www.homely.com.au/")}</Text>.
        </Text>

        <Text style={styles.text}>
          It's important to start searching for accommodation well in advance,
          as it can take some time to find a place that meets your needs and
          budget. In case you need accommodation in last minute and want to stay
          temporaritly then,{" "}
          <Text>{textLink("Airbnb", "https://www.airbnb.com.au/")}</Text> and{" "}
          <Text>{textLink("Booking.com", "https://www.booking.com/")}</Text> are
          great places to look at.
        </Text>
      </View>
      <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
    </ScrollView>
  );
};

export default RentHouseScreen;

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
});
