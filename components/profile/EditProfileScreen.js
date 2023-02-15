import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { auth, db, storage } from "../../Firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const ThumbnailImage = () => (
  <Image
    style={[styles.profilePic, { tintColor: "grey" }]}
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
    }}
  />
);

const EditProfileScreen = ({ navigation }) => {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState([]);
  const [fullname, setFullname] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log("Result:", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // uploading photo to firebase storage
  const uploadImage = async () => {
    setLoading(true);
    if (image == null) {
      return null;
    } else {
      try {
        const imageFilename =
          "userImages" +
          "/" +
          "profileImages" +
          "/" +
          user.email +
          "/" +
          image.substring(image.lastIndexOf("/") + 1);

        const imageRef = ref(storage, imageFilename);
        const img = await fetch(image);
        const bytes = await img.blob();
        const uploadTask = await uploadBytes(imageRef, bytes);

        const url = await getDownloadURL(imageRef);
        console.log("getDownloadUrl: ", url);
        return url;
      } catch (error) {
        console.log("error: ", error);
        return null;
      }
    }
  };

  const handleChange = async () => {
    setLoading(true);
    const imageUrl = await uploadImage();
    console.log("imageUrl: ", imageUrl);

    try {
      const unsub = setDoc(
        doc(db, "users", user.email),
        {
          fullname: fullname || currentLoggedInUser.fullname,
          city: city || currentLoggedInUser.city,
          country: country || currentLoggedInUser.country,
          info: info || currentLoggedInUser.info,
          profile_picture: imageUrl || currentLoggedInUser.profile_picture,
          // email: user.email
        },
        { merge: true }
      );
      console.log("Profile updated");
      navigation.goBack();
      // setLoading(false);
      //Alert.alert("User registered successfully", user.email);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // return unsub;
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.photoSection}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profilePic} />
              ) : (
                <View>
                  {currentLoggedInUser.profile_picture ? (
                    <Image
                      source={{ uri: currentLoggedInUser.profile_picture }}
                      style={styles.profilePic}
                    />
                  ) : (
                    <ThumbnailImage />
                  )}
                </View>
              )}

              <Image
                style={styles.plusIcon}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FplusIcon.png?alt=media&token=0708de8d-6ae2-4ce9-adcf-4421c8351b47",
                }}
              />
            </View>
          </TouchableOpacity>

          {/* INPUTS */}
          <View style={{ marginHorizontal: 10 }}>
            <View style={{ marginHorizontal: 30 }}>
              <Text style={styles.textStyle}>Your Full name:</Text>
              <TextInput
                placeholder={currentLoggedInUser.fullname}
                defaultValue={currentLoggedInUser.fullname}
                //autoFocus={true}
                //autoCapitalize="none"
                onChangeText={setFullname}
                value={fullname}
                style={styles.textInput}
              />
            </View>

            <View style={{ marginHorizontal: 30 }}>
              <Text style={styles.textStyle}>Current country:</Text>
              <TextInput
                placeholder={currentLoggedInUser.country}
                defaultValue={currentLoggedInUser.country}
                onChangeText={setCountry}
                value={country}
                style={styles.textInput}
              />
            </View>

            <View style={{ marginHorizontal: 30 }}>
              <Text style={styles.textStyle}>Current city:</Text>
              <TextInput
                placeholder={currentLoggedInUser.city}
                defaultValue={currentLoggedInUser.city}
                onChangeText={setCity}
                value={city}
                style={styles.textInput}
              />
            </View>

            <View style={{ marginHorizontal: 30 }}>
              <Text style={styles.textStyle}>Bio:</Text>
              <TextInput
                placeholder={currentLoggedInUser.info}
                defaultValue={currentLoggedInUser.info}
                multiline={true}
                autoCapitalize="none"
                onChangeText={setInfo}
                value={info}
                style={styles.textInput}
                //onSubmitEditing={Keyboard.dismiss}
              />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleChange} style={styles.button}>
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  outerContainer: {},
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  photoSection: {
    marginTop: 40,
    marginBottom: 15,
    alignItems: "center",
  },
  profilePic: {
    borderRadius: 60,
    height: 120,
    width: 120,
    marginHorizontal: 10,
  },
  plusIcon: {
    width: 40,
    height: 40,
    tintColor: "#1267E9",
    marginTop: -20,
    // marginRight: -60,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
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
    marginVertical: 20,
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
  textStyle: {
    color: "#1267E9",
    fontSize: 16,
    marginHorizontal: 8,
    marginVertical: 5,
  },
});
