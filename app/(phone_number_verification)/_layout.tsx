import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import LogoV1 from "@/assets/vector/logo-v1.svg";

export default function RootLayout() {
  return (
    <>
      <View className=" pt-14 pb-4 z-20 flex-row shadow-xl  bg-white justify-between items-center  border-b-[2px] border-primary">
        <Pressable onPress={() => router.back()} style={{ paddingLeft: 10 }}>
          <Ionicons name="close" size={40} color={Colors.primary} />
        </Pressable>
        <View className=" w-auto h-[45px] relative">
          <LogoV1 height={"100%"} />
        </View>
        <View />
      </View>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="phone-number-verification"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    // Shadow properties for iOS
    shadowColor: "#gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 5,
  },
  headerContainer: {
    paddingTop: 56,
    paddingBottom: 16,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    // Shadow properties for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 5,
  },

  headerStyle: {
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
