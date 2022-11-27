import { ScrollView, View, Text, Image, StyleSheet, Alert } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { TouchableOpacity, Share } from "react-native";
import { auth, db } from "../../Firebase";

import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
//import { color } from "react-native-reanimated";

const Post4home = ({ post, navigation }) => {
  const user = auth.currentUser;
  // const thumbnailPic = (
  //   <Image source={require("../../assets/profileIcon.png")} />
  // );

  // const handleLike = (post) => {
  //   const currentLikeStatus = !post.likes.includes(user.email);
  //   updateDoc(doc(db, "posts", post.id), {
  //     likes: currentLikeStatus
  //       ? arrayUnion(user.email)
  //       : arrayRemove(user.email),
  //   });
  // };

  return (
    <View>
      <View>
        <PostHeader post={post} />

        {post.caption != null ? <Caption post={post} /> : null}
        {/* {post.imageUrl != null ? <PostImage post={post} /> : null} */}

        {/* <Divider width={10} /> */}
        {/* <View style={styles.postFooterContainer}>
          <LikeButton post={post} handleLike={handleLike} />
          <Divider width={1} orientation="vertical" />
          <CommentButton post={post} navigation={navigation} />
          <Divider width={1} orientation="vertical" />
          <ShareButton post={post} />
        </View> */}
      </View>

      {/* const CommentInput  */}
      {/* <Divider width={10}/> */}
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={{ flexDirection: "row", margin: 10 }}>
    {!post.profile_picture ? (
      <Image
        source={require("../../assets/profileIcon.png")}
        style={styles.profileThumbnail}
      />
    ) : (
      <Image source={{ uri: post.profile_picture }} style={styles.profile} />
    )}
    {/* where post.user == user.email*/}

    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 4,
          fontWeight: "bold",
          fontSize: 15,
          color: "#1267E9",
        }}
      >
        {post.fullname}
      </Text>
      <Text style={styles.timstampText}>{post.postedDate}</Text>
    </View>
  </View>
);

const Caption = ({ post }) => (
  <Text style={{ marginLeft: 10, marginRight: 10, width: 120, height: 60 }}>
    {post.caption}
  </Text>
);

// const PostImage = ({ post }) => (
//   <View style={{ width: "90%", maxHeight: 100 }}>
//     <Image
//       source={{ uri: post.imageUrl }}
//       style={{ height: "100%", resizeMode: "cover" }}
//     />
//   </View>
// );

// const LikeButton = ({ post, handleLike, focused }) => {
//   // onLiked = post.liked ? "like1" : "like2";
//   const onLikedColor = post.likes.includes(auth.currentUser.email)
//     ? "#1267E9"
//     : "#545050";

//   return (
//     <View>
//       <TouchableOpacity
//         style={{ flexDirection: "row" }}
//         onPress={() => {
//           handleLike(post);
//         }}
//       >
//         {post.likes.includes(auth.currentUser.email) ? (
//           <AntDesign name="like1" size={20} color="#1267E9" />
//         ) : (
//           <AntDesign name="like2" size={20} color="#545050" />
//         )}
//         {/* <AntDesign name={onLiked} size={25} color={onLikedColor} /> */}
//         {/* <AntDesign name={onLiked} size={25} style={styles.buttonStyle} /> */}

//         {!!post.likes.length && (
//           <Text style={[styles.postFooterIconsText, { color: onLikedColor }]}>
//             {post.likes.length}
//           </Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CommentButton = ({ post, postId, navigation }) => {
//   //const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View>
//       <FontAwesome name="commenting-o" size={20} color="#545050" />

//       {!!post.comments.length && (
//         <Text style={styles.postFooterIconsText}>
//           {/* View
//             {post.comments.length > 1 ? " all " : " "} */}
//           {post.comments.length}
//           {/* {post.comments.length > 1 ? " comments" : " comment"} */}
//         </Text>
//       )}
//     </View>
//   );
// };

// const ShareButton = ({ post }) => {
//   const onShare = async () => {
//     try {
//       const result = await Share.share({
//         message:
//           "Haami Nepali | A community app for connecting all Nepalese living in Australia",
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           Alert.alert("Sharing successful");
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         //alert("Sharing cancelled")
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <View>
//       <Feather name="share" size={20} color="#545050" />

//       {!!post.shares.length && (
//         <Text style={styles.postFooterIconsText}>{post.shares.length}</Text>
//       )}
//     </View>
//   );
// };

export default Post4home;

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
    marginLeft: 10,
    marginTop: 2,
    fontSize: 12,
    color: "grey",
  },

  postFooterContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    width: "80%",
  },

  // postFooterIcons: {
  //   // height: 25,
  //   // width: 25,
  //   //tintColor: "grey",
  // },

  postFooterIconsText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 6,
    marginLeft: 5,
    color: "#545050",
  },

  buttonStyle: (focused) => ({
    tintColor: focused ? "red" : "grey",
  }),

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
