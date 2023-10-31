import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const AllArticles = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://destinationaus.com/blog/",
        }}
      />
    </SafeAreaView>
  );
};

export default AllArticles;
