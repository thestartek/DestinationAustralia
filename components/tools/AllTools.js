import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export const PrPointsCalculator = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("PR Points")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FPrPoints_Logo.png?alt=media&token=b7a7b9b6-8fbc-4b33-9fb2-51764b5040b1",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>PR Points{"\n"}Calculator</Text>
    </TouchableOpacity>
  );
};

export const ExploreAustralia = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Explore Australia")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FaustraliaIcon.png?alt=media&token=06c8314d-dfa1-43f3-8ea9-0d9f7e33e753",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Explore{"\n"}Australia</Text>
    </TouchableOpacity>
  );
};

export const UniversityFinder = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("University Finder")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FuniversityFinder.png?alt=media&token=1b613e85-1e26-4d35-ad20-366fb6e00e56",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>University{"\n"}Finder</Text>
    </TouchableOpacity>
  );
};

export const UsefulLinks = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Useful Links")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FUsefulLinks_Logo.png?alt=media&token=5b87e397-d4dc-48a6-a513-5dfb2a2ede31",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Useful{"\n"}Links</Text>
    </TouchableOpacity>
  );
};

export const ImportantContacts = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Important Contacts")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FImportantContacts_Logo.png?alt=media&token=274dee5e-80b7-4667-bacf-be9df1445294",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Important{"\n"}Contacts</Text>
    </TouchableOpacity>
  );
};

export const ScholarshipFinder = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Scholarship Finder")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FScholarshipFinder_Logo.png?alt=media&token=b77527b5-f586-4f54-8250-b47ed2a6ef01",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Scholarship{"\n"}Finder</Text>
    </TouchableOpacity>
  );
};

export const EnglishTestPreparation = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("English Tests Preparation")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FlearnIcon.png?alt=media&token=758a9d79-0c98-440f-922d-9309c64c57df",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>English Tests{"\n"}Preparation</Text>
    </TouchableOpacity>
  );
};
export const ResumeBuilder = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Resume Builder")}
      style={styles.innerContainer}
    >
      <Image
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2FResumeBuilder_Logo.png?alt=media&token=7f8a6b94-d421-4ca4-bc89-7ee12a822f7f",
        }}
        style={styles.toolsImage}
      />
      <Text style={styles.toolsName}>Resume{"\n"}Builder</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    // marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    // width: "16%"
  },
  toolsImage: {
    width: 35,
    height: 35,
    tintColor: "#1267E9",
    resizeMode: "contain",
  },
  toolsName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 12,
    // color: "#1267E9"
  },
});
