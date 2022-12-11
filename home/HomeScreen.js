import { ScrollView, StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header.js";
import Post4home from "./Post4home.js";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { db, auth } from "../Firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import Highlights from "./Highlights.js";
import NewsPost from "./NewsPost.js";
import Tools4Home from "./Tools4Home.js";

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
    <SafeAreaView style={styles.mainContainer}>
      <Header navigation={navigation} />
      <Divider width={8} />
      {/* <Text style={styles.headingText}>Highlights</Text> */}

      <ScrollView style={styles.outerContainer}>
        <View style={styles.highlightsContainer}>
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
        </View>

        {/* <Divider style={{ height: 5 }} /> */}

        <View style={styles.postContainer}>
          <Text style={styles.headingText}>Latest posts</Text>
          <ScrollView horizontal={true}>
            {posts.map((post, index) => (
              <Post4home post={post} key={index} navigation={navigation} />
            ))}
          </ScrollView>
          <TouchableOpacity onPress={() => navigation.push("Posts")}>
            <Text style={styles.seeMoreText}>More posts...</Text>
          </TouchableOpacity>
        </View>

        {/* <Divider style={{ height: 5 }} /> */}

        <View style={styles.toolsContainer}>
          <Text style={styles.headingText}>Tools</Text>
          {/* List tools here */}
          <Tools4Home navigation={navigation} />

          <TouchableOpacity onPress={() => navigation.push("Tools")}>
            <Text style={styles.seeMoreText}>More tools...</Text>
          </TouchableOpacity>
        </View>

        {/* <Divider style={{ height: 5 }} /> */}

        <View style={styles.newsContainer}>
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
          {/* <Divider style={{height: 5}}/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1267E9",
    flex: 1,
  },
  outerContainer: {
    backgroundColor: "lightgrey",
  },
  highlightsContainer: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  postContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  toolsContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  newsContainer: {
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
