import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
} from "react-native";
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
import Highlights from "./Highlights.js";
import Tools4Home from "./Tools4Home.js";
import NewsPostScreen from "./NewsPostScreen.js";
import Video4home from "./Video4home.js";
import BannerHome_linkedtoApp from "../components/cards/BannerHome_linkedtoApp.js";
import BannerHome_linkedtoWeb from "../components/cards/BannerHome_linkedtoWeb.js";
import {
  BeforeAus,
  FindJob,
  GetTFN,
  RentHouse,
} from "../components/forYou/ForYouScreen.js";
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
const { width } = Dimensions.get("window");

// const shuffleForyou = [FindJob, RentHouse, GetTFN, BeforeAus];

const HomeScreen = ({ isLoading, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsposts, setNewsPosts] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [videos, setVideos] = useState([]);
  const user = auth.currentUser;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "highlights")),
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

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "videos"), limit(4)),
      (snapshot) => {
        setVideos(
          snapshot.docs.map((video) => ({
            id: video.id,
            ...video.data(),
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

      <View style={styles.outerContainer}>
        {/* <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} /> */}
        {/* Banners */}
        <BannerHome_linkedtoApp navigation={navigation} />
        <BannerHome_linkedtoWeb navigation={navigation} />

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ alignItems: "center" }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
          </View>

          {/* Useful articles section */}
          <View style={styles.highlightsContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Useful articles</Text>
              <TouchableOpacity onPress={() => navigation.push("For you")}>
                <Text style={styles.seeMoreText}>See all</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true}>
              <FindJob navigation={navigation} />
              <RentHouse navigation={navigation} />
              <GetTFN navigation={navigation} />
              <BeforeAus navigation={navigation} />
            </ScrollView>
            <View style={{ margin: 10 }}></View>
          </View>

          {/* Highlights section */}
          {/* <View style={styles.highlightsContainer}>
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
          </View> */}

          {/* Post section */}
          <View style={styles.postContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Latest posts</Text>
              <TouchableOpacity onPress={() => navigation.push("Posts")}>
                <Text style={styles.seeMoreText}>More posts</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              {posts.map((post, index) => (
                <Post4home post={post} key={index} navigation={navigation} />
              ))}
            </ScrollView>
            <View style={{ margin: 20 }}></View>
          </View>
          <View style={{ alignItems: "center" }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
          </View>

          {/* video section */}
          {/* <Text style={styles.headingText}>Videos</Text> */}
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            // ref={ScrollView}
            snapToInterval={width - 40}
            // snapToAlignment={"center"}
          >
            {videos.map((video, index) => (
              <Video4home video={video} key={index} navigation={navigation} />
            ))}
          </ScrollView>

          {/* Tools section */}
          <View style={styles.toolsContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headingText}>Tools</Text>
              <TouchableOpacity onPress={() => navigation.push("Tools")}>
                <Text style={styles.seeMoreText}>All tools</Text>
              </TouchableOpacity>
            </View>

            {/* List tools here */}
            <Tools4Home navigation={navigation} />
            <View style={{ margin: 15 }}></View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
          </View>

          {/* News section */}

          <View style={{ marginBottom: 50 }}>
            <NewsPostScreen />
            {/* {newsposts.map((newspost, index) => (
            <NewsPost newspost={newspost} key={index} navigation={navigation} />
          ))} */}
          </View>
          {/* <Divider style={{height: 5}}/> */}
        </ScrollView>
      </View>
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
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    marginBottom: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  postContainer: {
    borderRadius: 10,
    // marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  toolsContainer: {
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 10,
    backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  headingText: {
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: "bold",
    fontWeight: "bold",
    fontSize: 22,
  },
  seeMoreText: {
    textAlign: "center",
    color: "#1267E9",
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default HomeScreen;
