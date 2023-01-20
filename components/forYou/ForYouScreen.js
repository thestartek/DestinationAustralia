import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'

const windowWidth = Dimensions.get("window").width
const shuffle = [FindJob, RentHouse, GetTFN, BeforeVisa]

const ForYouScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={{flexDirection: 'row', marginHorizontal: 10}} >
                <FindJob navigation={navigation}/>
                <RentHouse navigation={navigation} />
                <GetTFN navigation={navigation} />
            </View>
            
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <BeforeVisa navigation={navigation} />
            </View>
        </ScrollView>
        
    )
}

export const FindJob = ({navigation})=> {
    return(
        <TouchableOpacity onPress={()=> navigation.push("Finding a job")}>
            <View style={styles.container}>
                <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FJourneytoAustralia_colored_noName.png?alt=media&token=1c06614f-a6cd-466b-9d9e-6f1392a7ae64"}} style={styles.image}/>

                <View style={styles.contrastStyle}></View>
                <Text style={styles.text}>Finding a job in Australia </Text>
            </View>
        </TouchableOpacity>
    )
}

export const RentHouse = ({navigation})=> {
    return(
        <TouchableOpacity onPress={()=> navigation.push("Renting a house")}>
            <View style={styles.container}>
                <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FJourneytoAustralia_colored_noName.png?alt=media&token=1c06614f-a6cd-466b-9d9e-6f1392a7ae64"}} style={styles.image}/>

                <View style={styles.contrastStyle}></View>
                <Text style={styles.text}>Renting a house in Australia </Text>
            </View>
        </TouchableOpacity>
    )
}

export const GetTFN = ({navigation})=> {
    return(
        <TouchableOpacity onPress={()=> navigation.push("Getting TFN, ABN and Super")}>
            <View style={styles.container}>
                <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FJourneytoAustralia_colored_noName.png?alt=media&token=1c06614f-a6cd-466b-9d9e-6f1392a7ae64"}} style={styles.image}/>

                <View style={styles.contrastStyle}></View>
                <Text style={styles.text}>Getting TFN, ABN and Super </Text>
            </View>
        </TouchableOpacity>
    )
}

export const BeforeVisa = ({navigation})=> {
    return(
        <TouchableOpacity onPress={()=> navigation.push("Before applying a Visa")}>
            <View style={styles.container}>
                <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/journeytoaustralia-b21d4.appspot.com/o/icons%2Fmaps%2FJourneytoAustralia_colored_noName.png?alt=media&token=1c06614f-a6cd-466b-9d9e-6f1392a7ae64"}} style={styles.image}/>

                <View style={styles.contrastStyle}></View>
                <Text style={styles.text}>Before applying a visa </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ForYouScreen 

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    container: {
      // justifyContent: "center",
      alignItems: "flex-start",
    //   backgroundColor: "white",
      marginHorizontal: 5,
      marginTop: 10,
      marginBottom: 10,
      width: windowWidth/3.5,
    },
    image: {
      width: "100%",
      height: 166,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "lightgrey",
      // opacity: 0.9
    },
    contrastStyle: {
        width: "100%",
        height: 166,
        backgroundColor: "rgba(0, 0, 0, .4)",
        borderRadius: 10,
        marginTop: -166,
    },
    text: {
      marginVertical: 5,
      height: 166,
      width: "100%",
      marginTop: -166,
      marginHorizontal: 3,
      fontWeight: "800",
      fontSize: 15,
      color: "white",
      textShadowRadius: 1,
      textShadowColor: "black",
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      padding: 4,
      // textDecorationLine: 'underline'
    },
  });
  
