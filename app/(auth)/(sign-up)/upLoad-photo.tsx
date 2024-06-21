import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native";
import Pen from "@/assets/svg/pen_blue.svg";
import { uploadImage } from "@/utils/firebase/storage";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState<number | undefined>(undefined);

  const [userAvatar, setUserAvatar] = useState<string | null>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setUserAvatar(result.assets[0].uri);
    }
  };

  const handleSaveAvatar = async () => {
    try {
      setIsLoading(true);
      if (userAvatar) {
        const downloadURL = await uploadImage({
          uri: userAvatar,
          path: "avatar",
          setProgress: setProgress,
          fileType: "",
        });
        if (downloadURL) {
          const jsonString = JSON.stringify(downloadURL);
          await AsyncStorage.setItem("user-avatar-url", jsonString);
          router.push("password");
        }
      } else {
        await AsyncStorage.removeItem("user-avatar-url");
        router.push("password");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar style="dark" hidden={false} />

      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        style={{
          flexGrow: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
          className=" flex-1  mt-[110px]  "
          bounces={false}
        >
          <View
            style={styles.container}
            className=" flex-1 mx-2 rounded-xl bg-white"
          >
            <View className="z-20 relative gap-2  p-4 flex-row justify-end ">
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={`  border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={`bg-primary  border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={`  border border-primary w-[20px] h-[20px] rounded-full`}
              />
            </View>

            <Text
              style={{ fontSize: hp(3.2) }}
              className={`font-semibold  text-primary text-center  px-20 my-10`}
            >
              One Last thing, provide a photo
            </Text>

            <View style={{ width: wp(80) }} className=" mx-auto">
              {userAvatar ? (
                <View
                  style={styles.container}
                  className=" w-[221px] h-[218px]  relative border-4 justify-center
                 p-2 mx-auto flex-row  items-center border-primary rounded-full"
                >
                  <Image
                    source={{ uri: userAvatar }}
                    className=" rounded-full object-cover w-full h-full"
                  />
                  <Pressable
                    onPress={pickImage}
                    className=" absolute right-0 top-5"
                  >
                    <Pen width={40} />
                  </Pressable>
                </View>
              ) : (
                <Pressable onPress={pickImage}>
                  <View
                    className={` h-[150px] w-full  items-center justify-center border border-primary`}
                  >
                    <View className="border border-primary max-w-[200px] px-10 py-4  bg-white shadow shadow-gray-300 inline-block">
                      <Text className=" text-xl text-center">Add Photo</Text>
                    </View>
                  </View>
                </Pressable>
              )}
              <Text className=" mt-4 text-md items-center text-center text-[#696969]">
                Add a photo of yourself or your store that will be on your
                profile for safer transactions.
              </Text>
            </View>

            <View className=" bottom-0 flex-1 justify-end items-end  relative w-full ">
              <View className=" p-4 flex-row justify-between w-full items-center">
                <Pressable
                  onPress={() => {
                    router.back();
                  }}
                  disabled={isLoading}
                >
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="text-[#B3B3B3] font-semibold"
                  >
                    Back
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.container}
                  disabled={isLoading}
                  onPress={() => handleSaveAvatar()}
                >
                  <LinearGradient
                    colors={[Colors.primary, "#85DBF9"]}
                    style={{ width: hp(5), height: hp(5) }}
                    className="items-center justify-center rounded-lg  relative"
                  >
                    {isLoading ? (
                      <ActivityIndicator color="#fff" className="" />
                    ) : (
                      <ArrowRight height={"100%"} />
                    )}
                  </LinearGradient>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
    }),
  },
});
