import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Pages/Home";
import News from "./Pages/News";
import Events from "./Pages/Events";
import User from "./Pages/User";


function MyApp() {
  return (
    <View style={styles.container}>
        <Home />
        <News />
        <Events />
        <User />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyApp;
