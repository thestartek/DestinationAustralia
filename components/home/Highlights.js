import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Highlights = ({ highlights, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: highlights.image }} style={styles.image} />
      <Text style={styles.text}>{highlights.caption} </Text>
    </View>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 10,
    width: 120,
    // borderColor: "#1267E9",
    borderWidth: 2,
    borderRadius: 10,
    height: 166,
    borderColor: "lightgrey"
  },
  image: {
    width: 116,
    height: 166,
    borderRadius: 10,
    borderTopRightRadius: 10
  },
  text: {
    marginVertical: 5,
    maxHeight: 50,
    width: 110,
    marginTop: -50,
    marginHorizontal: 5,
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textShadowRadius: 10,
    textShadowColor: "black",
  },
});
