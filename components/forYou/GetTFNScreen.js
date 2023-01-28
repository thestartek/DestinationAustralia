import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
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

const GetTFNScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Ftfn-abn-super.jpeg?alt=media&token=6a60b847-886f-4d6d-bc8b-00f6e2717db3",
          }}
        />

        <Text style={styles.text}>
          In Australia, a Tax File Number (TFN), an Australian Business Number
          (ABN), and a Superannuation account are all important for individuals
          and businesses to have. You must at least have TFN and Superannuation
          ready before starting work, and you will also need ABN if you want to
          operate a business or work as a sole trader (some employers also
          prefer to pay in ABN). Here are the steps for obtaining each:
        </Text>
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}Tax File Number (TFN){"\n"}
          </Text>
          To apply for a TFN, you can visit the Australian Taxation Office (ATO)
          website and fill out an application form. You will need to provide
          proof of identity and your visa status, and you can submit the form
          either online or by mail.
        </Text>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ato.gov.au/iar/#beforeStart"
              )
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get you TFN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}Australian Business Number (ABN){"\n"}
          </Text>
          To apply for an ABN, you can visit the Australian Business Register
          (ABR) website and fill out an application form. You will need to
          provide information about your business, such as the type of business,
          the name of the business, and the names of the directors. You can
          submit the form either online or by mail.
        </Text>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync("https://register.business.gov.au/")
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get you ABN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            {"    "}Superannuation{"\n"}
          </Text>
          Superannuation is a retirement savings account that is mandatory for
          most employees in Australia. Your employer will usually arrange for
          contributions to be made to your superannuation account on your
          behalf.
        </Text>
        <Text style={styles.text}>
          There are various superannuation providers you can choose from:{" "}
          <Text>
            {textLink("AustralianSuper", "https://www.australiansuper.com/")}
          </Text>
          , <Text>{textLink("HostPlus", "https://hostplus.com.au/")}</Text>,{" "}
          <Text>{textLink("UniSuper", "https://www.unisuper.com.au/")}</Text>,{" "}
          <Text>
            {textLink("AMP", "https://www.amp.com.au/superannuation")}
          </Text>
          , <Text>{textLink("OnePath", "https://www.onepath.com.au/")}</Text>,{" "}
          <Text>
            {textLink("Vision Super", "https://www.visionsuper.com.au/")}
          </Text>
          . Many banks and financial institutions also manage super funds.
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Important: </Text>
          It's always a good idea to check with the relevant authorities to
          ensure that you are eligible and understand the requirements.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
    </ScrollView>
  );
};

export default GetTFNScreen;

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
