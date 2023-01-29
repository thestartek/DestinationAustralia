import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../Firebase";
import { deleteUser } from "firebase/auth";
import { db, doc, deleteDoc } from "firebase/firestore";
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

const DeleteAccountScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const user = auth.currentUser;

  const deleteDatabase = () => {
    deleteDoc(doc(db, "users", user.email));
  };

  async function handleDelete() {
    // await deleteDoc(doc(db, "users", user.email));
    await deleteUser(user)
      .then(() => {
        Alert.alert("Your account has been permanently deleted !");
      })
      .catch((error) => {
        // console.log("This account can't be deleted", { error });
        Alert.alert(
          "Please Login again",
          "Please verify yourself by logging in again !",
          [
            {
              text: "Proceed",
              onPress: () => navigation.push("Verify account"),
            },
            {
              text: "cancel",
              //onPress: () => console.log("Ok"),
              style: "cancel",
            },
          ]
        );
      });
  }

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
          <Text
            style={{
              color: "#1267E9",
              marginHorizontal: 10,
              // marginVertical: 5,
              alignItems: "stretch",
            }}
          >
            Are you sure, you want to delete your account ? {"\n"}
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              // marginVertical: 5,
              alignItems: "stretch",
            }}
          >
            Once you delete your account, you will not be able to recover it
            again. {"\n"}
          </Text>
        </View>

        {checked != true ? (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setChecked(true)}
              style={styles.checkButtonOuter}
            >
              <View style={styles.checkButtonInner}></View>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, color: "#1267E9" }}>I agree</Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setChecked(false)}
              style={[styles.checkButtonOuter, styles.checkedButtonOuter]}
            >
              <View
                style={[styles.checkButtonInner, styles.checkedButtonInner]}
              ></View>
            </TouchableOpacity>
            <Text
              style={{ marginLeft: 10, color: "#1267E9", fontWeight: "bold" }}
            >
              I agree
            </Text>
          </View>
        )}

        <View style={styles.buttonContainer}>
          {checked != true ? (
            <View style={[styles.button, styles.buttonDisabled]}>
              <Text style={styles.buttonText}>Delete now</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={deleteDatabase && handleDelete}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Delete now</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
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
  checkButtonOuter: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "darkgrey",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  checkButtonInner: {
    height: 15,
    width: 15,
    borderRadius: 12,
    backgroundColor: "darkgrey",
  },
  checkedButtonOuter: {
    borderColor: "red",
  },
  checkedButtonInner: {
    backgroundColor: "red",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "red",
    width: 300,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "darkgrey",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
