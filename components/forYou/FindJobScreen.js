import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const textLink = (name, link) => {
  return (
    <Text
      style={styles.linkText}
      onPress={() => WebBrowser.openBrowserAsync(link)}
    >
      {name}
    </Text>
  );
};

const FindJobScreen = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/articles%2Fjob-search-vector.jpeg?alt=media&token=b6da3af5-4cdd-461f-b437-4a0a70c7d89f",
            }}
          />
          <Text style={styles.text}>
            Finding a job as an international student in Australia can be a
            challenging task, but with the right approach, it is definitely
            possible. Here are some tips to help you navigate the job market and
            increase your chances of finding employment:
          </Text>
          <Text style={styles.text}>
            {/* {"\u2022"}{" "} */}
            <Text style={styles.boldText}>
              {"    "}1. Research the job market {"\n"}
            </Text>
            Before you even start applying for jobs, it is important to research
            the job market in the area where you will be studying. This will
            give you an idea of the types of jobs that are available, the
            qualifications required, and the average salary for different
            positions.
          </Text>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}2. Network {"\n"}
            </Text>
            Networking is a key aspect of finding a job, and this is especially
            true for international students. Attend career fairs, join student
            groups, and talk to other international students to learn about job
            opportunities and get advice on how to apply.
          </Text>
          <Text style={styles.text}>
            You can get networking opportunities through{" "}
            <Text>{textLink("LinkedIn", "https://www.linkedin.com/")}</Text>,{" "}
            <Text>{textLink("Meetup", "https://www.meetup.com/")}</Text>,{" "}
            <Text>
              {textLink("Eventbrite", "https://www.eventbrite.com.au/")}
            </Text>
            ,{" "}
            <Text>{textLink("Meetings.com", "https://www.meetings.com/")}</Text>
            , and Facebook groups.
          </Text>

          <Text style={styles.text}>
            {/* {"\u2022"}{" "} */}
            <Text style={styles.boldText}>
              {"    "}3. Be open to any jobs {"\n"}
            </Text>
            Be open-minded about the types of jobs you apply for. Many
            international students work in hospitality or retail while they
            study, which can be a great way to gain work experience and make
            connections.
          </Text>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              {"    "}4. Tailor you Resume {"\n"}
            </Text>
            Tailor your resume to the Australian job market by highlighting your
            relevant skills and experience. Make sure to include any work
            experience you have, even if it was in a different field or country.
          </Text>

          <Text style={styles.text}>
            {/* {"\u2022"}{" "} */}
            <Text style={styles.boldText}>
              {"    "}5. Submit your application {"\n"}
            </Text>
            Once your resume and cover letter are ready, you can submit your
            application online through the employer's website or through a job
            search website.
          </Text>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
          <Text style={styles.text}>
            Some of the top job seeking sites in Australia are:{" "}
            <Text>{textLink("Seek", "https://www.seek.com.au/")}</Text>,{" "}
            <Text>{textLink("Indeed", "https://au.indeed.com/")}</Text>,{" "}
            <Text>{textLink("Jora", "https://au.jora.com/")}</Text>,{" "}
            <Text>{textLink("LInkedIn", "https://au.linkedin.com/jobs")}</Text>,{" "}
            <Text>
              {textLink("glassdoor", "https://www.glassdoor.com.au/")}
            </Text>
            ,{" "}
            <Text>
              {textLink("CareerOne", "https://www.careerone.com.au/")}
            </Text>
            ,{" "}
            <Text>
              {textLink("Gumtree", "https://www.gumtree.com.au/jobs")}
            </Text>
            . Apart form these sites some Facebook pages and groups also list
            available jobs.
          </Text>

          <Text style={styles.text}>
            Lastly, be patient, and don't get discouraged if you don't find a
            job right away. It can take time to find the right opportunity, but
            with persistence and a positive attitude, you will be able to find a
            job in Australia as an international student.
          </Text>
        </View>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </ScrollView>
    </View>
  );
};

export default FindJobScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 200,
    width: "100%",
    marginBottom: 10,
  },
  text: {
    lineHeight: 28,
    padding: 10,
    fontSize: 17,
  },
  boldText: {
    lineHeight: 28,
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    lineHeight: 28,
    padding: 10,
    fontSize: 18,
    color: "#1267E9",
    textDecorationLine: "underline",
  },
});
