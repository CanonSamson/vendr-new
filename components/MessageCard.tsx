import { View, Text, Image } from "react-native";
import React from "react";

interface Message {
  id: string;
  lastMessage: string;
  productImages: any[];
}

const MessageCard: React.FC<Message> = ({ productImages, lastMessage }) => {
  return (
    <View className="flex-1 flex-row relative w-full  items-center justify-start m-2">
      <Image
        source={productImages[0]}
        className=" h-[70px] rounded-full object-cover  w-[70px] "
        resizeMode="contain"
      />
      <View className=" flex-1 border-b border-gray-300 justify-center pl-4  h-[70px]">
        <Text className=" font-semibold text-lg ">
          Xbox Series X Controller
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" className=" text-gray">
          {lastMessage}
        </Text>
      </View>
    </View>
  );
};

export default MessageCard;
