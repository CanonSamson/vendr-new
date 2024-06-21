import { View,  Image } from "react-native";
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
import { TouchableOpacity } from "react-native";

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
      style={{ bottom: hp(1.5), height: hp(14) }}
      className=" absolute  w-full  right-0  "
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
          className=" relative active:scale-90 duration-700 -bottom-[20px] -right-[20px] flex-1 items-center justify-center"
        >
          <View
            style={{ width: hp(6) }}
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
            style={{ width: hp(8) }}
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
            style={{ width: hp(11) }}
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
            style={{ width: hp(6) }}
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
