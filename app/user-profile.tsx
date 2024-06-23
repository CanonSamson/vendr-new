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
import { ArrowRight } from "@/constants/Icons";

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
      <StatusBar backgroundColor="white" style="dark" />
      <EditProfileModel
        modalVisible={editProfile}
        hideModal={() => setEditProfile(false)}
      />

      <View
        style={{ marginTop: Platform.OS === "ios" ? hp(1) : hp(1.6) }}
        className="  bg-[#F3F3F3] justify-center   px-1 pt-4  "
      >
        <View
          style={styles.container}
          className=" pt-[20px] pb-2 bg-white rounded-xl"
        >
          <View
            style={[
              {
                ...Platform.select({
                  ios: {
                    shadowColor: "black",
                    shadowOpacity: 0.4,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 2,
                  },
                  android: {
                    elevation: 10,
                  },
                }),
              },
              { height: hp(20), width: hp(20) },
            ]}
            className=" relative border-4 justify-center
                 p-2 mx-auto flex-row bg-white  items-center border-primary rounded-full"
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
              style={styles.container}
              onPress={() => setEditProfile(true)}
              className=" absolute -right-5 top-5"
            >
              <Pen width={40} />
            </Pressable>
          </View>

          <Text className=" text-center mt-[10px] text-[30px] font-bold">
            {auth.currentUser?.displayName}
          </Text>
          <Text
            style={{ width: wp(75) }}
            className="text-[18px] mx-auto text-center mt-4"
          >
            Check out my store I sell shoes and vintage clothing.
          </Text>
          <Text
            style={{ width: wp(75) }}
            className=" text-[20px] mx-auto text-black text-center mt-10"
          >
            Member since {convertDateFormat(user?.joinAt ?? "")}
          </Text>
          <Text
            style={{ width: wp(75) }}
            className=" text-[20px] mt-2 mx-auto text-black text-center  pb-4"
          >
            Based in {user?.address},{user?.zipcode}
          </Text>
        </View>

        <View
          style={styles.container}
          className="  mt-[10px] p-4 bg-white rounded-xl"
        >
          <Text className="  font-semibold text-primary text-[24px] text-center ">
            Feedback
          </Text>
          <Text className=" font-semibold text-primary text-[25px] text-center mt-2 ">
            Coming Soon
          </Text>
        </View>

        <View
          style={styles.container}
          className="  mt-[10px] p-4 bg-white rounded-xl"
        >
          <Text className=" font-semibold text-primary text-[24px] text-center ">
            Preview Profile
          </Text>
        </View>

        <View className=" pb-[100px] flex-row  items-center justify-around mt-[10px]">
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
            <Text className=" text-[#616161] mt-2   font-semibold text-[20px]">
              Settings
            </Text>
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
            <Text className=" text-[#616161] font-semibold mt-2 text-[20px]">
              Saftey
            </Text>
          </Pressable>
        </View>
      </View>
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
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
