import { ScrollView, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header.js";
import Post4home from "../components/home/Post4home.js";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-elements";
import SkeletonContent from "react-native-skeleton-content";
import Highlights from "../components/home/Highlights.js";
import NewsPost from "../components/home/NewsPost.js";

const HomeScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsposts, setNewsPosts] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "highlights"),
      orderBy("creatd"),
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
      collection(db, "newsposts"),
      orderBy("id"),
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
        <Text
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            fontSize: 20,
            margin: 10,
          }}
        >
          Highlights
        </Text>
        <ScrollView horizontal={true} style={styles.bodyContainerHightlights}>
          {highlights.map((highlights, index) => (
            <Highlights
              highlights={highlights}
              key={index}
              navigation={navigation}
            />
          ))}
        </ScrollView>
        <Divider width={8} />

        <View style={styles.bodyContainerNews}>
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
  bodyContainerHightlights: {
    flexDirection: "row",
    backgroundColor: "white",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10
  },
  bodyContainerNews: {
    backgroundColor: "white",
    // marginTop: 5,
    // borderRadius: 10,
    // height: 150,
  },
  headingText: {
    margin: 10,
    fontWeight: "bold",
    fontSize: 20,
    // color: "black",
  },
});
export default HomeScreen;
