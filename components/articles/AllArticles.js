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

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Highlights from "./Highlights";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const windowWidth = Dimensions.get("window").width;

const AllArticles = () => {
  const highlights = {
    date: "20 Jan",
    image:
      "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Fjob-search-vector.jpeg?alt=media&token=b6da3af5-4cdd-461f-b437-4a0a70c7d89f",
    link: "https://startekau.com/",
    title: "This is highlights 1",
  };

  // useEffect(() => {
  //   const unsub = onSnapshot(
  //     query(collection(db, "highlights")),
  //     (snapshot) => {
  //       setHighlights(
  //         snapshot.docs.map((highlights) => ({
  //           id: highlights.id,
  //           ...highlights.data(),
  //         }))
  //       );
  //       if (loading) {
  //         setLoading(false);
  //       }
  //     }
  //   );
  //   return unsub;
  // }, []);
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
      <ScrollView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
            <Highlights highlights={highlights}/>
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Highlights highlights={highlights} />
            <Highlights highlights={highlights} />
          </View> */}

          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Highlights highlights={highlights} />
            <Highlights highlights={highlights} />
          </View> */}
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AllArticles;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 8,
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
