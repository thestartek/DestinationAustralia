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
import * as WebBrowser from "expo-web-browser";

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
      <Text style={styles.headerText}>
        Notifications are not available right now.
      </Text>
      <Text style={styles.contentText}>
        We are working hard to make this feature available to our users. Please
        come back later to see notifications.
      </Text>
      <Text style={styles.contentText}>
        For now, you can support us to make this application the bast app for
        Australia related contents by offering your support amount to the
        following PayPal ID.
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
});
