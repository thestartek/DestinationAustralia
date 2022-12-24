import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const ContactScreen = () => {
  return (
    <View style={{flex: 1}}>
      <WebView source={{ uri: "https://starteknp.com/contact/" }} />
    </View>
  );
};

export default ContactScreen;
