import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ExpenseEstimator, ExploreAustralia, PrPointsCalculator, UniversityFinder } from "../components/tools/ToolsScreen";

const tools4Home = ({ navigation }) => {
  return (
    <ScrollView horizontal={true}>
      <PrPointsCalculator navigation={navigation} />
      <ExploreAustralia navigation={navigation} />
      <UniversityFinder navigation={navigation} />
      <ExpenseEstimator navigation={navigation} />
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
