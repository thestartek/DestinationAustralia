import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/JourneytoAustralia_Logo.png?alt=media&token=8cf55980-84e6-4e01-9e6e-6aa6213426a5",
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={{ marginTop: 20, marginBottom: 10, fontSize: 14 }}>
          Connect with us:
        </Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/starteknp")
            }
          >
            <FontAwesome5 name="facebook" size={25} color="#1267E9" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UCZ9yNb94w_SFsz7rQ1LGkyw"
              )
            }
          >
            <Entypo name="youtube-with-circle" size={25} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/starteknp/")
            }
          >
            <Image
              style={{ height: 24, width: 24 }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FInstagram.png?alt=media&token=c52dd2e6-abd3-4955-873e-709eeece73bc",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 5 }}
            onPress={() =>
              Linking.openURL("https://www.tiktok.com/@starteknp/")
            }
          >
            <Image
              style={{ height: 24, width: 24 }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FTikTok_Logo.png?alt=media&token=b616ca07-d485-47a2-82f9-6c892f0e47b3",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 4 }}>
          <Text>Powered by: </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => Linking.openURL("https://www.starteknp.com")}
          >
            <Image
              style={{ height: 20, width: 20, marginHorizontal: 5 }}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/StarTek_Logo_Circular.gif?alt=media&token=fe95f337-e6af-4a9a-959f-b1baa433f6b5",
              }}
            />
            <Text>StarTek</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ marginBottom: 50 }}>Version 1.0.2</Text>
      </View>

      {/* <DrawerItem
        label="Home"
        onPress={() => Linking.openURL("https://starteknp.com")}
      /> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#1267E9",
  },
  headerContainer: {
    // backgroundColor: "#1267E9",
    alignItems: "center",
    marginVertical: 20,
  },
  headerImage: {
    width: 100,
    height: 100,
    // marginVertical: 20,
  },
  bodyContainer: {
    backgroundColor: "white",
    padding: 5,
  },
  footerContainer: {
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
  },
  socialIcons: {
    flexDirection: "row",
  },
});