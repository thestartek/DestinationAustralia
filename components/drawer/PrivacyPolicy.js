import { SafeAreaView, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: "https://starteknp.com/privacy-policy/" }} />
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
