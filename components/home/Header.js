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
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ height: 40, width: 30, tintColor: "#545050" }}
            source={require("../../assets/menuBar.png")}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>Journey to Australia</Text>

      {/* <Image
          source={require("../../assets/logoRectangle.png")}
          style={styles.logo}
        /> */}

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require("../../assets/searchIcon.png")}
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
    </SafeAreaView>
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
    color: "#1267E9",
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
