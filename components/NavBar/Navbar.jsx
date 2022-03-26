import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image style={styles.icon} source={require('./images/icon_home.png')} />
            <Image style={styles.cameraIcon} source={require('./images/icon_camera.png')} />
            <Image style={styles.icon} source={require('./images/icon_chart.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#F0A500",
        width: "100%",
        padding: 15,
        paddingHorizontal: 30,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cameraIcon: {
        width: 65,
        height: 65
    },
    icon: {
        width: 40,
        height: 40,
    }

})
