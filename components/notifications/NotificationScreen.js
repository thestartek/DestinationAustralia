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

export default function NorificationScreen() {
  // const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  notificationListener.current = Notifications.addNotificationReceivedListener(
    (notification) => {
      setNotification(notification);
    }
  );

  responseListener.current =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);



  return (
    <View style={styles.outerContainer}>
      {/* <Text>Your expo push token: {expoPushToken}</Text>22 */}
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
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
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
