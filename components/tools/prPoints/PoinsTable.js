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
        <View>
          <Text style={styles.contentText}>Competent English</Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            At least 6 in IELTS (50 in PTE) or equivalent in other approved
            tests
          </Text>
        </View>
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
        <View>
          <Text style={styles.contentText}>Proficient English</Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            At least 7 in IELTS (65 in PTE) or equivalent in other approved
            tests
          </Text>
        </View>

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
        <View>
          <Text style={styles.contentText}>Superior English</Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            At least 8 in IELTS (79 in PTE) or equivalent in other approved
            tests
          </Text>
        </View>

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

export const OverseasEmployment = () => {
  const [checkOVemp03, setCheckOVemp03] = useState(false);
  const [checkOVemp35, setCheckOVemp35] = useState(false);
  const [checkOVemp58, setCheckOVemp58] = useState(false);
  const [checkOVemp80, setCheckOVemp80] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Overseas skilled employment (Outside Australia)
      </Text>

      <Text style={styles.subHeadingText}>
        Select your work experience outside Australia{" "}
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Less than 3 years</Text>

        {checkOVemp03 ? (
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
              setCheckOVemp03(true),
              setCheckOVemp35(false),
              setCheckOVemp58(false),
              setCheckOVemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 3 but less than 5 years</Text>

        {checkOVemp35 ? (
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
              setCheckOVemp03(false),
              setCheckOVemp35(true),
              setCheckOVemp58(false),
              setCheckOVemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 5 but less than 8 years</Text>

        {checkOVemp58 ? (
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
              setCheckOVemp03(false),
              setCheckOVemp35(false),
              setCheckOVemp58(true),
              setCheckOVemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 8 years</Text>

        {checkOVemp80 ? (
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
              setCheckOVemp03(false),
              setCheckOVemp35(false),
              setCheckOVemp58(false),
              setCheckOVemp80(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const AustralianEmployment = () => {
  const [checkAUemp01, setCheckAUemp01] = useState(false);
  const [checkAUemp13, setCheckAUemp13] = useState(false);
  const [checkAUemp35, setCheckAUemp35] = useState(false);
  const [checkAUemp58, setCheckAUemp58] = useState(false);
  const [checkAUemp80, setCheckAUemp80] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Australian skilled employment (Inside Australia)
      </Text>

      <Text style={styles.subHeadingText}>
        Select your work experience inside Australia{" "}
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Less than 1 year</Text>

        {checkAUemp01 ? (
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
              setCheckAUemp01(true),
              setCheckAUemp13(false),
              setCheckAUemp35(false),
              setCheckAUemp58(false),
              setCheckAUemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 1 but less than 3 years</Text>

        {checkAUemp13 ? (
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
              setCheckAUemp01(false),
              setCheckAUemp13(true),
              setCheckAUemp35(false),
              setCheckAUemp58(false),
              setCheckAUemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 3 but less than 5 years</Text>

        {checkAUemp35 ? (
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
              setCheckAUemp01(false),
              setCheckAUemp13(false),
              setCheckAUemp35(true),
              setCheckAUemp58(false),
              setCheckAUemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 5 but less than 8 years</Text>

        {checkAUemp58 ? (
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
              setCheckAUemp01(false),
              setCheckAUemp13(false),
              setCheckAUemp35(false),
              setCheckAUemp58(true),
              setCheckAUemp80(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>At least 8 years</Text>

        {checkAUemp80 ? (
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
              setCheckAUemp01(false),
              setCheckAUemp13(false),
              setCheckAUemp35(false),
              setCheckAUemp58(false),
              setCheckAUemp80(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const Education = () => {
  const [checkEduDoc, setCheckEduDoc] = useState(false);
  const [checkEduBach, setCheckEduBach] = useState(false);
  const [checkEduDpl, setCheckEduDpl] = useState(false);
  const [checkEduRel, setCheckEduRel] = useState(false);

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Educational qualifications</Text>

      <Text style={styles.subHeadingText}>
        Select your educational qualification{" "}
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          A Doctorate from an Australian educational institution or a Doctorate
          from another educational institution, that is of a recognised
          standard.
        </Text>

        {checkEduDoc ? (
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
              setCheckEduDoc(true),
              setCheckEduBach(false),
              setCheckEduDpl(false),
              setCheckEduRel(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          At least a Bachelor degree from an Australian educational institution
          or at least a Bachelor qualification, from another educational
          institution, that is of a recognised standard.
        </Text>

        {checkEduBach ? (
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
              setCheckEduDoc(false),
              setCheckEduBach(true),
              setCheckEduDpl(false),
              setCheckEduRel(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          A diploma or trade qualification from an Australian educational
          institution.
        </Text>

        {checkEduDpl ? (
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
              setCheckEduDoc(false),
              setCheckEduBach(false),
              setCheckEduDpl(true),
              setCheckEduRel(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>
          Attained a qualification or award recognised by the relevant assessing
          authority for your nominated skilled occupation as being suitable for
          that occupation
        </Text>

        {checkEduRel ? (
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
              setCheckEduDoc(false),
              setCheckEduBach(false),
              setCheckEduDpl(false),
              setCheckEduRel(true),
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
    marginVertical: 15,
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
