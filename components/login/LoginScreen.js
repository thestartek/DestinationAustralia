import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { auth, db } from "../../Firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  GoogleSignin.configure({
    webClientId:
      "126633133869-s0m5p25e3ccme62qhg2ire4lr0jtv4u9.apps.googleusercontent.com",
    androidClientId:
      "126633133869-0gtrkbu5gliin40ivi5a82na4pff06b4.apps.googleusercontent.com",
  });

  const GoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo)
      const user = userInfo.user;
      console.log(user.name + " is signed in with email: " + user.email);
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(auth, googleCredential)
        .then(() => {
          setDoc(doc(db, "users", user.email), {
            uid: user.id,
            fullname: user.name,
            email: user.email,
            profile_picture: user.photo,
          });
          console.log("User added to database");
          Alert.alert("Logged in successfully", user.email);
          setGoogleLoading(false);
        })
        .catch((error) => {
          console.log("Error 1: " + error);
          setGoogleLoading(false);
        });
      setGoogleLoading(false);
    } catch (error) {
      console.log("Error 2: " + error);
      setGoogleLoading(false);
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch(
        (error) =>
          Alert.alert(
            "Invalid login details",
            "If you do not have an account yet, Please Register",
            [
              {
                text: "Ok",
                onPress: () => setLoading(false),
                style: "cancel",
              },
              {
                text: "Register",
                onPress: () => {
                  navigation.push("Register"), setLoading(false);
                },
              },
            ]
          )
        //
      );
    setLoading(true);
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/appIcon_transparent.png")}
            style={{ height: 100, width: 100, marginTop: 20 }}
          />
          <Text style={[styles.text, { color: "grey", marginBottom: 20 }]}>
            Your Friend for Australian Dreams
          </Text>
        </View>

        {/* <Text style={[styles.text, { marginBottom: 10 }]}>Login with</Text> */}

        {/* LOGIN WIHT FACEBOOK AND LOGIN WITH GOOGLE BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={GoogleSignIn}
            style={[styles.button, styles.buttonGoogle]}
          >
            {googleLoading ? (
              <View style={{ flexDirection: "row" }}>
                <ActivityIndicator color = 'white'/>
                <Text style={styles.buttonText}>Signing in with Google</Text>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <AntDesign name="google" size={24} color="white" />
                <Text style={styles.buttonText}>Sign in with Google</Text>
              </View>
            )}
            {/* <Text style={styles.buttonText}>Sign in with Google</Text> */}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text, { marginVertical: 10 }]}>
          -------------------- OR --------------------
        </Text>

        <View>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            //autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => navigation.push("Reset password")}
            style={{ alignItems: "flex-end" }}
          >
            <Text
              style={{ color: "#1267E9", fontSize: 16, marginVertical: 10 }}
            >
              Forgot password ?{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            {loading ? (
              <ActivityIndicator color = 'white'/>
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
            {/* <Text style={styles.buttonText}>Login</Text> */}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 30,
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}> Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.push("Register")}>
            <Text style={[styles.buttonText, { color: "#1267E9" }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    // width: 300,
    justifyContent: "center",
    // marginTop: 20,
  },
  button: {
    padding: 12,
    // height: 50,
    borderRadius: 40,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
    width: 140,
    backgroundColor: "#1267E9",
    // marginTop: 10,
  },
  buttonFacebook: {
    backgroundColor: "#1267E9",
  },
  buttonGoogle: {
    borderRadius: 8,
    width: 250,
    // backgroundColor: 'red'
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
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
