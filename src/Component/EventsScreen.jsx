import React from "react";
import {
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import EventCard from "../Component/EventCard";
import { API_BASE_URL } from "../Api/BaseURL";
import useGetData from "../Api/useGetData";
import useSTTBarHeight from "../Hook/useSTTBarHeight";

function EventsScreen({ navigation, route }) {
  // ? API requests
  const [data, loading, error] = useGetData(
    `${API_BASE_URL}/events?offset=0&limit=3`
  );

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  // ? decor
  const sttbh = useSTTBarHeight();
  // useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);
  const test = () => {
    console.log("testing");
  };
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View className="flex-1">
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
        animated={true}
      />
      <LinearGradient
        colors={["#14b8a6", "#0ea5e9"]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="bg-sea-blue w-full h-[80] flex flex-row justify-between items-center "
        style={{paddingTop:sttbh, paddingHorizontal:sttbh}}
        >
        <Text style={{ fontSize: 20 }}>Events</Text>
        <TouchableOpacity title="srot">
          <Ionicons name="md-filter" size={24} color="black" />
        </TouchableOpacity>
      </LinearGradient>
      <ScrollView className=" px-[30] pt-[30]  ">
        {data.map((event) => (
          <EventCard
            key={event.eventId}
            event={event}
            navigation={navigation}
            route={route}
          />
        ))}
        <View className="w-full h-[30] "></View>
      </ScrollView>
      {/* <Text style={{ margin: 10 }}>Poasdst: {route.params?.post}</Text> */}
      <Button
        title="Event"
        onPress={() => {
          navigation.navigate("EventsDetail", {
            eventID: 86,
            eventName: "Drone light show",
          });
        }}
      />
      <Button title="test" onPress={test} />
    </View>
  );
}

export default EventsScreen;
