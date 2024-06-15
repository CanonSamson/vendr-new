import { View, Text } from "react-native";
import React from "react";
import InputField from "@/components/InputField";
import { phoneNumberSchema } from "@/validation/auth";
import { useFormik } from "formik";

import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
interface PhoneNumberFormValues {
  phoneNumber: string;
}

const PhoneNumberForm: React.FC = () => {
  const onSubmit = (values: PhoneNumberFormValues) => {
    // Handle form submission
  };

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<PhoneNumberFormValues>({
      initialValues: {
        phoneNumber: "",
      },
      validationSchema: phoneNumberSchema,
      onSubmit,
    });

  return (
    <View className="p-4 flex-1 w-full">
      <View className="rounded-lg w-full bg-white z-30 relative flex-1 shadow-xl">
        <Text className="font-semibold text-2xl text-primary p-20 text-center">
          What’s your phone number?
        </Text>

        <View className=" px-5 pb-10 w-full flex-1">
          <InputField
            value={values.phoneNumber}
            onChangeText={handleChange("phoneNumber")}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            error={touched.phoneNumber && errors?.phoneNumber}
            style=""
          />

          <Text className=" mt-4 items-center text-center text-[#696969]">
            All Vendr accounts requires a real phone number so only real people
            can use our platform.
          </Text>
        </View>
        <View className=" flex-row justify-between p-5 items-center">
          <View></View>

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

export default PhoneNumberForm;
