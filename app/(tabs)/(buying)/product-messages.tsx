import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { chatData } from "@/constants/testdata";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProductMessages = () => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="p-4 flex-1 w-full"
      >
        <View className=" my-4"></View>
      </ScrollView>
    </>
  );
};

export default ProductMessages;

const styles = StyleSheet.create({
  heading: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // For Android
    elevation: 10,
  },
  container: {
    shadowColor: "gray",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 40,
        backgroundColor: "white",
      },
    }),
  },
});
