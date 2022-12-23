import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Collapsible from "react-native-collapsible";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

import * as WebBrowser from "expo-web-browser";
import YoutubePlayer from "react-native-youtube-iframe";

const TOEFL = () => {
  const [collapseTOEFL, setcollapseTOEFL] = useState(true);
  const [collapseT1, setcollapseT1] = useState(true);
  const [collapseT2, setcollapseT2] = useState(true);
  const [collapseT3, setcollapseT3] = useState(true);
  const [collapseT4, setcollapseT4] = useState(true);

  return (
    <View>
      <TouchableOpacity
        onPress={() => [
          setcollapseTOEFL(!collapseTOEFL),
          setcollapseT1(true),
          setcollapseT2(true),
          setcollapseT3(true),
          setcollapseT4(true),
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>TOEFL iBT</Text>
          {collapseTOEFL ? (
            <AntDesign name="downcircleo" size={20} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      {/* /////////////// Reading ////////////////// */}
      <Collapsible collapsed={collapseTOEFL} align="center">
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => [
              setcollapseT1(!collapseT1),
              setcollapseT2(true),
              setcollapseT3(true),
              setcollapseT4(true),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Reading (54-72 minutes)
            </Text>
            <Divider bold={true} />
          </TouchableOpacity>
          <Collapsible collapsed={collapseT1}>
            <Text style={styles.contentText}>
              This section includes three or four reading passages, each
              approximately 700 words long, with 10 questions per passage.
            </Text>
            <Text style={styles.contentText}>
              Reading passages are excerpts from university-level textbooks that
              would be used in introductions to a topic. The passages cover a
              variety of subjects.
            </Text>
            <Text style={styles.contentText}>
              Following are the type of questions in Reading:
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* ///////////////// 1. Reading Factual Information /////////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-factual-information.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Reading Factual Information
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 2. Inference and Rhetorical /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-inference-rhetorical-purpose.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Inference and Rhetorical
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 3. Reading Vocabulary /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-vocabulary.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Reading Vocabulary</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 4. Sentence Simplification /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-sentence-simplicification.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Sentence Simplification
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 5. Insert Text Question /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-insert-text-question.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Insert Text Question</Text>
              </TouchableOpacity>
              <Divider bold={true} />
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* ////////////////// Listening /////////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseT1(true),
              setcollapseT2(!collapseT2),
              setcollapseT3(true),
              setcollapseT4(true),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Listening (41-57 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseT2}>
            <Text style={styles.contentText}>
              You will hear lectures and conversations in this section. Both use
              campus-based language.
            </Text>
            <Text style={styles.contentText}>
              There will be 3-4 lectures, some with classroom discussion, each
              3-5 minutes; 6 questions per lecture.
            </Text>
            <Text style={styles.contentText}>
              There will be 2-3 conversations, each 3 minutes; 5 questions per
              conversation.
            </Text>
            <Text style={styles.contentText}>
              You can take notes on any audio item throughout the test to help
              you answer questions.
            </Text>
            <Text style={styles.contentText}>
              Following are the type of questions in Reading:
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* /////////////// 1. Gist-Content and Gist-Purpose /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-gist-content-purpose.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Gist-Content and Gist-Purpose
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 2. Detail /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-detail.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Detail</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 3. Function /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-function.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Function</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 4. Attitude /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-attitude.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Attitude</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 5. Organization /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-organization.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Organization</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 6. Connecting Content /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-connecting-content.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Connecting Content</Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* /////////////// 7. Inference /////////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-inference.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>Inference</Text>
              </TouchableOpacity>
              <Divider bold={true} />
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* //////////////// Speaking //////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseT1(true),
              setcollapseT2(true),
              setcollapseT3(!collapseT3),
              setcollapseT4(true),
            ]}
          >
            <Text style={styles.contentHeadingMain}>Speaking (17 minutes)</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseT3}>
            <Text style={styles.contentText}>
              There are four questions/tasks that resemble real-life situations
              you might encounter both in and outside of a classroom.
            </Text>
            <Text style={styles.contentText}>
              You'll get 15-30 seconds of preparation time before each response,
              and your response will be 45 or 60 seconds long.
            </Text>
            <Text style={styles.contentText}>
              To respond, you'll speak into the microphone and your responses
              will be recorded.
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* //////////////// Question 1: Independent Speaking /////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-independent-question-1.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Question 1: Independent Speaking
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* //////////////// Question 2: Integrated Speaking /////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-integrated-question-2.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Question 2: Integrated Speaking
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* //////////////// Questions 3 and 4: Integrated Speaking /////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-integrated-questions-3-4.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Questions 3 and 4: Integrated Speaking
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
            </View>
          </Collapsible>

          {/* //////////////// Writing //////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseT1(true),
              setcollapseT2(true),
              setcollapseT3(true),
              setcollapseT4(!collapseT4),
            ]}
          >
            <Text style={styles.contentHeadingMain}>Writing (50 minutes)</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseT4}>
            <Text style={styles.contentText}>
              There are two writing tasks that measures your ability to write in
              English in an academic setting, and to present your ideas in a
              clear, well-organized way.
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* //////////////// Question 1: Integrated Writing /////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/writing-integrated.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Question 1: Integrated Writing
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />

              {/* //////////////// Question 2: Independent Writing /////////// */}
              <TouchableOpacity
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    "https://www.ets.org/toefl/test-takers/ibt/transcript/writing-independent.html"
                  )
                }
              >
                <Text style={styles.contentHeading}>
                  Question 2: Independent Writing
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
            </View>
          </Collapsible>
        </View>
      </Collapsible>
    </View>
  );
};

export default TOEFL;

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 26,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#1267E9",
    padding: 12,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    padding: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentHeadingMain: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  contentHeading: {
    fontSize: 16,
    color: "#1267E9",
    marginTop: 10,
    marginBottom: 5,
  },
  contentText: { margin: 5, lineHeight: 20 },
  boldText: { color: "#545050", fontWeight: "bold" },
  moreButton: {
    // backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    // marginVertical: 5,
  },
  videoContent: {
    marginHorizontal: 15,
    backgroundColor: "white",
    marginVertical: 5,
    borderRadius: 5,
  },
});
