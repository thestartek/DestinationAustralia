import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";

const ExpenseEstimatorScreen = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <Text style={{ fontSize: 26, margin: 20 }}>
        Calculate the average cost of living in Australia:{" "}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://costofliving.studyaustralia.gov.au/"
          )
        }
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Calculate now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseEstimatorScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 60,
  },
});
