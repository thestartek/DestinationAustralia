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
          <Text style={styles.headerText}>Pearson test of English (PTE)</Text>
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
                  This question does not contribute to your score. It is an
                  opportunity for you to get familiar with PTE test technology
                  and to help you prepare for your speaking and listening
                  questions.
                </Text>
                <Text style={styles.contentText}>
                  You will have 25 seconds to read the prompt and prepare your
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
                />
                <View style={{ marginVertical: -40 }}></View>
              </Collapsible>
            </View>

            {/* <YoutubePlayer height={300} play={false} videoId={"S9x0S9J6TEY"} /> */}
            {/* <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.pearsonpte.com/pte-academic/speaking-writing"
                )
              }
            >
              <Text style={{ fontSize: 18, color: "#1267E9" }}>Learn more</Text>
            </TouchableOpacity> */}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  This question does not contribute to your score. It is an
                  opportunity for you to get familiar with PTE test technology
                  and to help you prepare for your speaking and listening
                  questions.
                </Text>
                <Text style={styles.contentText}>
                  You will have 25 seconds to read the prompt and prepare your
                  response, and then 30 seconds to record your response. You are
                  only able to record your answer once.
                </Text>
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
                  For this item type you need to read a written text aloud.
                </Text>
                <Text style={styles.contentText}>
                  You have 30-40 seconds to read the text and prepare.
                </Text>
                <Text style={styles.contentText}>
                  After a short tone start speaking immediately. Do not start
                  speaking before the microphone opens because your voice will
                  not be recorded.
                </Text>
                <Text style={styles.contentText}>
                  If you remain silent for longer than three seconds, the
                  recording will stop.
                </Text>
                <Text style={styles.contentText}>
                  You are only able to record your response once.
                </Text>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={"gHDr9n7xt3U"}
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
  contentText: { margin: 5, color: "#545050" },
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
