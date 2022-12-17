import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";

const imageWA =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FWA.png?alt=media&token=5c62ff0a-7b78-498c-8912-79f551428c28";
const imageNT =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FNT.png?alt=media&token=372604a3-1c5b-4722-b96a-0f1e8f264c4c";
const imageQLD =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FQLD.png?alt=media&token=c591370a-fdba-46e9-8dc0-9c19f6984455";
const imageSA =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FSA.png?alt=media&token=214d89fd-2bb1-47e5-b139-874fbb957002";
const imageNSW =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FNSW.png?alt=media&token=013fc89d-3e44-401d-a101-d4ec19983f3e";
const imageVIC =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FVIC.png?alt=media&token=a3a63cb9-bc69-454f-b966-9643232c6b64";
const imageTAS =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FTAS.png?alt=media&token=10c7ae1c-b08c-47e9-b3c6-86bad090f979";
const imageACT =
  "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FACT_Circled.png?alt=media&token=886ceef0-e216-42eb-bd0c-c3935a14c2a2";

const UniversityFinder = () => {
  const [state, setState] = useState(true);
  const [checkedWA, setCheckedWA] = useState(false);
  const [checkedNT, setCheckedNT] = useState(false);
  const [checkedQLD, setCheckedQLD] = useState(false);
  const [checkedSA, setCheckedSA] = useState(false);
  const [checkedNSW, setCheckedNSW] = useState(false);
  const [checkedVIC, setCheckedVIC] = useState(false);
  const [checkedTAS, setCheckedTAS] = useState(false);
  const [checkedACT, setCheckedACT] = useState(false);

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 26, marginHorizontal: 20, marginVertical: 10 }}>
        Find a University that best suits you
      </Text>

      <View style={{ marginVertical: 20 }}>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          {/* WA */}
          {checkedWA != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(true),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageWA,
                }}
                style={styles.uncheckedWA}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageWA,
                }}
                style={[styles.uncheckedWA, styles.checkedState]}
              />
            </TouchableOpacity>
          )}

          {/* NT */}
          {checkedNT != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(true),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageNT,
                }}
                style={styles.uncheckedNT}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageNT,
                }}
                style={[styles.uncheckedNT, styles.checkedState]}
              />
            </TouchableOpacity>
          )}

          {/* QLD */}
          {checkedQLD != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(true),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageQLD,
                }}
                style={styles.uncheckedQLD}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageQLD,
                }}
                style={[styles.uncheckedQLD, styles.checkedState]}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: 102,
            marginTop: -90,
          }}
        >
          {/* SA */}
          {checkedSA != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(true),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageSA,
                }}
                style={styles.uncheckedSA}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageSA,
                }}
                style={[styles.uncheckedSA, styles.checkedState]}
              />
            </TouchableOpacity>
          )}

          <View>
            {/* NSW */}
            {checkedNSW != true ? (
              <TouchableOpacity
                onPress={() => [
                  setCheckedWA(false),
                  setCheckedNT(false),
                  setCheckedQLD(false),
                  setCheckedSA(false),
                  setCheckedNSW(true),
                  setCheckedVIC(false),
                  setCheckedTAS(false),
                  setCheckedACT(false),
                  setState(false),
                ]}
              >
                <Image
                  source={{
                    uri: imageNSW,
                  }}
                  style={styles.uncheckedNSW}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  source={{
                    uri: imageNSW,
                  }}
                  style={[styles.uncheckedNSW, styles.checkedState]}
                />
              </TouchableOpacity>
            )}

            {/* VIC */}
            {checkedVIC != true ? (
              <TouchableOpacity
                onPress={() => [
                  setCheckedWA(false),
                  setCheckedNT(false),
                  setCheckedQLD(false),
                  setCheckedSA(false),
                  setCheckedNSW(false),
                  setCheckedVIC(true),
                  setCheckedTAS(false),
                  setCheckedACT(false),
                  setState(false),
                ]}
              >
                <Image
                  source={{
                    uri: imageVIC,
                  }}
                  style={styles.uncheckedVIC}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  source={{
                    uri: imageVIC,
                  }}
                  style={[styles.uncheckedVIC, styles.checkedState]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {/* TAS */}
          {checkedTAS != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(true),
                setCheckedACT(false),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageTAS,
                }}
                style={styles.uncheckedTAS}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageTAS,
                }}
                style={[styles.uncheckedTAS, styles.checkedState]}
              />
            </TouchableOpacity>
          )}
          {/*ACT */}
          {checkedACT != true ? (
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(true),
                setState(false),
              ]}
            >
              <Image
                source={{
                  uri: imageACT,
                }}
                style={styles.uncheckedACT}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={{
                  uri: imageACT,
                }}
                style={[styles.uncheckedACT, styles.checkedState]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {state && (
        <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
          <Text style={{color: "white", fontSize: 18, margin: 10}}>
            Select a state from the above map to see the list of Universities
          </Text>
        </View>
      )}

      {/* ///////////////////// NSW //////////////////////////////// */}
      {checkedNSW && (
        <View style={[styles.listContainer]}>
          <Text style={styles.stateHeading}>
            New South Wales: (Sydney capital)
          </Text>

          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.acu.edu.au/study-at-acu"
                )
              }
              title="- Australian Catholic University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://study.csu.edu.au/international"
                )
              }
              title="- Charles Sturt University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.mq.edu.au/study/information-for/international"
                )
              }
              title="- Macquarie University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.scu.edu.au/study-at-scu/"
                )
              }
              title="- Southern Cross University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.une.edu.au/study/international"
                )
              }
              title="- University of New England"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.unsw.edu.au/study?studentType=international"
                )
              }
              title="- University of New South Wales"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.newcastle.edu.au/study/international/study-with-us"
                )
              }
              title="- University of Newcastle"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.sydney.edu.au/study.html"
                )
              }
              title="- University of Sydney"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.uts.edu.au/study")
              }
              title="- University of Technology Sydney"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.westernsydney.edu.au/international/studying/courses-for-your-success"
                )
              }
              title="- Western Sydney University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.uow.edu.au/study/")
              }
              title="- University of Wollongong"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// VIC //////////////////////// */}
      {checkedVIC && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Victoria: (Melbourne capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="- Deakin University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://federation.edu.au/international"
                )
              }
              title="- Federation University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.latrobe.edu.au/international"
                )
              }
              title="- La Trobe University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.monash.edu/study/courses"
                )
              }
              title="- Monash University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.rmit.edu.au/study-with-us"
                )
              }
              title="- RMIT University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.swinburne.edu.au/courses/"
                )
              }
              title="- Swinburne University of Technology"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://divinity.edu.au/courses")
              }
              title="- University of Divinity"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://study.unimelb.edu.au/")
              }
              title="- University of Melbourne"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.vu.edu.au/study-at-vu/international-students"
                )
              }
              title="- Victoria University"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// QLD //////////////////////// */}
      {checkedQLD && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Queensland: (Brisbane capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://bond.edu.au/study/program-finder"
                )
              }
              title="- Bond University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.cqu.edu.au/courses")
              }
              title="- Central Queensland University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.griffith.edu.au/study?location=dom"
                )
              }
              title="- Griffith University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.jcu.edu.au/courses")
              }
              title="- James Cook University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.qut.edu.au/study/international"
                )
              }
              title="- Queensland University of Technology"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://study.uq.edu.au/?studentType=international"
                )
              }
              title="- University of Queensland"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.unisq.edu.au/study")
              }
              title="- University of Southern Queensland"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.usc.edu.au/study/courses-and-programs"
                )
              }
              title="- University of the Sunshine Coast"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// SA //////////////////////// */}
      {checkedSA && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            South Australia: (Adelaide capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.australia.cmu.edu/study"
                )
              }
              title="- Carnegie Mellon University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.flinders.edu.au/study")
              }
              title="- Flinders University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.torrens.edu.au/courses"
                )
              }
              title="- Torrens University Australia"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.adelaide.edu.au/study/"
                )
              }
              title="- University of Adelaide"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://study.unisa.edu.au/")
              }
              title="- University of South Australia"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// WA //////////////////////// */}
      {checkedWA && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Western Australia: (Perth capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.curtin.edu.au/study/")
              }
              title="- Curtin University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.ecu.edu.au/future-students/overview"
                )
              }
              title="- Edith Cowan University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.murdoch.edu.au/study/courses/"
                )
              }
              title="- Murdoch University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.notredame.edu.au/study/programs"
                )
              }
              title="- University of Notre Dame Australia"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.uwa.edu.au/study/Courses-and-Careers"
                )
              }
              title="- University of Western Australia"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// ACT //////////////////////// */}
      {checkedACT && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Australian Capital Territory: (Canberra)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.anu.edu.au/")
              }
              title="- Australian National University"
            />
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.canberra.edu.au/future-students/study-at-uc/study-areas"
                )
              }
              title="- University of Canberra"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// TAS //////////////////////// */}
      {checkedTAS && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Tasmania: (Hobart Capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.utas.edu.au/")
              }
              title="- University of Tasmania"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// NT //////////////////////// */}
      {checkedNT && (
        <View style={styles.listContainer}>
          <Text style={{ fontSize: 18, margin: 10 }}>
            Northern Territory: (Darwin Capital)
          </Text>
          <View style={{ alignItems: "flex-start", marginHorizontal: 15 }}>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.cdu.edu.au/study")
              }
              title="- Charles Darwin University"
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default UniversityFinder;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  uncheckedWA: {
    width: 100,
    height: 200,
    resizeMode: "contain",
  },
  uncheckedNT: {
    width: 60,
    height: 115,
    resizeMode: "contain",
  },
  uncheckedQLD: {
    width: 104,
    height: 127,
    resizeMode: "contain",
  },
  uncheckedSA: {
    width: 80,
    height: 98,
    resizeMode: "contain",
    marginTop: -4,
  },
  uncheckedNSW: {
    width: 86,
    height: 70,
    marginTop: 16,
  },
  uncheckedVIC: {
    width: 60,
    height: 35,
    marginTop: -20,
  },
  uncheckedTAS: {
    width: 40,
    height: 40,
    marginRight: 90,
    marginTop: 10,
    resizeMode: "contain",
  },
  uncheckedACT: {
    width: 50,
    height: 50,
    marginRight: 25,
    resizeMode: "contain",
    marginTop: -100,
  },
  checkedState: {
    tintColor: "#1267E9",
  },
  stateHeading: {
    fontSize: 20,
    margin: 10,
    // color: "white",
  },
});
