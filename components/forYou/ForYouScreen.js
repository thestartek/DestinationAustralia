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
const shuffle = [FindJob, RentHouse, GetTFN, BeforeVisa];

const ForYouScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <FindJob navigation={navigation} />
        <RentHouse navigation={navigation} />
        <GetTFN navigation={navigation} />
      </View>

      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <BeforeVisa navigation={navigation} />
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
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fimages%2Fjob-search-vector.jpeg?alt=media&token=7ddce350-b894-43e5-8352-830e36f0d320",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>Finding a job in Australia </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RentHouse = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Renting a house")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fimages%2FRentalHome.jpg?alt=media&token=3f21e83c-20c9-4caf-8fbe-dcc68d4972ba",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>Renting a house in Australia </Text>
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
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fimages%2Ftfn-abn-super.jpeg?alt=media&token=8657e760-a71f-4d7f-b71f-387af07cf6f5",
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

export const BeforeVisa = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Before applying a Visa")}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fimages%2Fvisa-application.jpeg?alt=media&token=4dba980e-a123-410e-a153-4f7bf16f38f9",
          }}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>Before applying a visa </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  container: {
    // justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth / 3.5,
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
    backgroundColor: "#C1D6F2",
    width: "100%",
    borderColor: "lightgrey",
    borderTopWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    marginVertical: 5,
    height: 65,
    //   width: "100%",
    //   marginTop: -166,
    marginHorizontal: 3,
    fontWeight: "800",
    fontSize: 15,
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
