import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Linking,
  ImageBackground,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
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
        <Image source={{ uri: highlights.image }} style={styles.image} />
        <Text style={styles.text}>{highlights.caption} </Text>

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
    width: 116,
    height: 166,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
    // resizeMode: "contain"
  },
  text: {
    marginVertical: 5,
    height: 160,
    width: 110,
    marginTop: -160,
    marginHorizontal: 5,
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textShadowRadius: 10,
    textShadowColor: "black",
  },
});
