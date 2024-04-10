import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";

import TimeAgo from "./TimeAgo";

function NewsCard({ navigation, data }) {
  //newsTitle--categoryId--postedDate--summary--titleImg--category==categoryName
  return (
    <TouchableOpacity
      className="  h-[100] w-full mb-[20] flex-row px-[30] "
      // navigation.navigate({
      //   name: "News",
      //   params: { post: "Trending News" },
      //   merge: true,
      // });
      onPress={() => {
        navigation.navigate("News", { screen: "NewsScreen" });

        // Pause for 500 milliseconds before navigating to NewsDetail
        setTimeout(() => {
          navigation.navigate("NewsDetail", {
            eventID: data.newsId,
            eventName: data.newsTitle,
            titleImg: data.titleImg,
          });
        }, 500);
      }}
      // navigation.reset({
      //   index: 0,
      //   routes: [
      //     {
      //       name: "News",
      //       state: {
      //         index: 1,
      //         routes: [
      //           { name: "NewsScreen" },
      //           {
      //             name: "NewsDetail",
      //             params: {
      //               eventID: data.newsId,
      //               eventName: data.newsTitle,
      //               titleImg: data.titleImg,
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   ],
      // });
    >
      <Image
        style={{ borderRadius: 15, width: 100, height: "100%" }}
        source={{ uri: data.titleImg }}
      />
      <View className="flex-1 px-[10] justify-between ">
        <Text className="text-sea-blue" style={{ fontSize: 14 }}>
          {data.category.categoryName}
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
          className="h-[50] flex-1"
          numberOfLines={3}
          lineBreakMode="tail"
        >
          {data.newsTitle}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "300",
          }}
        >
          <TimeAgo date={new Date(data.postedDate)} />
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default NewsCard;
