import { View, Text } from "react-native";
import React from "react";
import { ArrowRight } from "@/constants/Icons";

const TasksCard = () => {
  return (
    <View className=" flex-row items-center justify-between  py-2 gap-x-2 ">
      <View className="  border border-[#129CFF] p-2 w-[50px]  justify-center items-center rounded-full bg-[#EAF9FF] h-[50px]">
        <Text className=" text-[#129CFF] font-bold text-2xl">2</Text>
      </View>
      <Text className=" text-[17px] flex-1">Message requests need approval</Text>

      <ArrowRight width={25} height={25} className=" rotate-180" />
    </View>
  );
};

export default TasksCard;
