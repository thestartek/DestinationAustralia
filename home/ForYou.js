import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ForYou = ({navigation}) => {
  return (
    <ScrollView horizontal={true}>
    <TouchableOpacity onPress={() => navigation.push("Finding a job")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.roberthalf.com/sites/default/files/2021-04/shutterstock_412257712-2.jpg",
          }}
          style={styles.image}
        />

        <View style={styles.contrastStyle}></View>
        <Text style={styles.text}>Finding a job in Australia </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.push("Renting a house")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.avail.co/wp-content/uploads/2021/08/8-tips-for-renting-out-a-house-for-the-first-time-min.jpg",
          }}
          style={styles.image}
        />

        <View style={styles.contrastStyle}></View>
        <Text style={styles.text}>Renting a house in Australia </Text>
      </View>
    </TouchableOpacity>
    </ScrollView>
  );
};

export default ForYou;

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
    // resizeMode: "contain",
  },
  contrastStyle: {
    width: 120,
    height: 166,
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 10,
    marginTop: -166,
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
