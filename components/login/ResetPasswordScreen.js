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
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sendPasswordResetEmail } from "firebase/auth";
import { ActivityIndicator } from "react-native-paper";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          "Password reset email sent! If you didn't receive the link in your Inbox, please check the Spam folder."
        );
        navigation.goBack();
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode);
        setLoading(false);
      });
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
          <Text style={{ fontSize: 16, marginTop: 20 }}>
            {" "}
            Receive an email link{" "}
          </Text>
        </View>

        <View>
          <TextInput
            placeholder="Your email address"
            autoCapitalize="none"
            //autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.buttonContainer}>
          {!email ? (
            <View style={[styles.button, styles.buttonDisabled]}>
              <Text style={styles.buttonText}>Reset password</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={resetPassword} style={styles.button}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.buttonText}>Reset password</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.MEDIUM_RECTANGLE} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

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
    borderColor: "darkgrey",
    marginTop: 10,
    marginBottom: 5,
    width: 300,
  },
  buttonContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#1267E9",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "grey",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
