import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <Text style={styles.logoText}> NutriVision </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#F0A500",
        width: "100%",
        padding: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 20,
        fontWeight: "700"
    }
})
