import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RatingBar({ data, dataCloseThreshold }) {


    return (
        <View style={{ ...styles.ratingBar, backgroundColor: data.color }}>
            <Text>{data.name}</Text>
            <Text style={{ fontSize: 40 }}>{data.sign}</Text>
            <Text>{data.amount}   |   {data.reccomendedValue} g</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingBar: {
        backgroundColor: "whitesmoke",
        width: "75%",
        padding: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 30,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})