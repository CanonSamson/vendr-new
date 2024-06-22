import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { emailSchema } from "@/validation/auth";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

interface SignUpFormValues {
  email: string;
}

const SignUp = () => {
  const [otp, setOtp] = useState<string>("");
  const [IsVerifyOtp, setIsVerifyOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendOtp = async (values: SignUpFormValues) => {
    try {
      setIsLoading(true);
      const apiKey = process.env.EXPO_PUBLIC_API_URL;

      if (!apiKey) {
        throw new Error("API key is not defined");
      }

      const response = await axios.post(`${apiKey}/auth/send-otp`, values);

      if (response) {
        if (!IsVerifyOtp) return setIsVerifyOtp(true);
      }
      // Handle the response as needed
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (values: { email: string }, otp: string) => {
    try {
      setIsLoading(true);

      const apiKey = process.env.EXPO_PUBLIC_API_URL;

      if (!apiKey) {
        throw new Error("API key is not defined");
      }

      if (!otp) {
        return Alert.alert("Enter Otp");
      }

      const response = await axios.post(`${apiKey}/auth/verify-otp`, {
        email: values.email,
        otp: otp,
      });

      if (response.status >= 200 && response.status < 300) {
        // Response was successful
        console.log("Response data:", response.data);
        // Navigate to the next page

        const jsonString = JSON.stringify(values);
        await AsyncStorage.setItem("user-sign-up-email", jsonString);

        router.push("address");
      } else {
        // Response was not successful
        Alert.alert("Error", "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit: sendOtp,
    });
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
            className=" flex-1 mx-1 mt-2 rounded-xl bg-white"
          >
            <View className="z-20 relative gap-2  p-4 flex-row justify-end ">
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` bg-primary border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
            </View>

            <Text
              style={{ width: wp(80) }}
              className={`   mt-10 font-bold mx-auto  text-[35px] text-primary text-center mb-2`}
            >
              {!IsVerifyOtp
                ? "What’s your email address?"
                : "Please enter your verification code"}
            </Text>

            <Text className={`text-center text-[18px] text-[#B3B3B3] pb-10`}>
              {!IsVerifyOtp ? "" : values.email}
            </Text>

            <View style={{ width: wp(80) }} className=" mx-auto">
              {!IsVerifyOtp ? (
                <InputField
                  value={values.email}
                  onChangeText={handleChange("email")}
                  keyboardType="email-address"
                  placeholder="Email Address"
                  error={touched.email && errors?.email}
                  returnKeyType="done"
                  autoFocus={true}
                  onSubmitEditing={() => handleSubmit()}
                />
              ) : (
                <>
                  <OtpInput
                    numberOfDigits={5}
                    focusColor="#42BEED"
                    onTextChange={(text) => setOtp(text)}
                    theme={{
                      pinCodeContainerStyle: {
                        borderBottomWidth: 2,
                        borderBottomColor: "#42BEED",
                        borderTopColor: "white",
                        borderRightColor: "white",
                        borderLeftColor: "white",
                        borderRadius: 0,
                      },
                      pinCodeTextStyle: {},
                      containerStyle: {},
                    }}
                    autoFocus={true}
                  />

                  <Text className=" mt-4 text-md items-center text-start text-[#696969] font-semibold">
                    Didn’t receive a code?
                  </Text>
                </>
              )}
            </View>

            <View className=" bottom-0 flex-1 justify-end items-end  relative w-full ">
              <View className=" p-3 flex-row justify-between w-full items-center">
                <Pressable
                  onPress={() => {
                    if (IsVerifyOtp) return setIsVerifyOtp(false);
                    router.back();
                  }}
                  className="relative z-40"
                >
                  <Text
                    style={{ fontSize: hp(2.5) }}
                    className="text-[#B3B3B3] font-semibold p-3"
                  >
                    Back
                  </Text>
                </Pressable>

                {IsVerifyOtp ? (
                  <>
                    <Pressable
                      style={styles.container}
                      onPress={() => verifyOtp(values, otp)}
                    >
                      <LinearGradient
                        style={{ width: hp(6.5), height: hp(5.5) }}
                        colors={[Colors.primary, "#85DBF9"]}
                        className="items-center justify-center rounded-lg relative"
                      >
                        {isLoading ? (
                          <ActivityIndicator size="small" color="#ffffff" />
                        ) : (
                          <ArrowRight height={"100%"} />
                        )}
                      </LinearGradient>
                    </Pressable>
                  </>
                ) : (
                  <Pressable
                    style={styles.container}
                    onPress={() => handleSubmit()}
                  >
                    <LinearGradient
                      style={{ width: hp(6.5), height: hp(5.5) }}
                      colors={[Colors.primary, "#85DBF9"]}
                      className="items-center justify-center rounded-lg relative"
                    >
                      {isLoading ? (
                        <ActivityIndicator size="small" color="#ffffff" />
                      ) : (
                        <ArrowRight height={"100%"} />
                      )}
                    </LinearGradient>
                  </Pressable>
                )}
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
