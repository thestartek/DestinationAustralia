import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as MailComposer from "expo-mail-composer";

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

const ContactScreen = () => {
  const [fullname, setFullname] = useState(null);
  const [subject, setSubject] = useState(null);
  const [info, setInfo] = useState(null);

  const handleSend = () => {
    MailComposer.composeAsync({
      subject: subject,
      body: "Sender: " + fullname + "\n" + "\n" + info,
      recipients: "journeytoaustralia@starteknp.com",
    })
      .then((result) => {
        // console.log(result);
        Alert.alert("Your message has been sent !");
        setFullname(null);
        setSubject(null);
        setInfo(null);
      })
      .catch((error) => {
        // console.log(error);
        Alert.alert(
          "Your message can not be sent now !",
          "Please try again later"
        );
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Let us know if you find any issues with the app or want to report any
          matter
        </Text>

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
              placeholder="Subject"
              value={subject}
              onChangeText={(text) => setSubject(text)}
              style={styles.textInput}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 20 }}>
              <AstrikIcon />
            </View>

            <TextInput
              placeholder="Write your concern here"
              multiline={true}
              autoCapitalize="none"
              value={info}
              onChangeText={(text) => setInfo(text)}
              style={[styles.textInput, { height: 100 }]}
              //onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>

        {fullname == null || subject == null || info == null ? (
          <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.buttonUnselected]}>
              <Text style={styles.buttonText}>Send now</Text>
            </View>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSend} style={styles.button}>
              <Text style={styles.buttonText}>Send now</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    marginHorizontal: 20,
    marginVertical: 30,
    lineHeight: 35,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "lightgrey",
    marginVertical: 8,
    width: 280,
  },
  buttonContainer: {
    width: 200,
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
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
