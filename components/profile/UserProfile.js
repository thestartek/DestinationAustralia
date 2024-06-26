import { signOut } from "firebase/auth";
import {
  onSnapshot,
  doc,
  collection,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import Post from "../post/Post";

import { db, auth } from "../../Firebase";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

// const adUnitId = TestIds.BANNER;

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const handleLogout = async () => {
  await signOut(auth)
    .then(() => {
      console.log("User Logged out!");
      //navigation.push("Login");
    })
    .catch((error) => {
      console.log(error);
    });
};

const UserProfile = ({ navigation }) => {
  // const {user, logout} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [deleted, setDeleted] = useState(false);
  // const [userData, setUserData] = useState(null);

  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);

  const logoutAlert = () => {
    Alert.alert(
      "Do you want to Log out ?",
      "This action will log you out from Journey to Australia !",
      [
        {
          text: "Log out",
          onPress: handleLogout,
        },
        {
          text: "Cancel",
          //onPress: () => console.log("Ok"),
          style: "cancel",
        },
      ]
    );
  };

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(
      doc(db, "users", auth.currentUser.email),
      (doc) => {
        setCurrentLoggedInUser({
          fullname: doc.data().fullname,
          profile_picture: doc.data().profile_picture,
          city: doc.data().city,
          country: doc.data().country,
          info: doc.data().info,
        });
      }
    );
    return unsubscribe;
  };

  // useEffect(() => {
  //   getUserDetails();
  // }, []);

  useEffect(() => {
    getUserDetails();
    const unsub = onSnapshot(
      query(
        collection(db, "posts"),
        where("user", "==", auth.currentUser.email),
        orderBy("created", "desc")
      ),
      (snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
        if (loading) {
          setLoading(false);
        }
      }
    );
    return unsub;
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>
        <View style={styles.container}>
          {currentLoggedInUser.fullname ? (
            <Text style={styles.userName}>
              {" "}
              {currentLoggedInUser.fullname}{" "}
            </Text>
          ) : (
            <Text style={styles.userName}> Your name </Text>
          )}

          {currentLoggedInUser.profile_picture ? (
            <Image
              style={styles.userImg}
              source={{ uri: currentLoggedInUser.profile_picture }}
            />
          ) : (
            <Image
              style={[styles.userImg, { tintColor: "grey" }]}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
              }}
            />
          )}

          {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
          <View style={{ flexDirection: "row" }}>
            {currentLoggedInUser.city ? (
              <Text style={styles.userLocation}>
                {currentLoggedInUser.city},
              </Text>
            ) : (
              <Text style={styles.userLocation}>Your city,</Text>
            )}

            {currentLoggedInUser.country ? (
              <Text style={styles.userLocation}>
                {" "}
                {currentLoggedInUser.country}
              </Text>
            ) : (
              <Text style={styles.userLocation}> Your country</Text>
            )}
          </View>

          {currentLoggedInUser.info ? (
            <Text style={styles.aboutUser}>
              Bio: {currentLoggedInUser.info}
            </Text>
          ) : null}

          <View style={styles.userBtnWrapper}>
            <TouchableOpacity
              style={[styles.userBtn, { backgroundColor: "#1267E9" }]}
              onPress={() => navigation.push("Settings")}
            >
              <Text style={[styles.userBtnTxt, { color: "white" }]}>
                Settings
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.userBtn} onPress={logoutAlert}>
              <Text style={styles.userBtnTxt}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <View style={{ backgroundColor: "white", marginBottom: -5 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              margin: 10,
            }}
          >
            Your posts
          </Text>
        </View>

        <View style={{ marginBottom: 50 }}>
          {posts.map((post, index) => (
            <Post post={post} key={index} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    // tintColor: "grey",
    marginVertical: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#1267E9",
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    // marginHorizontal: 40,
    marginBottom: 10,
  },
  userLocation: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    marginBottom: -5,
  },
  userBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1267E9",
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#1267E9",
    fontWeight: "bold",
  },
});
