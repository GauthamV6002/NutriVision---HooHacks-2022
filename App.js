import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";

import Navbar from "./components/NavBar/Navbar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <TopBar />
      <Navbar />
    </SafeAreaView>
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
  textInput: {
    borderBottomWidth: 1,
  }
});
