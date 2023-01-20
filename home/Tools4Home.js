import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  ExpenseEstimator,
  ExploreAustralia,
  PrPointsCalculator,
  UniversityFinder,
} from "../components/tools/ToolsScreen";

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

const styles = StyleSheet.create({});
