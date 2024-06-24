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
import ItemForSaleIcon from "@/assets/icon/ItemForSale.svg";
import { router, useLocalSearchParams } from "expo-router";
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
import { ProductObject } from "@/constants/testdata";

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const { product_id } = useLocalSearchParams();

  const user = ProductObject[product_id].seller;

  return (
    <>
      <StatusBar backgroundColor="white" style="dark" />
      <EditProfileModel
        modalVisible={editProfile}
        hideModal={() => setEditProfile(false)}
      />

      <View
        style={{ marginTop: Platform.OS === "ios" ? hp(1) : hp(1.6) }}
        className="  bg-[#F3F3F3] justify-center   px-1 pt-3"
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
            <Image
              source={user?.avatar}
              className=" rounded-full object-cover w-full h-full"
            />
          </View>

          <Text className=" text-center capitalize mt-[7px] text-[30px] font-bold">
            {user.name}
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
            Member since Jan 25, 2023
          </Text>
          <Text
            style={{ width: wp(75) }}
            className=" text-[20px] mt-2 mx-auto text-black text-center  "
          >
            Based in Point Pleasant NJ, 08742
          </Text>
          <Text
            style={{ width: wp(75) }}
            className=" text-[20px] mt-2 mx-auto text-black text-center  pb-4"
          >
            99% Positive Feedback
          </Text>
        </View>

        <Pressable onPress={() => {}}>
          <View
            style={styles.container}
            className="  mt-[7px] p-4 bg-white rounded-xl"
          >
            <Text className="  font-semibold text-primary text-[24px] text-center ">
              Favorite Seller
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => {}}>
          <View
            style={styles.container}
            className="  mt-[7px] p-4 bg-white rounded-xl"
          >
            <Text className=" font-semibold text-red-600 text-[24px] text-center ">
              Report Kyle
            </Text>
          </View>
        </Pressable>

        <View className=" pb-[100px] flex-row  items-center justify-center mt-[7px]">
          <Pressable
            onPress={() => router.push("/safety")}
            className=" items-center px-2"
          >
            <View
              style={styles.container}
              className="  w-[69px] h-[69px]  items-center justify-center 
                      bg-white rounded-full"
            >
              <ItemForSaleIcon width={35} />
            </View>
            <Text className=" text-[#616161] font-semibold mt-2 text-[20px]">
              Items for Sale
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