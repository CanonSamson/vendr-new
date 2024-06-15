import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(sign-up)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="log-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({});
