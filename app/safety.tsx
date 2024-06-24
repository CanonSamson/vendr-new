import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

const safety = () => {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{}} className=" flex-1 w-full  ">
        <View
          style={styles.container}
          className="rounded-[14px] mt-1   mx-1 bg-white p-5"
        >
          <Text className=" text-[26px] text-primary font-semibold">
            Pay using PayPal service fees:
          </Text>

          <Text className=" my-4 leading-[24px]">
            We recommend buyers to make translations with Venmo & PayPal and opt
            to have seller's fees for transactions, offering a layer of
            protection. This enables buyers to address and dispute any
            transactional issues that may arise, ensuring a secure payment
            process.
          </Text>
          <Text className=" text-[26px] text-primary font-semibold">
            Ship items with tracking:
          </Text>

          <Text className=" my-4 leading-[24px]">
            When sending items, always use tracked shipping methods. Tracking
            details serve as evidence in case of disputes or claims, adding an
            extra layer of security for both buyers and sellers when using Venmo
            & PayPal for transactions.
          </Text>

          <Text className=" text-[26px] text-primary font-semibold">
            Plan details in advance:
          </Text>

          <Text className=" my-4 leading-[24px]">
            Establish crucial details before meeting in person, including the
            selling price, payment method, meeting time, and location. Clear
            communication beforehand reduces the risk of complications during
            the transaction.
          </Text>
          <Text className=" text-[26px] text-primary font-semibold">
            Meet in public:
          </Text>

          <Text className=" my-4 leading-[24px]">
            Meet in public and bring a friend. If meeting to buy or sell a small
            item, take along a buddy, and meet in a public place. Coffee shops,
            malls or even the parking lot of the local police station are all
            possibilities. Keep your cell phone handy and turned on during the
            meeting.
          </Text>
          <Text className=" text-[26px] text-primary font-semibold">
            Exercise Caution in Private Areas:
          </Text>

          <Text className=" my-4 leading-[24px]">
            When selling larger items that require meeting at your home, obtain
            the buyer's full name and cell phone number beforehand. If possible,
            move the item to the driveway, meet during daylight, and ensure
            well-lit surroundings for added safety.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default safety;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
  },
});
