import { View, Text, Button } from 'react-native'
import React from 'react';
import * as WebBrowser from "expo-web-browser";

const ExpenseEstimator = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10}}>
      <Text style={{fontSize: 26, margin: 20}}>Calculate the average cost of living in Australia: </Text>
      <Button
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://costofliving.studyaustralia.gov.au/"
          )
        }
        title="Calculate now"
        // color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

export default ExpenseEstimator