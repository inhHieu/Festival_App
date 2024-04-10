import React from "react";
import {
  ScrollView,
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import useGetData from "../Api/useGetData";
import { API_BASE_URL } from "../Api/BaseURL";
import { Ionicons } from "@expo/vector-icons";

import useSTTBarHeight from "../Hook/useSTTBarHeight";

function NewsDetail({ navigation, route }) {
  const sttbh = useSTTBarHeight();
  const { eventID, eventName, titleImg } = route.params;
  const [postText, setPostText] = React.useState("");
  const [data, loading, error] = useGetData(`${API_BASE_URL}/news/${eventID}`);
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
          source={{ uri: titleImg }}
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
        {data[0].newsContent.split("[IMAGE]").map((text, i) => (
          <View className=" px-[30] mb-[10] " key={i}>
            <Text className=" text-justify">{text}</Text>
            {i === 0 && (
              <Image
                className="w-full aspect-video rounded-b-[20] rounded-t-[20] mb-[30] "
                source={{ uri: titleImg }}
              />
            )}
          </View>
        ))}
        <Text className=" px-[30] mb-[30] italic font-light  ">
          {data[0].postedDate}
        </Text>
        <View className=" bg-green-500 w-full h-[300] "></View>
        <Button
          title="log"
          onPress={() => {
            console.log(titleImg);
          }}
        ></Button>
      </ScrollView>
    );
}

export default NewsDetail;
