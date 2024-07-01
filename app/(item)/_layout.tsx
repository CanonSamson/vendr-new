import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams, usePathname, withLayoutContext } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { LogoV1 } from "@/constants/Vector";
import { ActionIcon, ArrowRight } from "@/constants/Icons";
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

import Circle_three_dots from "@/assets/icon/circle_three_dots.svg";
export default function RootLayout() {
  const pathname = usePathname();
  const { message_id } = useLocalSearchParams();



  return (
    <>
      <View className=" z-10 pt-14 bg-white  px-4 items-center relative rounded-md min-h-[150px] ">
        <View className="  w-full justify-between items-center relative flex-row   ">
          <Pressable className="  p-2   " onPress={() => router.back()}>
            <ArrowRight width={24} height={24} />
          </Pressable>

          <View className=" w-auto h-[45px] z-40 relative ">
            <LogoV1 color={`#fff`} height={"100%"} />
          </View>
          <Pressable className="   p-2    " onPress={() => { }}>
            <Circle_three_dots width={30} height={30} />
          </Pressable>


        </View>
        <View className="flex-row mt-5 items-center  pb-4">
          <Pressable
            onPress={() => router.push(`/(item)/details/${message_id}`)}
            className="items-center  justify-center  flex-1"
          >
            <Text className=" text-primary  font-bold text-xl ">
              Item Details
            </Text>
            <View
              className={`mt-2 mx-auto w-[40%] bg-primary h-[3px] rounded-3xl ${pathname.includes("details") ? "opacity-100" : "opacity-0"
                }`}
            />
          </Pressable>
          <View className=" h-[60%] bg-primary w-[2px] rounded-3xl " />
          <Pressable
            onPress={() => router.push(`/(item)/messages/${message_id}`)}
            className="items-center  justify-center  flex-1"
          >
            <Text className=" text-primary  font-bold text-xl ">Messages</Text>
            <View
              className={`mt-2 mx-auto w-[40%] bg-primary h-[3px] rounded-3xl ${pathname.includes("messages") ? "opacity-100" : "opacity-0"
                }`}
            />
          </Pressable>
        </View>
      </View>

      <View className=" flex-1 relative z-50">
        <MaterialTopTabs
          screenOptions={{
            tabBarActiveTintColor: "#42BEED",
            tabBarLabelStyle: { fontWeight: "bold", textTransform: "capitalize" },
            tabBarItemStyle: { display: "none" },
            tabBarShowLabel: false,
            tabBarShowIcon: false,
          }}
        >
          <MaterialTopTabs.Screen
            name="details/[item_id]"
            options={{ title: "Message" }}
          />
          <MaterialTopTabs.Screen
            name="messages/[message_id]"
            options={{ title: "Message" }}
          />
        </MaterialTopTabs>
      </View>
    </>
  );
}
