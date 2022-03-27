import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import React from "react";

export default function Navbar({ handleNavigate }) {
    return (
        <View style={styles.navbar}>
            <TouchableNativeFeedback
                onPress={() => handleNavigate("Home")}
            >
                <Image
                    style={styles.icon}
                    source={require("./images/icon_home.png")}

                />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() => handleNavigate("Take Image")}
            >
                <Image
                    style={styles.cameraIcon}
                    source={require("./images/icon_camera.png")}
                />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() => handleNavigate("Statistics")}
            >
                <Image
                    style={styles.icon}
                    source={require("./images/icon_chart.png")}
                />
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#F0A500",
        width: "100%",
        padding: 15,
        paddingHorizontal: 30,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cameraIcon: {
        width: 65,
        height: 65,
    },
    icon: {
        width: 40,
        height: 40,
    },
});
