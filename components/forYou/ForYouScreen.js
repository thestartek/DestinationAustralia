import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const ForYouScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <FindJob navigation={navigation} />
          <RentHouse navigation={navigation} />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <GetTFN navigation={navigation} />
          <BeforeAus navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

export const FindJob = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Finding a job")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Fjob-search-vector.jpeg?alt=media&token=b6da3af5-4cdd-461f-b437-4a0a70c7d89f",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>Finding a job in Australia</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RentHouse = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Finding a rental place")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2FRentalHome.jpg?alt=media&token=9d165241-64a1-4077-90b9-b4d66d1ea6df",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>Finding a rental palce in Australia </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const GetTFN = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Getting TFN, ABN and Super")}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Ftfn-abn-super.jpeg?alt=media&token=6a60b847-886f-4d6d-bc8b-00f6e2717db3",
          }}
          style={styles.image}
        />

        <View style={styles.textBox}>
          <Text style={styles.text}>Getting TFN, ABN and Super </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const BeforeAus = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Before coming to Australia")}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Fman-at-airport-with-suitcase.webp?alt=media&token=11901552-09fd-41ca-a907-d9c49a0b5ec1",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Thins to know before comming to Australia{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    // alignItems: "center",
  },
  innerContainer: {
    // backgroundColor: "white",
    // alignItems: "center",
    marginHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    // justifyContent: "space-between"
  },
  container: {
    // justifyContent: "space-between",
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
    borderWidth: 1,
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
    //   width: "100%",
    //   marginTop: -166,
    marginHorizontal: 3,
    fontWeight: "800",
    fontSize: 16,
    color: "#1267E9",
    // textShadowRadius: 1,
    // textShadowColor: "black",
    // textShadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    padding: 4,
    // textDecorationLine: 'underline'
  },
});
