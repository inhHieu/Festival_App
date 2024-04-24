import React from "react";
import { Button, Text, View, TouchableOpacity, Image } from "react-native";
import TimeAgo from "./TimeAgo";

function EventCard({ navigation, route, event }) {
  return (
    <TouchableOpacity
      className={` w-full  mr-[20] mb-[20] `}
      onPress={() => {
        navigation.navigate("EventsDetail", {
          eventID: event.eventId,
          eventName: event.eventName,
        });
      }}
    >
      <View className="w-full aspect-video ">
        <Image
          // className=" w-full h-full  "
          style={{ borderRadius: 15, width: "100%", height: "100%" }}
          source={{ uri: event.imageUrl }}
        ></Image>
      </View>
      <View className=" gap-[5] mt-[10] px-[20] ">
        <View className="flex flex-row w-full justify-between">
          <Text className=" text-sea-blue  " style={{ fontSize: 14 }}>
            Art
          </Text>
          <Text className=" font-light text-black/70 " style={{ fontSize: 14 }}>
            <TimeAgo date={new Date(event.dateStart)} />
          </Text>
        </View>
        <Text className="font-bold   " style={{ fontSize: 18 }}>
          {event.eventName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default EventCard;
