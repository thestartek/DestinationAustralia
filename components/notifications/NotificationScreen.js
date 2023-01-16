import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, StyleSheet, Image } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function NotificationScreen() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
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
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "space-around",
      }}
    >
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      {notification ? (
        <View style={styles.notificationContainer}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.notificationImage}
          />
          <View style={styles.notificationContents}>
            <Text style={styles.titleText}>
              {notification && notification.request.content.title}
            </Text>
            <Text style={styles.bodyText}>
              {notification && notification.request.content.body}
            </Text>
            {/* <Text>
            Data:{" "}
            {notification && JSON.stringify(notification.request.content.data)}
          </Text> */}
          </View>
        </View>
      ) : null}

      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
          console.log(notification);
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
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
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

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
