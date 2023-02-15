import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import { auth, db, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert, Keyboard } from "react-native";
import { setDoc, doc } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  uploadBytes,
} from "firebase/storage";

const ThumbnailImage = () => (
  <Image
    style={[styles.profilePic, { tintColor: "grey" }]}
    source={{
      uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
    }}
  />
);

const AstrikIcon = () => {
  return (
    <Image
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FastrikIcon.png?alt=media&token=223f8f78-b137-460c-bbb7-87fe02da4249",
      }}
      style={{ width: 10, height: 10, marginRight: 10, tintColor: "red" }}
    />
  );
};

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);
  const [checkBox, setCheckBox] = useState(false);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    console.log("Result:", result);
    // const tempImage = result.assets[0].uri;
    // const filename = tempImage.substring(tempImage.lastIndexOf("/") + 1);
    // console.log(filename);
    // const extension = filename.split(".").pop();
    // console.log(extension);
    // const name = filename.split(".").slice(0, -1).join(".");
    // console.log(name);
    // const imageFilename = name + Date.now() + "." + extension;
    // console.log(imageFilename);

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
          email +
          "/" +
          image.substring(image.lastIndexOf("/") + 1);
        // const extension = filename.split(".").pop();
        // const name = filename.split(".").slice(0, -1).join(".");
        // const imageFilename = name + Date.now() + "." + extension;

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

  const handleRegister = async () => {
    const imageUrl = await uploadImage();
    console.log("imageUrl: ", imageUrl);
    setLoading(true);

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
            country: country,
            info: info,
            profile_picture: imageUrl,
          });
          console.log("User added to database");
          Alert.alert("User registered successfully", user.email);
          setLoading(false);
        } catch (e) {
          console.error("Error adding user", e);
          setLoading(false);
        }
      })
      .catch((error) => [Alert.alert(error.message), setLoading(false)]);
    // Alert.alert(error.message);
    // setLoading(true);
  };

  return (
    <View>
      <ScrollView>
        <View
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.innerContainer}
        >
          <TouchableOpacity onPress={pickImage}>
            <View style={styles.photoSection}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profilePic} />
              ) : (
                <ThumbnailImage />
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
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AstrikIcon />
              <TextInput
                placeholder="Full Name"
                //autoFocus={true}
                value={fullname}
                //autoCapitalize="none"
                onChangeText={(text) => setFullname(text)}
                style={styles.textInput}
                //returnKeyType = {'next'}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AstrikIcon />
              <TextInput
                placeholder="Email address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.textInput}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AstrikIcon />
              <TextInput
                placeholder="Password"
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                secureTextEntry
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, justifyContent: 'space-between' }}>
              
            <TextInput
                placeholder="Current country"
                value={country}
                onChangeText={(text) => setCountry(text)}
                style={[styles.textInput, styles.textInputSmall]}
              />
              <TextInput
                placeholder="Current city"
                value={city}
                onChangeText={(text) => setCity(text)}
                style={[styles.textInput, styles.textInputSmall]}
              />
            </View>

            <View style={{ alignItems: "center", marginLeft: 20 }}>
              <TextInput
                placeholder="Write your bio"
                multiline={true}
                autoCapitalize="none"
                value={info}
                onChangeText={(text) => setInfo(text)}
                style={styles.textInput}
                //onSubmitEditing={Keyboard.dismiss}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: 20 }} />
            </View>

            {checkBox != true ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setCheckBox(true)}
                  style={styles.checkBoxOuter}
                >
                  <View style={styles.checkBoxInner}></View>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10, marginVertical: 10 }}>
                  I agree to Journey to Australia's {"\n"}{" "}
                  <TouchableOpacity
                    onPress={() => navigation.push("Privacy policy")}
                  >
                    <Text
                      style={{
                        marginHorizontal: 10,
                        marginTop: 4,
                        color: "#1267E9",
                        textDecorationLine: "underline",
                      }}
                    >
                      Terms and Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            ) : (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setCheckBox(false)}
                  style={[styles.checkBoxOuter, styles.checkedBoxOuter]}
                >
                  <View
                    style={[styles.checkBoxInner, styles.checkedBoxInner]}
                  ></View>
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 10,
                    color: "#1267E9",
                  }}
                >
                  I agree to Journey to Australia's {"\n"}{" "}
                  <TouchableOpacity
                    onPress={() => navigation.push("Privacy policy")}
                  >
                    <Text
                      style={{
                        marginHorizontal: 10,
                        marginTop: 4,
                        color: "#1267E9",
                        textDecorationLine: "underline",
                      }}
                    >
                      Terms and Privacy Policy
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            )}
          </View>

          {fullname == null ||
          email == null ||
          password == null ||
          !checkBox ? (
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
                {loading ? (
                  <ActivityIndicator color='white'/>
                ) : (
                  <Text style={styles.buttonText}>Register</Text>
                )}
                {/* <Text style={styles.buttonText}>Register</Text> */}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  outerContainer: {},
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
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
    width: 280,
  },
  textInputSmall: {
    width: 130
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
    borderRadius: 40,
    alignItems: "center",
  },
  buttonUnselected: {
    backgroundColor: "darkgrey",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  textStyle: {
    color: "#1267E9",
    //fontWeight: "bold",
    //textAlign: "center",
    fontSize: 16,
  },
  checkBoxOuter: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "darkgrey",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  checkBoxInner: {
    height: 15,
    width: 15,
    borderRadius: 12,
    backgroundColor: "darkgrey",
  },
  checkedBoxOuter: {
    borderColor: "#1267E9",
  },
  checkedBoxInner: {
    backgroundColor: "#1267E9",
  },
});
