import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function NutrientBar({ nutrientData }) {
    return (
        <View style={styles.nutrientBar}>
            <Text>{nutrientData.name}</Text>
            <Text>{nutrientData.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nutrientBar: {
        backgroundColor: "whitesmoke",
        width: "75%",
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 30,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})
