// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMaVLSMXRA154XwsnxKnrOWKxfHixcdP4",
  authDomain: "journeytoaustralia-b21d4.firebaseapp.com",
  projectId: "journeytoaustralia-b21d4",
  storageBucket: "journeytoaustralia-b21d4.appspot.com",
  messagingSenderId: "126633133869",
  appId: "1:126633133869:web:dd8f9a00c0e9c2a8a935a4",
  measurementId: "G-8W70ZET86M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
