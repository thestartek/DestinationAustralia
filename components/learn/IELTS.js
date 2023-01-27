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
// import YoutubePlayer from "react-native-youtube-iframe";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8686062104433125/8511852168";

const IELTS = () => {
  const [collapseI11, setCollapseI11] = useState(true);
  const [collapseI12, setcollapseI12] = useState(true);
  const [collapseI13, setcollapseI13] = useState(true);
  const [collapseI14, setcollapseI14] = useState(true);
  const [collapseI15, setcollapseI15] = useState(true);
  const [collapseI16, setcollapseI16] = useState(true);

  const [collapseI21, setCollapseI21] = useState(true);
  const [collapseI22, setCollapseI22] = useState(true);
  const [collapseI23, setCollapseI23] = useState(true);
  const [collapseI24, setCollapseI24] = useState(true);
  const [collapseI25, setCollapseI25] = useState(true);
  const [collapseI26, setcollapseI26] = useState(true);
  const [collapseI27, setcollapseI27] = useState(true);
  const [collapseI28, setcollapseI28] = useState(true);
  const [collapseI29, setcollapseI29] = useState(true);
  const [collapseI210, setcollapseI210] = useState(true);
  const [collapseI211, setcollapseI211] = useState(true);

  const [collapseI31, setcollapseI31] = useState(true);
  const [collapseI32, setcollapseI32] = useState(true);
  const [collapseI33, setcollapseI33] = useState(true);
  const [collapseI34, setcollapseI34] = useState(true);

  const [collapseI41, setCollapseI41] = useState(true);
  const [collapseI42, setcollapseI42] = useState(true);
  const [collapseI43, setcollapseI43] = useState(true);

  return (
    <ScrollView>
      {/* /////////////// Listening ////////////////// */}
      <View style={styles.content}>
        <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />

        <Text style={styles.contentHeadingMain}>Listening (30 minutes)</Text>
        <Divider bold={true} />

        <Text style={styles.contentText}>
          You will listen to four recordings of native English speakers and then
          write your answers to a series of questions.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>Recording 1: </Text>a conversation
          between two people set in an everyday social context.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>Recording 2: </Text>a monologue set in
          an everyday social context, e.g. a speech about local facilities.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>Recording 3: </Text>a conversation
          between up to four people set in an educational or training context,
          e.g. a university tutor and a student discussing an assignment.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>Recording 4: </Text>a monologue on an
          academic subject, e.g. a university lecture.
        </Text>
        <Text style={styles.contentText}>
          Each recording is associated with 10 questions. The questions are
          designed so that the answers appear in the order they are heard in the
          audio.
        </Text>
        <Text style={styles.contentText}>
          Test takers write their answers on the question paper as they listen
          and at the end of the test are given 10 minutes to transfer their
          answers to an answer sheet.
        </Text>
        <Text style={styles.contentText}>
          Followin are various question types for listening section:
        </Text>

        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.contentHeading}>
            <View></View>
            {collapseI11 &&
            collapseI12 &&
            collapseI13 &&
            collapseI14 &&
            collapseI15 &&
            collapseI16 ? (
              <TouchableOpacity
                onPress={() => [
                  setCollapseI11(false),
                  setcollapseI12(false),
                  setcollapseI13(false),
                  setcollapseI14(false),
                  setcollapseI15(false),
                  setcollapseI16(false),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Expand All
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => [
                  setCollapseI11(true),
                  setcollapseI12(true),
                  setcollapseI13(true),
                  setcollapseI14(true),
                  setcollapseI15(true),
                  setcollapseI16(true),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Collapse All
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* ///////////////// 1. Multiple choice /////////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI11(!collapseI11)}
          >
            <Text style={styles.contentHeadingText}>1. Multiple choice</Text>
            {collapseI11 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI11}>
            <Text style={styles.contentText}>
              - There is a question followed by three possible answers, or the
              beginning of a sentence followed by three possible ways to
              complete the sentence. Test takers are required to choose the one
              correct answer - A, B or C.
            </Text>
            <Text style={styles.contentText}>
              - Sometimes, test takers are given a longer list of possible
              answers and told that they have to choose more than one. In this
              case, they should read the question carefully to check how many
              answers are required.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 2. Matching /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI12(!collapseI12)}
          >
            <Text style={styles.contentHeadingText}>2. Matching</Text>
            {collapseI12 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI12}>
            <Text style={styles.contentText}>
              - Test takers are required to match a numbered list of items from
              the listening text to a set of options on the question paper.
            </Text>
            <Text style={styles.contentText}>
              - The set of options may be criteria of some kind.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 3. Plan, map, diagram labelling /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI13(!collapseI13)}
          >
            <Text style={styles.contentHeadingText}>
              3. Plan, map, diagram labelling
            </Text>
            {collapseI13 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI13}>
            <Text style={styles.contentText}>
              - Test takers are required to complete labels on a plan (eg of a
              building), map (eg of part of a town) or diagram (e.g. of a piece
              of equipment).
            </Text>
            <Text style={styles.contentText}>
              - The answers are usually selected from a list on the question
              paper.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 4. Form, note, table, flow-chart, summary completion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI14(!collapseI14)}
          >
            <Text style={styles.contentHeadingText}>
              4. Form, note, table, flow-chart, summary completion
            </Text>
            {collapseI14 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI14}>
            <Text style={styles.contentText}>
              - Test takers are required to fill in the gaps in an outline of
              part or of all of the listening text.
            </Text>
            <Text style={styles.contentText}>
              - It may be a form, a set of notes, a table, or a flow-chart.
            </Text>
            <Text style={styles.contentText}>
              - Test takers may have to select their answers from a list on the
              question paper or identify the missing words from the recording,
              keeping to the word limit stated in the instructions. Test takers
              do not have to change the words from the recording in any way.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should read the instructions very carefully as the
              number of words or numbers they should use to fill the gaps will
              vary.
            </Text>
            <Text style={styles.contentText}>
              - A word limit is given, and test takers are penalised for writing
              more than the stated number of words, and test takers should check
              this word limit carefully for each task.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 5. Sentence completion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI15(!collapseI15)}
          >
            <Text style={styles.contentHeadingText}>
              5. Sentence completion
            </Text>
            {collapseI15 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI15}>
            <Text style={styles.contentText}>
              - Test takers are required to read a set of sentences summarising
              key information from all the listening text or from one part of
              it. They then fill a gap in each sentence using information from
              the listening text.
            </Text>
            <Text style={styles.contentText}>
              - A word limit is given, and test takers are penalised for writing
              more than the stated number of words, and test takers should check
              this word limit carefully for each task.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 6. Short-answer questions /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI16(!collapseI16)}
          >
            <Text style={styles.contentHeadingText}>
              6. Short-answer questions
            </Text>
            {collapseI16 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI16}>
            <Text style={styles.contentText}>
              - Test takers are required to read a question and then write a
              short answer using information from the listening text.
            </Text>
            <Text style={styles.contentText}>
              - A word limit is given, and test takers are penalised for writing
              more than the stated number of words, and test takers should check
              this word limit carefully for each task.
            </Text>
            <Text style={styles.contentText}>
              - Sometimes test takers are given a question which asks them to
              list two or three points.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
        </View>

        <Divider bold={true} />

        {/* ////////////////// Reading /////////////////// */}

        <View style={{ marginTop: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <Text style={styles.contentHeadingMain}>Reading (60 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          The Reading section consists of 40 questions, designed to test a wide
          range of reading skills. These include reading for gist, reading for
          main ideas, reading for detail, skimming, understanding logical
          argument and recognising writers' opinions, attitudes and purpose.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>IELTS Academic test: </Text>
          This includes three long texts which range from the descriptive and
          factual to the discursive and analytical. These are taken from books,
          journals, magazines and newspapers. They have been selected for a
          non-specialist audience but are appropriate for people entering
          university courses or seeking professional registration.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>IELTS General Training test: </Text>
          This includes extracts from books, magazines, newspapers, notices,
          advertisements, company handbooks and guidelines. These are materials
          you are likely to encounter on a daily basis in an English-speaking
          environment.
        </Text>
        <Text style={styles.contentText}>
          A variety of question types are used, chosen from the following:
        </Text>

        <View style={styles.contentHeading}>
          <View></View>
          {collapseI21 &&
          collapseI22 &&
          collapseI23 &&
          collapseI24 &&
          collapseI25 &&
          collapseI26 &&
          collapseI27 &&
          collapseI28 &&
          collapseI29 &&
          collapseI210 &&
          collapseI211 ? (
            <TouchableOpacity
              onPress={() => [
                setCollapseI21(false),
                setCollapseI22(false),
                setCollapseI23(false),
                setCollapseI24(false),
                setCollapseI25(false),
                setcollapseI26(false),
                setcollapseI27(false),
                setcollapseI28(false),
                setcollapseI29(false),
                setcollapseI210(false),
                setcollapseI211(false),
              ]}
            >
              <Text
                style={[
                  styles.contentHeadingText,
                  { textDecorationLine: "underline" },
                ]}
              >
                Expand All
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => [
                setCollapseI21(true),
                setCollapseI22(true),
                setCollapseI23(true),
                setCollapseI24(true),
                setCollapseI25(true),
                setcollapseI26(true),
                setcollapseI27(true),
                setcollapseI28(true),
                setcollapseI29(true),
                setcollapseI210(true),
                setcollapseI211(true),
              ]}
            >
              <Text
                style={[
                  styles.contentHeadingText,
                  { textDecorationLine: "underline" },
                ]}
              >
                Collapse All
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ marginHorizontal: 10 }}>
          {/* ///////////////// 1. Multiple choice /////////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI21(!collapseI21)}
          >
            <Text style={styles.contentHeadingText}>1. Multiple choice</Text>
            {collapseI21 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI21}>
            <Text style={styles.contentText}>
              - Test takers are required to choose the best answer from four
              alternatives (A, B, C or D), or the best two answers from five
              alternatives (A, B, C, D or E), or the best three answers from
              seven alternatives (A, B, C, D, E, F or G).
            </Text>
            <Text style={styles.contentText}>
              - The questions may involve completing a sentence, where they are
              given the first part of a sentence and then choose the best way to
              complete it from the options, or could involve complete questions;
              with the test takers choosing the option which best answers them.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 2. Identifying information /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI22(!collapseI22)}
          >
            <Text style={styles.contentHeadingText}>
              2. Identifying information
            </Text>
            {collapseI22 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI22}>
            <Text style={styles.contentText}>
              - Test takers will be given a number of statements and asked: 'Do
              the following statements agree with the information in the text?'
              They are then required to write 'true', 'false' or 'not given' in
              the boxes on their answer sheets.
            </Text>
            <Text style={styles.contentText}>
              - It is important to understand the difference between 'false' and
              'not given'. 'False' means that the passage states the opposite of
              the statement in question; 'not given' means that the statement is
              neither confirmed nor contradicted by the information in the
              passage.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 3. Identifying writer’s views/claims /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI23(!collapseI23)}
          >
            <Text style={styles.contentHeadingText}>
              3. Identifying writer's views/claims
            </Text>
            {collapseI23 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI23}>
            <Text style={styles.contentText}>
              - Test takers will be given a number of statements and asked: 'Do
              the following statements agree with the views/claims of the
              writer?'' They are required to write 'yes', 'no' or 'not given in
              the boxes on their answer sheet.
            </Text>
            <Text style={styles.contentText}>
              - It is important to understand the difference between 'no' and
              'not given'. 'No' means that the views or claims of the writer
              explicitly disagree with the statement; 'not given' means that the
              view or claim is neither confirmed nor contradicted.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 4. Matching information /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI24(!collapseI24)}
          >
            <Text style={styles.contentHeadingText}>
              4. Matching information
            </Text>
            {collapseI24 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI24}>
            <Text style={styles.contentText}>
              - Test takers are required to locate specific information within
              the lettered paragraphs/sections of a text, and to write the
              letters of the correct paragraphs/sections in the boxes on their
              answer sheet.
            </Text>
            <Text style={styles.contentText}>
              - They may be asked to find: specific details, an example, a
              reason, a description, a comparison, a summary, an explanation.
            </Text>
            <Text style={styles.contentText}>
              - They will not necessarily need to find information in every
              paragraph/section of the text, but there may be more than one
              piece of information that test takers need to locate in a given
              paragraph/section. When this is the case, they will be told that
              they can use any letter more than once.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 5. Matching headings /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI25(!collapseI25)}
          >
            <Text style={styles.contentHeadingText}>5. Matching headings</Text>
            {collapseI25 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI25}>
            <Text style={styles.contentText}>
              - Test takers are given a list of headings, usually identified
              with lower-case Roman numerals (i, ii, iii, etc,). A heading will
              refer to the main idea of the paragraph or section of the text.
              Test takers must match the heading to the correct paragraphs or
              sections, which are marked alphabetically. Test takers write the
              appropriate Roman numerals in the boxes on their answer sheets.
            </Text>
            <Text style={styles.contentText}>
              - There will always be more headings than there are paragraphs or
              sections, so that some headings will not be used. It is also
              possible that some paragraphs or sections may not be included in
              the task. One or more paragraphs or sections may already be
              matched with a heading as an example for test takers.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 6. Matching features /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI26(!collapseI26)}
          >
            <Text style={styles.contentHeadingText}>6. Matching features</Text>
            {collapseI26 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI26}>
            <Text style={styles.contentText}>
              - Test takers are required to match a set of statements or pieces
              of information to a list of options. The options are a group of
              features from the text, and are identified by letters.
            </Text>
            <Text style={styles.contentText}>
              - Test takers may, for example, be required to match different
              research findings to a list of researchers, or characteristics to
              age groups, events to historical periods, etc. It is possible that
              some options will not be used, and that others may be used more
              than once. The instructions will inform test takers if options may
              be used more than once.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 7. Matching sentence endings /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI27(!collapseI27)}
          >
            <Text style={styles.contentHeadingText}>
              7. Matching sentence endings
            </Text>
            {collapseI27 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI27}>
            <Text style={styles.contentText}>
              - Test takers are given the first half of a sentence based on the
              text and asked to choose the best way to complete it from a list
              of possible options. They will have more options to choose from
              than there are questions.
            </Text>
            <Text style={styles.contentText}>
              - The questions are in the same order as the information in the
              passage: that is, the answer to the first question in this group
              will be found before the answer to the second question, and so on.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 8. Sentence completion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI28(!collapseI28)}
          >
            <Text style={styles.contentHeadingText}>
              8. Sentence completion
            </Text>
            {collapseI28 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI28}>
            <Text style={styles.contentText}>
              - Test takers complete sentences in a given number of words taken
              from the text. They must write their answers on the answer sheet.
            </Text>
            <Text style={styles.contentText}>
              - If test takers write more than the number of words asked for,
              they will lose the mark. Numbers can be written using figures or
              words.
            </Text>
            <Text style={styles.contentText}>
              - The questions are in the same order as the information in the
              passage: that is, the answer to the first question in this group
              will be found before the answer to the second question, and so on.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 9. Summary, note, table, flow-chart completion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI29(!collapseI29)}
          >
            <Text style={styles.contentHeadingText}>
              9. Summary, note, table, flow-chart completion
            </Text>
            {collapseI29 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI29}>
            <Text style={styles.contentText}>
              - Test takers are given a summary of a section of the text, and
              are required to complete it with information drawn from the text.
              The summary will usually be of only one part of the passage rather
              than the whole.
            </Text>
            <Text style={styles.contentText}>
              - The given information may be in the form of: several connected
              sentences of text (referred to as a summary), several notes
              (referred to as notes), a table with some of its cells empty or
              partially empty (referred to as a table), a series of boxes or
              steps linked by arrows to show a sequence of events, with some of
              the boxes or steps empty or partially empty (referred to as a
              flow-chart).
            </Text>
            <Text style={styles.contentText}>
              - The answers will not necessarily occur in the same order as in
              the text. However, they will usually come from one section rather
              than the entire text.
            </Text>
            <Text style={styles.contentText}>
              - There are two variations of this task type. Test takers may be
              asked either to select words from the text or to select from a
              list of answers.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 10. Diagram label completion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI210(!collapseI210)}
          >
            <Text style={styles.contentHeadingText}>
              10. Diagram label completion
            </Text>
            {collapseI210 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI210}>
            <Text style={styles.contentText}>
              - Test takers are required to complete labels on a diagram, which
              relates to a description contained in the text.
            </Text>
            <Text style={styles.contentText}>
              - If test takers write more than the number of words asked for,
              they will lose the mark. Numbers can be written using figures or
              words.
            </Text>
            <Text style={styles.contentText}>
              - The answers do not necessarily occur in order in the passage.
              However, they will usually come from one section rather than the
              entire text.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 11. Short-answer questions /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI211(!collapseI211)}
          >
            <Text style={styles.contentHeadingText}>
              11. Short-answer questions
            </Text>
            {collapseI211 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI211}>
            <Text style={styles.contentText}>
              - Test takers answer questions, which usually relate to factual
              information about details in the text. This is most likely to be
              used with a text that contains a lot of factual information and
              detail.
            </Text>
            <Text style={styles.contentText}>
              - Test takers must write their answers in words or numbers on the
              answer sheet. Test takers must write their answers using words
              from the text.
            </Text>
            <Text style={styles.contentText}>
              - If test takers write more than the number of words asked for,
              they will lose the mark.
            </Text>
            <Text style={styles.contentText}>
              - Numbers can be written using figures or words. Contracted words
              are not tested. Hyphenated words count as single words. The
              questions are in the same order as the information in the text.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
        </View>

        <Divider bold={true} />

        {/* //////////////// Writing //////////////// */}
        <View style={{ marginTop: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <Text style={styles.contentHeadingMain}>Writing (60 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          <Text style={styles.boldText}>IELTS Academic test: </Text>
          Topics are of general interest to, and suitable for, test takers
          entering undergraduate and postgraduate studies or seeking
          professional registration.
        </Text>
        <Text style={styles.contentText}>
          <Text style={styles.boldText}>IELTS General Training test: </Text>
          Topics are of general interest.
        </Text>
        <Text style={styles.contentText}>There are two tasks: </Text>

        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.contentHeading}>
            <View></View>
            {collapseI31 && collapseI32 && collapseI33 && collapseI34 ? (
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(false),
                  setcollapseI32(false),
                  setcollapseI33(false),
                  setcollapseI34(false),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Expand All
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(true),
                  setcollapseI32(true),
                  setcollapseI33(true),
                  setcollapseI34(true),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Collapse All
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* //////////////// 1. Task 1 (Academic) /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI31(!collapseI31)}
          >
            <Text style={styles.contentHeadingText}>1. Task 1 (Academic)</Text>
            {collapseI31 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI31}>
            <Text style={styles.contentText}>
              - Test takers may be asked to describe facts or figures presented
              in one or more graphs, charts or tables on a related topic; or
              they may be given a diagram of a machine, a device or a process
              and asked to explain how it works.
            </Text>
            <Text style={styles.contentText}>
              - You should write in an academic or semi-formal/neutral styles
              and include the most important and the most relevant points in the
              diagram.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should spend no more than 20 minutes on this task.
              They are asked to write at least 150 words and will be penalised
              if their answer is too short.
            </Text>
            <Text style={styles.contentText}>
              - While test takers will not be penalised for writing more than
              150 words, they should remember that a longer Task 1 answer may
              mean that they have less time to spend on Task 2, which
              contributes twice as much to the Writing band score.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should also note that they will be penalised for
              irrelevance if the response is off-topic or is not written as
              full, connected text (e.g. using bullet points in any part of the
              response, or note form, etc.). They will be severely penalised for
              plagiarism (i.e. copying from another source).
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
          {/* ///////////////// 2. Task 1 (General training) /////////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI32(!collapseI32)}
          >
            <Text style={styles.contentHeadingText}>
              2. Task 2 (General training)
            </Text>
            {collapseI32 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI32}>
            <Text style={styles.contentText}>
              - Test takers are presented with a situation and required to write
              a personal response in the form of an informal, semi-formal or
              formal letter of at least 150 words in the answer booklet
              provided.
            </Text>
            <Text style={styles.contentText}>
              - The style of writing that test takers use depends who they are
              asked to write to (i.e. the audience) and how well they are
              supposed to know them. They need to write in a style that is
              appropriate for their audience and that will help them to achieve
              their purpose for writing, e.g. writing to a friend (informal) or
              writing to a manager (semi-formal or formal).
            </Text>
            <Text style={styles.contentText}>
              - Test takers should spend no more than 20 minutes on this task.
              They are asked to write at least 150 words and will be penalised
              if their answer is too short. While test takers will not be
              penalised for writing more than 150 words, they should remember
              that a longer Task 1 answer may mean that they have less time to
              spend on Task 2, which contributes twice as much to the Writing
              band score.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should also note that they will be penalised for
              irrelevance, if the response is off-topic or is not written as
              full, connected text (e.g. using bullet points in any part of the
              response, or note form, etc.). They will be severely penalised for
              plagiarism (i.e. copying from another source).
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 3. Task 2 (Academic) /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI33(!collapseI33)}
          >
            <Text style={styles.contentHeadingText}>3. Task 3 (Academic)</Text>
            {collapseI33 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI33}>
            <Text style={styles.contentText}>
              - Test takers are given a topic to write about an academic or
              semi-formal/neutral style. Answers should be a discursive
              consideration of the relevant issues.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should spend no more than 40 minutes on this task.
              They are asked to write at least 250 words and will be penalised
              if their answer is too short. While test takers will not be
              penalised for writing more than 250 words, if they write a very
              long answer they may not have time for checking and correcting at
              the end and some ideas may not be directly relevant to the
              question.
            </Text>
            <Text style={styles.contentText}>
              - Test takers will be penalised for irrelevance if the response is
              off-topic or is not written as full, connected text (e.g. using
              bullet points in any part of the response, or note form, etc.).
              They will be severely penalised for plagiarism (i.e. copying from
              another source).
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// 4. Task 2 (General training) /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI34(!collapseI34)}
          >
            <Text style={styles.contentHeadingText}>
              4. Task 4 (General training)
            </Text>
            {collapseI34 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI34}>
            <Text style={styles.contentText}>
              - Test takers write a semi-formal/neutral discursive essay of at
              least 250 words in the answer book provided.
            </Text>
            <Text style={styles.contentText}>
              - Topics are of general interest, such as: whether children's
              leisure activities should be educational, why families are not so
              close as they used to be and how they could be brought closer, how
              environmental problems can be solved, who should pay for the care
              of old people, whether smoking should be banned in public places.
            </Text>
            <Text style={styles.contentText}>
              - Test takers are asked to write at least 250 words and will be
              penalised if their answer is too short. They should spend no more
              than 40 minutes on this task.
            </Text>
            <Text style={styles.contentText}>
              - Test takers should also note that they will be penalised for
              irrelevance if the response is off-topic or is not written as
              full, connected text (e.g. using bullet points in any part of the
              response, or note form, etc.). They will be severely penalised for
              plagiarism (i.e. copying from another source).
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
        </View>

        {/* //////////////// Speaking //////////////// */}
        <View style={{ marginTop: 10 }}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.LARGE_BANNER} />
        </View>

        <Text style={styles.contentHeadingMain}>Speaking (11-14 minutes)</Text>

        <Divider bold={true} />

        <Text style={styles.contentText}>
          The Speaking test consists of an oral interview between the test
          takers' and an examiner. All Speaking tests are recorded.
        </Text>
        <Text style={styles.contentText}>
          There are 3 parts to the test and each part fulfils a specific
          function in terms of interaction pattern, task input and test takers
          output.
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.contentHeading}>
            <View></View>
            {collapseI41 && collapseI42 && collapseI43 ? (
              <TouchableOpacity
                onPress={() => [
                  setCollapseI41(false),
                  setcollapseI42(false),
                  setcollapseI43(false),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Expand All
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => [
                  setCollapseI41(true),
                  setcollapseI42(true),
                  setcollapseI43(true),
                ]}
              >
                <Text
                  style={[
                    styles.contentHeadingText,
                    { textDecorationLine: "underline" },
                  ]}
                >
                  Collapse All
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* //////////////// Part1: Introduction and interview /////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setCollapseI41(!collapseI41)}
          >
            <Text style={styles.contentHeadingText}>
              Part 1: Introduction and interview
            </Text>
            {collapseI41 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI41}>
            <Text style={styles.contentText}>
              - In this part, the examiner introduces him/herself and checks the
              test takers' identity. They then ask the test takers general
              questions on some familiar topics such as home, family, work,
              studies and interests.
            </Text>
            <Text style={styles.contentText}>
              - Part 1 lasts for 4-5 minutes.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
          {/* ///////////////// Part 2: Long turn /////////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI42(!collapseI42)}
          >
            <Text style={styles.contentHeadingText}>Part 2: Long turn</Text>
            {collapseI42 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI42}>
            <Text style={styles.contentText}>
              - The examiner gives the test takers a task card which asks the
              test takers to talk about a particular topic, includes points to
              cover in their talk and instructs the test takers to explain one
              aspect of the topic.
            </Text>
            <Text style={styles.contentText}>
              - Test takers are given one minute to prepare their talk, and are
              given a pencil and paper to make notes.
            </Text>
            <Text style={styles.contentText}>
              - The examiner asks the test takers to talk for 1 to 2 minutes,
              stops the test takers after 2 minutes, and asks one or two
              questions on the same topic.
            </Text>
            <Text style={styles.contentText}>
              - Part 2 lasts 3-4 minutes, including the preparation time.
            </Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>

          {/* /////////////// Part 3: Discussion /////////////// */}
          <TouchableOpacity
            style={styles.contentHeading}
            onPress={() => setcollapseI43(!collapseI43)}
          >
            <Text style={styles.contentHeadingText}>Part 3: Discussion</Text>
            {collapseI43 ? (
              <AntDesign name="down" size={18} color="#1267E9" />
            ) : (
              <AntDesign name="up" size={18} color="#1267E9" />
            )}
          </TouchableOpacity>
          <Divider bold={true} />
          <Collapsible collapsed={collapseI43}>
            <Text style={styles.contentText}>
              - In Part 3, the examiner and the test takers discuss issues
              related to the topic in Part 2 in a more general and abstract way
              and, where appropriate, in greater depth.
            </Text>
            <Text style={styles.contentText}>- Part 3 lasts 4-5 minutes.</Text>
            <View style={{ marginVertical: 5 }}>
              <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
            </View>
          </Collapsible>
        </View>
      </View>
      <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
    </ScrollView>
  );
};

export default IELTS;

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
