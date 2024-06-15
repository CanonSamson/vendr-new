import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import AnimatedPressable from "./AnimatedPressable";
const line = require("@/assets/icon/line.png");
const undo = require("@/assets/icon/undo-button.png");
const search = require("@/assets/icon/search-button.png");
const offer = require("@/assets/icon/offer-button.png");
const next = require("@/assets/icon/next-button.png");

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
    <View className=" absolute w-full right-0  bottom-2">
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
        <Pressable
          onPress={() => {}}
          className=" relative active:scale-90 duration-700 -bottom-4 -right-4 flex-1 items-center justify-center"
        >
          <View className=" w-[50px] items-center justify-center">
            <Image
              source={undo}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => onSwipeLeft()}
          className=" flex-1  active:scale-90 duration-900 items-center justify-center"
        >
          <View className=" w-[70px] items-center justify-center">
            <Image
              source={next}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => onSwipeRight()}
          className=" active:scale-90 duration-900 flex-1 items-center justify-center"
        >
          <View className=" w-[90px] items-center justify-center">
            <Image
              source={offer}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => handleFilter()}
          className=" relative -bottom-4 active:scale-90 duration-900 -left-4 flex-1 items-center justify-center"
        >
          <View className=" w-[50px] items-center justify-center">
            <Image
              source={search}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SwiperButtons;
