import { Colors } from "@/constants/Colors";
import { ArrowRight } from "@/constants/Icons";
import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { Platform } from "react-native";
import LogoV1 from "@/assets/vector/logo-v1.svg";


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="[product_id]"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 250,
            header: () => (
              <View
                className={`${
                  Platform.OS === "ios" ? "pt-14 " : "pt-14"
                } pb-4 w-full items-center 
                justify-between  px-3 flex-row
                 bg-white border-b-[3px] border-b-primary`}
                style={[styles.heading]}
              >
                <Pressable onPress={() => router.back()}>
                  <ArrowRight width={25} height={25} />
                </Pressable>

                <View className=" w-auto h-[45px] relative">
                  <LogoV1 height={"100%"} />
                </View>

                <View className="  w-[25px] h-[25px] o rotate-90" />
              </View>
            ),
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
  headerStyle: {
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
