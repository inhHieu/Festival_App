import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import EventsDetail from "./EventsDetail";
import EventsScreen from "../Component/EventsScreen";

const Stack = createStackNavigator();

function Events() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled:true,
        gestureResponseDistance: 200,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS ,
      }}
    >
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{ title: "Events" }}
      />
      <Stack.Screen
        name="EventsDetail"
        component={EventsDetail}
        options={{ title: "Event Details" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Events;
