import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

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

        <View
          style={{
            width: 120,
            height: 166,
            backgroundColor: "rgba(0, 0, 0, .5)",
            borderRadius: 10,
            marginTop: -166,
          }}
        ></View>
        <Text style={styles.text}>{highlights.title} </Text>

        {/* <ImageBackground
          source={{ uri: highlights.image }}
          style={styles.image}
        >
          <Text style={styles.text}>{highlights.caption} </Text>
        </ImageBackground> */}
      </View>
    </TouchableOpacity>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
    width: 120,
  },
  image: {
    width: 120,
    height: 166,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgrey",
    // opacity: 0.9
  },
  text: {
    marginVertical: 5,
    height: 166,
    width: 116,
    marginTop: -166,
    marginHorizontal: 3,
    fontWeight: "800",
    fontSize: 15,
    color: "white",
    textShadowRadius: 1,
    textShadowColor: "black",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    padding: 4,
    // textDecorationLine: 'underline'
  },
});
