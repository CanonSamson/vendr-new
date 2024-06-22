import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { addressSchema } from "@/validation/auth";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Switch } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignUpFormValues {
  address: string;
  state: string;
  zipcode: string;
  city: string;
  showAddressLine: boolean;
}

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: SignUpFormValues) => {
    const jsonString = JSON.stringify(values);

    await AsyncStorage.setItem("user-sign-up-address", jsonString);

    router.push("upLoad-photo");
  };

  const { errors, touched, handleChange, values, handleSubmit, setFieldValue } =
    useFormik<SignUpFormValues>({
      initialValues: {
        address: "",
        state: "",
        city: "",
        zipcode: "",
        showAddressLine: false,
      },
      validationSchema: addressSchema,
      onSubmit,
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
            className=" flex-1 mx-2 mt-2 rounded-xl  bg-white"
          >
            <View className="z-20 relative gap-2  p-4 flex-row justify-end ">
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={`  border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={`bg-primary border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` border border-primary w-[20px] h-[20px] rounded-full`}
              />
            </View>

            <Text
              style={{ width: wp(60) }}
              className={`font-bold text-[32px] mx-auto text-primary text-center my-10`}
            >
              Please provide your address
            </Text>

            <View style={{ width: wp(80) }} className=" mx-auto">
              <InputField
                value={values.address}
                onChangeText={handleChange("address")}
                placeholder="Address Line"
                error={touched.address && errors?.address}
                style={""}
              />
              <View className=" flex-row items-center justify-between my-5">
                <Text
                  className={` text-[19px]  ${
                    values.showAddressLine ? "text-primary" : ""
                  }`}
                >
                  Show Address Line on profile
                </Text>

                <Switch
                  value={values.showAddressLine}
                  onValueChange={(value) => {
                    setFieldValue("showAddressLine", value);
                  }}
                  trackColor={{ false: "#767577", true: Colors.primary }}
                  thumbColor={values.showAddressLine ? "#f4f3f4" : "#f4f3f4"}
                />
              </View>
              <InputField
                value={values.city}
                onChangeText={handleChange("city")}
                placeholder="City"
                error={touched.city && errors?.city}
                style={""}
              />
              <View
                style={{ marginBottom: hp(2), marginTop: hp(3) }}
                className="flex-row  w-full "
              >
                <View className="flex-1 pr-2">
                  <InputField
                    value={values.state}
                    onChangeText={handleChange("state")}
                    placeholder="State "
                    error={touched.state && errors?.state}
                  />
                </View>
                <View className="flex-1 pl-2">
                  <InputField
                    value={values.zipcode}
                    onChangeText={handleChange("zipcode")}
                    placeholder="Zipcode"
                    error={touched.zipcode && errors?.zipcode}
                    style={""}
                  />
                </View>
              </View>
            </View>

            <View className=" bottom-0 flex-1 justify-end items-end  relative w-full ">
              <View className=" p-4 flex-row justify-between w-full items-center">
                <Pressable
                  onPress={() => {
                    router.back();
                  }}
                >
                  <Text
                    style={{ fontSize: hp(2) }}
                    className=" text-[#B3B3B3] font-semibold"
                  >
                    Back
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.container}
                  onPress={() => handleSubmit()}
                >
                  <LinearGradient
                    style={{ width: hp(6), height: hp(5.5) }}
                    colors={[Colors.primary, "#85DBF9"]}
                    className="items-center justify-center rounded-lg relative"
                  >
                    <ArrowRight height={"100%"} />
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
