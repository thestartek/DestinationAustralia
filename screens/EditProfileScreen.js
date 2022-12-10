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

const avatar1 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar1.png?alt=media&token=1ec3e916-6bea-434f-8a1f-8ce046e1d29e";
const avatar2 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar2.png?alt=media&token=6f2d37be-b9d8-4b76-8d67-fd6800a8ea71";
const avatar3 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar3.png?alt=media&token=989ccd93-e01a-4763-bb24-341ecbf91a23";
const avatar4 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar4.png?alt=media&token=a59c8e93-a274-4276-b919-f440683d08d1";
const avatar5 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar5.png?alt=media&token=f6ff00dc-64fc-4e9d-92aa-a79ea15cff68";
const avatar6 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar6.png?alt=media&token=85be7b3b-5e7f-4f86-952e-18c833edc55b";
const avatar7 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar7.png?alt=media&token=ca06c066-a8bb-434b-9a58-4f79250bdbac";
const avatar8 =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/avatars%2Favatar8.png?alt=media&token=005893b7-c615-40d8-af33-b4117a9b4e25";

const EditProfileScreen = ({ navigation }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const [fullname, setFullname] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);
  const [checkedAvatar1, setCheckedAvatar1] = useState(false);
  const [checkedAvatar2, setCheckedAvatar2] = useState(false);
  const [checkedAvatar3, setCheckedAvatar3] = useState(false);
  const [checkedAvatar4, setCheckedAvatar4] = useState(false);
  const [checkedAvatar5, setCheckedAvatar5] = useState(false);
  const [checkedAvatar6, setCheckedAvatar6] = useState(false);
  const [checkedAvatar7, setCheckedAvatar7] = useState(false);
  const [checkedAvatar8, setCheckedAvatar8] = useState(false);

  const user = auth.currentUser;

  onSnapshot(doc(db, "users", user.email), (doc) => {
    setCurrentLoggedInUser({
      fullname: doc.data().fullname,
      profile_picture: doc.data().profile_picture,
      country: doc.data().country,
      city: doc.data().city,
      info: doc.data().info,
    });
  });

  const handleChange = async () => {
    try {
      const unsub = setDoc(doc(db, "users", user.email), {
        fullname: fullname || currentLoggedInUser.fullname,
        city: city || currentLoggedInUser.city,
        country: country || currentLoggedInUser.country,
        info: info,
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

  return (
    <ScrollView>
      <View
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          {checkedAvatar1 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar1),
                setCheckedAvatar1(true),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar1 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar1 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar2 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar2),
                setCheckedAvatar1(false),
                setCheckedAvatar2(true),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar2 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            // onPress={() => [setImage(null), setCheckedAvatar2(false)]}
            >
              <Image source={{ uri: avatar2 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar3 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar3),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(true),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar3 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar3 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar4 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar4),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(true),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar4 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar4 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flexDirection: "row" }}>
          {checkedAvatar5 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar5),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(true),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar5 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar5 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar6 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar6),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(true),
                setCheckedAvatar7(false),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar6 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
            // onPress={() => [setImage(null), setCheckedAvatar2(false)]}
            >
              <Image source={{ uri: avatar6 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar7 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar7),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(true),
                setCheckedAvatar8(false),
              ]}
            >
              <Image source={{ uri: avatar7 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar7 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}

          {checkedAvatar8 != true ? (
            <TouchableOpacity
              onPress={() => [
                setImage(avatar8),
                setCheckedAvatar1(false),
                setCheckedAvatar2(false),
                setCheckedAvatar3(false),
                setCheckedAvatar4(false),
                setCheckedAvatar5(false),
                setCheckedAvatar6(false),
                setCheckedAvatar7(false),
                setCheckedAvatar8(true),
              ]}
            >
              <Image source={{ uri: avatar8 }} style={styles.avatar} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: avatar8 }} style={styles.avatarSelected} />
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={styles.textStyle}>Choose your avatar</Text>
        </View>

        <View style={{marginHorizontal: 10}}>
          <View style={{ marginHorizontal: 30 }}>
            <Text style={styles.textStyle}>Your Full name:{"   "}</Text>
            <TextInput
              placeholder="Full name"
              defaultValue={currentLoggedInUser.fullname}
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
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <Text style={styles.textStyle}>Current country:</Text>
            <TextInput
              placeholder="Country"
              defaultValue={currentLoggedInUser.country}
              onChangeText={(text) => {
                {
                  text ? setCountry(text) : currentLoggedInUser.country;
                }
              }}
              value={country}
              style={[styles.textInput]}
            />
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <Text style={styles.textStyle}>Current city:{"        "}</Text>
            <TextInput
              placeholder="City"
              defaultValue={currentLoggedInUser.city}
              onChangeText={(text) => {
                {
                  text ? setCity(text) : currentLoggedInUser.city;
                }
              }}
              value={city}
              style={styles.textInput}
            />
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <Text style={styles.textStyle}>Bio:{"    "}</Text>
            <TextInput
              placeholder="Write your bio"
              defaultValue={currentLoggedInUser.info}
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
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleChange}
            style={[styles.button, { marginBottom: 200 }]}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  // logoContainer: {
  //   alignItems: "center",
  //   marginTop: 20,
  // },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue"
  },
  avatar: {
    borderRadius: 50,
    height: 60,
    width: 60,
    marginHorizontal: 10,
    marginBottom: 10,
    // tintColor: "grey",
  },
  avatarSelected: {
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#1267E9",
    height: 60,
    width: 60,
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
    marginVertical: 5,
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
