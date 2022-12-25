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
import { Divider } from "react-native-paper";

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
        Explore Australia before you start your journey
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
            <Text style={styles.detailsText}>Capital city: Canberra</Text>
            <Text style={styles.detailsText}>Population: 25,688,079</Text>
            <Text style={styles.detailsText}>Land area: 7,692 024 km2</Text>
            <Text style={styles.detailsText}>People born overseas: 29.8%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 23%
            </Text>

            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_AUS.png?alt=media&token=48fe2079-0353-40f9-8503-092d146a7242",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />

            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Australia"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Sydney</Text> */}
            <Text style={styles.detailsText}>Population: 8,172,500</Text>
            <Text style={styles.detailsText}>Land area: 801,150 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 29.3%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 26.6%
            </Text>

            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_NSW.png?alt=media&token=48bb9b76-3071-4b96-a857-8dc11cc5e760",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />

            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/New_South_Wales"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Melbourne</Text> */}
            <Text style={styles.detailsText}>Population: 6,548,040</Text>
            <Text style={styles.detailsText}>Land area: 227,444 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 29.9%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 27.6%
            </Text>

            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_VIC.png?alt=media&token=e47b7971-dd50-4a8b-8078-5e2d9d42856c",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Victoria_(Australia)"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Brisbane</Text> */}
            <Text style={styles.detailsText}>Population: 5,217,653</Text>
            <Text style={styles.detailsText}>Land area: 1,727,000 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 22.7%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 13.2%
            </Text>

            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_QLD.png?alt=media&token=362b755e-205b-456f-b5db-b572a48c3060",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Queensland"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Adelaide</Text> */}
            <Text style={styles.detailsText}>Population: 1,803,192</Text>
            <Text style={styles.detailsText}>Land area: 983,482 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 24%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 17.8%
            </Text>

            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_SA.png?alt=media&token=0387eb51-1618-4214-ab81-ad4e5098838c",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/South_Australia"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Perth</Text> */}
            <Text style={styles.detailsText}>Population: 2,749,864</Text>
            <Text style={styles.detailsText}>Land area: 2,527,013 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 32.2%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 18.4%
            </Text>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_WA.png?alt=media&token=9739fafb-bb79-411f-ab95-e5ffceceb71d",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Western_Australia"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            <Text style={styles.detailsText}>Population: 453,558</Text>
            <Text style={styles.detailsText}>Land area: 2,358 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 28.7%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 24.6%
            </Text>
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Canberra"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Hobart</Text> */}
            <Text style={styles.detailsText}>Population: 567,909</Text>
            <Text style={styles.detailsText}>Land area: 68,401 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 15.3%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 8.7%
            </Text>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_TAS.png?alt=media&token=80e79515-9d82-4813-8990-ad528f414b3f",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Tasmania"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
            {/* <Text style={styles.detailsText}>Major city: Darwin</Text> */}
            <Text style={styles.detailsText}>Population: 249,200</Text>
            <Text style={styles.detailsText}>Land area: 1,419,630 sq. km</Text>
            <Text style={styles.detailsText}>People born overseas: 21.8%</Text>
            <Text style={styles.detailsText}>
              People speaking non-English language at home: 32.4%
            </Text>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/data%2FmajorCities_NT.png?alt=media&token=88690b01-d174-4751-a0d2-6c39ee9d6298",
              }}
              style={{
                height: 300,
                width: "100%",
                resizeMode: "contain",
                marginVertical: 10,
              }}
            />
            <TouchableOpacity
              style={styles.moreButton}
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://en.wikipedia.org/wiki/Northern_Territory"
                )
              }
            >
              <Text
                style={{ fontSize: 18, color: "#1267E9", fontWeight: "bold" }}
              >
                Explore more
              </Text>
            </TouchableOpacity>
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
  moreButton: {
    // backgroundColor: "#1267E9",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 60,
  },
});
