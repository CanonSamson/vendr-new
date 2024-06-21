import MainButton from "@/components/button/MainButton";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import LogoV1 from "@/assets/vector/logo-v1.svg";
import { router } from "expo-router";
import * as Linking from "expo-linking";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("email")
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <StatusBar style="dark" />
      <SafeAreaView className=" flex-1">
        <View
          style={{ width: wp(70) }}
          className="flex-1 relative items-center mx-auto justify-end"
        >
          <View style={{ height: hp(20) }} className=" w-full h-auto ">
            <LogoV1 width={"100%"} height={"100%"} />
          </View>
          <Text
            style={{ marginTop: hp(-2) }}
            className=" relative  text-[20px] font-semibold  mt-5 text-center text-primary"
          >
            The Online Marketplace
          </Text>
          <Text className="text-[20px] font-semibold  mt-[2px] text-center text-primary">
            For Everyone
          </Text>

          <View
            style={{ marginTop: hp(15) }}
            className=" justify-center w-full"
          >
            <MainButton
              title="Sign up"
              handlePress={() => router.push("/(sign-up)")}
              style={{}}
              colors={[Colors.primary, "#85DBF9"]}
              pressableClassName="  border-[#24BBF1] rounded-[9px] border-[2px]  "
            />
            <View
              style={{ marginTop: hp(2) }}
              className=" flex-row items-center justify-center  mx-auto"
            >
              <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
              <Text className=" px-5 text-gray-500 text-[19px]">or</Text>
              <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
            </View>

            <Pressable
              style={{ marginTop: hp(2) }}
              onPress={() => router.push("/log-in")}
            >
              <Text className=" text-[21px] text-center justify-center  font-bold text-primary">
                Login
              </Text>
            </Pressable>


            <View
              style={{ marginTop: hp(10) }}
              className=" flex-row items-center pb-[10px]"
            >
              <Pressable
                className=" flex-1  justify-center p-[10px] items-center"
                onPress={() => {
                  Linking.openURL("https://www.vendr.com/legal/privacy-policy");
                }}
              >
                <Text className=" text-xl text-gray-500 font-medium ">
                  Safety
                </Text>
              </Pressable>
              <Pressable
                className=" flex-1  justify-center p-[10px] items-center"
                onPress={() => {
                  Linking.openURL("https://www.vendr.com/about");
                }}
              >
                <Text className=" text-xl text-gray-500 font-medium">
                  About
                </Text>
              </Pressable>
              <Pressable
                className=" flex-1  justify-center p-2 items-center"
                onPress={() => {
                  Linking.openURL("https://www.vendr.com/legal/terms-of-use");
                }}
              >
                <Text className=" text-xl text-gray-500 font-medium ">
                  Terms
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
