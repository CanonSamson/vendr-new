import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Dimensions } from "react-native";
import HomeIcon from "@/assets/icon/Tabs/homeTab";
import BuyingIcon from "@/assets/icon/Tabs/buyingTab";
import SellingIcon from "@/assets/icon/Tabs/sellingTab";
import MessagesIcon from "@/assets/icon/Tabs/messagesTab";

// Device dimensions and base design dimensions
const { width, height } = Dimensions.get("window");

// Scale factors based on current device vs. base design
const widthScale = width / 390; // Using iPhone 13 Pro's width as base
const heightScale = height / 844; // Using iPhone 13 Pro's height as base

// Dynamic margin bottom to ensure consistent spacing
const dynamicMarginBottom = heightScale === 1 ? 0 : heightScale * 13;
const dynamicTabHeight = heightScale < 0.95 ? heightScale * 0.8 : 1.1;

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#42BEED",
        tabBarInactiveTintColor: "#B3B4B5",

        tabBarStyle: {
          borderTopWidth: 2.75,
          elevation: 5,
          borderTopColor: "#3FC0EF",
          height: 95 * dynamicTabHeight,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 4.65,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle,
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <HomeIcon
              style={styles.tabContainer}
              {...tabBarIconStyle}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(buying)"
        options={{
          headerShown: false,
          tabBarLabel: "Buying",

          tabBarLabelStyle,
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <BuyingIcon
              style={styles.tabContainer}
              {...tabBarIconStyle}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="selling"
        options={{
          headerShown: false,
          tabBarLabel: "Selling",
          tabBarLabelStyle,
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <SellingIcon
              style={styles.tabContainer}
              {...tabBarIconStyle}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
          tabBarLabel: "Messages",
          tabBarLabelStyle,
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ color }) => (
            <MessagesIcon
              style={styles.tabContainer}
              {...tabBarIconStyle}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const tabBarLabelStyle = {
  fontSize: 12 * widthScale,
  fontWeight: "700",
  marginBottom: dynamicMarginBottom,
};

const tabBarIconStyle = {
  width: 35 * widthScale, // Direct scaling for clarity
  height: 35 * widthScale, // Keep aspect ratio consistent
  marginTop: dynamicMarginBottom * 0.5, // Ensure consistent spacing
};

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabsLayout;
