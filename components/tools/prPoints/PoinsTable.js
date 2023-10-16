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
// }

export const Age = ({ setPointsAge }) => {
  const [checkAge1825, setCheckAge1825] = useState(false);
  const [checkAge2533, setCheckAge2533] = useState(false);
  const [checkAge3340, setCheckAge3340] = useState(false);
  const [checkAge4045, setCheckAge4045] = useState(false);

  if (checkAge1825) {
    setPointsAge(25)
  };

  if (checkAge2533) {
    setPointsAge(30)
  };

  if (checkAge3340) {
    setPointsAge(25)
  };

  if (checkAge4045) {
    setPointsAge(15)
  };

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

export const EnglishLanguage = ({ setPointsEng }) => {
  const [competentEng, setCompetentEng] = useState(false);
  const [proficientEng, setProficientEng] = useState(false);
  const [superiorEng, setSuperiorEng] = useState(false);

  if (competentEng) {
    setPointsEng(0)
  };
  if (proficientEng) {
    setPointsEng(10)
  };
  if (superiorEng) {
    setPointsEng(20)
  };

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

export const OverseasEmployment = ({setPointsOVemp}) => {
  const [checkOVemp03, setCheckOVemp03] = useState(false);
  const [checkOVemp35, setCheckOVemp35] = useState(false);
  const [checkOVemp58, setCheckOVemp58] = useState(false);
  const [checkOVemp80, setCheckOVemp80] = useState(false);

  if (checkOVemp03) {
    setPointsOVemp(0)
  };
  if (checkOVemp35) {
    setPointsOVemp(5)
  };
  if (checkOVemp58) {
    setPointsOVemp(10)
  };
  if (checkOVemp80) {
    setPointsOVemp(15)
  };

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

export const AustralianEmployment = ({setPointsAUemp}) => {
  const [checkAUemp01, setCheckAUemp01] = useState(false);
  const [checkAUemp13, setCheckAUemp13] = useState(false);
  const [checkAUemp35, setCheckAUemp35] = useState(false);
  const [checkAUemp58, setCheckAUemp58] = useState(false);
  const [checkAUemp80, setCheckAUemp80] = useState(false);

  if (checkAUemp01) {
    setPointsAUemp(0)
  };
  if (checkAUemp13) {
    setPointsAUemp(5)
  };
  if (checkAUemp35) {
    setPointsAUemp(10)
  };
  if (checkAUemp58) {
    setPointsAUemp(15)
  };
  if (checkAUemp80) {
    setPointsAUemp(20)
  };

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

export const Education = ({setPointsEdu}) => {
  const [checkEduDoc, setcheckEduDoc] = useState(false);
  const [checkEduBach, setCheckEduBach] = useState(false);
  const [checkEduDpl, setCheckEduDpl] = useState(false);
  const [checkEduRel, setCheckEduRel] = useState(false);

  if (checkEduDoc) {
    setPointsEdu(20)
  };
  if (checkEduBach) {
    setPointsEdu(15)
  };
  if (checkEduDpl) {
    setPointsEdu(10)
  };
  if (checkEduRel) {
    setPointsEdu(10)
  };

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
              setcheckEduDoc(true),
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
              setcheckEduDoc(false),
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
              setcheckEduDoc(false),
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
              setcheckEduDoc(false),
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

export const SpecEdu = ({setPointsSpecEdu}) => {
  const [checkSpecEduYes, setCheckSpecEduYes] = useState(false);
  const [checkSpecEduNo, setCheckSpecEduNo] = useState(false);

  if (checkSpecEduYes) {
    setPointsSpecEdu(10)
  };
  if (checkSpecEduNo) {
    setPointsSpecEdu(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Specialist education qualification</Text>

      <Text style={styles.subHeadingText}>
        Do you have a Masters degree by research or a Doctorate degree from an
        Australian educational institution that included at least 2 academic
        years to in a relevant field?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkSpecEduYes ? (
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
            onPress={() => [setCheckSpecEduYes(true), setCheckSpecEduNo(false)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkSpecEduNo ? (
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
            onPress={() => [setCheckSpecEduYes(false), setCheckSpecEduNo(true)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const AusStudy = ({setPointsAusStudy}) => {
  const [checkAusStudyYes, setCheckAusStudyYes] = useState(false);
  const [checkAusStudyNo, setCheckAusStudyNo] = useState(false);

  if (checkAusStudyYes) {
    setPointsAusStudy(5)
  };
  if (checkAusStudyNo) {
    setPointsAusStudy(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Australian study requirement</Text>

      <Text style={styles.subHeadingText}>
        Do you have at least 1 degree, diploma or trade qualification from an
        Australian educational institution that meets the Australian study
        requirement?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkAusStudyYes ? (
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
              setCheckAusStudyYes(true),
              setCheckAusStudyNo(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkAusStudyNo ? (
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
              setCheckAusStudyYes(false),
              setCheckAusStudyNo(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const RegionalStudy = ({setPointsRegStudy}) => {
  const [checkRegionalStudyYes, setCheckRegionalStudyYes] = useState(false);
  const [checkRegionalStudyNo, setCheckRegionalStudyNo] = useState(false);

  if (checkRegionalStudyYes) {
    setPointsRegStudy(5)
  };
  if (checkRegionalStudyNo) {
    setPointsRegStudy(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Study in regional Australia</Text>

      <Text style={styles.subHeadingText}>
        Do you have at least 1 degree, diploma or trade qualification from an
        Australian educational institution that satisfies the Australian study
        requirement obtained while living and studying in an eligible area of
        regional Australia?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkRegionalStudyYes ? (
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
              setCheckRegionalStudyYes(true),
              setCheckRegionalStudyNo(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkRegionalStudyNo ? (
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
              setCheckRegionalStudyYes(false),
              setCheckRegionalStudyNo(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const ProfYear = ({setPointsProfYear}) => {
  const [checkProfYearYes, setCheckProfYearYes] = useState(false);
  const [checkProfYearNo, setCheckProfYearNo] = useState(false);

  if (checkProfYearYes) {
    setPointsProfYear(5)
  };
  if (checkProfYearNo) {
    setPointsProfYear(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Professional year in Australia</Text>

      <Text style={styles.subHeadingText}>
        Did you complete a professional year in Australia?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkProfYearYes ? (
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
              setCheckProfYearYes(true),
              setCheckProfYearNo(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkProfYearNo ? (
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
              setCheckProfYearYes(false),
              setCheckProfYearNo(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const Naati = ({setPointsNaati}) => {
  const [checkNaatiYes, setCheckNaatiYes] = useState(false);
  const [checkNaatiNo, setCheckNaatiNo] = useState(false);

  if (checkNaatiYes) {
    setPointsNaati(5)
  };
  if (checkNaatiNo) {
    setPointsNaati(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Credentialled community language (NAATI)
      </Text>

      <Text style={styles.subHeadingText}>
        Have you been accredited at the paraprofessional level or above,
        certified at the certified provisional level or above, or have a
        community language credential for interpreting or translating by the
        National Accreditation Authority for Translators and Interpreters?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkNaatiYes ? (
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
            onPress={() => [setCheckNaatiYes(true), setCheckNaatiNo(false)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkNaatiNo ? (
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
            onPress={() => [setCheckNaatiYes(false), setCheckNaatiNo(true)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const PartnerSkills = ({setPointsPartner}) => {
  const [partnerSkill, setPartnerSkill] = useState(false);
  const [partnerEng, setPartnerEng] = useState(false);
  const [partnerNo, setPartnerNo] = useState(false);

  if (partnerSkill) {
    setPointsPartner(10)
  };
  if (partnerEng) {
    setPointsPartner(5)
  };
  if (partnerNo) {
    setPointsPartner(10)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Partner skills</Text>

      <Text style={styles.subHeadingText}>
        Select the relevant partner skills qualifications
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
            Your spouse or de facto partner must also be an applicant for this
            visa and meet age, English and skill criteria
          </Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            - were under 45 years old {"\n"}- had competent English {"\n"}- had
            nominated a skilled occupation that is on the same skilled
            occupation list as your nominated skilled occupation {"\n"}- had a
            suitable skills assessment from the relevant assessing authority for
            their nominated skilled occupation, and the assessment wasn't for a
            Subclass 485 visa.
          </Text>
        </View>
        {partnerSkill ? (
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
              setPartnerSkill(true),
              setPartnerEng(false),
              setPartnerNo(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
            Your spouse or de facto partner must also be an applicant for this
            visa and has competent English
          </Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            At least 7 in IELTS (65 in PTE) or equivalent in other approved
            tests
          </Text>
        </View>

        {partnerEng ? (
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
              setPartnerSkill(false),
              setPartnerEng(true),
              setPartnerNo(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
            You are single or your partner is an Australian citizen or permanent
            resident
          </Text>
          <Text style={{ color: "grey", marginBottom: 10 }}>
            At least 8 in IELTS (79 in PTE) or equivalent in other approved
            tests
          </Text>
        </View>

        {partnerNo ? (
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
              setPartnerSkill(false),
              setPartnerEng(false),
              setPartnerNo(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const Nomination = ({setPointsNomination}) => {
  const [checkNominationYes, setCheckNominationYes] = useState(false);
  const [checkNominationNo, setCheckNominationNo] = useState(false);

  if (checkNominationYes) {
    setPointsNomination(5)
  };
  if (checkNominationNo) {
    setPointsNomination(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Nomination
      </Text>

      <Text style={styles.subHeadingText}>
      Have you been invited to apply for a Skilled Nominated visa (subclass 190) 
      and the nominating State or Territory government agency has not withdrawn the nomination?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>Yes</Text>

        {checkNominationYes ? (
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
            onPress={() => [setCheckNominationYes(true), setCheckNominationNo(false)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <Text style={styles.contentText}>No</Text>

        {checkNominationNo ? (
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
            onPress={() => [setCheckNominationYes(false), setCheckNominationNo(true)]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const Sponsor491 = ({setPointsSponsor491}) => {
  const [nominated, setNominated] = useState(false);
  const [sponsored, setSponsored] = useState(false);
  const [noneApp, setNonApp] = useState(false);

  if (nominated) {
    setPointsSponsor491(15)
  };
  if (sponsored) {
    setPointsSponsor491(15)
  };
  if (noneApp) {
    setPointsSponsor491(0)
  };

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>Nomination or Sponsorship</Text>

      <Text style={styles.subHeadingText}>
      Have you been nominated or sponsored to apply for this visa?
        <Text style={{ color: "red" }}>*</Text>
      </Text>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />
      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
          You were invited to apply for a Skilled Work Regional (Provisional) visa 
          because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination
          </Text>
        </View>
        {nominated ? (
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
              setNominated(true),
              setSponsored(false),
              setNonApp(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
          You are being sponsored for a Skilled Work Regional (Provisional) visa 
          by a family member and the Minister has accepted that sponsorship
          </Text>
        </View>

        {sponsored ? (
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
              setNominated(false),
              setSponsored(true),
              setNonApp(false),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>

      <Divider bold={true} style={{ marginHorizontal: 20 }} />

      <View style={styles.selectionBox}>
        <View>
          <Text style={styles.contentText}>
            Not Applicable
          </Text>
        </View>

        {noneApp ? (
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
              setNominated(false),
              setSponsored(false),
              setNonApp(true),
            ]}
            style={styles.checkBoxOuter}
          ></TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const Result189 = ({pointsAge, pointsEng, pointsOVemp, pointsAUemp, pointsEdu, pointsSepcEdu, 
  pointsAusStudy, pointsRegStudy, pointsProfYear, pointsNaati, pointsPartner}) => {
  
    const totalPoints = 0 | pointsAge + pointsEng + pointsOVemp + pointsAUemp + pointsEdu + pointsSepcEdu +
  pointsAusStudy + pointsRegStudy + pointsProfYear + pointsNaati + pointsPartner;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Your total points is <Text style={{ color: '#1267E9' }}>{totalPoints}</Text>
      </Text>
      {/* ... other code ... */}
    </View>
  );
};

export const Result190 = ({pointsAge, pointsEng, pointsOVemp, pointsAUemp, pointsEdu, pointsSepcEdu, 
  pointsAusStudy, pointsRegStudy, pointsProfYear, pointsNaati, pointsPartner, pointsNomination}) => {
  
    const totalPoints = 0 | pointsAge + pointsEng + pointsOVemp + pointsAUemp + pointsEdu + pointsSepcEdu +
  pointsAusStudy + pointsRegStudy + pointsProfYear + pointsNaati + pointsPartner + pointsNomination;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Your total points is <Text style={{ color: '#1267E9' }}>{totalPoints}</Text>
      </Text>
      {/* ... other code ... */}
    </View>
  );
};

export const Result491 = ({pointsAge, pointsEng, pointsOVemp, pointsAUemp, pointsEdu, pointsSepcEdu, 
  pointsAusStudy, pointsRegStudy, pointsProfYear, pointsNaati, pointsPartner, pointsSponsor491}) => {
  
    const totalPoints = 0 | pointsAge + pointsEng + pointsOVemp + pointsAUemp + pointsEdu + pointsSepcEdu +
  pointsAusStudy + pointsRegStudy + pointsProfYear + pointsNaati + pointsPartner + pointsSponsor491;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.headingText}>
        Your total points is <Text style={{ color: '#1267E9' }}>{totalPoints}</Text>
      </Text>
      {/* ... other code ... */}
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
