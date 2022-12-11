import { signOut } from "firebase/auth";
import {
  onSnapshot,
  doc,
  collection,
  orderBy,
  where,
} from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Modal,
} from "react-native";
import { Divider } from "react-native-elements";
import Post from "../post/Post";

import { db, auth } from "../../Firebase";
//import {AuthContext} from '../navigation/AuthProvider';

//import firestore from '@react-native-firebase/firestore';

const handleLogout = ({ navigation }) => {
  signOut(auth)
    .then(() => {
      console.log("User Logged out!");
      //navigation.push("Login");
    })
    .catch((error) => {
      //
    });
};

const ProfileScreen = ({ navigation }) => {
  // const {user, logout} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [deleted, setDeleted] = useState(false);
  // const [userData, setUserData] = useState(null);

  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(
      doc(db, "users", auth.currentUser.email),
      (doc) => {
        setCurrentLoggedInUser({
          fullname: doc.data().fullname,
          profile_picture: doc.data().profile_picture,
          city: doc.data().city,
          info: doc.data().info,
        });
      }
    );
    return unsubscribe;
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts"),
      // where("id", "==", auth.currentUser.uid),
      // orderBy("creatd"),
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.userName}> {currentLoggedInUser.fullname} </Text>

        {!currentLoggedInUser.profile_picture ? (
          <Image
            style={styles.userImg}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
            }}
          />
        ) : (
          <Image
            style={styles.userImg}
            source={{ uri: currentLoggedInUser.profile_picture }}
          />
        )}

        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.userLocation}>{currentLoggedInUser.city}</Text>
        <Text style={styles.aboutUser}>{currentLoggedInUser.info}</Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Image
              source={require("./../assets/messageIcon.png")}
              style={styles.userBtnIcon}
            />
            <Text style={styles.userBtnTxt}> Message </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
            <Image
              source={require("./../assets/saveIcon.png")}
              style={styles.userBtnIcon}
            />
            <Text style={styles.userBtnTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Divider />

      <ScrollView>
        <View style={styles.postIcon}>
          <Text style={styles.postText}>Posts</Text>
        </View>
        {posts.map((post, index) => (
          <Post post={post} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    tintColor: "grey",
    marginVertical: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    //marginTop: 10,
    marginBottom: 5,
    color: "#1267E9",
  },
  aboutUser: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginHorizontal: 40,
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
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  userBtnIcon: {
    height: 20,
    width: 20,
    tintColor: "#1267E9",
  },
  userBtnTxt: {
    color: "#1267E9",
    fontWeight: "bold",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  postIcon: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "darkgrey",
    width: 80,
    borderRadius: 12,
  },
  postText: {
    padding: 6,
    fontSize: 18,
    marginLeft: 10,
    color: "white",
  },
});
