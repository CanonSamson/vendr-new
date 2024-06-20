// ProductDetails.tsx
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { LogoV1White } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";

import DownIcon from "@/assets/icon/down-arrow.svg";
import { Dimensions } from "react-native";

const line = require("@/assets/icon/line.png");
const offer = require("@/assets/icon/offer-button.png");
const next = require("@/assets/icon/next-button.png");

interface ProductDetailsProps {
  modalVisible: boolean;
  hideModal: () => void;
  images: any[];
  price: string;
  name: string;
}

const { width, height } = Dimensions.get("screen");

const ProductDetails: React.FC<ProductDetailsProps> = ({
  modalVisible,
  hideModal,
  images,
  price,
  name,
}) => {
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => hideModal()}
      animationType="slide"
    >
      <ScrollView style={{ flex: 1 }}>
        <LinearGradient
          colors={[Colors.primary, Colors.primary, "#85DBF9"]}
          className=" pt-14  px-4 items-center relative rounded-md pb-5"
        >
          <View className="  px-4 w-full justify-center items-center relative flex-row  ">
            <View className=" w-auto h-[45px] z-40 relative ">
              <LogoV1White color={`#fff`} height={"100%"} />
            </View>
          </View>
        </LinearGradient>
        <View className=" rounded-2xl overflow-hidden  relative -mt-4 bg-[#303030]">
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
            source={images[0]}
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

            <View className="absolute bottom-0 left-0 w-full flex-row">
              <Pressable
                onPress={hideModal}
                className="p-5 w-full active:scale-150  duration-500 mr-2 flex-row justify-end"
              >
                <DownIcon />
              </Pressable>
            </View>
          </LinearGradient>
        </View>
        <View className="flex-1 p-[10px]">
          <View
            className=" py-[10px] px-[20px]  bg-white rounded-xl"
            style={styles.container}
          >
            <Text className="text-black text-[26px] font-semibold">{name}</Text>
            <Text className="text-black text-[17px] mt-[5px] font-light">
              {price} or Best Offer
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Condition: New
            </Text>
          </View>
          <View
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
            style={styles.container}
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
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
            style={styles.container}
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
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
            style={styles.container}
          >
            <Text className="text-[#EE393B] text-[26px]  font-semibold text-center">
              Report Item
            </Text>
          </View>
        </View>
        <View className=" flex-1 w-full">
          <View className=" w-full px-[10px] flex-row">
            <Pressable className=" flex-1 items-end mr-[20px] justify-center">
              <View className=" w-[80px] items-center justify-end">
                <Image
                  source={next}
                  width={200}
                  className=" w-full "
                  resizeMode="contain"
                />
              </View>
            </Pressable>
            <Pressable className=" flex-1 items-start justify-center">
              <View className=" w-[100px] items-center justify-center">
                <Image
                  source={offer}
                  width={200}
                  className=" w-full "
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View className="  w-[50%] -top-[20px] relative  mx-auto ">
          <Image
            source={line}
            width={200}
            className=" w-full "
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    // For Android
    elevation: 6,
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
  },
});
