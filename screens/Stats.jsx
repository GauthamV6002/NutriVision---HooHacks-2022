import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Navbar from "../components/NavBar/Navbar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";

import RatingBar from "../components/RatingBar/RatingBar.jsx";

const TOTAL_NUTRIONAL_DATA = [
    {
        name: "Sugar",
        amount: "20 g",
        floatAmount: 20, // int amounts in grams
        reccomendedValue: 15,
        sign: "˅",
        color: "lightblue",
    },
    {
        name: "Sodium",
        amount: "0.8 g",
        floatAmount: 0.8, // int amounts in grams
        reccomendedValue: 2.3,
        sign: "˅",
        color: "lightblue",
    },
    {
        name: "Carbohydrates",
        amount: "75 g",
        intAmount: 75, // int amounts in grams
        reccomendedValue: 225,
        sign: "˄",
        color: "lightcoral",
    },
    {
        name: "Potassium",
        amount: "3 g",
        intAmount: 3, // int amounts in grams
        reccomendedValue: 4.5,
        sign: "˄",
        color: "lightcoral",
    },
    {
        name: "Protein",
        amount: "50 g",
        intAmount: 50, // int amounts in grams
        reccomendedValue: 56,
        sign: "=",
        color: "lightgreen",
    },
];

const StatsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.background}>
            <TopBar />
            <ScrollView
                contentContainerStyle={styles.containerStyles}
                style={styles.scrollView}
            >
                {TOTAL_NUTRIONAL_DATA.map((data) => (
                    <RatingBar
                        key={TOTAL_NUTRIONAL_DATA.indexOf(data)}
                        data={data}
                        dataCloseThreshold={0.05}
                    />
                ))}
            </ScrollView>



            <Navbar handleNavigate={(to) => navigation.navigate(to)} />
        </SafeAreaView>
    );
};

export default StatsScreen;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "black",
        display: "flex",
        height: "100%",

        justifyContent: "space-between",
        alignItems: "center",
    },
    containerStyles: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    scrollView: {
        height: "100%",
    },
});
