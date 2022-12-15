import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StyleSheet, Image } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Notification({notify}) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerNotifications().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.outerContainer}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={styles.notificationContainer}>
        <Image
          // source={require("../../assets/notificationIcon.png")}
          // source={{uri: notify.image}}
          style={styles.notificationImage}
        />
        <View style={styles.notificationContents}>
          <Text style={styles.titleText}>
            {/* {notify.title} */}
            {notification && notification.request.content.title}
          </Text>
          <Text style={styles.bodyText}>
            {/* {notify.body} */}
            {notification && notification.request.content.body}
          </Text>
          {/* <Text>
            Data:{" "}
            {notification && JSON.stringify(notification.request.content.data)}
          </Text> */}
        </View>
      </View>
      <Button
        title="Press for highlights notification"
        onPress={async () => {
          await highlightsNotification();
        }}
      />
      <Button
        title="Press for news notification"
        onPress={async () => {
          await newsNotification();
        }}
      />
      <Button
        title="Press for post notification"
        onPress={async () => {
          await postNotification();
        }}
      />
       <Button
        title="Press for likes notification"
        onPress={async () => {
          await likesNotification();
        }}
      />
       <Button
        title="Press for comments notification"
        onPress={async () => {
          await commentNotification();
        }}
      />
    </View>
  );
}

async function highlightsNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "New highlights",
      body: "Here is the highlights heading",
      // data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function newsNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Latest news post",
      body: "Here is the news heading",
      // data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function postNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "user.fullname added a new post",
      body: "Here is the post caption",
      // data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function likesNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "user.fullname liked your post",
      body: "Here is the post caption",
      // data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function commentNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "user.fullname commented on your post",
      body: "Here is the post caption",
      // data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

const registerNotifications = async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    // alert('Must use physical device for Push Notifications');
  }

  return token;
}

export {registerNotifications};

const styles = StyleSheet.create({
  outerContainer: {
    // flex: 1,
    // // alignItems: "center",
    // justifyContent: "space-around",
    // backgroundColor: "lightgrey",
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "centre",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  notificationImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  notificationContents: {
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: "80%",
  },
  titleText: {
    fontWeight: "bold",
    color: "#1267E9",
    marginBottom: 4,
  },
  bodyText: {},
});
