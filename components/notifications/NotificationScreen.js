import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";

const NotificationScreen = () => {
  const payLink = () => {
    Linking.openURL("https://PayPal.Me/thestartek")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.headerText}>
          Notifications are not available right now.
        </Text>
        <Text style={styles.contentText}>
          We are working hard to make this feature available to our users.
          Please come back later to see notifications.
        </Text>
        <Text style={styles.contentText}>
          This app is a hard work of a team of International students studying
          in Australia. We study full time and work multiple jobs to sustain
          life in Australia and pay a huge amount of tution fee.
        </Text>
        <Text style={styles.contentText}>
          You can show your support by offering a cup of coffee or your own
          support amount to the following PayPal ID. This will greatly motivate
          us to make this application the best app for Australian visa,
          immigration and related contents whilst proving all the useful
          contents for free.
        </Text>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/confidential%2FPayPal_qrCode.png?alt=media&token=fec45c06-f199-4608-a189-4e38af3b44ee",
            }}
            style={{ height: 200, width: 200, marginTop: 20 }}
          />
          <TouchableOpacity onPress={payLink}>
            <Text style={styles.payID}>PayPal.Me/thestartek</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },
  contentText: {
    fontSize: 16,
    marginVertical: 5,
    marginHorizontal: 20,
    lineHeight: 26,
  },
  payID: {
    marginVertical: 20,
    textAlign: "center",
    color: "#1267E9",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1267E9",
    width: "80%",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
