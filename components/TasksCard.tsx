import { View, Text } from "react-native";
import React from "react";
import { ArrowRight } from "@/constants/Icons";


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface TasksCardProps {
  message: string;
  unseen_task: number;
}

const TasksCard: React.FC<TasksCardProps> = ({ message, unseen_task }) => {
  return (
    <View className=" flex-row   items-center justify-between pt-2  gap-x-2 pb-5  px-2">
      <View className="  border border-[#129CFF]  w-[30px]  justify-center items-center rounded-full bg-[#EAF9FF] h-[30px]">
        <Text className=" text-[#129CFF] font-bold text-[18px]">{unseen_task}</Text>
      </View>
      <Text className=" text-[17px] flex-1">{message}</Text>

      <ArrowRight width={24} height={24} className=" rotate-180" />
    </View>
  );
};

export default TasksCard;
