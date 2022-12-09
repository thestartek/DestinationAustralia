import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { auth, db, storage } from "../Firebase";
import {
  doc,
  onSnapshot,
  setDoc,
  query,
  where,
  collection,
} from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const thumbnailPic =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026";
const thumbnailMale =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon_male.png?alt=media&token=7863aedb-5d11-469b-8b2f-66125810af08";

const thumbnailFemale =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon_female.jpeg?alt=media&token=fd35dfdf-acee-415d-bf7b-d62f264f18ba";

const EditProfileScreen = ({ navigation }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const [fullname, setFullname] = useState(null);
  const [city, setCity] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  const user = auth.currentUser;

  onSnapshot(doc(db, "users", user.email), (doc) => {
    setCurrentLoggedInUser({
      fullname: doc.data().fullname,
      profile_picture: doc.data().profile_picture,
      city: doc.data().city,
      info: doc.data().info,
    });
  });

  const handleChange = async () => {
    try {
      const unsub = setDoc(doc(db, "users", user.email), {
        fullname: fullname || currentLoggedInUser.fullname,
        city: city || currentLoggedInUser.city,
        info: info || currentLoggedInUser.info,
        profile_picture: image || currentLoggedInUser.profile_picture,
      });
      console.log("Profile updated");
      navigation.goBack();
      //Alert.alert("User registered successfully", user.email);
    } catch (error) {
      console.log(error);
    }
    // return unsub;
  };

  // useEffect(() => {
  //   handleChange();
  // }, [])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView horizontal={true}>
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
        </ScrollView>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={styles.textStyle}>Choose your avatar</Text>
        </View>

        <View>
          <TextInput
            placeholder={currentLoggedInUser.fullname}
            // defaultValue={currentLoggedInUser.name}
            //autoFocus={true}
            //autoCapitalize="none"
            onChangeText={(text) => {
              {
                text ? setFullname(text) : currentLoggedInUser.fullname;
              }
            }}
            value={fullname}
            style={styles.textInput}
          />
          <TextInput
            placeholder={currentLoggedInUser.city}
            // defaultValue={currentLoggedInUser.place}
            onChangeText={(text) => {
              {
                text ? setCity(text) : currentLoggedInUser.city;
              }
            }}
            value={city}
            style={styles.textInput}
          />
          <TextInput
            placeholder={currentLoggedInUser.info}
            multiline={true}
            autoCapitalize="none"
            onChangeText={(text) => {
              {
                text ? setInfo(text) : currentLoggedInUser.info;
              }
            }}
            value={info}
            style={[styles.textInput, { height: 100 }]}
            //onSubmitEditing={Keyboard.dismiss}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleChange}
            style={[styles.button, { marginBottom: 200 }]}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  // logoContainer: {
  //   alignItems: "center",
  //   marginTop: 20,
  // },

  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    height: 80,
    width: 80,
    marginTop: 80,
    marginHorizontal: 10,
    marginBottom: 10,
    // tintColor: "grey",
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
  // buttonUnselected: {
  //   backgroundColor: "darkgrey",
  // },
  // buttonOutline: {
  //   backgroundColor: "white",
  //   marginTop: 5,
  //   borderColor: "#0782F9",
  //   borderWidth: 2,
  // },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  // buttonOutlineText: {
  //   color: "#1267E9",
  //   fontWeight: "700",
  //   fontSize: 16,
  // },
  // buttonPhoto: {
  //   flexDirection: "row",
  //   padding: 8,
  //   borderRadius: 8,
  //   backgroundColor: "#1267E9",
  //   marginBottom: 10,
  // },
  // buttonPhotoUnselected: {
  //   backgroundColor: "darkgrey",
  // },
  // selectedPhoto: {
  //   borderRadius: 50,
  //   height: 100,
  //   width: 100,
  //   margin: 10,
  // },
  // icons: {
  //   width: 20,
  //   height: 20,
  //   //resizeMode: 'contain',
  //   tintColor: "white",
  // },
  textStyle: {
    color: "#1267E9",
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 5,
  },
});
