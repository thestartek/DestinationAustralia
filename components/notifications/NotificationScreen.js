import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import Notification from "./Notification";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { db } from "../../Firebase";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "notifications"), orderBy("created", "desc")),
      (snapshot) => {
        setNotifications(
          snapshot.docs.map((notify) => ({
            id: notify.id,
            ...notify.data(),
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
    <View>
      {notifications.map((notify, index) => (
        <Notification
          notify={notify}
          key={index}
          navigation={navigation}
        />
      ))}
      {/* <Notification /> */}
    </View>
  );
};

export default NotificationScreen;
