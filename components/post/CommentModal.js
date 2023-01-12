import { View, ScrollView, Image, StyleSheet, Text, Modal, TouchableOpacity, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import AddComment from "./AddComment";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import Comments from "./Comments";
import { Divider } from "react-native-paper";

const windowHeight = Dimensions.get('window').height;

const CommentModal = ({ post }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>Category</Text> */}

          <TouchableOpacity
            style={{marginVertical: 10}}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.doneButtonText}>Back to posts</Text>
          </TouchableOpacity>
          

          <Comments post={post}/>
          <AddComment post={post} />
          <View style={{height: 40}}></View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="commenting-o" size={25} color="#545050" />
      </TouchableOpacity>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    marginTop: 85,
    // marginBottom: 100,
    // flex: 1,
    // justifyContent: "center",
    height: windowHeight - 85,
    width: "100%",
    backgroundColor: "white",
    // borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    // padding: 25,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 250,
    marginBottom: 15,
    padding: 15,
  },
  buttonOpen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1267E9",
    borderWidth: 2,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonOpenText: {
    color: "#1267E9",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#1267E9",
  },
  deleteButton: {
    borderWidth: 2,
    borderColor: "red",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  doneButtonText: {
    color: "grey",
    fontWeight: "900",
    textAlign: "center",
  },
});
