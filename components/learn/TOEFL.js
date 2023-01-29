import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

import * as WebBrowser from "expo-web-browser";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const TOEFL = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
      </View>
      {/* /////////////// Reading ////////////////// */}

      <View style={styles.content}>
        <Text style={styles.contentHeadingMain}>Reading (54-72 minutes)</Text>
        <Divider bold={true} />

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
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-factual-information.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Reading Factual Information
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 2. Inference and Rhetorical /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-inference-rhetorical-purpose.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Inference and Rhetorical
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 3. Reading Vocabulary /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-vocabulary.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Reading Vocabulary</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 4. Sentence Simplification /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-sentence-simplicification.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Sentence Simplification
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 5. Insert Text Question /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/reading-insert-text-question.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Insert Text Question</Text>
          </TouchableOpacity>
          <Divider bold={true} />
        </View>

        <Divider bold={true} />

        {/* ////////////////// Listening /////////////////// */}
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>
        <Text style={styles.contentHeadingMain}>Listening (41-57 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          You will hear lectures and conversations in this section. Both use
          campus-based language.
        </Text>
        <Text style={styles.contentText}>
          There will be 3-4 lectures, some with classroom discussion, each 3-5
          minutes; 6 questions per lecture.
        </Text>
        <Text style={styles.contentText}>
          There will be 2-3 conversations, each 3 minutes; 5 questions per
          conversation.
        </Text>
        <Text style={styles.contentText}>
          You can take notes on any audio item throughout the test to help you
          answer questions.
        </Text>
        <Text style={styles.contentText}>
          Following are the type of questions in Reading:
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          {/* /////////////// 1. Gist-Content and Gist-Purpose /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-gist-content-purpose.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Gist-Content and Gist-Purpose
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 2. Detail /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-detail.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Detail</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 3. Function /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-function.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Function</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 4. Attitude /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-attitude.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Attitude</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 5. Organization /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-organization.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Organization</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 6. Connecting Content /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-connecting-content.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Connecting Content</Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* /////////////// 7. Inference /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/listening-inference.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>Inference</Text>
          </TouchableOpacity>
          <Divider bold={true} />
        </View>

        <Divider bold={true} />

        {/* //////////////// Speaking //////////////// */}
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <Text style={styles.contentHeadingMain}>Speaking (17 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          There are four questions/tasks that resemble real-life situations you
          might encounter both in and outside of a classroom.
        </Text>
        <Text style={styles.contentText}>
          You'll get 15-30 seconds of preparation time before each response, and
          your response will be 45 or 60 seconds long.
        </Text>
        <Text style={styles.contentText}>
          To respond, you'll speak into the microphone and your responses will
          be recorded.
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          {/* //////////////// Question 1: Independent Speaking /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-independent-question-1.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Question 1: Independent Speaking
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* //////////////// Question 2: Integrated Speaking /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-integrated-question-2.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Question 2: Integrated Speaking
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* //////////////// Questions 3 and 4: Integrated Speaking /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/speaking-integrated-questions-3-4.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Questions 3 and 4: Integrated Speaking
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />
        </View>

        {/* //////////////// Writing //////////////// */}
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <Text style={styles.contentHeadingMain}>Writing (50 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          There are two writing tasks that measures your ability to write in
          English in an academic setting, and to present your ideas in a clear,
          well-organized way.
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          {/* //////////////// Question 1: Integrated Writing /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/writing-integrated.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Question 1: Integrated Writing
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          {/* //////////////// Question 2: Independent Writing /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() =>
              WebBrowser.openBrowserAsync(
                "https://www.ets.org/toefl/test-takers/ibt/transcript/writing-independent.html"
              )
            }
          >
            <Text style={styles.contentHeadingText}>
              Question 2: Independent Writing
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />
        </View>
      </View>

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
      </View>
    </ScrollView>
  );
};

export default TOEFL;

const styles = StyleSheet.create({
  content: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentHeadingMain: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  contentHeading: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentHeadingText: {
    fontSize: 16,
    color: "#1267E9",
  },
  contentText: { margin: 5, lineHeight: 20 },
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
