import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useModal } from "@/context/ModalContext";

const Index = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { confirmAnicationModal } = useModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View className=" flex-1 justify-center items-center">
        <View
          className={`${
            confirmAnicationModal ? "opacity-0" : "opacity-100"
          } animate-pulse w-auto h-[60px] flex-row`}
        >
          <ActivityIndicator size="large" color="#42BEED" />
        </View>
      </View>
    </>
  );
};

export default Index;
