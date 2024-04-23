import React from "react";
import { ScrollView, Image, TouchableOpacity, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import useGetData from "../Api/useGetData";
import { API_BASE_URL } from "../Api/BaseURL";
import TimeAgo from "./TimeAgo";

function HorizontalEvent({ navigation }) {
  const [data, loading, error] = useGetData(
    `${API_BASE_URL}/events?offset=0&limit=3`
  );

  const dateObj = new Date(data?.dateStart);
  return (
    <Animated.View
      className=" w-full h-[270] "
      entering={FadeInDown.delay(800)}
    >
      <ScrollView horizontal={true}>
        {data.map((item, i) => (
          <TouchableOpacity
            className={
              ` w-[250] h-[150] mr-[20] ` + (i == 0 ? " ml-[30] " : "")
            }
            key={i}
            onPress={() => {
              navigation.navigate("Events", { screen: "EventsScreen" });
              // Pause for 500 milliseconds before navigating to NewsDetail
              setTimeout(() => {
                navigation.navigate("EventsDetail", {
                  eventID: item.eventId,
                  eventName: item.eventName,
                });
              }, 500);
            }}
          >
            <Image
              // className=" w-full h-full  "
              style={{ borderRadius: 15, width: "100%", height: "100%" }}
              source={{ uri: item.imageUrl }}
            ></Image>
            <View className=" gap-[5] mt-[10] ">
              <Text className=" text-sea-blue  " style={{ fontSize: 14 }}>
                Art
              </Text>
              <Text className="font-bold   " style={{ fontSize: 18 }}>
                {item.eventName}
              </Text>
              <Text
                className=" font-light text-black/70 "
                style={{ fontSize: 14 }}
              >
                <TimeAgo date={new Date(item.dateStart)} />
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
}

export default HorizontalEvent;
