import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import CountryPicker, { getAllCountries, getCallingCode } from 'react-native-country-picker-modal';

const CountryModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const ListCountry = () => {
    let countries = ["ABC", "BCD", "CDE", "DEF", "EFG"];

    countries.forEach(
       
    )

    for (let country = 0; country < countries.length; country++) {
      const element = countries[country];
      
      return (
        <ScrollView>
          <Text>{element}</Text>
        </ScrollView>
      );
    }

    // for (x in countries) {
    //     const country = x
    //     return (
    //         <View>
    //             <Text>{country}</Text>
    //         </View>
    //     )
    // }

    // return (
    //   <ScrollView>
    //     <View></View>
    //   </ScrollView>
    // );
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.textInput}
        onPress={() => setModalVisible(true)}
      >
        <Text>Choose your country</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text onPress={() => setModalVisible(false)}>Cancel</Text>
          <ListCountry />
        </View>
      </Modal>
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({
  modalView: {
    // justifyContent: "center",
    alignItems: "center",
    height: 500,
    width: "100%",
    backgroundColor: "white",
    marginTop: 100,
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
});

