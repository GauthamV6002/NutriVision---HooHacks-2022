import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import Navbar from "../components/NavBar/Navbar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";
import NutrientBar from '../components/NutrientBar/NutrientBar.jsx';

const NUTRIENT_DATA = [
    {
        name: "Sugar",
        amount: "20 g",
        floatAmount: 20, // int amounts in grams 
        dailyValue: 3,
    },
    {
        name: "Sodium",
        amount: "5 mg",
        floatAmount: 0.05, // int amounts in grams 
        dailyValue: 0,
    },
    {
        name: "Carbohydrates",
        amount: "200 g",
        intAmount: 200, // int amounts in grams 
        dailyValue: 15,
    },
    {
        name: "Sugar",
        amount: "20 g",
        floatAmount: 20, // int amounts in grams 
        dailyValue: 3,
    },
    {
        name: "Sodium",
        amount: "5 mg",
        floatAmount: 0.05, // int amounts in grams 
        dailyValue: 0,
    },
    {
        name: "Carbohydrates",
        amount: "200 g",
        intAmount: 200, // int amounts in grams 
        dailyValue: 15,
    },
    {
        name: "Sugar",
        amount: "20 g",
        floatAmount: 20, // int amounts in grams 
        dailyValue: 3,
    },
    {
        name: "Sodium",
        amount: "5 mg",
        floatAmount: 0.05, // int amounts in grams 
        dailyValue: 0,
    },
    {
        name: "Carbohydrates",
        amount: "200 g",
        intAmount: 200, // int amounts in grams 
        dailyValue: 15,
    },
    {
        name: "Sugar",
        amount: "20 g",
        floatAmount: 20, // int amounts in grams 
        dailyValue: 3,
    },
    {
        name: "Sodium",
        amount: "5 mg",
        floatAmount: 0.05, // int amounts in grams 
        dailyValue: 0,
    },
    {
        name: "Carbohydrates",
        amount: "200 g",
        intAmount: 200, // int amounts in grams 
        dailyValue: 15,
    },

]

const ImageDataScreen = () => {
    return (
        <SafeAreaView style={styles.background}>
            <TopBar />
            <ScrollView contentContainerStyle={styles.nutrientBarsChild} style={styles.nutrientBars}>
                {NUTRIENT_DATA.map((nutrientData) => (
                    <NutrientBar nutrientData={nutrientData} />
                ))}
            </ScrollView>
            <Navbar />
        </SafeAreaView>
    )
}

export default ImageDataScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgb(42, 42, 42)",
        display: "flex",

        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",

    },
    nutrientBars: {
        display: "flex",
        flexDirection: "column",

        height: "30%",
        width: "100%",
        margin: "auto",
    },
    nutrientBarsChild: {
        alignItems: 'center',
        justifyContent: 'space-between',
    }

});