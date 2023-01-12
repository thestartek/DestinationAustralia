import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ height: 40, width: 30, tintColor: "white" }}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FmenuBar.png?alt=media&token=6082ddeb-9ab1-4cc1-9e7c-180072c65b33",
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <Image
        source={require("../assets/Picture1.png")}
        style={{ height: 50, width: 200, transform: [{rotate: '5deg'}] }}
      /> */}

      <Text style={styles.headerText}>Journey to Australia</Text>

      {/* <Image
          source={require("../../assets/logoRectangle.png")}
          style={styles.logo}
        /> */}

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=> navigation.push("Notifications")}>
          <Image
            style={styles.icons}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FnotificationIcon_Active.png?alt=media&token=98374cc5-0a7d-461b-a826-a3cacc0a2b6c",
            }}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>??</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/notificationIcon.png")}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginHorizontal: 10,
    //backgroundColor: "red",
    //height: 90,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 40,
  },

  iconContainer: {
    width: 80,
    //marginLeft: 25,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },

  icons: {
    width: 30,
    height: 25,
    resizeMode: "contain",
    tintColor: "white",
  },
  // unreadBadge: {
  //   backgroundColor: "red",
  //   position: "absolute",
  //   left: 10,
  //   bottom: -10,
  //   width: 25,
  //   height: 18,
  //   borderRadius: 25,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   zIndex: 100,
  // },
  // unreadBadgeText: {
  //   color: "white",
  // },
});
