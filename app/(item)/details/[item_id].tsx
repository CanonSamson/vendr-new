import CustomKeyBoardView from "@/components/CustomKeyBoardView";
import { LinearGradient } from "expo-linear-gradient";
import { usePathname } from "expo-router";
import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("screen");

const Seller5 = require("@/assets/images/sellers5.png");
const Product5 = require("@/assets/images/product-5.png");


const ItemDetails = () => {
  const pathname = usePathname();

  return (
    <CustomKeyBoardView>
      <View className=" relative z-2 bg-[#F3F3F3] flex-1">
        <View className="  rounded-2xl overflow-hidden  relative  bg-[#303030]">
          <View className=" flex-row items-center absolute top-2 right-0  px-[18px] h-[4px] z-20 w-full">
            <View className="  flex-1   ">
              <View className=" h-[4px] rounded-2xl bg-white "></View>
            </View>
            <View className="  flex-1   opacity-10 px-[4px] ">
              <View className=" h-[4px] rounded-2xl bg-white "></View>
            </View>
            <View className="  flex-1   opacity-10 ">
              <View className=" h-[4px] rounded-2xl bg-white "></View>
            </View>
          </View>
          <Image
            source={Product5}
            style={styles.image}
            className=" rounded-[20px]"
            resizeMode="contain"
          />
          <LinearGradient
            colors={[
              "rgba(0,0,0,.9)",
              "transparent",
              "transparent",
              "transparent",
              "rgba(0,0,0,.9)",
            ]}
            className="absolute bottom-0 left-0 right-0 w-full h-full rounded-lg"
          >
            <View className="absolute top-0 left-0 w-full flex-row">
              <View className="p-5 w-full flex-row items-center"></View>
            </View>
          </LinearGradient>
        </View>
        <View className="flex-1 mt-[-18px]  p-[10px]">
          <View
            style={[styles.container]}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-black text-[26px] font-semibold">
              Description
            </Text>

            <Text className="text-black text-[17px] font-light mt-[5px]">
              Size 11 and brand new in box, never worn. I bought them from the
              adidas store. Local pick up or I can ship them out if for $15.
            </Text>
          </View>

          <View
            style={styles.container}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-black text-[26px] font-semibold">
              Seller Details
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Seller: <Text className="text-primary underline">Kyle R</Text>
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Rating: 5 Stars 99% Positive feedback
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Location: Point Pleasant NJ, O8742
            </Text>
          </View>

          <View
            style={styles.container}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-[#EE393B] text-[26px]  font-semibold text-center">
              Report Item
            </Text>
          </View>
        </View>
      </View>
    </CustomKeyBoardView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // For Android
    elevation: 5,
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
  },
});
