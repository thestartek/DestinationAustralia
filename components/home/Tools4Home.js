import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const tools4Home = ({ navigation }) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.outerContainer}>
        <TouchableOpacity
          onPress={() => navigation.push("PR Points Calculator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/prPointsCalculator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>PR Points{"\n"}Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push("Explore Australia")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/australiaIcon.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Explore{"\n"}Australia</Text>
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
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push("Income Calculator")}
          style={styles.innerContainer}
        >
          <Image
            source={require("../../assets/incomeCalculator.png")}
            style={styles.toolsImage}
          />
          <Text style={styles.toolsName}>Income{"\n"}Calculator</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default tools4Home;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  innerContainer: {
    marginHorizontal: 20,
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
