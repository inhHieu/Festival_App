import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./src/features/user";

import TabBar from "./src/Component/TabBar";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <TabBar />
    </Provider>
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
