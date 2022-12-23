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
import YoutubePlayer from "react-native-youtube-iframe";

const PTE = () => {
  const [collapsePTE, setCollapsePTE] = useState(true);
  const [collapseP1, setCollapseP1] = useState(true);
  const [collapseP10, setCollapseP10] = useState(true);
  const [collapseP11, setCollapseP11] = useState(true);
  const [collapseP12, setCollapseP12] = useState(true);
  const [collapseP13, setCollapseP13] = useState(true);
  const [collapseP14, setCollapseP14] = useState(true);
  const [collapseP15, setCollapseP15] = useState(true);
  const [collapseP16, setCollapseP16] = useState(true);
  const [collapseP17, setCollapseP17] = useState(true);

  const [collapseP2, setCollapseP2] = useState(true);
  const [collapseP21, setCollapseP21] = useState(true);
  const [collapseP22, setCollapseP22] = useState(true);
  const [collapseP23, setCollapseP23] = useState(true);
  const [collapseP24, setCollapseP24] = useState(true);
  const [collapseP25, setCollapseP25] = useState(true);

  const [collapseP3, setCollapseP3] = useState(true);
  const [collapseP31, setCollapseP31] = useState(true);
  const [collapseP32, setCollapseP32] = useState(true);
  const [collapseP33, setCollapseP33] = useState(true);
  const [collapseP34, setCollapseP34] = useState(true);
  const [collapseP35, setCollapseP35] = useState(true);
  const [collapseP36, setCollapseP36] = useState(true);
  const [collapseP37, setCollapseP37] = useState(true);
  const [collapseP38, setCollapseP38] = useState(true);

  const collapseAll = () => {
    setCollapseP1(true),
      setCollapseP2(true),
      setCollapseP3(true),
      setCollapseP10(true),
      setCollapseP11(true),
      setCollapseP12(true),
      setCollapseP13(true),
      setCollapseP14(true),
      setCollapseP15(true),
      setCollapseP16(true),
      setCollapseP17(true);
    setCollapseP21(true),
      setCollapseP22(true),
      setCollapseP23(true),
      setCollapseP24(true),
      setCollapseP25(true),
      setCollapseP31(true),
      setCollapseP32(true),
      setCollapseP33(true),
      setCollapseP34(true),
      setCollapseP35(true),
      setCollapseP36(true),
      setCollapseP37(true),
      setCollapseP38(true);
  };

  const collapseSpeaking = () => {
    setCollapseP10(true),
      setCollapseP11(true),
      setCollapseP12(true),
      setCollapseP13(true),
      setCollapseP14(true),
      setCollapseP15(true),
      setCollapseP16(true),
      setCollapseP17(true);
  };

  const collapseReading = () => {
    setCollapseP21(true),
      setCollapseP22(true),
      setCollapseP23(true),
      setCollapseP24(true),
      setCollapseP25(true);
  };

  const collapseListening = () => {
    setCollapseP31(true),
      setCollapseP32(true),
      setCollapseP33(true),
      setCollapseP34(true),
      setCollapseP35(true),
      setCollapseP36(true),
      setCollapseP37(true),
      setCollapseP38(true);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => [setCollapsePTE(!collapsePTE), collapseAll()]}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>PTE Academic</Text>
          {collapsePTE ? (
            <AntDesign name="downcircleo" size={20} color="white" />
          ) : (
            <AntDesign name="upcircleo" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      {/* /////////////// Speaking and Writing ////////////////// */}
      <Collapsible collapsed={collapsePTE} align="center">
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => [
              setCollapseP1(!collapseP1),
              setCollapseP2(true),
              setCollapseP3(true),
              collapseSpeaking(),
            ]}
          >
            <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
              Speaking and Writing (54-67 minutes)
            </Text>
            <Divider bold={true} />
          </TouchableOpacity>
          <Collapsible collapsed={collapseP1}>
            <Text style={styles.contentText}>
              This part of test contains seven different question types, and
              tests your speaking and writing skills.
            </Text>

            <View style={{ marginHorizontal: 10 }}>
              {/* //////////////// 0. Personal Introduction /////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(!collapseP10),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  {"    "}Personal Introduction
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP10}>
                <Text style={styles.contentText}>
                  - This question does not contribute to your score. It is an
                  opportunity for you to get familiar with PTE test technology
                  and to help you prepare for your speaking and listening
                  questions.
                </Text>
                <Text style={styles.contentText}>
                  - You will have 25 seconds to read the prompt and prepare your
                  response, and then 30 seconds to record your response. You are
                  only able to record your answer once.
                </Text>
              </Collapsible>
              {/* ///////////////// 1. Read Aloud /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(!collapseP11),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>1. Read Aloud</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP11}>
                <Text style={styles.contentText}>
                  - For this item type, text will appear on the screen and you
                  need to read it aloud.
                </Text>
                <Text style={styles.contentText}>
                  - You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  - After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  - If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  - You are only able to record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading and Speaking
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 2. Repeat Sentence /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(!collapseP12),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>2. Repeat Sentence</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP12}>
                <Text style={styles.contentText}>
                  - For this item type you need to repeat the sentence after you
                  listen a recording of the sentence.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to plays automatically. When the audio
                  finishes, the microphone opens and the recording status box
                  shows “Recording”.
                </Text>
                <Text style={styles.contentText}>
                  - Speak into the microphone immediately (there is no short
                  tone) and repeat exactly what you heard.
                </Text>
                <Text style={styles.contentText}>
                  - You are not able to replay the audio. You are only able to
                  record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Speaking
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"S9x0S9J6TEY"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 3. Describe Image /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(!collapseP13),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>3. Describe Image</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP13}>
                <Text style={styles.contentText}>
                  - For this item type, an image appears on the screen and you
                  need to describe the image in detail.
                </Text>
                <Text style={styles.contentText}>
                  - You have 25 seconds to study the image and prepare your
                  response.
                </Text>
                <Text style={styles.contentText}>
                  - After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  - If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  - You are only able to record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Speaking
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"GUi5k3SaJgI"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 4. Re-tell Lecture /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(!collapseP14),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>4. Re-tell Lecture</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP14}>
                <Text style={styles.contentText}>
                  - For this item type, you need to re-tell the lecture in your
                  own words after listening to or watching a lecture.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You may also see an
                  image related to the audio. After the audio finishes, you have
                  10 seconds to prepare.
                </Text>
                <Text style={styles.contentText}>
                  - After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  - While the audio is playing, you can take notes on the
                  erasable noteboard provided.
                </Text>
                <Text style={styles.contentText}>
                  - You are only able to record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Speaking
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"nxq4_zPlF8k"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 5. Answer Short Question /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(!collapseP15),
                  setCollapseP16(true),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  5. Answer Short Question
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP15}>
                <Text style={styles.contentText}>
                  - For this item type you need to listening to a question and
                  answer with a single word or a few words.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You may also see an
                  image.
                </Text>
                <Text style={styles.contentText}>
                  - Speak into the microphone immediately (there is no short
                  tone) and answer the question with one or a few words.
                </Text>
                <Text style={styles.contentText}>
                  - If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  - You are not able to replay the audio. You are only able to
                  record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Speaking
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"_Q_UwtcFhDY"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 6. Summarize written text /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(!collapseP16),
                  setCollapseP17(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  6. Summarize Written Text
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP16}>
                <Text style={styles.contentText}>
                  - For this item type, write a one-sentence summary of the
                  passage after reading the text.
                </Text>
                <Text style={styles.contentText}>
                  - You have 10 minutes to write your summary.
                </Text>
                <Text style={styles.contentText}>
                  - Make sure to include the main points of the reading passage
                  in a full, single sentence of no more than 75 words.
                </Text>
                <Text style={styles.contentText}>
                  - You will need to use complex or compound sentence to be able
                  to summarize the main point of the passage and also briefly
                  mention the supporting details.
                </Text>
                <Text style={styles.contentText}>
                  - There are also cut, copy and paste buttons which you may use
                  while constructing your summary.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading and Writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"IQdI-uNTScU"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 7. Essay /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP10(true),
                  setCollapseP11(true),
                  setCollapseP12(true),
                  setCollapseP13(true),
                  setCollapseP14(true),
                  setCollapseP15(true),
                  setCollapseP16(true),
                  setCollapseP17(!collapseP17),
                ]}
              >
                <Text style={styles.contentHeading}>7. Essay</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP17}>
                <Text style={styles.contentText}>
                  - For this item type you need to write a 200-300 word essay on
                  a given topic.
                </Text>
                <Text style={styles.contentText}>
                  - You have 20 minutes to write your essay.
                </Text>
                <Text style={styles.contentText}>
                  - Make sure to write a minimum of 200 words, but no more than
                  300 words. The Word Count at the bottom of the screen counts
                  the number of words you write.
                </Text>
                <Text style={styles.contentText}>
                  - There are also cut, copy and paste buttons, which you may
                  choose to use while constructing your response.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"N17a1HmBH9o"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* ////////////////// Reading /////////////////// */}
          <TouchableOpacity
            onPress={() => [
              setCollapseP1(true),
              setCollapseP2(!collapseP2),
              setCollapseP3(true),
              collapseReading(),
            ]}
          >
            <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
              Reading (29-30 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseP2}>
            <Text style={styles.contentText}>
              This part of test contains five different question types, and
              tests your ability to read academic English.
            </Text>

            <View style={{ marginHorizontal: 10 }}>
              {/* ///////////////// 1. Reading & writing: Fill in the blanks /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP21(!collapseP21),
                  setCollapseP22(true),
                  setCollapseP23(true),
                  setCollapseP24(true),
                  setCollapseP25(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  1. Reading and Writing: Fill in the Blanks
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP21}>
                <Text style={styles.contentText}>
                  - For this item type, you need to select the most appropriate
                  words from a drop-down list to restore the text.
                </Text>
                <Text style={styles.contentText}>
                  - There is a passage with some missing words. Beside each gap,
                  there is a button with a drop-down list. Select the option you
                  think best fills the gap.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading and Writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"HeG2ktd8j_Q"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 2. Multiple Choice, Multiple answers /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP21(true),
                  setCollapseP22(!collapseP22),
                  setCollapseP23(true),
                  setCollapseP24(true),
                  setCollapseP25(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  2. Multiple Choice, Multiple Answers
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP22}>
                <Text style={styles.contentText}>
                  - For this item type, you need to read the passage and answer
                  the multiple-choice question.
                </Text>
                <Text style={styles.contentText}>
                  - You need to select all the options that you think are
                  correct from the list of possible options.
                </Text>
                <Text style={styles.contentText}>
                  The options you select are highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"z8bPPzNOsHo"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 3. Reorder paragraphs /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP21(true),
                  setCollapseP22(true),
                  setCollapseP23(!collapseP23),
                  setCollapseP24(true),
                  setCollapseP25(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  3. Re-order Paragraphs
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP23}>
                <Text style={styles.contentText}>
                  - For this item type, you need to restore the original order
                  of the text by selecting text boxes and dragging them across
                  the screen.
                </Text>
                <Text style={styles.contentText}>
                  - Tips: Find the topic sentence first
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"m6KEzUzo644"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 4. Fill in the blanks /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP21(true),
                  setCollapseP22(true),
                  setCollapseP23(true),
                  setCollapseP24(!collapseP24),
                  setCollapseP25(true),
                ]}
              >
                <Text style={styles.contentHeading}>4. Fill in the Blanks</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP24}>
                <Text style={styles.contentText}>
                  - For this item type, you need to drag and drop words across
                  the screen to correctly fill in the gaps in the text.
                </Text>
                <Text style={styles.contentText}>
                  - There is a passage with some missing words. You have a list
                  of words in the blue box that you can use to fill the gaps in
                  the text.
                </Text>
                <Text style={styles.contentText}>
                  - There are more words than gaps so you will not use all the
                  words provided.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"ozQgFxJNfIA"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 5. Multiple choice, Single Answer /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP21(true),
                  setCollapseP22(true),
                  setCollapseP23(true),
                  setCollapseP24(true),
                  setCollapseP25(!collapseP25),
                ]}
              >
                <Text style={styles.contentHeading}>
                  5. Multiple Choice, Single Answer
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP25}>
                <Text style={styles.contentText}>
                  - For this item type, you need to read the passage and answer
                  the multiple-choice question.
                </Text>
                <Text style={styles.contentText}>
                  - There are several possible options but only one is correct.
                </Text>
                <Text style={styles.contentText}>
                  - The option you select is highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"-LBv0uLD2mI"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* //////////////// Listening //////////////// */}
          <TouchableOpacity
            onPress={() => [
              setCollapseP1(true),
              setCollapseP2(true),
              setCollapseP3(!collapseP3),
              collapseListening(),
            ]}
          >
            <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
              Listening (30-43 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseP3}>
            <Text style={styles.contentText}>
              This part of test contains eight different question types, and
              tests your listening skills.
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* //////////////// 1. Summarize spoken text /////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(!collapseP31),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  1. Summarize Spoken Text
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP31}>
                <Text style={styles.contentText}>
                  - For this item type, you will hear an audio recording and
                  will need to write a 50-70 word summary of what you heard.
                </Text>
                <Text style={styles.contentText}>
                  - The Word Count at the bottom of the screen counts the number
                  of words you write. Make sure to write a minimum of 50 words,
                  but no more than 70 words.
                </Text>
                <Text style={styles.contentText}>
                  - You have 10 minutes to listen and write your summary.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - There are also cut, copy and paste buttons, which you may
                  choose to use while constructing your summary.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"rnwnkj1y-CY"}
                />
              </Collapsible>
              {/* ///////////////// 2. Multiple choice, multiple answers /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(!collapseP32),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  2. Multiple Choice, Multiple Answers
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP32}>
                <Text style={styles.contentText}>
                  - For this item type, you will listen to the recording and
                  answer the multiple-choice question.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - You need to select all of the response options that you
                  think are correct from the list of possible options.
                </Text>
                <Text style={styles.contentText}>
                  - The options you select are highlighted in yellow.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"zjHQJJ42kao"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 3. Fill in the Blanks /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(!collapseP33),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>3. Fill in the Blanks</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP33}>
                <Text style={styles.contentText}>
                  - For this item type, you are presented with a transcript of
                  the audio recording; however, some words are missing. Restore
                  the transcript by typing in the missing words.
                </Text>
                <Text style={styles.contentText}>
                  - The audio plays automatically. You are only able to listen
                  to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - Click on each gap and type in the missing word. You can also
                  use the Tab button on the keyboard to move between gaps.
                </Text>
                <Text style={styles.contentText}>
                  - While the audio is playing, you can take notes on the
                  erasable noteboard provided and then fill in the gaps.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"FITSjRwfHWg"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 4. Highlight Correct Summary /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(!collapseP34),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  4. Highlight Correct Summary
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP34}>
                <Text style={styles.contentText}>
                  - For this item type, you need to select the summary that best
                  matches the recording.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - There are several options but only one is correct.
                </Text>
                <Text style={styles.contentText}>
                  - The option you select is highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"T5JX6V5qPrI"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 5. Multiple Choice, Single Answer /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(!collapseP35),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  5. Multiple Choice, Single Answer
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP35}>
                <Text style={styles.contentText}>
                  - For this item type, you need to listen to the recording and
                  answer the multiple-choice question.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - There are several options but only one is correct.
                </Text>
                <Text style={styles.contentText}>
                  - The option you select is highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"CFcRw1Pg_1g"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 6. Select Missing Word /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(!collapseP36),
                  setCollapseP37(true),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  6. Select Missing Word
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP36}>
                <Text style={styles.contentText}>
                  - For this item type, the last word or group of words in the
                  recording has been replaced by a beep sound. Select the most
                  appropriate option to complete the recording.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - There are several options but only one is correct.
                </Text>
                <Text style={styles.contentText}>
                  - The option you select is highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"irHRxX-fyu8"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 7. Highlight Incorrect Words /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(!collapseP37),
                  setCollapseP38(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  7. Highlight Incorrect Words
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP37}>
                <Text style={styles.contentText}>
                  - For this item type, you are presented with a transcript of
                  the audio recording; however, the transcript contains some
                  errors. While listening and reading, you need to select the
                  words in the text that differ from those that the speaker
                  says.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to plays automatically. You are only able
                  to listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - The words you select are highlighted in yellow.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Reading
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"cYfaVAfKdhw"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>

              {/* /////////////// 8. Write from Dictation /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setCollapseP31(true),
                  setCollapseP32(true),
                  setCollapseP33(true),
                  setCollapseP34(true),
                  setCollapseP35(true),
                  setCollapseP36(true),
                  setCollapseP37(true),
                  setCollapseP38(!collapseP38),
                ]}
              >
                <Text style={styles.contentHeading}>
                  8. Write from Dictation
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseP38}>
                <Text style={styles.contentText}>
                  - For this item type, you hear a short sentence. Type the
                  sentence into the response box at the bottom of the screen.
                </Text>
                <Text style={styles.contentText}>
                  - The audio begins to play automatically. You are only able to
                  listen to the audio recording once.
                </Text>
                <Text style={styles.contentText}>
                  - While the audio is playing, you can take notes on the
                  erasable noteboard provided.
                </Text>
                <Text style={styles.contentText}>
                  - Don't forget to check your spelling.
                </Text>
                <Text
                  style={[
                    styles.contentText,
                    { marginBottom: 20, fontWeight: "bold" },
                  ]}
                >
                  Skils Assessed: Listening and Writing
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"TDSH3GIja4k"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>
            </View>
          </Collapsible>
        </View>
      </Collapsible>
    </View>
  );
};

export default PTE;

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
  contentHeading: {
    fontSize: 16,
    // fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  contentText: { margin: 5, color: "#545050", lineHeight: 20 },
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
