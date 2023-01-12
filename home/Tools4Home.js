import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const tools4Home = ({ navigation }) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.outerContainer}>
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

        {/* <TouchableOpacity
          onPress={() => navigation.push("Income Calculator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../assets/incomeCalculator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Income{"\n"}Calculator</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default tools4Home;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    marginLeft: 5,
    // justifyContent: "space-evenly",
  },
  innerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  toolsImage: {
    width: 40,
    height: 40,
    tintColor: "#1267E9",
    resizeMode: "contain",
  },
  toolsName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    // color: "#1267E9"
  },
});
