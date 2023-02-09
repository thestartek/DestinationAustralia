// import com.facebook.FacebookSdk;
// import com.facebook.appevents.AppEventsLogger;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

import { auth, db, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const GoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "126633133869-s0m5p25e3ccme62qhg2ire4lr0jtv4u9.apps.googleusercontent.com",
      androidClientId:
        "126633133869-hq7rrnm2dk7677v71861p772ua34uoiu.apps.googleusercontent.com",
    });

    GoogleSignin.hasPlayServices()
      .then((hasPlayService) => {
        if (hasPlayService) {
          GoogleSignin.signIn()
            .then((userInfo) => {
              console.log(JSON.stringify(userInfo));
            })
            .catch((e) => {
              console.log("ERROR IS: " + JSON.stringify(e));
            });
        }
      })
      .catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
      });
  };



  const handleSignup = async () => {
    // const imageUrl = await uploadImage();
    // console.log("imageUrl: ", imageUrl);
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        navigation.push("Register");
        try {
          setDoc(doc(db, "users", user.email), {
            uid: user.uid,
            // fullname: fullname,
            email: user.email,
            // city: city,
            // country: country,
            // info: info,
            // profile_picture: imageUrl,
          });
          console.log("User added to database");
          Alert.alert("User registered successfully", user.email);
          setLoading(false);
        } catch (e) {
          console.error("Error adding user", e);
          setLoading(false);
        }
      })
      .catch((error) => [Alert.alert(error.message), setLoading(false)]);
    // Alert.alert(error.message);
    // setLoading(true);
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/appIcon_transparent.png")}
            style={{ height: 100, width: 100, margin: 20 }}
          />
        </View>
        <Text style={[styles.text, { color: "grey", marginBottom: 10 }]}>
          Your friend for Australia related contents
        </Text>
        <Text style={[styles.text, { marginVertical: 10 }]}>Sign up with</Text>

        {/* LOGIN WIHT FACEBOOK AND LOGIN WITH GOOGLE BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={GoogleSignIn}
            style={[styles.button, styles.buttonGoogle]}
          >
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.buttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.push("Register")}
            style={[styles.button, styles.buttonFacebook]}
          >
            <AntDesign name="facebook-square" size={24} color="white" />
            <Text style={styles.buttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.push("Register")}
            style={[styles.button, styles.buttonEmail]}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={[styles.buttonText, { color: "#1267E9" }]}>
                Email / password
              </Text>
            )}
            {/* <Text style={styles.buttonText}>Login</Text> */}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}> Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={[styles.buttonText, { color: "#1267E9" }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    // flexDirection: "row",
    marginHorizontal: 10,
    // width: 300,
    justifyContent: "center",
    // marginTop: 20,
  },
  button: {
    padding: 12,
    // height: 50,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    // backgroundColor: "#1267E9",
    // marginTop: 10,
  },
  buttonFacebook: {
    backgroundColor: "#1267E9",
  },
  buttonGoogle: {
    backgroundColor: "red",
  },
  buttonEmail: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#1267E9",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
  },
  textInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "darkgrey",
    marginVertical: 5,
    width: 300,
  },
});
