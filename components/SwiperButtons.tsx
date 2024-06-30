import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import UndoBtn from "@/assets/icon/CardButtons/3DUndoBtn";
import NopeBtn from "@/assets/icon/CardButtons/3DNopeBtn";
import LikeBtn from "@/assets/icon/CardButtons/3DLikeBtn";
import SearchBtn from "@/assets/icon/CardButtons/3DSearchBtn";
import UnderLine from "@/assets/icon/CardButtons/UnderLine";

interface SwiperButtonsProps {
  handleFilter: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isActionActive?: boolean;
  swipe?: any;
  swipWith: string;
}
const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  handleFilter,
  onSwipeLeft,
  onSwipeRight,
  isActionActive,
  swipe,
  swipWith,
}) => {
  const likeScale = swipe.x.interpolate({
    inputRange: [300, 400],
    outputRange: [1, 1.3],
    extrapolate: "clamp",
  });

  const nopeScale = swipe.x.interpolate({
    inputRange: [-400, -300],
    outputRange: [1.3, 1],
    extrapolate: "clamp",
  });

  return (
    <View
      style={{ zIndex: isActionActive ? 2 : 4 }}
      className="  bottom-0 w-full absolute justify-end  "
    >
      <View className=" relative z-[4] flex-row justify-evenly pb-[2px], px-[30px]">
        <TouchableOpacity className=" pt-[20px] " onPress={() => {}}>
          <UndoBtn />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            transform: swipWith == "button" ? [] : [{ scale: nopeScale }],
          }}
          onPress={async () => {
            try {
            } finally {
              onSwipeLeft();
            }
          }}
          className=" z-2"
        >
          <NopeBtn />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            transform: swipWith == "button" ? [] : [{ scale: likeScale }],
          }}
          onPress={async () => {
            try {
            } finally {
              onSwipeRight();
            }
          }}
          className=" "
        >
          <LikeBtn />
        </TouchableOpacity>
        <TouchableOpacity className="  pt-[20px]" onPress={handleFilter}>
          <SearchBtn />
        </TouchableOpacity>
      </View>
      <View className=" flex-row justify-evenly  z-2 pb-[2px], px-[30px]">
        <UnderLine />
      </View>
    </View>
  );
};

export default SwiperButtons;
