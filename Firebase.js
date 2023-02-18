// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

import messaging from "@react-native-firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMaVLSMXRA154XwsnxKnrOWKxfHixcdP4",
  authDomain: "journeytoaustralia-b21d4.firebaseapp.com",
  projectId: "journeytoaustralia-b21d4",
  storageBucket: "journeytoaustralia-b21d4.appspot.com",
  messagingSenderId: "126633133869",
  appId: "1:126633133869:web:dd8f9a00c0e9c2a8a935a4",
  measurementId: "G-8W70ZET86M",
};

// Request user permission for push notifications
export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
};

// Get the device token for push notifications
export const getDeviceToken = async () => {
  const token = await messaging().getToken();
  console.log("Device token:", token);
  await updateDoc(doc(db, "notifications", "token"), {
    FCM_token: arrayUnion(token),
  });
  return token;
};

// Handle incoming push notifications
export const handleIncomingNotification = (callback) => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
    if (callback) {
      callback(remoteMessage);
    }
  });

  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
        if (callback) {
          callback(remoteMessage);
        }
      }
    });
};

export const handleForegroundNotification = () => {
  messaging().onMessage(async (remoteMessage) => {
    Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
  });
};

// Register background handler
export const handleBackgroundNotification = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
  });
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { analytics, auth, db, storage };
