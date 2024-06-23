import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";
import "react-native-reanimated";
import { Colors } from "../constants/Colors";
import { AuthProvider, useAuth } from "@/context/GlobalContext";
import { ModalProvider, useModal } from "@/context/ModalContext";
import ConfirmAnicationModal from "@/components/Model/ConfirmAnicationModal";
import { View } from "react-native";
import { ArrowRight, CloseIconSvg } from "@/constants/Icons";

SplashScreen.preventAutoHideAsync();

function AppRoutes() {
  const { user, isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { setConfirmAnicationModal } = useModal();

  useEffect(() => {
    //check  if you is  isAuthenticated
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
          name="(phone_number_verification)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(settings)" options={{ headerShown: false }} />
        <Stack.Screen
          name="user-profile"
          options={{
            header: () => (
              <View
                className={`${
                  Platform.OS === "ios" ? "pt-14 " : "pt-14"
                } pb-4 w-full items-center 
                  justify-between  px-3 flex-row
                   bg-white border-b-[3px] border-b-primary`}
                style={[styles.heading]}
              >
                <Pressable onPress={() => router.back()}>
                  <ArrowRight width={25} height={25} />
                </Pressable>

                <Text className="text-[26px] text-black font-bold">
                  Profile
                </Text>
                <View className="  w-[25px] h-[25px] o rotate-90" />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="list-an-item"
          options={{
            header: () => (
              <View
                className="pt-14 pb-4 z-20 flex-row  justify-between items-center 
               bg-white  px-4  border-b-[3px] border-primary"
                style={styles.heading}
              >
                <Pressable onPress={() => router.back()}>
                  <CloseIconSvg width={25} height={25} />
                </Pressable>

                <Text className="text-[26px] text-black font-bold">
                  List an Item
                </Text>
                <View className="w-[25px]" />
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="safety"
          options={{
            header: () => (
              <View
                className="pt-14 pb-4 z-20 flex-row  justify-between items-center 
               bg-white  px-4  border-b-[3px] border-primary"
                style={styles.heading}
              >
                <Pressable onPress={() => router.back()}>
                  <CloseIconSvg width={25} height={25} />
                </Pressable>

                <Text className="text-[26px] text-black font-bold">Safefy</Text>
                <View className="w-[25px]" />
              </View>
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
    <AuthProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </AuthProvider>
  );
}

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
  headerStyle: {
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
