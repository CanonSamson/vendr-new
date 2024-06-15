

import { View, Text } from "react-native";
import React, { useState } from "react";
import InputField from "@/components/InputField";
import { useFormik } from "formik";

import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { OtpInput } from "react-native-otp-entry";

const PhoneNumbeVali: React.FC = () => {
  const [otp, setOtp] = useState<string>("");

  const onSubmit = (otp: string) => {
    // Handle form submission
    console.log("OTP:", otp);
  };
  return (
    <View className="p-4 flex-1 w-full">
      <View className="rounded-lg w-full bg-white z-30 relative flex-1 shadow-xl">
        <Text className="font-semibold text-2xl text-primary px-20 pt-20 text-center">
          Please enter your verification code
        </Text>
        <Text className=" px- pb-20 mt-4 items-center text-center text-[#696969]">
          (123-456-7890)
        </Text>

        <View className=" px-5 pb-10 w-full flex-1">
          <OtpInput
            numberOfDigits={5}
            focusColor="#42BEED"
            onTextChange={(text) => setOtp(text)}
            theme={{
              pinCodeContainerStyle: {
                borderBottomWidth: 2,
                borderBottomColor: "#42BEED",
                borderColor: "white",
                borderRadius: 0,
              },
            }}
          />

          <Text className=" mt-4 text-md items-center text-start text-[#696969]">
            Didn’t receive a code?
          </Text>
        </View>
        <View className=" flex-row justify-between p-5 items-center">
          <View>
            <Text className=" text-xl text-gray-500 font-medium">Back</Text>
          </View>

          <View className=" ">
            <LinearGradient
              colors={[Colors.primary, "#85DBF9"]}
              className={` items-center justify-center rounded-lg w-[45px] h-[45px] relative `}
            >
              <ArrowRight height={"100%"} />
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhoneNumbeVali;
