import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import Navbar from "../components/NavBar/Navbar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.background}>
            <TopBar />
            <Navbar handleNavigate={to => navigation.navigate(to)} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgb(42, 42, 42)",
        display: "flex",

        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",

    },
});