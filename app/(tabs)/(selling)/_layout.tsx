import { LinearGradient } from "expo-linear-gradient";
import { router, usePathname, withLayoutContext } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { LogoV1White } from "@/constants/Vector";
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
import { Colors } from "@/constants/Colors";
import MainButton from "@/components/button/MainButton";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

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
        className={` z-40 px-4 items-center justify-center relative  pb-4 pt-14`}
      >
        <View className="  w-full  items-center relative   ">
          <View className=" w-auto h-[45px]  relative ">
            <LogoV1White color={`#fff`} height={"100%"} />
          </View>
        </View>
      </LinearGradient>
      <View style={{ width: wp(70) }} className=" justify-center mx-auto mt-4 ">
        <MainButton
          title="List an item"
          handlePress={() => router.push("/list-an-item")}
          style={{}}
          colors={[Colors.primary, "#85DBF9"]}
          pressableClassName="  border-[#24BBF1] rounded-[9px] border-[2px]  "
        />
      </View>
      <View
        style={{ width: wp(90) }}
        className=" mx-auto flex-row items-center justify-evenly mt-2"
      >
        <Pressable
          onPress={() => router.push("/(selling)")}
          className=" items-center   flex-1 justify-center"
        >
          <Text
            style={{ fontSize: hp(6) }}
            className=" text-primary  text-[50px] leading-none font-black"
          >
            9
          </Text>
          <Text
            style={[{ fontSize: hp(2.6) }, styles.container]}
            className=" leading-none font-bold text-[#5C5C5C]"
          >
            Active
          </Text>
          <View
            style={[styles.container]}
            className={`mt-2 mx-auto w-[40%]  bg-primary h-[5px] rounded-3xl ${
              pathname === "/" ? "opacity-100" : "opacity-0"
            }`}
          />
        </Pressable>
        <Pressable
          onPress={() => router.push("/tasks")}
          className=" items-center flex-1 justify-center"
        >
          <Text
            style={[{ fontSize: hp(6) }, styles.container]}
            className=" text-primary text-[50px] leading-none font-black"
          >
            9
          </Text>
          <Text
            style={[{ fontSize: hp(2.6) }, styles.container]}
            className="  font-bold text-[#5C5C5C]"
          >
            Tasks
          </Text>
          <View
            style={[styles.container]}
            className={`mt-2 mx-auto w-[40%]  bg-primary h-[5px] rounded-3xl ${
              pathname === "/tasks" ? "opacity-100" : "opacity-0"
            }`}
          />
        </Pressable>
        <Pressable
          onPress={() => router.push("/previous")}
          className=" items-center flex-1 justify-center"
        >
          <Text
            style={[{ fontSize: hp(6) }, styles.container]}
            className=" text-primary text-[50px] leading-none font-black"
          >
            9
          </Text>
          <Text
            style={[{ fontSize: hp(2.6) }, styles.container]}
            className="  font-bold text-[#5C5C5C]"
          >
            Previous
          </Text>
          <View
            style={[styles.container]}
            className={`mt-2 mx-auto w-[40%]  bg-primary h-[5px] rounded-3xl ${
              pathname === "/previous" ? "opacity-100" : "opacity-0"
            }`}
          />
        </Pressable>
      </View>

      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: "#42BEED",
          tabBarLabelStyle: { fontWeight: "bold", textTransform: "capitalize" },
          tabBarItemStyle: { display: "none" },
          tabBarShowLabel: false,
          tabBarShowIcon: false,
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "active" }} />
        <MaterialTopTabs.Screen name="tasks" options={{ title: "active" }} />
        <MaterialTopTabs.Screen
          name="previous"
          options={{ title: "previous" }}
        />
      </MaterialTopTabs>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
  },
});
