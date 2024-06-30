import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Pen from "@/assets/svg/pen_blue.svg";
import SettingsIcon from "@/assets/svg/Settings.svg";
import SafteyIcon from "@/assets/svg/saftey.svg";
import { router } from "expo-router";
import { useAuth } from "@/context/GlobalContext";
import { auth } from "@/firebase_config";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { convertDateFormat, getNameInitials } from "@/utils/functions";
import { StatusBar } from "expo-status-bar";
const UserProfile = () => {
  const { user } = useAuth();

  return (
    <>
      <StatusBar backgroundColor="white" style="dark" />

      <View
        className="  bg-[#F3F3F3] justify-between flex-1 px-1 pt-1"
      >
        <View
          style={[styles.container, { paddingTop: hp(2) }]}
          className=" pb-2   bg-white rounded-xl"
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
              onPress={() => router.push(`edit-user-profile`)}
              className=" active:scale-95 duration-300 absolute -right-5 top-5"
            >
              <Pen width={40} />
            </Pressable>
          </View>

          <Text 
            style={{  fontSize: hp(3.2) }}
            className=" text-center mt-[7px]  font-bold">
            {auth.currentUser?.displayName}
          </Text>
          <Text
            style={{ width: wp(75) }}
            className="text-[18px] mx-auto text-center mt-4 mb-4"
          >
            Check out my store I sell shoes and vintage clothing.
          </Text>
          <Text
            style={{ width: wp(75), fontSize: hp(2.5), marginTop: hp(3) }}
            className="mx-auto text-black text-center "
          >
            Member since {convertDateFormat(user?.joinAt ?? "")}
          </Text>
          <Text
            style={{ width: wp(75), fontSize: hp(2.5) }}
            className="mt-2 mx-auto text-black text-center  pb-4"
          >
            Based in {user?.address},{user?.zipcode}
          </Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View
            style={styles.container}
            className="  mt-[7px] p-3 bg-white rounded-xl"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className="  font-semibold text-primary  text-center "
            >
              Feedback
            </Text>
            <Text
              style={{ fontSize: hp(2.5) }}
              className=" font-semibold text-primary  text-center mt-1 "
            >
              Coming Soon
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <View
            style={styles.container}
            className="  mt-[7px] p-3.5 bg-white rounded-xl"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className=" font-semibold text-primary text-center "
            >
              Preview Profile
            </Text>
          </View>
        </TouchableOpacity>

        <View className=" pb-[100px] flex-row  items-center justify-around mt-[13px]">
          <TouchableOpacity
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
            <Text
              style={{ fontSize: hp(2.5) }}
              className=" text-[#616161] mt-2 font-semibold "
            >
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
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
            <Text
              style={{ fontSize: hp(2.5) }}
              className=" text-[#616161] font-semibold mt-2 "
            >
              Safety
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
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
