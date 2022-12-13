import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import { auth, db } from "../../Firebase";
import { onSnapshot, doc, orderBy, collection } from "firebase/firestore";
import AddComment from "./AddComment";
import { ScrollView } from "react-native-gesture-handler";

const CommentsScreen = ({ post }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  return (
    <ScrollView>
      <Comments post={post} />
      <AddComment post={post} />
    </ScrollView>
  );
};

export default CommentsScreen;
