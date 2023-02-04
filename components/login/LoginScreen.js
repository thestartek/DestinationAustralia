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
import { AntDesign } from "@expo/vector-icons";


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
    <ScrollView style={styles.outerContainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/appIcon_transparent.png")}
            style={{ height: 100, width: 100, margin: 20 }}
          />
        </View>
        <Text style={[styles.text, { marginBottom: 10 }]}>Login with</Text>

        {/* LOGIN WIHT FACEBOOK AND LOGIN WITH GOOGLE BUTTONS */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {}}
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
          <Text style={styles.text}> Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText, { color: "#1267E9" }]}>
              Sign up
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
    borderRadius: 10,
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
    backgroundColor: "red",
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
