import { SafeAreaView, Text, Linking, ScrollView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const AboutusScreen = () => {
  // Linking.openURL("https://starteknp.com/")
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{ uri: "https://starteknp.com" }} />
    </SafeAreaView>
  );
};

export default AboutusScreen;
