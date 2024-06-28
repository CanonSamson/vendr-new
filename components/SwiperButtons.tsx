import { View, TouchableOpacity } from "react-native";
import React from "react";

import UndoBtn from "@/assets/icon/CardButtons/3DUndoBtn";
import NopeBtn from "@/assets/icon/CardButtons/3DNopeBtn";
import LikeBtn from "@/assets/icon/CardButtons/3DLikeBtn";
import SearchBtn from "@/assets/icon/CardButtons/3DSearchBtn";
import UnderLine from "@/assets/icon/CardButtons/UnderLine";
import Filter from "./Model/Filter";
import { useModal } from "@/context/ModalContext";

interface SwiperButtonsProps {
  handleFilter: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isActionActive?: boolean;
  swipe?: any;
}
const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  handleFilter,
  onSwipeLeft,
  onSwipeRight,
  isActionActive,
  swipe,
}) => {
  const { filterSheetRef } = useModal();
  const likeScale = swipe.x.interpolate({
    inputRange: [50, 150],
    outputRange: [1, 1.3], // Adjust the scale values as needed
    extrapolate: "clamp",
  });

  const nopeScale = swipe.x.interpolate({
    inputRange: [-150, -50],
    outputRange: [1.3, 1], // Adjust the scale values as needed
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
            transform: [{ scale: nopeScale }],
          }}
          onPress={onSwipeLeft}
          className=" z-2"
        >
          <NopeBtn />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            transform: [{ scale: likeScale }],
          }}
          onPress={onSwipeRight}
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
