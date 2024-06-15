import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { router } from "expo-router";
import { CloseIcon } from "@/constants/Icons";

const safety = () => {
  return (
    <View>
      <View className="pt-14 pb-4 z-20 flex-row  justify-between items-center shadow-xl bg-white border-b-[2px] px-4 border-primary">
        <Pressable onPress={() => router.back()}>
          <Image className=" mx-3" source={CloseIcon} width={40} height={40} />
        </Pressable>

        <View className="z-30 relative  ">
          <Text className="text-xl  text-center text-black font-medium">
            Safefy
          </Text>
        </View>
        <View className="w-[40px]"></View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
        className=" w-full  "
      >
        <View className="rounded-xl mt-5   mb-20  shadow-xl shadow-gray-200 bg-white p-5">
          <Text className=" text-xl text-primary font-semibold">
            Pay using PayPal service fees:
          </Text>

          <Text className=" my-4 leading-xl font-light">
            We recommend buyers to make translations with Venmo & PayPal and opt
            to have seller's fees for transactions, offering a layer of
            protection. This enables buyers to address and dispute any
            transactional issues that may arise, ensuring a secure payment
            process.
          </Text>
          <Text className=" text-xl text-primary font-semibold">
            Ship items with tracking:
          </Text>

          <Text className=" my-4 leading-xl font-light">
            When sending items, always use tracked shipping methods. Tracking
            details serve as evidence in case of disputes or claims, adding an
            extra layer of security for both buyers and sellers when using Venmo
            & PayPal for transactions.
          </Text>

          <Text className=" text-xl text-primary font-semibold">
            Plan details in advance:
          </Text>

          <Text className=" my-4 leading-xl font-light">
            Establish crucial details before meeting in person, including the
            selling price, payment method, meeting time, and location. Clear
            communication beforehand reduces the risk of complications during
            the transaction.
          </Text>
          <Text className=" text-xl text-primary font-semibold">
            Meet in public:
          </Text>

          <Text className=" my-4 leading-xl font-light">
            Meet in public and bring a friend. If meeting to buy or sell a small
            item, take along a buddy, and meet in a public place. Coffee shops,
            malls or even the parking lot of the local police station are all
            possibilities. Keep your cell phone handy and turned on during the
            meeting.
          </Text>
          <Text className=" text-xl text-primary font-semibold">
            Exercise Caution in Private Areas:
          </Text>

          <Text className=" my-4 leading-xl font-light">
            When selling larger items that require meeting at your home, obtain
            the buyer's full name and cell phone number beforehand. If possible,
            move the item to the driveway, meet during daylight, and ensure
            well-lit surroundings for added safety.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default safety;
