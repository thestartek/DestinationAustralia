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

const ExploreAustralia = () => {
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
      <Text style={{ fontSize: 26, marginHorizontal: 20, marginVertical: 20 }}>
        Explore in detail before you start your Journey to Australia
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
              <TouchableOpacity
                onPress={() => [
                  setCheckedWA(false),
                  setCheckedNT(false),
                  setCheckedQLD(false),
                  setCheckedSA(false),
                  setCheckedNSW(false),
                  setCheckedVIC(false),
                  setCheckedTAS(false),
                  setCheckedACT(false),
                  setState(true),
                ]}
              >
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
              <TouchableOpacity
                onPress={() => [
                  setCheckedWA(false),
                  setCheckedNT(false),
                  setCheckedQLD(false),
                  setCheckedSA(false),
                  setCheckedNSW(false),
                  setCheckedVIC(false),
                  setCheckedTAS(false),
                  setCheckedACT(false),
                  setState(true),
                ]}
              >
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
            <TouchableOpacity
              onPress={() => [
                setCheckedWA(false),
                setCheckedNT(false),
                setCheckedQLD(false),
                setCheckedSA(false),
                setCheckedNSW(false),
                setCheckedVIC(false),
                setCheckedTAS(false),
                setCheckedACT(false),
                setState(true),
              ]}
            >
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
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 20,
                marginVertical: 10,
                color: "white",
              }}
            >
              Select a state from the above map to start exploring
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={{ fontSize: 20, margin: 10 }}>Australia</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.acu.edu.au/study-at-acu"
                )
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ///////////////////// NSW //////////////////////////////// */}
      {checkedNSW && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>New South Wales</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.acu.edu.au/study-at-acu"
                )
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// VIC //////////////////////// */}
      {checkedVIC && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>Victoria</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Melbourne</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// QLD //////////////////////// */}
      {checkedQLD && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>Queensland</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Brisbane</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// SA //////////////////////// */}
      {checkedSA && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>South Australia</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Adelaide</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// WA //////////////////////// */}
      {checkedWA && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>Western Australia</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Perth</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// ACT //////////////////////// */}
      {checkedACT && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>
              Australian Capital Territory
            </Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>City: Canberra</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// TAS //////////////////////// */}
      {checkedTAS && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>Tasmania</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Hobart</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}

      {/* ////////////////////// NT //////////////////////// */}
      {checkedNT && (
        <View>
          <View style={[styles.listContainer, { backgroundColor: "#1267E9" }]}>
            <Text style={styles.stateHeading}>Northern Territory</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.detailsText}>Major city: Darwin</Text>
            <Text style={styles.detailsText}>
              Population: 8,172,500 (as of 31 Dec 2020)
            </Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Text style={styles.detailsText}>Major city: Sydney</Text>
            <Button
              onPress={() =>
                WebBrowser.openBrowserAsync("https://www.deakin.edu.au/study")
              }
              title="Explore more"
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default ExploreAustralia;

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
    color: "white",
  },
  detailsText: {
    fontSize: 16,
    marginHorizontal: 40,
    marginVertical: 5,
  },
});
