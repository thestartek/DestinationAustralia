import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions, TouchableOpacity
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "../../Firebase";
import { onSnapshot, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';

const user = auth.currentUser;

const { width } = Dimensions.get("window");

const AddComment = ({ post }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const [comment, setComment] = useState(null);

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(
      doc(db, "users", auth.currentUser.email),
      (doc) => {
        setCurrentLoggedInUser({
          fullname: doc.data().fullname,
          profile_picture: doc.data().profile_picture,
          email: doc.data().email,
        });
      }
    );
    return unsubscribe;
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleComment = () => {
    updateDoc(doc(db, "posts", post.id), {
      comments: arrayUnion({
        profile_picture: currentLoggedInUser.profile_picture,
        fullname: currentLoggedInUser.fullname,
        comment: comment,
        email: currentLoggedInUser.email,
      }),
    });
    setComment(null);
  };

  return (
    <View style={styles.container}>
      <View>
        {currentLoggedInUser.profile_picture != null ? (
          <Image
            style={styles.imageIcon}
            source={{ uri: currentLoggedInUser.profile_picture }}
          />
        ) : (
          <Image
            style={[styles.imageIcon, { tintColor: "grey" }]}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
            }}
          />
        )}
      </View>
      <TextInput
        placeholder="Add a comment"
        autoCapitalize="none"
        multiline={true}
        //autoFocus={true}
        value={comment}
        onChangeText={(text) => setComment(text)}
        style={styles.textInput}
      />
      {!comment ? (
        // <Image
        //   source={require("../../assets/sendIcon_Empty.png")}
        //   style={styles.sendButtonDisabled}
        // />
        <Ionicons name="send" size={24} color="darkgrey" />
      ) : (
        // <Text style={styles.sendButtonDisabled}>Send</Text>
        <TouchableOpacity onPress={handleComment}>
          {/* <Image
            source={require("../../assets/sendIcon.png")}
            style={styles.sendButton}
          /> */}
          <Ionicons name="send" size={24} color="#1267E9" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  commentContainer: {},
  imageIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  textInput: {
    // backgroundColor: "#ececec",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "darkgrey",
    marginVertical: 5,
    marginHorizontal: 10,
    width: "80%",
    maxHeight: 120,
  },
  sendButton: {
    tintColor: "#1267E9",
    // fontWeight: "bold",
    width: 20,
    height: 20,
  },
  sendButtonDisabled: {
    tintColor: "grey",
    // fontWeight: "bold",
    width: 20,
    height: 20,
  },
});
