import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AddNewPost from "./AddNewPost";

import { db, auth } from "../../Firebase";
import { onSnapshot, doc } from "firebase/firestore";
import { Divider } from "react-native-paper";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const NewPostScreen = ({ navigation }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const user = auth.currentUser;

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(doc(db, "users", user.email), (doc) => {
      setCurrentLoggedInUser({
        fullname: doc.data().fullname,
        profile_picture: doc.data().profile_picture,
      });
    });
    return unsubscribe;
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 5,
          marginTop: 10,
        }}
      >
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        <View>
          {!currentLoggedInUser.profile_picture ? (
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
              }}
              style={[styles.profileThumbnail, { tintColor: "grey" }]}
            />
          ) : (
            <Image
              source={{ uri: currentLoggedInUser.profile_picture }}
              style={styles.profileThumbnail}
            />
          )}
        </View>

        <View>
          {!currentLoggedInUser.fullname ? (
            <Text>Your Name</Text>
          ) : (
            <Text
              style={{
                marginLeft: 10,
                marginBottom: 5,
                fontWeight: "bold",
                fontSize: 16,
                color: "#1267E9",
              }}
            >
              {currentLoggedInUser.fullname}
            </Text>
          )}
        </View>
      </View>
      <AddNewPost navigation={navigation} />
      <View style={{alignItems: 'center'}}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
      </View>
    </ScrollView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "white",
    height: 90,
  },
  backText: {
    fontSize: 18,
    color: "#1267E9",
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
  },
  profileThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
    //tintColor: "grey",
  },
});
