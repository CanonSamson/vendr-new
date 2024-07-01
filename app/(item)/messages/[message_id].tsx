import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { ActionIcon, ArrowDown, FilterIcon } from "@/constants/Icons";
import { LogoV1White } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";


import Filter from "@/assets/icon/Filter.svg"

const Message = () => {
  const [show, setShow] = useState("Requests")
  return (
    <View className=" my-1">
      <View className="rounded-xl flex-row justify-between items-center shadow-xl shadow-gray-200 bg-white p-5">
        <Pressable>
          <View className=" gap-x-1 items-center flex-row ">
            <Text className="  text-[20px] font-bold">Messages</Text>
            <Filter
              className=" items-center justify-center  "
              width={24}
              height={24}
            />
          </View>
        </Pressable>

        <View className=" gap-x-1 flex-row">
          <Pressable className={` ${show === "Requests" ? "" : ""} rounded-full border  border-primary`}>
            <LinearGradient
              colors={show === "Requests" ? [Colors.primary, Colors.primary, "#85DBF9"] : ["#fff", "#fff"]}
              className=" px-2 py-2 rounded-full "
            >
              <Text className={` ${show === "Requests" ? "text-white" : ""}  font-semibold `}>Requests</Text>
            </LinearGradient>
          </Pressable>
          <Pressable className={` ${show === "Open Chats" ? "" : ""} rounded-full border  border-primary`}>
            <LinearGradient
              colors={show === "Open Chats" ? [Colors.primary, Colors.primary, "#85DBF9"] : ["#fff", "#fff"]}
              className=" px-2 py-2 rounded-full "
            >
              <Text className={` ${show === "Open Chats" ? "text-white" : ""}  font-semibold `}>Open Chats</Text>
            </LinearGradient>
          </Pressable>

        </View>
      </View>

      <View className=" px-4"></View>
    </View>
  );
};

export default Message;
