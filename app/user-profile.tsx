import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Pen from "@/assets/svg/pen_blue.svg";
import SettingsIcon from "@/assets/svg/Settings.svg";
import SafteyIcon from "@/assets/svg/saftey.svg";
import { router } from "expo-router";
import EditProfileModel from "@/components/Model/EditProfileModel";
import { useAuth } from "@/context/GlobalContext";
import { auth } from "@/firebase_config";
const ArrowDown = require("@/assets/icon/arrow-down.png");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { convertDateFormat, getNameInitials } from "@/utils/functions";
import { StatusBar } from "expo-status-bar";
const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <StatusBar style="dark" />
      <EditProfileModel
        modalVisible={editProfile}
        hideModal={() => setEditProfile(false)}
      />

      <View
        className="pt-14 pb-4  absolute top-0 w-full flex-row  justify-between px-4 right-0 z-20 items-center bg-white border-b-[2px] border-primary"
        style={styles.heading}
      >
        <Pressable onPress={() => router.back()}>
          <Image
            source={ArrowDown}
            className=" active:scale-90 duration-900  w-[24px] h-[24px] object-contain rotate-90"
          />
        </Pressable>
        <Text className="text-xl text-black font-medium">Profile</Text>
        <View className="  w-[24px] h-[24px] o rotate-90" />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}>
        <View className=" mt-[100px] py-4 justify-center px-4 ">
          <View style={styles.container} className="  p-5 bg-white rounded-xl">
            <View
              style={styles.container}
              className=" w-[221px] h-[218px]  relative border-4 justify-center
                 p-2 mx-auto flex-row  items-center border-primary rounded-full"
            >
              {user?.photoURL ? (
                <Image
                  source={{ uri: user?.photoURL }}
                  className=" rounded-full object-cover w-full h-full"
                />
              ) : (
                <Text className=" text-primary" style={{ fontSize: hp(10) }}>
                  {getNameInitials(
                    auth.currentUser?.displayName
                      ? auth.currentUser?.displayName
                      : ""
                  )}
                </Text>
              )}

              <Pressable
                onPress={() => setEditProfile(true)}
                className=" absolute right-0 top-5"
              >
                <Pen width={40} />
              </Pressable>
            </View>

            <Text className=" text-center mt-4 text-[24px] font-semibold">
              {auth.currentUser?.displayName}
            </Text>
            <Text className=" text-center mt-5">
              Check out my store I sell shoes and vintage clothing.
            </Text>
            <Text className=" text-[20px] text-black text-center mt-10 pb-4">
              Member since {convertDateFormat(user?.joinAt ?? "")} Based in{" "}
              {user?.address},{user?.zipcode}
            </Text>
          </View>

          <View
            style={styles.container}
            className="  mt-4 p-5 bg-white rounded-xl"
          >
            <Text className="  text-primary text-[20px] text-center ">
              Feedback
            </Text>
            <Text className=" text-primary text-[20px] text-center mt-2 ">
              Coming Soon
            </Text>
          </View>

          <View
            style={styles.container}
            className="  mt-4 p-5 bg-white rounded-xl"
          >
            <Text className="  text-primary text-[20px] text-center ">
              Preview Profile
            </Text>
          </View>

          <View className=" pb-[100px] flex-row  items-center justify-around mt-5">
            <Pressable
              onPress={() => router.push("/(settings)")}
              className=" items-center px-2"
            >
              <View
                style={styles.container}
                className="  w-[69px] h-[69px]  items-center justify-center
                 bg-white rounded-full"
              >
                <SettingsIcon width={35} />
              </View>
              <Text className=" mt-2 text-[20px]">Settings</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/safety")}
              className=" items-center px-2"
            >
              <View
                style={styles.container}
                className="  w-[69px] h-[69px]  items-center justify-center 
                bg-white rounded-full"
              >
                <SafteyIcon width={35} />
              </View>
              <Text className=" mt-2 text-[20px]">Saftey</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;

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
  container: {
    shadowColor: "gray",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 40,
        backgroundColor: "white",
      },
    }),
  },
});
