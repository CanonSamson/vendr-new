import Header from "@/components/layout/Header";
import { useModal } from "@/context/ModalContext";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  const { confirmAnicationModal } = useModal();
  return (
    <>
      <Header
        Left={<View className=" w-[24px] h-[24px] o rotate-90" />}
        hendleLeft={() => {}}
        hendleRight={() => {}}
        Right={<View className=" w-[24px] h-[24px] o rotate-90" />}
        title="Sign Up"
        absolute={true}
      />

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="email"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="upLoad-photo"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="address"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="password"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
