import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../../Firebase";
import { onSnapshot, doc } from "firebase/firestore";

const Comments = ({ post, comment }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);

  const getUserDetails = () => {
    const unsubscribe = onSnapshot(
      doc(db, "users", auth.currentUser.email),
      (doc) => {
        setCurrentLoggedInUser({
          fullname: doc.data().fullname,
          profile_picture: doc.data().profile_picture,
        });
      }
    );
    return unsubscribe;
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ width: "80%" }}>
          {post.comments.map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                {comment.image != null ? (
                  <Image
                    source={{ uri: comment.image }}
                    style={styles.profile}
                  />
                ) : (
                  <Image
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
                    }}
                    style={[styles.profile, { tintColor: "grey" }]}
                  />
                )}
              </TouchableOpacity>

              <View style={{ marginHorizontal: 10 }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      // marginHorizontal: 10,
                      fontWeight: "bold",
                      color: "#1267E9",
                    }}
                  >
                    {comment.fullname}
                  </Text>
                </TouchableOpacity>

                <Text style={{ fontWeight: "normal", color: "black" }}>
                  {comment.comment}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
  },
});
