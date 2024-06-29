import { LinearGradient } from "expo-linear-gradient";
import { router, usePathname, withLayoutContext } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { LogoV1White } from "@/constants/Vector";
import { ActionIcon } from "@/constants/Icons";
import { Text } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function RootLayout() {
  const pathname = usePathname();

  return (
    <>
      <LinearGradient
        colors={["#00A3FF", "#85DBF9"]}
        className=" pt-14  px-4 items-center relative rounded-md min-h-[150px] "
      >
        <View className="  px-4 w-full justify-center items-center relative flex-row  ">
          <View className=" w-auto h-[45px] z-40 relative ">
            <LogoV1White color={`#fff`} height={"100%"} />
          </View>
          <Pressable
            onPress={() => router.push("safety")}
            className=" absolute right-0"
          >
            <ActionIcon width={40} height={40} />
          </Pressable>
        </View>
        <View className="flex-row mt-5 items-center  pb-4">
          <Pressable
            onPress={() => {
              if (pathname == "/product-messages") {
                return router.back();
              }
              router.push("/(buying)");
            }}
            className="items-center  justify-center  flex-1"
          >
            <Text className=" text-white  font-semibold text-xl ">Saved</Text>
            <View
              className={`mt-2 mx-auto w-[40%] bg-white h-[3px] rounded-3xl ${
                pathname === "/" ? "opacity-100" : "opacity-0"
              }`}
            />
          </Pressable>
          <View className=" h-[60%] bg-white w-[2px] rounded-3xl " />
          <Pressable
            onPress={() => router.push("/(buying)/product-messages")}
            className="items-center  justify-center  flex-1"
          >
            <Text className=" text-white  font-semibold text-xl ">
              Messages
            </Text>
            <View
              className={`mt-2 mx-auto w-[40%] bg-white h-[3px] rounded-3xl ${
                pathname === "/product-messages" ? "opacity-100" : "opacity-0"
              }`}
            />
          </Pressable>
        </View>
      </LinearGradient>

      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: "#42BEED",
          tabBarLabelStyle: { fontWeight: "bold", textTransform: "capitalize" },
          tabBarItemStyle: { display: "none" },
          tabBarShowLabel: false,
          tabBarShowIcon: false,
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "Saved" }} />
        <MaterialTopTabs.Screen
          name="product-messages"
          options={{ title: "Messages" }}
        />
      </MaterialTopTabs>
    </>
  );
}
