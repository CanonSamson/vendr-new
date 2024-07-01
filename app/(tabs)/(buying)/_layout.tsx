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
import { Dimensions } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();


const { width, height } = Dimensions.get('window');

// Scale factors based on current device vs. base design
const widthScale = width / 390; // Using iPhone 13 Pro's width as base
const heightScale = height / 844; // Using iPhone 13 Pro's height as base

//if height is smaller then iphone 13 pro's height, then use heightScale value, otherwise use 1
const Scaler = heightScale < 1 ? heightScale : 1;

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
        className=" pt-14  px-4 items-center relative  min-h-[130px] "
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
      </LinearGradient>

      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: '#FFF',
          tabBarBounces: true,
          tabBarLabelStyle: { fontSize: 22 * Scaler, fontWeight: 'bold', textTransform: 'capitalize', bottom: 20, color: '#FFF' },
          tabBarIndicatorStyle: { backgroundColor: '#FFF', height: 3 * Scaler, bottom: 10 * Scaler, width: '11.5%', left: '19.5%', borderRadius: 4 },
          tabBarStyle: { backgroundColor: '#85DBF9', height: 41 * Scaler },
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
