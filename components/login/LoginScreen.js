import React, { useEffect, useState } from "react";
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
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/appIcon_transparent.png")}
            style={{ height: 100, width: 100, margin: 30 }}
          />
        </View>
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
        </View>

        <TouchableOpacity
          onPress={() => navigation.push("Reset password")}
          style={{ alignItems: "flex-end" }}
        >
          <Text style={{ color: "#1267E9", fontSize: 16 }}>
            {" "}
            Forgot password ?{" "}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
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
          <Text style={{ fontSize: 16 }}> Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.push("Register")}>
            <Text style={styles.buttonFacebookText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
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
  buttonContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1267E9",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonLogo: {},
  buttonFacebook: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#1267E9",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonGoogle: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonFacebookText: {
    color: "#1267E9",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonGoogleText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});
