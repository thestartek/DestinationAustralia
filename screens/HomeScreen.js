import { ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header.js";
import Post4home from "../components/home/Post4home.js";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { db, auth } from "../Firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-elements";
import SkeletonContent from "react-native-skeleton-content";
import Highlights from "../components/home/Highlights.js";
import NewsPost from "../components/home/NewsPost.js";
import CommunityScreen from "../components/learn/LearnScreen.js";
import Post from "../components/post/Post.js";
import CommunityStack from "../components/CommunityStack.js";
import Tools4Home from "../components/home/Tools4Home.js";

const HomeScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsposts, setNewsPosts] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "highlights"), orderBy("date", "desc")),
      (snapshot) => {
        setHighlights(
          snapshot.docs.map((highlights) => ({
            id: highlights.id,
            ...highlights.data(),
          }))
        );
        if (loading) {
          setLoading(false);
        }
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("created", "desc"), limit(6)),
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

  // const q = query(collection(db, "newspost"), where("date", "==", "27 Nov"));
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const newsposts = [];
  //   querySnapshot.forEach((doc) => {
  //     newspost.push(doc.data().name);
  //   });
  //   console.log("Current cities in CA: ", cities.join(", "));
  // });

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "newsposts"), orderBy("date", "desc")),
      (snapshot) => {
        setNewsPosts(
          snapshot.docs.map((newspost) => ({
            id: newspost.id,
            ...newspost.data(),
          }))
        );
        if (loading) {
          setLoading(false);
        }
      }
    );
    return unsub;
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} />
      <Divider width={8} />
      {/* <Text style={styles.headingText}>Highlights</Text> */}

      <ScrollView style={styles.outerContainer}>
        <Text style={styles.headingText}>Highlights</Text>
        <ScrollView horizontal={true}>
          {highlights.map((highlights, index) => (
            <Highlights
              highlights={highlights}
              key={index}
              navigation={navigation}
            />
          ))}
        </ScrollView>
        <Divider width={8} />

        <Text style={styles.headingText}>Latest posts</Text>
        <ScrollView horizontal={true}>
          {posts.map((post, index) => (
            <Post4home post={post} key={index} navigation={navigation} />
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.push("Posts")}>
          <Text style={styles.seeMoreText}>More posts...</Text>
        </TouchableOpacity>

        <Divider width={8} />
        <Text style={styles.headingText}>Tools</Text>
        {/* List tools here */}
        <Tools4Home navigation={navigation} />

        <TouchableOpacity onPress={() => navigation.push("Tools")}>
          <Text style={styles.seeMoreText}>More tools...</Text>
        </TouchableOpacity>

        <Divider width={8} />

        <View>
          <Text style={styles.headingText}>Latest News</Text>
          <View>
            {newsposts.map((newspost, index) => (
              <NewsPost
                newspost={newspost}
                key={index}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  outerContainer: {
    backgroundColor: "white",
  },
  headingText: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
  },
  seeMoreText: {
    textAlign: "center",
    color: "#1267E9",
    marginVertical: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default HomeScreen;
