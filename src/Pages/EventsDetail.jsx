import React from "react";
import {
  ScrollView,
  Button,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import useGetData from "../Api/useGetData";
import { API_BASE_URL } from "../Api/BaseURL";
import { Ionicons } from "@expo/vector-icons";

import useSTTBarHeight from "../Hook/useSTTBarHeight";

function EventsDetail({ navigation, route, event }) {
  const sttbh = useSTTBarHeight();
  const { eventID, eventName } = route.params;
  const [postText, setPostText] = React.useState("");
  const [data, loading, error] = useGetData(
    `${API_BASE_URL}/events/${eventID}`
  );
  if (!loading)
    return (
      <ScrollView className="  ">
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          animated={true}
        />
        <Image
          className="w-full h-[250] rounded-b-[20] "
          source={{ uri: data[0].imageUrl }}
        />
        <View
          className="  absolute w-full h-[50]    flex justify-center "
          style={{ marginTop: sttbh }}
        >
          <TouchableOpacity
            className=" w-[50] h-full  items-center justify-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="ios-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <Text className="text-2xl mt-[30] mb-[5] px-[30] ">{eventName}</Text>
        <Text className=" px-[30] mb-[10] text-justify ">
          {data[0].dateStart}
        </Text>
        <Text className=" px-[30] mb-[30] text-justify ">
          {data[0].eventDescription}
        </Text>
        <View className=" bg-green-500 w-full h-[300] "></View>
        <Button
          title="log"
          onPress={() => {
            console.log(eventID);
          }}
        ></Button>
      </ScrollView>
    );
}

export default EventsDetail;

{
  /* <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "EventsScreen",
            params: { post: postText },
            merge: true,
          });
        }}
      /> */
}
