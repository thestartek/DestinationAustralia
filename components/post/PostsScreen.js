import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Post from "./Post.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase";
import { Divider } from "react-native-paper";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const PostScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  // const user = auth.currentUser;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
    <SafeAreaView style={styles.container}>
      <Divider />
      {/* <PostHeader /> */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ alignItems: "center" }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
        {posts.map((post, index) => (
          <Post post={post} key={index} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
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
