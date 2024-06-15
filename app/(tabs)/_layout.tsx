import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Icons } from "../../constants/Icons";
import { Colors } from "../../constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Platform } from "react-native";

// Device dimensions and base design dimensions
const { width, height } = Dimensions.get("window");

const tabBarLabelStyle = {
  fontSize: hp(1.5),
  fontWeight: "700",
};

const tabBarIconStyle = {
  // marginBottom: hp(-4),
};

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#B3B4B5",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 3,
          borderTopColor: Colors.primary,

          ...Platform.select({
            ios: {
              height: hp(10),
            },
            android: {
              height: hp(8),
            },
          }),
        },
        tabBarLabelStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              Icon={focused ? Icons.home.active : Icons.home.inActive}
              style={tabBarIconStyle}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(buying)"
        options={{
          title: "Buying",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              Icon={focused ? Icons.buying.active : Icons.buying.inActive}
              style={tabBarIconStyle}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="selling"
        options={{
          title: "Selling",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              Icon={focused ? Icons.selling.active : Icons.selling.inActive}
              style={tabBarIconStyle}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              color={color}
              Icon={focused ? Icons.messages.active : Icons.messages.inActive}
              style={tabBarIconStyle}
            />
          ),
        }}
      />
    </Tabs>
  );
}
