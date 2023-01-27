import {
  View,
  StyleSheet,
  Alert,
  Keyboard,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { React, useEffect, useState } from "react";
import { TextInput } from "react-native";

import { auth, db } from "../../Firebase";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { ActivityIndicator } from "react-native-paper";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const AddNewPost = ({ post, navigation }) => {
  const [caption, setCaption] = useState(null);
  // const [image, setImage] = useState(null);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([null]);
  const [loading, setLoading] = useState(false);
  // const [percentage, setPercentage] = useState(null);

  const date = new Date().getDate();
  const month = new Date().getMonth();
  //const year = new Date().getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const user = auth.currentUser;

  // getting fullname and profile picture
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

  const uploadPost = async () => {
    // const imageUrl = await uploadImage();
    // console.log(imageUrl);
    setLoading(true);
    try {
      const postRef = doc(collection(db, "posts"));
      const postTask = setDoc(postRef, {
        uid: user.uid,
        // imageUrl: imageUrl,
        user: user.email,
        likes: [],
        shares: [],
        caption: caption,
        comments: [],
        fullname: currentLoggedInUser.fullname,
        profile_picture: currentLoggedInUser.profile_picture || null,
        created: serverTimestamp(Date),
        postedDate: date + " " + months[month],
      });
      setLoading(false);
      setCaption(null);
      navigation.goBack();

      console.log("posted successfully");
      Alert.alert("Posted successfully");
    } catch (e) {
      console.log("Error adding post", e);
      setLoading(false);
    }
    // setLoading(true);
  };

  return (
    <View>
      <TextInput
        placeholder="Share something..."
        placeholderTextColor="gray"
        multiline={true}
        value={caption}
        onChangeText={(text) => setCaption(text)}
        maxLength={2200}
        style={styles.postBox}
        // contentStyle = {{justifyContent:'center', alignItems: 'center', color: 'red'}}
      />
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
      />

      {!caption ? (
        <View style={styles.postButtonDisabled}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Post
          </Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.postButton} onPress={uploadPost}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Post
            </Text>
          )}
          {/* <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Post
        </Text> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },

  postBox: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: "white",
    borderWidth: 0.25,
    borderColor: "darkgray",
    borderRadius: 8,
    padding: 5,
  },
  button: {
    flexDirection: "row",
    padding: 10,
    elevation: 2,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1267E9",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },
  // buttonSelected: {
  //   backgroundColor: "darkgrey",
  // },
  placeholderImage: {
    width: 120,
    height: 120,
    tintColor: "lightgrey",
    marginLeft: 10,
  },
  selectedPhoto: {
    width: 150,
    height: 120,
    //borderRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  icons: {
    width: 20,
    height: 20,
    //resizeMode: 'contain',
    tintColor: "white",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    //textAlign: "center",
    //fontSize: 16,
    marginHorizontal: 8,
  },
  buttonConatiner: {
    width: 225,
    marginLeft: 10,
    marginTop: 10,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
  },
  menubarContainer: {
    width: 225,
    marginHorizontal: 10,
    //marginBottom: -10,
  },

  postButton: {
    backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 60,
  },
  postButtonDisabled: {
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 60,
  },
  optionsBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
