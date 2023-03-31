import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const ToolsScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.toolsContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headingText}>Useful Tools</Text>
        </View>

        {/* List tools here */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <PrPointsCalculator navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ExploreAustralia navigation={navigation} />
          </View>
          <View style={styles.container}>
            <UniversityFinder navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ExpenseEstimator navigation={navigation} />
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <UsefulLinks navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ImportantContacts navigation={navigation} />
          </View>
          <View style={styles.container}>
            <ScholarshipFinder navigation={navigation} />
          </View>
          <View style={[styles.container, {width: 50}]}>

          </View>
        </View>

        <View style={{ margin: 15 }}></View>
      </View>
    </View>
  );
};

export const PrPointsCalculator = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("PR Points Calculator")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprPointsCalculator.png?alt=media&token=7722bbef-ee9e-47e2-ac5f-e823cb871e5d",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>PR Points{"\n"}Calculator</Text>
    </TouchableOpacity>
  );
};

export const ExploreAustralia = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Explore Australia")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FaustraliaIcon.png?alt=media&token=06c8314d-dfa1-43f3-8ea9-0d9f7e33e753",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Explore{"\n"}Australia</Text>
    </TouchableOpacity>
  );
};

export const UniversityFinder = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("University Finder")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FuniversityFinder.png?alt=media&token=1b613e85-1e26-4d35-ad20-366fb6e00e56",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>University{"\n"}Finder</Text>
    </TouchableOpacity>
  );
};

export const ExpenseEstimator = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Expense Estimator")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FexpenseEstimator.png?alt=media&token=3893a795-952a-4f2e-a3ec-e625d4e2060f",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Expense{"\n"}Estimator</Text>
    </TouchableOpacity>
  );
};

export const UsefulLinks = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Useful Links")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FUsefulLinks_Logo.png?alt=media&token=5b87e397-d4dc-48a6-a513-5dfb2a2ede31",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Useful{"\n"}Links</Text>
    </TouchableOpacity>
  );
};

export const ImportantContacts = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Important Contacts")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FImportantContacts_Logo.png?alt=media&token=274dee5e-80b7-4667-bacf-be9df1445294",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Important{"\n"}Contacts</Text>
    </TouchableOpacity>
  );
};

export const ScholarshipFinder = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Scholarship Finder")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FScholarshipFinder_Logo.png?alt=media&token=b77527b5-f586-4f54-8250-b47ed2a6ef01",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Scholarship{"\n"}Finder</Text>
    </TouchableOpacity>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
  },
  container: {
    marginHorizontal: 15,
  },
  toolsContainer: {
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "white",
  },
  headingText: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    fontSize: 22,
  },
  seeMoreText: {
    textAlign: "center",
    color: "#1267E9",
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  mainContainer: {
    flexDirection: "row",
    // marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  innerContainer: {
    // marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    // width: "16%"
  },
  toolsImage: {
    width: 50,
    height: 50,
    tintColor: "#1267E9",
    resizeMode: "contain",
  },
  toolsName: {
    marginTop: 10,
    textAlign: "center",
    // color: "#1267E9"
  },
});
