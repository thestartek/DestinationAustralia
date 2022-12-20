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
    const [collapseTOEFL, setCollapseTOEFL] = useState(true);
    const [collapseT1, setcollapseT1] = useState(true);
    const [collapseT10, setcollapseT10] = useState(true);
    const [collapseT11, setcollapseT11] = useState(true);
    const [collapseT12, setcollapseT12] = useState(true);
    const [collapseT13, setcollapseT13] = useState(true);
    const [collapseT14, setcollapseT14] = useState(true);
    const [collapseT15, setcollapseT15] = useState(true);
    const [collapseT16, setcollapseT16] = useState(true);
    const [collapseT17, setcollapseT17] = useState(true);
  
    const [collapseT2, setcollapseT2] = useState(true);
    const [collapseT21, setcollapseT21] = useState(true);
    const [collapseT22, setcollapseT22] = useState(true);
    const [collapseT23, setcollapseT23] = useState(true);
    const [collapseT24, setcollapseT24] = useState(true);
    const [collapseT25, setcollapseT25] = useState(true);
  
    const [collapseT3, setcollapseT3] = useState(true);
    const [collapseT31, setcollapseT31] = useState(true);
    const [collapseT32, setcollapseT32] = useState(true);
    const [collapseT33, setcollapseT33] = useState(true);
    const [collapseT34, setcollapseT34] = useState(true);
    const [collapseT35, setcollapseT35] = useState(true);
    const [collapseT36, setcollapseT36] = useState(true);
    const [collapseT37, setcollapseT37] = useState(true);
    const [collapseT38, setcollapseT38] = useState(true);
  
    const collapseAll = () => {
      setcollapseT1(true),
        setcollapseT2(true),
        setcollapseT3(true),
        setcollapseT10(true),
        setcollapseT11(true),
        setcollapseT12(true),
        setcollapseT13(true),
        setcollapseT14(true),
        setcollapseT15(true),
        setcollapseT16(true),
        setcollapseT17(true);
      setcollapseT21(true),
        setcollapseT22(true),
        setcollapseT23(true),
        setcollapseT24(true),
        setcollapseT25(true),
        setcollapseT31(true),
        setcollapseT32(true),
        setcollapseT33(true),
        setcollapseT34(true),
        setcollapseT35(true),
        setcollapseT36(true),
        setcollapseT37(true),
        setcollapseT38(true);
    };
  
    const collapseSpeaking = () => {
      setcollapseT10(true),
        setcollapseT11(true),
        setcollapseT12(true),
        setcollapseT13(true),
        setcollapseT14(true),
        setcollapseT15(true),
        setcollapseT16(true),
        setcollapseT17(true);
    };
  
    const collapseReading = () => {
      setcollapseT21(true),
        setcollapseT22(true),
        setcollapseT23(true),
        setcollapseT24(true),
        setcollapseT25(true);
    };
  
    const collapseListening = () => {
      setcollapseT31(true),
        setcollapseT32(true),
        setcollapseT33(true),
        setcollapseT34(true),
        setcollapseT35(true),
        setcollapseT36(true),
        setcollapseT37(true),
        setcollapseT38(true);
    };
    return (
      <View>
        <TouchableOpacity
          onPress={() => [setCollapseTOEFL(!collapseTOEFL), collapseAll()]}
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
  
        {/* /////////////// Speaking and Writing ////////////////// */}
        <Collapsible collapsed={collapseTOEFL} align="center">
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => [
                setcollapseT1(!collapseT1),
                setcollapseT2(true),
                setcollapseT3(true),
                collapseSpeaking(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Speaking and Writing (54-67 minutes)
              </Text>
              <Divider bold={true} />
            </TouchableOpacity>
            <Collapsible collapsed={collapseT1}>
              <Text style={styles.contentText}>
                This part of test contains seven different question types, and
                tests your speaking and writing skills.
              </Text>
  
              <View style={{ marginHorizontal: 10 }}>
                {/* //////////////// 0. Personal Introduction /////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseT10(!collapseT10),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    {"    "}Personal Introduction
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT10}>
                  <Text style={styles.contentText}>
                    This question does not contribute to your score. It is an
                    opportunity for you to get familiar with TOEFL test technology
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
                    setcollapseT10(true),
                    setcollapseT11(!collapseT11),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>1. Read Aloud</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT11}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(!collapseT12),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>2. Repeat Sentence</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT12}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(!collapseT13),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>3. Describe Image</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT13}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(!collapseT14),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>4. Re-tell Lecture</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT14}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(!collapseT15),
                    setcollapseT16(true),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Answer Short Question
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT15}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(!collapseT16),
                    setcollapseT17(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    6. Summarize Written Text
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT16}>
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
                    setcollapseT10(true),
                    setcollapseT11(true),
                    setcollapseT12(true),
                    setcollapseT13(true),
                    setcollapseT14(true),
                    setcollapseT15(true),
                    setcollapseT16(true),
                    setcollapseT17(!collapseT17),
                  ]}
                >
                  <Text style={styles.contentHeading}>7. Essay</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT17}>
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
                    "https://www.pearsonTOEFL.com/TOEFL-academic/speaking-writing"
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
                setcollapseT1(true),
                setcollapseT2(!collapseT2),
                setcollapseT3(true),
                collapseReading(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Reading (29-30 minutes)
              </Text>
            </TouchableOpacity>
            <Divider bold={true} />
  
            <Collapsible collapsed={collapseT2}>
              <Text style={styles.contentText}>
                This part of test contains five different question types, and
                tests your ability to read academic English.
              </Text>
  
              <View style={{ marginHorizontal: 10 }}>
                {/* ///////////////// 1. Reading & writing: Fill in the blanks /////////////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseT21(!collapseT21),
                    setcollapseT22(true),
                    setcollapseT23(true),
                    setcollapseT24(true),
                    setcollapseT25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    1. Reading and Writing: Fill in the Blanks
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT21}>
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
                    setcollapseT21(true),
                    setcollapseT22(!collapseT22),
                    setcollapseT23(true),
                    setcollapseT24(true),
                    setcollapseT25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    2. Multiple Choice, Multiple Answers
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT22}>
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
                    setcollapseT21(true),
                    setcollapseT22(true),
                    setcollapseT23(!collapseT23),
                    setcollapseT24(true),
                    setcollapseT25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    3. Re-order Paragraphs
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT23}>
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
                    setcollapseT21(true),
                    setcollapseT22(true),
                    setcollapseT23(true),
                    setcollapseT24(!collapseT24),
                    setcollapseT25(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>4. Fill in the Blanks</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT24}>
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
                    setcollapseT21(true),
                    setcollapseT22(true),
                    setcollapseT23(true),
                    setcollapseT24(true),
                    setcollapseT25(!collapseT25),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Multiple Choice, Single Answer
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT25}>
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
                setcollapseT1(true),
                setcollapseT2(true),
                setcollapseT3(!collapseT3),
                collapseListening(),
              ]}
            >
              <Text style={[styles.contentHeading, { fontWeight: "bold" }]}>
                Listening (30-43 minutes)
              </Text>
            </TouchableOpacity>
            <Divider bold={true} />
  
            <Collapsible collapsed={collapseT3}>
              <Text style={styles.contentText}>
                This part of test contains eight different question types, and
                tests your listening skills.
              </Text>
              <View style={{ marginHorizontal: 10 }}>
                {/* //////////////// 1. Summarize spoken text /////////// */}
                <TouchableOpacity
                  onPress={() => [
                    setcollapseT31(!collapseT31),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    1. Summarize Spoken Text
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT31}>
                  <Text style={styles.contentText}>
                    This question does not contribute to your score. It is an
                    opportunity for you to get familiar with TOEFL test technology
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
                    setcollapseT31(true),
                    setcollapseT32(!collapseT32),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    2. Multiple Choice, Multiple Answers
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT32}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(!collapseT33),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>3. Fill in the Blanks</Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT33}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(!collapseT34),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    4. Highlight Correct Summary
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT34}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(!collapseT35),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    5. Multiple Choice, Single Answer
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT35}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(!collapseT36),
                    setcollapseT37(true),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    6. Select Missing Word
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT36}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(!collapseT37),
                    setcollapseT38(true),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    7. Highlight Incorrect Words
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT37}>
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
                    setcollapseT31(true),
                    setcollapseT32(true),
                    setcollapseT33(true),
                    setcollapseT34(true),
                    setcollapseT35(true),
                    setcollapseT36(true),
                    setcollapseT37(true),
                    setcollapseT38(!collapseT38),
                  ]}
                >
                  <Text style={styles.contentHeading}>
                    8. Write from Dictation
                  </Text>
                </TouchableOpacity>
                <Divider bold={true} />
                <Collapsible collapsed={collapseT38}>
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
  