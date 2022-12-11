import { ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../home/Header.js";
import Post from "./Post.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../../Firebase";
import { Button, Divider } from "react-native-paper";

const PostScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

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
      <Divider width={5} />
      {/* <CreatePost navigation={navigation} /> */}
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

// const CreatePost = ({ navigation }) => {
//   return (
//     <TouchableOpacity
//       onPress={() => {
//         navigation.push("New post");
//       }}
//     >
//       <View style={styles.createPostButton}>
//         <Text style={styles.postButtonText}>Create a post</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

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
export default PostScreen;
