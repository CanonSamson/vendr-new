import MainButton from "@/components/button/MainButton";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import LogoV1 from "@/assets/vector/logo-v1.svg";
import { router } from "expo-router";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SafeAreaView className=" flex-1">
        <View className="flex-1 items-center justify-end">
          <View className="w-auto h-[60px] flex-row">
            <LogoV1 width={"100%"} height={"100%"} />
          </View>
          <View className=" justify-center">
            <Text className=" text-lg font-semibold px-[15%] mt-5 text-center text-primary">
              The Online Marketplace For Everyone
            </Text>

            <View className=" mt-24">
              <View className=" max-w-[80%] mx-auto w-full">
                <MainButton
                  title="Sign up"
                  handlePress={() => router.push("/(sign-up)")}
                  style=""
                  colors={[Colors.primary, "#85DBF9"]}
                />
              </View>

              <View className=" flex-row items-center max-w-[80%]  justify-center mt-10 mx-auto">
                <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
                <Text className=" text-base px-5 text-gray-500 text-[19px]">
                  Or
                </Text>
                <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
              </View>

              <Pressable onPress={() => router.push("/log-in")}>
                <Text className=" text-[21px] text-center justify-center mt-5 font-medium text-primary">
                  Login
                </Text>
              </Pressable>
            </View>
            <View className=" flex-row items-center  mt-[15vh]">
              <Pressable
                className=" flex-1  justify-center p-2 items-center"
                onPress={() => {}}
              >
                <Text className=" text-xl text-gray-500 font-medium ">
                  Safety
                </Text>
              </Pressable>
              <Pressable
                className=" flex-1  justify-center p-2 items-center"
                onPress={() => {}}
              >
                <Text className=" text-xl text-gray-500 font-medium">
                  About
                </Text>
              </Pressable>
              <Pressable
                className=" flex-1  justify-center p-2 items-center"
                onPress={() => {}}
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
