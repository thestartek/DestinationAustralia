import { View, ScrollView, Image, StyleSheet, Text, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../../Firebase";
import { onSnapshot, doc } from "firebase/firestore";
import AddComment from "./AddComment";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";

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
          <AddComment post={post} />

          <ScrollView>
            <View style={{ width: "80%" }}>
              {post.comments.map((comment, index) => (
                <View key={index} style={styles.commentContainer}>
                  <TouchableOpacity style={{ flexDirection: "row" }}>
                    {comment.profile_picture != null ? (
                      <Image
                        source={{ uri: comment.profile_picture }}
                        style={styles.profile}
                      />
                    ) : (
                      <Image
                        source={{
                          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FprofileIcon.png?alt=media&token=e822d7b0-f1a7-4d58-ae70-83e1b3952026",
                        }}
                        style={[styles.profile, { tintColor: "grey" }]}
                      />
                    )}
                  </TouchableOpacity>

                  <View style={styles.commentBox}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          // marginHorizontal: 10,
                          fontWeight: "bold",
                          color: "#1267E9",
                        }}
                      >
                        {comment.fullname}
                      </Text>
                    </TouchableOpacity>

                    <Text style={{ fontWeight: "normal", color: "black" }}>
                      {comment.comment}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={[styles.button]}>
              <Text
                style={{
                  color: "grey",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 500,
                }}
              ></Text>
            </View>
          </ScrollView>
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
  commentContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
  },
  commentBox: {
    marginHorizontal: 10,
    maxWidth: "100%",
    backgroundColor: "#ececec",
    padding: 8,
    borderRadius: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },

  modalView: {
    marginTop: 250,
    // marginBottom: 100,
    // flex: 1,
    // justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
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
  deleteButtonText: {
    color: "red",
    fontWeight: "900",
    textAlign: "center",
  },
  doneButtonText: {
    color: "grey",
    fontWeight: "900",
    textAlign: "center",
  },
});
