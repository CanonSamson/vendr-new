import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import "react-native-reanimated";
import { Colors } from "../constants/Colors";
import { AuthProvider, useAuth } from "@/context/GlobalContext";
import { ModalProvider, useModal } from "@/context/ModalContext";
import ConfirmAnicationModal from "@/components/Model/ConfirmAnicationModal";

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
        <Stack.Screen name="user-profile" options={{ headerShown: false }} />
        <Stack.Screen name="list-an-item" options={{ headerShown: false }} />

        <Stack.Screen
          name="safety"
          options={{
            headerShown: false,
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
  headerStyle: {
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
});
