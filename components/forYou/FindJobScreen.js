import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const FindJobScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Finding a job in Australia sjdfkjasknja;
                adsj;al jf;ajjah ov;jzvn z;fjvz sjfa jfskhjkafjd
            </Text>
        </ScrollView>
    )
}

export default FindJobScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        lineHeight: 20,
        padding: 10
    }
})