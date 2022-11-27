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
    margin: 10
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },
  text: {
    marginVertical: 5,
    maxHeight: 100,
    width: 85
  },
});
