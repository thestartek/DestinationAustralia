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
    </ScrollView>
  );
};

export default tools4Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
