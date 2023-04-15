import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import { Divider } from "react-native-paper";

// export const PoinsTable = () => {
//   return (
//     <View style={styles.outerContainer}>
//       <Text>PoinsTable</Text>
//     </View>
//   );
// };

export const Age = () => {
  const [checkAge1825, setCheckAge1825] = useState(false);
  const [checkAge2533, setCheckAge2533] = useState(false);
  const [checkAge3340, setCheckAge3340] = useState(false);
  const [checkAge4045, setCheckAge4045] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Age</Text>

      <Text style={styles.subHeadingText}>
        Select your age band <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          At least 18 but less than 25 years
        </Text>

        {checkAge1825 ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCheckAge1825(true),
              setCheckAge2533(false),
              setCheckAge3340(false),
              setCheckAge4045(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          At least 25 but less than 33 years
        </Text>

        {checkAge2533 ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCheckAge1825(false),
              setCheckAge2533(true),
              setCheckAge3340(false),
              setCheckAge4045(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          At least 33 but less than 40 years
        </Text>

        {checkAge3340 ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCheckAge1825(false),
              setCheckAge2533(false),
              setCheckAge3340(true),
              setCheckAge4045(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          At least 40 but less than 45 years
        </Text>

        {checkAge4045 ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCheckAge1825(false),
              setCheckAge2533(false),
              setCheckAge3340(false),
              setCheckAge4045(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const EnglishLanguage = () => {
  const [competentEng, setCompetentEng] = useState(false);
  const [proficientEng, setProficientEng] = useState(false);
  const [superiorEng, setSuperiorEng] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>English language skills</Text>

      <Text style={styles.subHeadingText}>
        Select your English language ability{" "}
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Competent English</Text>

        {competentEng ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCompetentEng(true),
              setProficientEng(false),
              setSuperiorEng(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Proficient English</Text>

        {proficientEng ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCompetentEng(false),
              setProficientEng(true),
              setSuperiorEng(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Superior English</Text>

        {superiorEng ? (
          <TouchableOpacity
            style={[styles.checkBoxOuter, { borderColor: "#1267E9" }]}
          >
            <Image
              style={styles.checkedImage}
              source={{ uri: "https://bit.ly/trueIcon" }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => [
              setCompetentEng(false),
              setProficientEng(false),
              setSuperiorEng(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  selectionBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  subHeadingText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#1267E9",
    marginHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    marginVertical: 10,
  },
  checkBoxOuter: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: "darkgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  checkedImage: {
    height: 18,
    width: 18,
    tintColor: "#1267E9",
  },
});
