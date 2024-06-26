import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

import { db } from "../../Firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const { width } = Dimensions.get("window");

const BannerHome_linkedtoApp = ({ navigation }) => {
  const [bannerShown, setBannerShown] = useState(true);
  const [bannerContent, setBannercontent] = useState(null);
  const [bannerLink, setBannerLink] = useState(null);

  useEffect(() => {
    const docSnap = getDoc(doc(db, "cards", "bannerHome_linkedtoApp")).then(
      (doc) => {
        setBannercontent(doc.data().content);
        setBannerLink(doc.data().link);
        //   console.log(doc.data());
      }
    );

    // return docSnap;
  }, []);

  if (bannerShown && bannerContent && bannerLink) {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
            <TouchableOpacity onPress={() => setBannerShown(false)}>
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FcancelIcon.png?alt=media&token=0832a868-df68-4274-a985-747114727233",
                }}
                style={{ width: 15, height: 15, tintColor: "white" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.push(bannerLink)}>
              <Text style={styles.contentText}>{bannerContent}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
            <TouchableOpacity onPress={() => navigation.push(bannerLink)}>
              <Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FarrowIcon.png?alt=media&token=f86a3fb7-866b-49db-9b68-cc417c2722b8",
                }}
                style={{ width: 15, height: 15, tintColor: "white" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default BannerHome_linkedtoApp;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "red",
    margin: 5,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  contentText: {
    color: "white",
    textAlign: "center",
    lineHeight: 20,
    marginHorizontal: 10,
    width: width - 75,
    fontWeight: "bold",
  },
});
