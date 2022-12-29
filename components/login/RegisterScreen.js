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
import { ActivityIndicator } from "react-native-paper";

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
  const [checkedAvatar1, setCheckedAvatar1] = useState(false);
  const [checkedAvatar2, setCheckedAvatar2] = useState(false);
  const [checkedAvatar3, setCheckedAvatar3] = useState(false);
  const [checkedAvatar4, setCheckedAvatar4] = useState(false);
  const [checkedAvatar5, setCheckedAvatar5] = useState(false);
  const [checkedAvatar6, setCheckedAvatar6] = useState(false);
  const [checkedAvatar7, setCheckedAvatar7] = useState(false);
  const [checkedAvatar8, setCheckedAvatar8] = useState(false);

  const [loading, setLoading] = useState(false);

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
            country: country,
            info: info,
            profile_picture: image,
          });
          console.log("User added to database");
          Alert.alert("User registered successfully", user.email);
          setLoading(false);
        } catch (e) {
          console.error("Error adding user", e);
        }
      })
      .catch((error) => Alert.alert(error.message));
    // Alert.alert(error.message);
    setLoading(true);
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <AstrikIcon />
          <Text style={styles.textStyle}>Choose your avatar</Text>
        </View>

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
              placeholder="Pssword"
              value={password}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
              secureTextEntry
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AstrikIcon />
            <TextInput
              placeholder="Current country"
              value={country}
              onChangeText={(text) => setCountry(text)}
              style={styles.textInput}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AstrikIcon />
            <TextInput
              placeholder="Current city"
              value={city}
              onChangeText={(text) => setCity(text)}
              style={styles.textInput}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: 20 }} />
            <TextInput
              placeholder="Write your bio (optional)"
              multiline={true}
              autoCapitalize="none"
              value={info}
              onChangeText={(text) => setInfo(text)}
              style={[styles.textInput, { height: 100 }]}
              //onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>

        {fullname == null ||
        email == null ||
        password == null ||
        image == null ||
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
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.buttonText}>Register</Text>
              )}
              {/* <Text style={styles.buttonText}>Register</Text> */}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
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
    marginVertical: 5,
    width: 280,
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
    height: 60,
    width: 60,
    // marginTop: 50,
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
  textStyle: {
    color: "#1267E9",
    //fontWeight: "bold",
    //textAlign: "center",
    fontSize: 16,
  },
});
