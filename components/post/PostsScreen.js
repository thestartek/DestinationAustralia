import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Header from "../../home/Header.js";
import Post from "./Post.js";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  limit,
} from "firebase/firestore";
import { db, auth } from "../../Firebase";
import { Button, Divider } from "react-native-paper";

const PostScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("created", "desc")),
      orderBy("caption"),
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
    <View style={styles.container}>
      <Divider />
      {/* <PostHeader /> */}
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkgrey",
    flex: 1,
  },
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    // tintColor: "#3a3b3c",
  },
  profileThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 22,
    tintColor: "grey",
  },
  timstampText: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    color: "grey",
  },
  createPostButton: {
    height: 40,
    backgroundColor: "#1267E9",
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 18,
  },
});
export default PostScreen;
