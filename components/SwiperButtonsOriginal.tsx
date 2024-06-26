import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
const line = require("@/assets/icon/line.png");
const undo = require("@/assets/icon/undo-button.png");
const search = require("@/assets/icon/search-button.png");
const offer = require("@/assets/icon/offer-button.png");
const next = require("@/assets/icon/next-button.png");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface SwiperButtonsProps {
  handleFilter: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}
const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  handleFilter,
  onSwipeLeft,
  onSwipeRight,
}) => {
  return (
    <View
      style={{  height: verticalScale(98) }}
      className="   bottom-[5px] absolute  w-full   right-0  "
    >
      <View className=" absolute w-full -bottom-2  right-0 ">
        <View className=" flex-row max-w-[80%] justify-center mx-auto">
          <Image
            source={line}
            width={200}
            className=" w-full "
            resizeMode="contain"
          />
        </View>
      </View>
      <View className=" w-full px-4 flex-row">
        <TouchableOpacity
          onPress={() => {}}
          className="  relative active:scale-90 duration-700 -bottom-[20px] -right-[20px] flex-1 items-center justify-center"
        >
          <View
            style={{ width: verticalScale(45) }}
            className=" items-center justify-center"
          >
            <Image
              source={undo}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSwipeLeft()}
          className=" flex-1  active:scale-90 duration-900 items-center justify-center"
        >
          <View
            style={{ width: verticalScale(56) }}
            className="  items-center justify-center"
          >
            <Image
              source={next}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSwipeRight()}
          className=" active:scale-90 duration-900 flex-1 items-center justify-center"
        >
          <View
            style={{ width: verticalScale(75) }}
            className=" w-[90px] items-center justify-center"
          >
            <Image
              source={offer}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilter()}
          className=" relative -bottom-[20px] active:scale-90 duration-900 -left-[20px] flex-1 items-center justify-center"
        >
          <View
            style={{ width: verticalScale(45) }}
            className=" items-center justify-center"
          >
            <Image
              source={search}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwiperButtons;
