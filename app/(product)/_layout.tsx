import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="user"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 250,
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
