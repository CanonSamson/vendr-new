import { useModal } from "@/context/ModalContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function RootLayout() {
  const { confirmAnicationModal } = useModal();
  return (
    <>
      <View
        className={` ${
          confirmAnicationModal ? " opacity-0" : " opacity-100"
        } pt-14 pb-4  absolute top-0 w-full right-0 z-20 items-center bg-white border-b-[2px] border-primary`}
        style={styles.heading}
      >
        <Text className="text-xl text-black font-medium">Sign Up</Text>
      </View>

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="email"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="upLoad-photo"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="address"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="password"
          options={{
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
