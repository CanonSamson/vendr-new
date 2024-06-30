import React, { useEffect } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Colors } from "../constants/Colors";
import { AuthProvider, useAuth } from "@/context/GlobalContext";
import { ModalProvider, useModal } from "@/context/ModalContext";
import ConfirmAnicationModal from "@/components/Model/ConfirmAnicationModal";
import { ArrowRight, CloseIconSvg } from "@/constants/Icons";
import Header from "@/components/layout/Header";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

function AppRoutes() {
  const { user, isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { setConfirmAnicationModal } = useModal();

  useEffect(() => {
    //check if you is isAuthenticated
    if (typeof isAuthenticated == "undefined") return;
    const inApp =
      segments[0] ==
      ("(tabs)" || "(settings)" || "list-an-item" || "user-profile");

    if (isAuthenticated && !inApp) {
      //return to home
      router.replace("(tabs)");
    } else if (isAuthenticated == false) {
      // redirect to signin
      router.replace("/(auth)");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    setConfirmAnicationModal(true);
  }, []);

  return (
    <>
      <ConfirmAnicationModal />

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(product)"
          options={{
            headerShown: false,
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 250,
          }}
        />
        <Stack.Screen
          name="(phone_number_verification)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(settings)"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(item)"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="user-profile"
          options={{
            animationDuration: 175,
            header: () => (
              <Header
                title="User Profile"
                Left={<ArrowRight width={25} height={25} />}
                hendleLeft={() => router.back()}
                hendleRight={() => {}}
                Right={<View className="w-[25px] h-[25px] o rotate-90" />}
              />
            ),
          }}
        />
        <Stack.Screen
          name="edit-user-profile"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            header: () => (
              <Header
                title="Edit Profile"
                Left={<ArrowRight width={25} height={25} />}
                hendleLeft={() => router.back()}
                hendleRight={() => {}}
                Right={<View className="w-[25px] h-[25px] o rotate-90" />}
              />
            ),
          }}
        />
        <Stack.Screen
          name="list-an-item"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            header: () => (
              <Header
                title="List An Item"
                Left={<CloseIconSvg width={25} height={25} />}
                hendleLeft={() => router.back()}
                hendleRight={() => {}}
                Right={<View className="w-[25px]" />}
              />
            ),
          }}
        />
        <Stack.Screen
          name="safety"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            header: () => (
              <Header
                title="Safety"
                Left={<CloseIconSvg width={25} height={25} />}
                hendleLeft={() => router.back()}
                hendleRight={() => {}}
                Right={<View className="w-[25px]" />}
              />
            ),
          }}
        />
        <Stack.Screen
          name="serviceterms"
          options={{
            animation: "slide_from_bottom",
            gestureDirection: "vertical",
            animationDuration: 175,
            header: () => (
              <Header
                title="Terms"
                Left={<CloseIconSvg width={25} height={25} />}
                hendleLeft={() => router.back()}
                hendleRight={() => {}}
                Right={<View className="w-[25px]" />}
              />
            ),
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SF-Pro-Text-Regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <ModalProvider>
          <BottomSheetModalProvider>
            <AppRoutes />
          </BottomSheetModalProvider>
        </ModalProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
