import React, { useState } from "react";
import {
  Button,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import NewsList from "../Component/NewsList";
import NewsDetail from "./NewsDetail";
import useSTTBarHeight from "../Hook/useSTTBarHeight";

const Stack = createStackNavigator();

function News() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: 100,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="NewsScreen"
    >
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
}

function NewsScreen({ navigation, route }) {
  const sttbh = useSTTBarHeight();
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached =
      contentOffset.y + layoutMeasurement.height >= contentSize.height;
    if (isEndReached && !isLoading) {
      setIsLoading(true);
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    setIsLoading(false);
  };
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} animated={true}/>
      <View className=" flex-1 justify-center items-center ">
        {/* custom header */}
        <LinearGradient
          colors={["#0ea5e9", "#14b8a6"]}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="bg-sea-blue w-full h-[80] flex flex-row justify-between items-center"
          style={{paddingTop:sttbh, paddingHorizontal:sttbh}}
        >
          <Text style={{ fontSize: 20 }}>
            {route.params?.post ?? "Latest News"}
          </Text>
          <TouchableOpacity title="srot">
            <Ionicons name="md-filter" size={24} color="black" />
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView
          className="flex-1 w-full pt-[20] "
          onScroll={handleScroll}
          onContentSizeChange={handleContentSizeChange}
        >
          <NewsList
            limit={limit}
            offset={offset}
            navigation={navigation}
            route={route}
          />
          <View className="w-full h-[20] "></View>
          {isLoading && <Text>Loading...</Text>}
        </ScrollView>
      </View>
    </View>
  );
}

export default News;
