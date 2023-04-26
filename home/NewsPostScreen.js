import { View, ScrollView, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, limit } from "firebase/firestore";
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
    const unsub = onSnapshot(query(collection(db, "newsposts"), limit(30)), (snapshot) => {
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
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>

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
      <View style={{ alignItems: "center", marginBottom: 100, marginTop: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
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
