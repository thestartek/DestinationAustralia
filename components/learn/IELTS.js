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
  const [collapseI11, setcollapseI11] = useState(true);
  const [collapseI12, setcollapseI12] = useState(true);
  const [collapseI13, setcollapseI13] = useState(true);
  const [collapseI14, setcollapseI14] = useState(true);
  const [collapseI15, setcollapseI15] = useState(true);
  const [collapseI16, setcollapseI16] = useState(true);

  const [collapseI2, setcollapseI2] = useState(true);
  const [collapseI21, setcollapseI21] = useState(true);
  const [collapseI22, setcollapseI22] = useState(true);
  const [collapseI23, setcollapseI23] = useState(true);
  const [collapseI24, setcollapseI24] = useState(true);
  const [collapseI25, setcollapseI25] = useState(true);
  const [collapseI26, setcollapseI26] = useState(true);
  const [collapseI27, setcollapseI27] = useState(true);
  const [collapseI28, setcollapseI28] = useState(true);
  const [collapseI29, setcollapseI29] = useState(true);
  const [collapseI210, setcollapseI210] = useState(true);
  const [collapseI211, setcollapseI211] = useState(true);

  const [collapseI3, setcollapseI3] = useState(true);
  const [collapseI31, setcollapseI31] = useState(true);
  const [collapseI32, setcollapseI32] = useState(true);
  const [collapseI33, setcollapseI33] = useState(true);
  const [collapseI34, setcollapseI34] = useState(true);

  const [collapseI4, setcollapseI4] = useState(true);
  const [collapseI41, setcollapseI41] = useState(true);
  const [collapseI42, setcollapseI42] = useState(true);
  const [collapseI43, setcollapseI43] = useState(true);

  const collapseAll = () => {
    setcollapseI1(true),
      setcollapseI2(true),
      setcollapseI3(true),
      setcollapseI4(true),
      setcollapseI11(true),
      setcollapseI12(true),
      setcollapseI13(true),
      setcollapseI14(true),
      setcollapseI15(true),
      setcollapseI16(true),
      setcollapseI21(true),
      setcollapseI22(true),
      setcollapseI23(true),
      setcollapseI24(true),
      setcollapseI25(true),
      setcollapseI26(true),
      setcollapseI27(true),
      setcollapseI28(true),
      setcollapseI29(true),
      setcollapseI210(true),
      setcollapseI211(true),
      setcollapseI31(true),
      setcollapseI32(true),
      setcollapseI33(true),
      setcollapseI34(true),
      setcollapseI41(true),
      setcollapseI42(true),
      setcollapseI43(true);
  };

  const collapseListening = () => {
    setcollapseI11(true),
      setcollapseI12(true),
      setcollapseI13(true),
      setcollapseI14(true),
      setcollapseI15(true),
      setcollapseI16(true);
  };

  const collapseReading = () => {
    setcollapseI21(true),
      setcollapseI22(true),
      setcollapseI23(true),
      setcollapseI24(true),
      setcollapseI25(true),
      setcollapseI26(true),
      setcollapseI27(true),
      setcollapseI28(true),
      setcollapseI29(true),
      setcollapseI210(true),
      setcollapseI211(true);
  };

  const collapseWriting = () => {
    setcollapseI31(true),
      setcollapseI32(true),
      setcollapseI33(true),
      setcollapseI34(true);
  };

  const collapseSpeaking = () => {
    setcollapseI41(true), setcollapseI42(true), setcollapseI43(true);
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

      {/* /////////////// Listening ////////////////// */}
      <Collapsible collapsed={collapseIELTS} align="center">
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => [
              setcollapseI1(!collapseI1),
              setcollapseI2(true),
              setcollapseI3(true),
              setcollapseI4(true),
              collapseListening(),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Listening (30 minutes)
            </Text>
            <Divider bold={true} />
          </TouchableOpacity>
          <Collapsible collapsed={collapseI1}>
            <Text style={styles.contentText}>
              You will listen to four recordings of native English speakers and
              then write your answers to a series of questions.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>Recording 1: </Text>a conversation
              between two people set in an everyday social context.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>Recording 2: </Text>a monologue set
              in an everyday social context, e.g. a speech about local
              facilities.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>Recording 3: </Text>a conversation
              between up to four people set in an educational or training
              context, e.g. a university tutor and a student discussing an
              assignment.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>Recording 4: </Text>a monologue on
              an academic subject, e.g. a university lecture.
            </Text>
            <Text style={styles.contentText}>
              Each recording is associated with 10 questions. The questions are
              designed so that the answers appear in the order they are heard in
              the audio.
            </Text>
            <Text style={styles.contentText}>
              Test takers write their answers on the question paper as they
              listen and at the end of the test are given 10 minutes to transfer
              their answers to an answer sheet.
            </Text>
            <Text style={styles.contentText}>
              Followin are various question types for listening section:
            </Text>

            <View style={{ marginHorizontal: 10 }}>
              {/* ///////////////// 1. Multiple choice /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(!collapseI11),
                  setcollapseI12(true),
                  setcollapseI13(true),
                  setcollapseI14(true),
                  setcollapseI15(true),
                  setcollapseI16(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 1: Multiple Choice
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI11}>
                <Text style={styles.contentText}>
                  - There is a question followed by three possible answers, or
                  the beginning of a sentence followed by three possible ways to
                  complete the sentence. Test takers are required to choose the
                  one correct answer - A, B or C.
                </Text>
                <Text style={styles.contentText}>
                  - Sometimes, test takers are given a longer list of possible
                  answers and told that they have to choose more than one. In
                  this case, they should read the question carefully to check
                  how many answers are required.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 2. Matching /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(true),
                  setcollapseI12(!collapseI12),
                  setcollapseI13(true),
                  setcollapseI14(true),
                  setcollapseI15(true),
                  setcollapseI16(true),
                ]}
              >
                <Text style={styles.contentHeading}>Type 2: Matching</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI12}>
                <Text style={styles.contentText}>
                  - Test takers are required to match a numbered list of items
                  from the listening text to a set of options on the question
                  paper.
                </Text>
                <Text style={styles.contentText}>
                  - The set of options may be criteria of some kind.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 3. Plan, map, diagram labelling /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(true),
                  setcollapseI12(true),
                  setcollapseI13(!collapseI13),
                  setcollapseI14(true),
                  setcollapseI15(true),
                  setcollapseI16(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 3: Plan, map, diagram labelling
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI13}>
                <Text style={styles.contentText}>
                  - Test takers are required to complete labels on a plan (eg of
                  a building), map (eg of part of a town) or diagram (e.g. of a
                  piece of equipment).
                </Text>
                <Text style={styles.contentText}>
                  - The answers are usually selected from a list on the question
                  paper.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 4. Form, note, table, flow-chart, summary completion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(true),
                  setcollapseI12(true),
                  setcollapseI13(true),
                  setcollapseI14(!collapseI14),
                  setcollapseI15(true),
                  setcollapseI16(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 4: Form, note, table, flow-chart, summary completion
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI14}>
                <Text style={styles.contentText}>
                  - Test takers are required to fill in the gaps in an outline
                  of part or of all of the listening text.
                </Text>
                <Text style={styles.contentText}>
                  - It may be a form, a set of notes, a table, or a flow-chart.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers may have to select their answers from a list on
                  the question paper or identify the missing words from the
                  recording, keeping to the word limit stated in the
                  instructions. Test takers do not have to change the words from
                  the recording in any way.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should read the instructions very carefully as
                  the number of words or numbers they should use to fill the
                  gaps will vary.
                </Text>
                <Text style={styles.contentText}>
                  - A word limit is given, and test takers are penalised for
                  writing more than the stated number of words, and test takers
                  should check this word limit carefully for each task.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 5. Sentence completion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(true),
                  setcollapseI12(true),
                  setcollapseI13(true),
                  setcollapseI14(true),
                  setcollapseI15(!collapseI15),
                  setcollapseI16(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 5: Sentence completion
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI15}>
                <Text style={styles.contentText}>
                  - Test takers are required to read a set of sentences
                  summarising key information from all the listening text or
                  from one part of it. They then fill a gap in each sentence
                  using information from the listening text.
                </Text>
                <Text style={styles.contentText}>
                  - A word limit is given, and test takers are penalised for
                  writing more than the stated number of words, and test takers
                  should check this word limit carefully for each task.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 6. Short-answer questions /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI11(true),
                  setcollapseI12(true),
                  setcollapseI13(true),
                  setcollapseI14(true),
                  setcollapseI15(true),
                  setcollapseI16(!collapseI16),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 6: Short-answer questions
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI16}>
                <Text style={styles.contentText}>
                  - Test takers are required to read a question and then write a
                  short answer using information from the listening text.
                </Text>
                <Text style={styles.contentText}>
                  - A word limit is given, and test takers are penalised for
                  writing more than the stated number of words, and test takers
                  should check this word limit carefully for each task.
                </Text>
                <Text style={styles.contentText}>
                  - Sometimes test takers are given a question which asks them
                  to list two or three points.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* ////////////////// Reading /////////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseI1(true),
              setcollapseI2(!collapseI2),
              setcollapseI3(true),
              setcollapseI4(true),
              collapseReading(),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Reading (60 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseI2}>
            <Text style={styles.contentText}>
              The Reading section consists of 40 questions, designed to test a
              wide range of reading skills. These include reading for gist,
              reading for main ideas, reading for detail, skimming,
              understanding logical argument and recognising writers' opinions,
              attitudes and purpose.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>IELTS Academic test: </Text>
              This includes three long texts which range from the descriptive
              and factual to the discursive and analytical. These are taken from
              books, journals, magazines and newspapers. They have been selected
              for a non-specialist audience but are appropriate for people
              entering university courses or seeking professional registration.
            </Text>
            <Text style={styles.contentText}>
              <Text style={styles.boldText}>IELTS General Training test: </Text>
              This includes extracts from books, magazines, newspapers, notices,
              advertisements, company handbooks and guidelines. These are
              materials you are likely to encounter on a daily basis in an
              English-speaking environment.
            </Text>
            <Text style={styles.contentText}>
              A variety of question types are used, chosen from the following:
            </Text>

            <View style={{ marginHorizontal: 10 }}>
              {/* ///////////////// 1. Multiple choice /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(!collapseI21),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 1: Multiple Choice
                </Text>
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
                  - The questions may involve completing a sentence, where they
                  are given the first part of a sentence and then choose the
                  best way to complete it from the options, or could involve
                  complete questions; with the test takers choosing the option
                  which best answers them.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 2. Identifying information /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(!collapseI22),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 2: Identifying information
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI22}>
                <Text style={styles.contentText}>
                  - Test takers will be given a number of statements and asked:
                  'Do the following statements agree with the information in the
                  text?' They are then required to write 'true', 'false' or 'not
                  given' in the boxes on their answer sheets.
                </Text>
                <Text style={styles.contentText}>
                  - It is important to understand the difference between 'false'
                  and 'not given'. 'False' means that the passage states the
                  opposite of the statement in question; 'not given' means that
                  the statement is neither confirmed nor contradicted by the
                  information in the passage.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 3. Identifying writer’s views/claims /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(!collapseI23),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 3: Identifying writer's views/claims
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI23}>
                <Text style={styles.contentText}>
                  - Test takers will be given a number of statements and asked:
                  'Do the following statements agree with the views/claims of
                  the writer?'' They are required to write 'yes', 'no' or 'not
                  given in the boxes on their answer sheet.
                </Text>
                <Text style={styles.contentText}>
                  - It is important to understand the difference between 'no'
                  and 'not given'. 'No' means that the views or claims of the
                  writer explicitly disagree with the statement; 'not given'
                  means that the view or claim is neither confirmed nor
                  contradicted.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 4. Matching information /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(!collapseI24),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 4: Matching information
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI24}>
                <Text style={styles.contentText}>
                  - Test takers are required to locate specific information
                  within the lettered paragraphs/sections of a text, and to
                  write the letters of the correct paragraphs/sections in the
                  boxes on their answer sheet.
                </Text>
                <Text style={styles.contentText}>
                  - They may be asked to find: specific details, an example, a
                  reason, a description, a comparison, a summary, an
                  explanation.
                </Text>
                <Text style={styles.contentText}>
                  - They will not necessarily need to find information in every
                  paragraph/section of the text, but there may be more than one
                  piece of information that test takers need to locate in a
                  given paragraph/section. When this is the case, they will be
                  told that they can use any letter more than once.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 5. Matching headings /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(!collapseI25),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 5: Matching headings
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI25}>
                <Text style={styles.contentText}>
                  - Test takers are given a list of headings, usually identified
                  with lower-case Roman numerals (i, ii, iii, etc,). A heading
                  will refer to the main idea of the paragraph or section of the
                  text. Test takers must match the heading to the correct
                  paragraphs or sections, which are marked alphabetically. Test
                  takers write the appropriate Roman numerals in the boxes on
                  their answer sheets.
                </Text>
                <Text style={styles.contentText}>
                  - There will always be more headings than there are paragraphs
                  or sections, so that some headings will not be used. It is
                  also possible that some paragraphs or sections may not be
                  included in the task. One or more paragraphs or sections may
                  already be matched with a heading as an example for test
                  takers.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 6. Matching features /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(!collapseI26),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 6: Matching features
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI26}>
                <Text style={styles.contentText}>
                  - Test takers are required to match a set of statements or
                  pieces of information to a list of options. The options are a
                  group of features from the text, and are identified by
                  letters.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers may, for example, be required to match different
                  research findings to a list of researchers, or characteristics
                  to age groups, events to historical periods, etc. It is
                  possible that some options will not be used, and that others
                  may be used more than once. The instructions will inform test
                  takers if options may be used more than once.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 7. Matching sentence endings /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(!collapseI27),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 7: Matching sentence endings
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI26}>
                <Text style={styles.contentText}>
                  - Test takers are given the first half of a sentence based on
                  the text and asked to choose the best way to complete it from
                  a list of possible options. They will have more options to
                  choose from than there are questions.
                </Text>
                <Text style={styles.contentText}>
                  - The questions are in the same order as the information in
                  the passage: that is, the answer to the first question in this
                  group will be found before the answer to the second question,
                  and so on.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 8. Sentence completion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(!collapseI28),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 8: Sentence completion
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI28}>
                <Text style={styles.contentText}>
                  - Test takers complete sentences in a given number of words
                  taken from the text. They must write their answers on the
                  answer sheet.
                </Text>
                <Text style={styles.contentText}>
                  - If test takers write more than the number of words asked
                  for, they will lose the mark. Numbers can be written using
                  figures or words.
                </Text>
                <Text style={styles.contentText}>
                  - The questions are in the same order as the information in
                  the passage: that is, the answer to the first question in this
                  group will be found before the answer to the second question,
                  and so on.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 9. Summary, note, table, flow-chart completion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(!collapseI29),
                  setcollapseI210(true),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 9: Summary, note, table, flow-chart completion
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI29}>
                <Text style={styles.contentText}>
                  - Test takers are given a summary of a section of the text,
                  and are required to complete it with information drawn from
                  the text. The summary will usually be of only one part of the
                  passage rather than the whole.
                </Text>
                <Text style={styles.contentText}>
                  - The given information may be in the form of: several
                  connected sentences of text (referred to as a summary),
                  several notes (referred to as notes), a table with some of its
                  cells empty or partially empty (referred to as a table), a
                  series of boxes or steps linked by arrows to show a sequence
                  of events, with some of the boxes or steps empty or partially
                  empty (referred to as a flow-chart).
                </Text>
                <Text style={styles.contentText}>
                  - The answers will not necessarily occur in the same order as
                  in the text. However, they will usually come from one section
                  rather than the entire text.
                </Text>
                <Text style={styles.contentText}>
                  - There are two variations of this task type. Test takers may
                  be asked either to select words from the text or to select
                  from a list of answers.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 10. Diagram label completion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(!collapseI210),
                  setcollapseI211(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 10: Diagram label completion
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI210}>
                <Text style={styles.contentText}>
                  - Test takers are required to complete labels on a diagram,
                  which relates to a description contained in the text.
                </Text>
                <Text style={styles.contentText}>
                  - If test takers write more than the number of words asked
                  for, they will lose the mark. Numbers can be written using
                  figures or words.
                </Text>
                <Text style={styles.contentText}>
                  - The answers do not necessarily occur in order in the
                  passage. However, they will usually come from one section
                  rather than the entire text.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 11. Short-answer questions /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI21(true),
                  setcollapseI22(true),
                  setcollapseI23(true),
                  setcollapseI24(true),
                  setcollapseI25(true),
                  setcollapseI26(true),
                  setcollapseI27(true),
                  setcollapseI28(true),
                  setcollapseI29(true),
                  setcollapseI210(true),
                  setcollapseI211(!collapseI211),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Type 11: Short-answer questions
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI211}>
                <Text style={styles.contentText}>
                  - Test takers answer questions, which usually relate to
                  factual information about details in the text. This is most
                  likely to be used with a text that contains a lot of factual
                  information and detail.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers must write their answers in words or numbers on
                  the answer sheet. Test takers must write their answers using
                  words from the text.
                </Text>
                <Text style={styles.contentText}>
                  - If test takers write more than the number of words asked
                  for, they will lose the mark.
                </Text>
                <Text style={styles.contentText}>
                  - Numbers can be written using figures or words. Contracted
                  words are not tested. Hyphenated words count as single words.
                  The questions are in the same order as the information in the
                  text.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>
            </View>
          </Collapsible>

          <Divider bold={true} />

          {/* //////////////// Writing //////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseI1(true),
              setcollapseI2(true),
              setcollapseI3(!collapseI3),
              setcollapseI4(true),
              collapseWriting(),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Writing (60 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseI3}>
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
              {/* //////////////// 1. Task 1 (Academic) /////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(!collapseI31),
                  setcollapseI32(true),
                  setcollapseI33(true),
                  setcollapseI34(true),
                ]}
              >
                <Text style={styles.contentHeading}>Task 1 (Academic)</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI31}>
                <Text style={styles.contentText}>
                  - Test takers may be asked to describe facts or figures
                  presented in one or more graphs, charts or tables on a related
                  topic; or they may be given a diagram of a machine, a device
                  or a process and asked to explain how it works.
                </Text>
                <Text style={styles.contentText}>
                  - You should write in an academic or semi-formal/neutral
                  styles and include the most important and the most relevant
                  points in the diagram.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should spend no more than 20 minutes on this
                  task. They are asked to write at least 150 words and will be
                  penalised if their answer is too short.
                </Text>
                <Text style={styles.contentText}>
                  - While test takers will not be penalised for writing more
                  than 150 words, they should remember that a longer Task 1
                  answer may mean that they have less time to spend on Task 2,
                  which contributes twice as much to the Writing band score.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should also note that they will be penalised for
                  irrelevance if the response is off-topic or is not written as
                  full, connected text (e.g. using bullet points in any part of
                  the response, or note form, etc.). They will be severely
                  penalised for plagiarism (i.e. copying from another source).
                </Text>
              </Collapsible>
              {/* ///////////////// 2. Task 1 (General training) /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(true),
                  setcollapseI32(!collapseI32),
                  setcollapseI33(true),
                  setcollapseI34(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Task 1 (General Training)
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI32}>
                <Text style={styles.contentText}>
                  - Test takers are presented with a situation and required to
                  write a personal response in the form of an informal,
                  semi-formal or formal letter of at least 150 words in the
                  answer booklet provided.
                </Text>
                <Text style={styles.contentText}>
                  - The style of writing that test takers use depends who they
                  are asked to write to (i.e. the audience) and how well they
                  are supposed to know them. They need to write in a style that
                  is appropriate for their audience and that will help them to
                  achieve their purpose for writing, e.g. writing to a friend
                  (informal) or writing to a manager (semi-formal or formal).
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should spend no more than 20 minutes on this
                  task. They are asked to write at least 150 words and will be
                  penalised if their answer is too short. While test takers will
                  not be penalised for writing more than 150 words, they should
                  remember that a longer Task 1 answer may mean that they have
                  less time to spend on Task 2, which contributes twice as much
                  to the Writing band score.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should also note that they will be penalised for
                  irrelevance, if the response is off-topic or is not written as
                  full, connected text (e.g. using bullet points in any part of
                  the response, or note form, etc.). They will be severely
                  penalised for plagiarism (i.e. copying from another source).
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 3. Task 2 (Academic) /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(true),
                  setcollapseI32(true),
                  setcollapseI33(!collapseI33),
                  setcollapseI34(true),
                ]}
              >
                <Text style={styles.contentHeading}>Task 2 (Academic)</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI33}>
                <Text style={styles.contentText}>
                  - Test takers are given a topic to write about an academic or
                  semi-formal/neutral style. Answers should be a discursive
                  consideration of the relevant issues.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should spend no more than 40 minutes on this
                  task. They are asked to write at least 250 words and will be
                  penalised if their answer is too short. While test takers will
                  not be penalised for writing more than 250 words, if they
                  write a very long answer they may not have time for checking
                  and correcting at the end and some ideas may not be directly
                  relevant to the question.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers will be penalised for irrelevance if the
                  response is off-topic or is not written as full, connected
                  text (e.g. using bullet points in any part of the response, or
                  note form, etc.). They will be severely penalised for
                  plagiarism (i.e. copying from another source).
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// 4. Task 2 (General training) /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI31(true),
                  setcollapseI32(true),
                  setcollapseI33(true),
                  setcollapseI34(!collapseI34),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Task 2 (General Training)
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI34}>
                <Text style={styles.contentText}>
                  - Test takers write a semi-formal/neutral discursive essay of
                  at least 250 words in the answer book provided.
                </Text>
                <Text style={styles.contentText}>
                  - Topics are of general interest, such as: whether children's
                  leisure activities should be educational, why families are not
                  so close as they used to be and how they could be brought
                  closer, how environmental problems can be solved, who should
                  pay for the care of old people, whether smoking should be
                  banned in public places.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers are asked to write at least 250 words and will
                  be penalised if their answer is too short. They should spend
                  no more than 40 minutes on this task.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers should also note that they will be penalised for
                  irrelevance if the response is off-topic or is not written as
                  full, connected text (e.g. using bullet points in any part of
                  the response, or note form, etc.). They will be severely
                  penalised for plagiarism (i.e. copying from another source).
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>
            </View>
          </Collapsible>
          {/* //////////////// Speaking //////////////// */}
          <TouchableOpacity
            onPress={() => [
              setcollapseI1(true),
              setcollapseI2(true),
              setcollapseI3(true),
              setcollapseI4(!collapseI4),
              collapseSpeaking(),
            ]}
          >
            <Text style={styles.contentHeadingMain}>
              Speaking (11-14 minutes)
            </Text>
          </TouchableOpacity>
          <Divider bold={true} />

          <Collapsible collapsed={collapseI4}>
            <Text style={styles.contentText}>
              The Speaking test consists of an oral interview between the test
              takers' and an examiner. All Speaking tests are recorded.
            </Text>
            <Text style={styles.contentText}>
              There are 3 parts to the test and each part fulfils a specific
              function in terms of interaction pattern, task input and test
              takers output.
            </Text>
            <View style={{ marginHorizontal: 10 }}>
              {/* //////////////// Part1: Introduction and interview /////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI41(!collapseI41),
                  setcollapseI42(true),
                  setcollapseI43(true),
                ]}
              >
                <Text style={styles.contentHeading}>
                  Part 1: Introduction and interview
                </Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI41}>
                <Text style={styles.contentText}>
                  - In this part, the examiner introduces him/herself and checks
                  the test takers' identity. They then ask the test takers
                  general questions on some familiar topics such as home,
                  family, work, studies and interests.
                </Text>
                <Text style={styles.contentText}>
                  - Part 1 lasts for 4-5 minutes.
                </Text>
              </Collapsible>
              {/* ///////////////// Part 2: Long turn /////////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI41(true),
                  setcollapseI42(!collapseI42),
                  setcollapseI43(true),
                ]}
              >
                <Text style={styles.contentHeading}>Part 2: Long turn</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI42}>
                <Text style={styles.contentText}>
                  - The examiner gives the test takers a task card which asks
                  the test takers to talk about a particular topic, includes
                  points to cover in their talk and instructs the test takers to
                  explain one aspect of the topic.
                </Text>
                <Text style={styles.contentText}>
                  - Test takers are given one minute to prepare their talk, and
                  are given a pencil and paper to make notes.
                </Text>
                <Text style={styles.contentText}>
                  - The examiner asks the test takers to talk for 1 to 2
                  minutes, stops the test takers after 2 minutes, and asks one
                  or two questions on the same topic.
                </Text>
                <Text style={styles.contentText}>
                  - Part 2 lasts 3-4 minutes, including the preparation time.
                </Text>
                <View style={{ margin: 5 }}></View>
              </Collapsible>

              {/* /////////////// Part 3: Discussion /////////////// */}
              <TouchableOpacity
                onPress={() => [
                  setcollapseI41(true),
                  setcollapseI42(true),
                  setcollapseI43(!collapseI43),
                ]}
              >
                <Text style={styles.contentHeading}>Part 3: Discussion</Text>
              </TouchableOpacity>
              <Divider bold={true} />
              <Collapsible collapsed={collapseI43}>
                <Text style={styles.contentText}>
                  - In Part 3, the examiner and the test takers discuss issues
                  related to the topic in Part 2 in a more general and abstract
                  way and, where appropriate, in greater depth.
                </Text>
                <Text style={styles.contentText}>
                  - Part 3 lasts 4-5 minutes.
                </Text>
                <View style={{ margin: 5 }}></View>
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
  contentHeadingMain: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  contentHeading: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: "#1267E9"
  },
  contentText: { margin: 5, lineHeight: 20 },
  boldText: {fontWeight: "bold" },
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
