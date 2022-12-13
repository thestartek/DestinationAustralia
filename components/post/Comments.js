import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../../Firebase";
import { onSnapshot, doc } from "firebase/firestore";

const Comments = ({ post }) => {
  return (
    <View style={styles.commentSection}>
      <ScrollView>
        <View style={{ width: "80%" }}>
          {post.comments.map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                {comment.profile_picture != null ? (
                  <Image
                    source={{ uri: comment.profile_picture }}
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

              <View style={styles.commentBox}>
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
  commentSection: {
    maxHeight: 240
  },
  commentContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
  },
  commentBox: {
    marginHorizontal: 10,
    maxWidth: "100%",
    backgroundColor: '#ececec',
    padding: 8,
    borderRadius: 10
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },
});
