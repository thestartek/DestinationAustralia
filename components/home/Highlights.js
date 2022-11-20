import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Highlights = () => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView horizontal={true}>
        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/comment_icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Highlights</Text>
        </View>

        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/comment_icon.png")}
            style={styles.image}
          />
          <Text>Highlights</Text>
        </View>

        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/comment_icon.png")}
            style={styles.image}
          />
          <Text>Highlights</Text>
        </View>

        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/comment_icon.png")}
            style={styles.image}
          />
          <Text>Highlights</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    //borderWidth: 5,
    // height: 120,
  },
  innerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 5,
    borderRadius: 8,
    height: 120,
    width: 110,
    marginVertical: 5,
  },
  image: {
    justifyContent: "center",
    width: 100,
    height: 100,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    tintColor: "grey",
  },
  text: {
    shadowColor: "black",
    shadowOpacity: 5,
    color: "white",
  },
});
