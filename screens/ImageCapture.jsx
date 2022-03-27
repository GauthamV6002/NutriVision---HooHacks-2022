import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';

import { TouchableOpacity } from "react-native-gesture-handler";

const CameraScreen = ({ navigation }) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

export default CameraScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgb(42, 42, 42)",
        display: "flex",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },

});