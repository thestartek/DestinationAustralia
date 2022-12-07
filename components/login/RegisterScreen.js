import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { auth, db, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const thumbnailMale =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon_male.png?alt=media&token=7863aedb-5d11-469b-8b2f-66125810af08";

const thumbnailFemale =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon_female.jpeg?alt=media&token=fd35dfdf-acee-415d-bf7b-d62f264f18ba";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [city, setCity] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  const handleRegister = async () => {
    // const imageUrl = await uploadImage();
    // console.log(imageUrl);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        //navigation.push("Profile");

        try {
          setDoc(doc(db, "users", user.email), {
            uid: user.uid,
            fullname: fullname,
            email: user.email,
            city: city,
            info: info,
            profile_picture: image,
          });
          console.log("User added to database");
          Alert.alert("User registered successfully", user.email);
        } catch (e) {
          console.error("Error adding user", e);
        }
      })
      .catch((error) => Alert.alert(error.message));
    // Alert.alert(error.message);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {checkedMale != true ? (
              <TouchableOpacity
                onPress={() => [
                  setImage(thumbnailMale),
                  setCheckedMale(true),
                  setCheckedFemale(false),
                ]}
              >
                <Image
                  source={{
                    uri: thumbnailMale,
                  }}
                  style={[styles.avatar, { tintColor: "grey" }]}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              // onPress={() => [setImage(null), setCheckedMale(false)]}
              >
                <Image
                  source={{
                    uri: thumbnailMale,
                  }}
                  style={[styles.avatar, { tintColor: "#1267E9" }]}
                />
              </TouchableOpacity>
            )}

            {checkedFemale != true ? (
              <TouchableOpacity
                onPress={() => [
                  setImage(thumbnailFemale),
                  setCheckedFemale(true),
                  setCheckedMale(false),
                ]}
              >
                <Image
                  source={{
                    uri: thumbnailFemale,
                  }}
                  style={[styles.avatar, { tintColor: "grey" }]}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              // onPress={() => [setImage(null), setCheckedFemale(false)]}
              >
                <Image
                  source={{
                    uri: thumbnailFemale,
                  }}
                  style={[styles.avatar, { tintColor: "#1267E9" }]}
                />
              </TouchableOpacity>
            )}

            {/* {image != null ? (
              <Image
                source={{ uri: image }}
                style={[styles.logoContainer, styles.selectedPhoto]}
              />
            ) : (
              <View style={styles.logoContainer}>{image}</View>
            )} */}
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={styles.textStyle}>Choose your avatar</Text>
          </View>

          <View>
            <TextInput
              placeholder="Full Name"
              //autoFocus={true}
              value={fullname}
              //autoCapitalize="none"
              onChangeText={(text) => setFullname(text)}
              style={styles.textInput}
              //returnKeyType = {'next'}
            />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              secureTextEntry
            />
            <TextInput
              placeholder="City"
              value={city}
              onChangeText={(text) => setCity(text)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="About me"
              multiline={true}
              autoCapitalize="none"
              value={info}
              onChangeText={(text) => setInfo(text)}
              style={[styles.textInput, { height: 100 }]}
              //onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          {fullname == null ||
          email == null ||
          password == null ||
          city == null ? (
            <View style={styles.buttonContainer}>
              <View
                style={[
                  styles.button,
                  styles.buttonUnselected,
                  { marginBottom: 200 },
                ]}
              >
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleRegister}
                style={[styles.button, { marginBottom: 200 }]}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  // logoContainer: {
  //   alignItems: "center",
  //   marginTop: 20,
  // },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "lightgrey",
    marginTop: 10,
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
  buttonUnselected: {
    backgroundColor: "darkgrey",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#1267E9",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonPhotoUnselected: {
    backgroundColor: "darkgrey",
  },
  avatar: {
    borderRadius: 50,
    height: 80,
    width: 80,
    marginTop: 50,
    marginHorizontal: 10,
    marginBottom: 10,
    // tintColor: "grey",
  },

  textStyle: {
    color: "#1267E9",
    //fontWeight: "bold",
    //textAlign: "center",
    fontSize: 16,
    marginHorizontal: 8,
  },
});
