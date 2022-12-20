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
  
  const IELTS = () => {
    const [collapseIELTS, setcollapseIELTS] = useState(true);
    const [collapseI1, setcollapseI1] = useState(true);
    const [collapseI10, setcollapseI10] = useState(true);
    const [collapseI11, setcollapseI11] = useState(true);
    const [collapseI12, setcollapseI12] = useState(true);
    const [collapseI13, setcollapseI13] = useState(true);
    const [collapseI14, setcollapseI14] = useState(true);
    const [collapseI15, setcollapseI15] = useState(true);
    const [collapseI16, setcollapseI16] = useState(true);
    const [collapseI17, setcollapseI17] = useState(true);
  
    const [collapseI2, setcollapseI2] = useState(true);
    const [collapseI21, setcollapseI21] = useState(true);
    const [collapseI22, setcollapseI22] = useState(true);
    const [collapseI23, setcollapseI23] = useState(true);
    const [collapseI24, setcollapseI24] = useState(true);
    const [collapseI25, setcollapseI25] = useState(true);
  
    const [collapseI3, setcollapseI3] = useState(true);
    const [collapseI31, setcollapseI31] = useState(true);
    const [collapseI32, setcollapseI32] = useState(true);
    const [collapseI33, setcollapseI33] = useState(true);
    const [collapseI34, setcollapseI34] = useState(true);
    const [collapseI35, setcollapseI35] = useState(true);
    const [collapseI36, setcollapseI36] = useState(true);
    const [collapseI37, setcollapseI37] = useState(true);
    const [collapseI38, setcollapseI38] = useState(true);
  
    const collapseAll = () => {
      setcollapseI1(true),
        setcollapseI2(true),
        setcollapseI3(true),
        setcollapseI10(true),
        setcollapseI11(true),
        setcollapseI12(true),
        setcollapseI13(true),
        setcollapseI14(true),
        setcollapseI15(true),
        setcollapseI16(true),
        setcollapseI17(true);
      setcollapseI21(true),
        setcollapseI22(true),
        setcollapseI23(true),
        setcollapseI24(true),
        setcollapseI25(true),
        setcollapseI31(true),
        setcollapseI32(true),
        setcollapseI33(true),
        setcollapseI34(true),
        setcollapseI35(true),
        setcollapseI36(true),
        setcollapseI37(true),
        setcollapseI38(true);
    };
  
    const collapseSpeaking = () => {
      setcollapseI10(true),
        setcollapseI11(true),
        setcollapseI12(true),
        setcollapseI13(true),
        setcollapseI14(true),
        setcollapseI15(true),
        setcollapseI16(true),
        setcollapseI17(true);
    };
  
    const collapseReading = () => {
      setcollapseI21(true),
        setcollapseI22(true),
        setcollapseI23(true),
        setcollapseI24(true),
        setcollapseI25(true);
    };
  
    const collapseListening = () => {
      setcollapseI31(true),
        setcollapseI32(true),
        setcollapseI33(true),
        setcollapseI34(true),
        setcollapseI35(true),
        setcollapseI36(true),
        setcollapseI37(true),
        setcollapseI38(true);
    };
    return (
      <View>
        <TouchableOpacity
          onPress={() => [setcollapseIELTS(!collapseIELTS), collapseAll()]}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>IELTS</Text>
            {collapseIELTS ? (
              <AntDesign name="downcircleo" size={20} color="white" />
            ) : (
              <AntDesign name="upcircleo" size={20} color="white" />
            )}
          </View>
        </TouchableOpacity>
  
        {/* /////////////// Speaking and Writing ////////////////// */}
        <Collapsible collapsed={collapseIELTS} align="center">
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => [
                setcollapseI1(!collapseI1),
                setcollapseI2(true),
                setcollapseI3(true),
                collapseSpeaking(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Speaking and Writing (54-67 minutes)
              </Text>
              <Divider bold={true} />
            </TouchableOpacity>
            <Collapsible collapsed={collapseI1}>
              <Text style={styles.contentText}>
                This part of test contains seven different question types, and
                tests your speaking and writing skills.
              </Text>
  
              <View style={{ marginHorizontal: 10 }}>
                {/* //////////////// 0. Personal Introduction /////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseI10(!collapseI10),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    {"    "}Personal Introduction
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI10}>
                  <Text style={styles.contentText}>
                    This question does not contribute to your score. It is an
                    opportunity for you to get familiar with IELTS test technology
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
                    setcollapseI10(true),
                    setcollapseI11(!collapseI11),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>1. Read Aloud</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI11}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(!collapseI12),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>2. Repeat Sentence</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI12}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(!collapseI13),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>3. Describe Image</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI13}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(!collapseI14),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>4. Re-tell Lecture</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI14}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(!collapseI15),
                    setcollapseI16(true),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Answer Short Question
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI15}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(!collapseI16),
                    setcollapseI17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    6. Summarize Written Text
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI16}>
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
                    setcollapseI10(true),
                    setcollapseI11(true),
                    setcollapseI12(true),
                    setcollapseI13(true),
                    setcollapseI14(true),
                    setcollapseI15(true),
                    setcollapseI16(true),
                    setcollapseI17(!collapseI17),
                  ]}
                >
                  <Text style={styles.contentHeading}>7. Essay</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI17}>
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
                    "https://www.pearsonIELTS.com/IELTS-academic/speaking-writing"
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
                setcollapseI1(true),
                setcollapseI2(!collapseI2),
                setcollapseI3(true),
                collapseReading(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Reading (29-30 minutes)
              </Text>
            </TouchableOpacity>
            <Divider bold={true} />
  
            <Collapsible collapsed={collapseI2}>
              <Text style={styles.contentText}>
                This part of test contains five different question types, and
                tests your ability to read academic English.
              </Text>
  
              <View style={{ marginHorizontal: 10 }}>
                {/* ///////////////// 1. Reading & writing: Fill in the blanks /////////////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseI21(!collapseI21),
                    setcollapseI22(true),
                    setcollapseI23(true),
                    setcollapseI24(true),
                    setcollapseI25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    1. Reading and Writing: Fill in the Blanks
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI21}>
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
                    setcollapseI21(true),
                    setcollapseI22(!collapseI22),
                    setcollapseI23(true),
                    setcollapseI24(true),
                    setcollapseI25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    2. Multiple Choice, Multiple Answers
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI22}>
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
                    setcollapseI21(true),
                    setcollapseI22(true),
                    setcollapseI23(!collapseI23),
                    setcollapseI24(true),
                    setcollapseI25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    3. Re-order Paragraphs
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI23}>
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
                    setcollapseI21(true),
                    setcollapseI22(true),
                    setcollapseI23(true),
                    setcollapseI24(!collapseI24),
                    setcollapseI25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>4. Fill in the Blanks</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI24}>
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
                    setcollapseI21(true),
                    setcollapseI22(true),
                    setcollapseI23(true),
                    setcollapseI24(true),
                    setcollapseI25(!collapseI25),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Multiple Choice, Single Answer
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI25}>
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
                setcollapseI1(true),
                setcollapseI2(true),
                setcollapseI3(!collapseI3),
                collapseListening(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Listening (30-43 minutes)
              </Text>
            </TouchableOpacity>
            <Divider bold={true} />
  
            <Collapsible collapsed={collapseI3}>
              <Text style={styles.contentText}>
                This part of test contains eight different question types, and
                tests your listening skills.
              </Text>
              <View style={{ marginHorizontal: 10 }}>
                {/* //////////////// 1. Summarize spoken text /////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseI31(!collapseI31),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    1. Summarize Spoken Text
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI31}>
                  <Text style={styles.contentText}>
                    This question does not contribute to your score. It is an
                    opportunity for you to get familiar with IELTS test technology
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
                    setcollapseI31(true),
                    setcollapseI32(!collapseI32),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    2. Multiple Choice, Multiple Answers
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI32}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(!collapseI33),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>3. Fill in the Blanks</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI33}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(!collapseI34),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    4. Highlight Correct Summary
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI34}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(!collapseI35),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Multiple Choice, Single Answer
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI35}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(!collapseI36),
                    setcollapseI37(true),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    6. Select Missing Word
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI36}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(!collapseI37),
                    setcollapseI38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    7. Highlight Incorrect Words
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI37}>
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
                    setcollapseI31(true),
                    setcollapseI32(true),
                    setcollapseI33(true),
                    setcollapseI34(true),
                    setcollapseI35(true),
                    setcollapseI36(true),
                    setcollapseI37(true),
                    setcollapseI38(!collapseI38),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    8. Write from Dictation
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseI38}>
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
  
  export default IELTS;
  
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
  