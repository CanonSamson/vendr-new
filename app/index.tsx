import MainButton from "@/components/button/MainButton";
import { Vectors } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";
import LogoV1 from "../assets/vector/logo-v1.svg";
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
      <SafeAreaView className=" flex-1 justify-center items-center">
        <View className=" animate-pulse w-auto h-[60px] flex-row">
          <LogoV1 width={"100%"} height={"100%"} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
