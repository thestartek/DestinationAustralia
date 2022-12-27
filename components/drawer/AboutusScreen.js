import { SafeAreaView, Text, Linking, ScrollView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const AboutusScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView source={{ uri: "https://starteknp.com" }} />
    </SafeAreaView>
  );
};

export default AboutusScreen;
