import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";

const Highlights = ({ highlights, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => WebBrowser.openBrowserAsync(highlights.link)}
    >
      <View style={styles.container}>
        {highlights.image ? (
          <Image source={{ uri: highlights.image }} style={styles.image} />
        ) : (
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FJourneytoAustralia_colored_noName.png?alt=media&token=1c06614f-a6cd-466b-9d9e-6f1392a7ae64",
            }}
            style={[styles.image, { resizeMode: "contain" }]}
          />
        )}

        <View style={styles.textBox}>
          <Text style={styles.text}>{highlights.title} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 150,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgrey",
  },
  image: {
    width: "100%",
    height: 100,
    // borderWidth: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderColor: "lightgrey",
  },
  textBox: {
    backgroundColor: "#e6ecf5",
    width: "100%",
    borderColor: "lightgrey",
    borderTopWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    marginVertical: 5,
    height: 70,
    marginHorizontal: 3,
    fontWeight: "800",
    fontSize: 16,
    color: "#1267E9",
    padding: 4,
  },
});
