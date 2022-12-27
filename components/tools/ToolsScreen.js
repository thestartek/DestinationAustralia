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

const ToolsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Divider width={5} />
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
      </View>

      {/* Second Row */}
      {/* /////////////////////////////// */}

      <View style={styles.outerContainer}>
        {/* <TouchableOpacity
          onPress={() => navigation.push("Income Calculator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/incomeCalculator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Income{"\n"}Calculator</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          onPress={() => navigation.push("Income Calculator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/incomeCalculator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Income{"\n"}Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push("University Finder")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/universityFinder.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>University{"\n"}Finder</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push("Expense Estimator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/expenseEstimator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Expense{"\n"}Estimator</Text>
        </TouchableOpacity> */}
      </View>

      {/* Third Row */}
      {/* /////////////////////////////// */}
    </ScrollView>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  innerContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
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
