import { View, ScrollView, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db, auth } from "../Firebase";
import NewsPost from "./NewsPost.js";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const NewsPostScreen = ({ navigation }) => {
  const [newsposts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "newsposts")), (snapshot) => {
      setNewsPosts(
        snapshot.docs.map((newspost) => ({
          id: newspost.id,
          ...newspost.data(),
        }))
      );
      if (loading) {
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  return (
    <ScrollView>
      <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      <View
        style={{
          backgroundColor: "white",
          marginBottom: -5,
          marginTop: 5,
          padding: 5,
        }}
      >
        <Text style={styles.headingText}>Latest News</Text>
      </View>
      {newsposts.map((newspost, index) => (
        <NewsPost newspost={newspost} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default NewsPostScreen;

const styles = StyleSheet.create({
  headingText: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    fontSize: 22,
  },
});
