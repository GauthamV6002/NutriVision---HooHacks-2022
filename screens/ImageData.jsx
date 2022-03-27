import { StyleSheet, Text, SafeAreaView, ScrollView, Button } from 'react-native'
import { useEffect, useState } from "react";

import Navbar from "../components/NavBar/Navbar.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";
import NutrientBar from '../components/NutrientBar/NutrientBar.jsx';

import MlkitOcr from 'react-native-mlkit-ocr';
import * as ImagePicker from 'expo-image-picker';


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

]

const ImageDataScreen = ({ navigation }) => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }






    return (
        <SafeAreaView style={styles.background}>
            <TopBar />
            <ScrollView contentContainerStyle={styles.nutrientBarsChild} style={styles.nutrientBars}>
                {NUTRIENT_DATA.map((nutrientData) => (
                    <NutrientBar key={NUTRIENT_DATA.indexOf(nutrientData)} nutrientData={nutrientData} />
                ))}
            </ScrollView>
            <Button onPress={pickImage} title="Pick an image from camera roll" />
            <Navbar handleNavigate={to => navigation.navigate(to)} />
        </SafeAreaView>
    )
}

export default ImageDataScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: "black",
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