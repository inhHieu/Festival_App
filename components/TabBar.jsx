import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Pages/Home";
import News from "../Pages/News";
import Events from "../Pages/Events";
import User from "../Pages/User";

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          initialParams={{ post: "Latest News" }}
          component={News}
          options={{
            tabBarLabel: "News",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: "Events",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarLabel: "User",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabBar;
