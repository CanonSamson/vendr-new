import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 250,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 250,
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // For Android
    elevation: 10,
  },
  container: {
    shadowColor: "gray",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 40,
        backgroundColor: "white",
      },
    }),
  },
});
