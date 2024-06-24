import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { ActionIcon, ArrowDown, FilterIcon } from "@/constants/Icons";
import { LogoV1White } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const Messages = () => {
  return (
    <>
      <LinearGradient
        colors={["#00A3FF", "#85DBF9"]}
        className=" pt-14  px-4 items-center relative rounded-md  pb-5"
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

      <View className=" my-4">
        <View className="rounded-xl flex-row justify-between items-center shadow-xl shadow-gray-200 bg-white p-5">
          <Pressable>
            <View className=" flex items-center flex-row ">
              <Text className=" text-xl font-semibold">Buying</Text>
              <Image
                className=" mx-3"
                source={ArrowDown}
                width={24}
                height={24}
              />
            </View>
          </Pressable>

          <View className=" flex-row">
            <Pressable className=" shadow-xl mr-2 rounded-full border  border-primary">
              <LinearGradient
                colors={[Colors.primary, Colors.primary, "#85DBF9"]}
                className=" px-4 py-2  rounded-full "
              >
                <Text className=" text-white">All</Text>
              </LinearGradient>
            </Pressable>
            <Pressable className=" mr-2 px-2 py-2 rounded-full border  border-primary">
              <Text className=" text-primary">Outgoing</Text>
            </Pressable>
            <Pressable className=" px-2 ml-2 py-2 rounded-full border border-primary">
              <Text className=" text-primary">Unlisted</Text>
            </Pressable>
          </View>
        </View>

        <View className=" px-4"></View>
      </View>
    </>
  );
};

export default Messages;

// showsHorizontalScrollIndicator={false}
