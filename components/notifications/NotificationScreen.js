import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { db, auth } from "../../Firebase";
import { getDoc, doc } from "firebase/firestore";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function sendPushNotification_Highlights(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Journey to Australia",
    body: "New highlights added, check the app now !",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

const NotificationScreen = () => {
  const [token, setToken] = useState([]);

  const payLink = () => {
    Linking.openURL("https://PayPal.Me/thestartek")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const tokenRef = getDoc(doc(db, "notifications", "token")).then((doc) => {
    setToken(doc.data().expoPushToken);
  });
  // const token = tokenRef.expoPushToken

  return (
    <ScrollView>
      {auth.currentUser.email == "journeytoaustralia@starteknp.com" ? (
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={async () => {
              await sendPushNotification_Highlights(token);
            }}
            style={styles.button}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Send Highlights notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Send News notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Send Video notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Send Post notifications
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.headerText}>
            Notifications are not available right now.
          </Text>
          <Text style={styles.contentText}>
            We are working hard to make this feature available to our users.
            Please come back later to see notifications.
          </Text>
          <Text style={styles.contentText}>
            For now, you can support us to make this application the bast app
            for Australia related contents by offering your support amount to
            the following PayPal ID.
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/confidential%2FPayPal_qrCode.png?alt=media&token=fec45c06-f199-4608-a189-4e38af3b44ee",
              }}
              style={{ height: 200, width: 200, marginTop: 20 }}
            />
            <TouchableOpacity onPress={payLink}>
              <Text style={styles.payID}>PayPal.Me/thestartek</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },
  contentText: {
    fontSize: 16,
    marginVertical: 5,
    marginHorizontal: 20,
    lineHeight: 26,
  },
  payID: {
    marginVertical: 20,
    textAlign: "center",
    color: "#1267E9",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1267E9",
    width: "80%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
});
