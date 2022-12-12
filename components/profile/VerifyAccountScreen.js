import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../Firebase";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  deleteUser,
} from "firebase/auth";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { doc, db, deleteDoc } from "firebase/firestore";

const VerifyAccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = auth.currentUser;

  // TODO(you): prompt the user to re-provide their sign-in credentials
  const credential = EmailAuthProvider.credential(email, password);

  const handleVerification = () => {
    reauthenticateWithCredential(user, credential)
      .then(() => {
        // deleteDoc(doc(db, "users", 'user.email'))
        deleteUser(user);
        Alert.alert(
          "Your account has been permanently deleted !"
        );
      })
      .catch((error) => {
        // An error ocurred
        Alert.alert("We are unable to verify you !", "Please try again.");
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logoSquare.png")}
            style={{ height: 65, width: 65, margin: 30 }}
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
          <TouchableOpacity onPress={handleVerification} style={styles.button}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyAccountScreen;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "lightgrey",
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
