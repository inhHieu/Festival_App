import React from "react";
import { ScrollView, Image, TouchableOpacity, Text, View } from "react-native";
import useGetData from "../Api/useGetData";
import { API_BASE_URL } from "../Api/BaseURL";
import NewsCard from "../Component/NewsCard";

function NewsList({ navigation, route, limit, offset }) {
  const [data, loading, error] = useGetData(
    `${API_BASE_URL}/news/trending?offset=${offset}&&limit=${limit}`
  );
  return (
    <View className="flex flex-col  ">
      {data.map((item, i) => (
        <NewsCard key={i} data={item} navigation={navigation} route={route} />
      ))}
    </View>
  );
}

export default NewsList;
