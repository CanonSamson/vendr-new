import { View, TouchableOpacity } from "react-native";
import React from "react";

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
}
const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  handleFilter,
  onSwipeLeft,
  onSwipeRight,
  isActionActive,
}) => {
  return (
    <View
      style={{ zIndex: isActionActive ? 2 : 4 }}
      className="  bottom-0 w-full absolute  justify-end  "
    >
      <View className=" flex-row justify-evenly pb-[2px], px-[30px]">
        <TouchableOpacity className=" pt-[20px] " onPress={() => {}}>
          <UndoBtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSwipeLeft}>
          <NopeBtn />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSwipeRight} className=" ">
          <LikeBtn />
        </TouchableOpacity>
        <TouchableOpacity className=" pt-[20px]" onPress={handleFilter}>
          <SearchBtn />
        </TouchableOpacity>
      </View>
      <View className=" flex-row justify-evenly pb-[2px], px-[30px]">
        <UnderLine />
      </View>
    </View>
  );
};

export default SwiperButtons;
