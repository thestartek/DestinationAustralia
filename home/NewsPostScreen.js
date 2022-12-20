import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db, auth } from "../Firebase";
import NewsPost from "./NewsPost.js";

const NewsPostScreen = ({navigation}) => {
  const [newsposts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "newsposts")), (snapshot) => {
      setNewsPosts(
        snapshot.docs.map((newspost) => ({
          id: newspost.id,
          ...newspost.data(),
        }))
      );
      if (loading) {
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  return (
    <ScrollView>
      {newsposts.map((newspost, index) => (
        <NewsPost newspost={newspost} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default NewsPostScreen;
