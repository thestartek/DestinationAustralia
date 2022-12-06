import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../../Firebase";

import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { Button } from "react-native-elements";
//import { color } from "react-native-reanimated";

import * as WebBrowser from 'expo-web-browser';

const NewsPost = ({ newspost, navigation }) => {
  const user = auth.currentUser;
  // const thumbnailPic = (
  //   <Image source={require("../../assets/profileIcon.png")} />
  // );

  const handleLike = (newspost) => {
    const currentLikeStatus = !newspost.likes.includes(user.email);
    updateDoc(doc(db, "newsposts", newspost.id), {
      likes: currentLikeStatus
        ? arrayUnion(user.email)
        : arrayRemove(user.email),
    });
  };

  const handleShare = (newspost) => {
    const currentShareStatus = !newspost.shares.includes(user.email);
    updateDoc(doc(db, "newsposts", newspost.id), {
      shares: currentShareStatus
        ? arrayUnion(user.email)
        : arrayRemove(user.email),
    });
  };
  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      <View style={{ flexDirection: "row"}}>
        {newspost.image != null ? <PostImage newspost={newspost} /> : null}
        <View>
          <PostHeader newspost={newspost} />
          {newspost.abstract != null ? <Caption newspost={newspost} /> : null}
        </View>
      </View>

      {/* {newspost.imageUrl != null ? <PostImage newspost={newspost} /> : <Divider />} */}

      <View style={styles.postFooterContainer}>
        <LikeButton newspost={newspost} handleLike={handleLike} />
        {/* <Divider width={1} orientation="vertical" />
        <CommentButton newspost={newspost} navigation={navigation} /> */}
        <Divider width={1} orientation="vertical" />
        <ShareButton newspost={newspost} handleShare={handleShare} />
      </View>
      {/* const CommentInput  */}
      <Divider width={2} />
    </ScrollView>
  );
};

const PostHeader = ({ newspost }) => (
  <View style={{ flexDirection: "row", margin: 10 }}>
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          marginLeft: 5,
          // marginTop: 4,
          fontWeight: "bold",
          fontSize: 15,
          color: "#1267E9",
        }}
      >
        {newspost.headline}
      </Text>

      <Text style={styles.timstampText}>{newspost.date}</Text>
    </View>
  </View>
);

const Caption = ({ newspost }) => (
  <View>
    <Text style={{ marginHorizontal: 10 }}>{newspost.abstract}</Text>
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(newspost.link)}>
      <Text style={{ margin: 10, color: "#1267E9" }}>Read more...</Text>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ newspost }) => (
  <Image
    source={{ uri: newspost.image }}
    style={{ minHeight: 100, width: 100, marginVertical: 10, borderRadius: 2}}
  />
);

const LikeButton = ({ newspost, handleLike, focused }) => {
  // onLiked = post.liked ? "like1" : "like2";
  const onLikedColor = newspost.likes.includes(auth.currentUser.email)
    ? "#1267E9"
    : "#545050";

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => {
          handleLike(newspost);
        }}
      >
        {newspost.likes.includes(auth.currentUser.email) ? (
          <AntDesign name="like1" size={25} color="#1267E9" />
        ) : (
          <AntDesign name="like2" size={25} color="#545050" />
        )}
        {/* <AntDesign name={onLiked} size={25} color={onLikedColor} /> */}
        {/* <AntDesign name={onLiked} size={25} style={styles.buttonStyle} /> */}

        {!!newspost.likes.length && (
          <Text style={[styles.postFooterIconsText, { color: onLikedColor }]}>
            {newspost.likes.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const CommentButton = ({ newspost, postId, navigation }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push("Comments")}
        style={{ flexDirection: "row" }}
      >
        <FontAwesome name="commenting-o" size={25} color="#545050" />

        {!!newspost.comments.length && (
          <Text style={styles.postFooterIconsText}>
            {/* View
            {post.comments.length > 1 ? " all " : " "} */}
            {newspost.comments.length}
            {/* {post.comments.length > 1 ? " comments" : " comment"} */}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const ShareButton = ({ newspost }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Journey to Australia | An app you must have if you are thinking of Australia",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          Alert.alert("Sharing successful");
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        //alert("Sharing cancelled")
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onShare} style={{ flexDirection: "row" }}>
        <Feather name="share" size={24} color="#545050" />

        {!!newspost.shares.length && (
          <Text style={styles.postFooterIconsText}>
            {newspost.shares.length}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default NewsPost;

const styles = StyleSheet.create({
  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  profileThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 22,
    tintColor: "grey",
  },
  timstampText: {
    marginLeft: 5,
    marginTop: 2,
    fontSize: 12,
    color: "grey",
  },

  postFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginVertical: 10,
    // width: "80%"
  },

  postFooterIcons: {
    height: 25,
    width: 25,
    //tintColor: "grey",
  },

  postFooterIconsText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 5,
    color: "#545050",
  },
});
