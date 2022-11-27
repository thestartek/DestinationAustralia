import { ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header.js";
import Post from "../components/community/Post.js";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-elements";
import SkeletonContent from "react-native-skeleton-content";
import Highlights from "../components/home/Highlights.js";

const CommunityScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts"),
      orderBy("creatd"),
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
      <Divider width={0.25} />
      <CreatePost navigation={navigation} />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

const CreatePost = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("New post");
      }}
    >
      <View style={styles.createPostButton}>
        <Text style={styles.postButtonText}>Create a post</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
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
export default CommunityScreen;
