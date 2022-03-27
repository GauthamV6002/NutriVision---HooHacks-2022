import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/Home.jsx"
import ImageDataScreen from "./screens/ImageData.jsx"
import StatsScreen from "./screens/Stats.jsx"


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nutrient Data" component={ImageDataScreen} />
        <Stack.Screen name="Statistics" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgb(42, 42, 42)",
    display: "flex",

    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",

  },
});
