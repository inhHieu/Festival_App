import React from "react";
import {
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, { FadeInRight,FadeInUp } from "react-native-reanimated";

import HorizontalEvent from "../Component/HorizontalEvent";
import NewsList from "../Component/NewsList";

function Home({ navigation, route }) {
  return (
    <ScrollView style={styles.container}>
      <Animated.Image
        entering={FadeInUp.delay(300)  }
        exiting={FadeInUp.delay(300)  }
        style={styles.imageHeader}
        source={require("../assets/LotusTower.jpg")}
      />
      <Animated.View
        entering={FadeInRight.delay(500)  }
        exiting={FadeInRight.delay(500)  }
        className="my-[30] w-full px-[30] flex flex-row justify-between items-center "
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Upcoming Events
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => {
              navigation.navigate("Events", { screen: "EventsScreen" });
            }}
          >
            More
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <HorizontalEvent navigation={navigation} />
      <View className="   w-full bg-slate-200 flex flex-col flex-grow items-center  ">
        <View className="my-[30] w-full px-[30] flex flex-row justify-between items-center ">
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Trending News
          </Text>
          <TouchableOpacity>
            <Text
              onPress={() => {
                navigation.navigate({
                  name: "News",
                  params: { post: "Trending News" },
                  merge: true,
                });
              }}
            >
              More
            </Text>
          </TouchableOpacity>
        </View>
        <NewsList limit={3} offset={0} navigation={navigation} route={route} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageHeader: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default Home;
