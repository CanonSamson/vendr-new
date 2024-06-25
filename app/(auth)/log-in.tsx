import MainButton from "@/components/button/MainButton";
import { Vectors } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import LogoV1 from "@/assets/vector/logo-v1.svg";
import { Link, router } from "expo-router";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import InputField from "@/components/InputField";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomKeyBoardView from "@/components/CustomKeyBoardView";
import { StatusBar } from "expo-status-bar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase_config";
import { Alert } from "react-native";
import { useModal } from "@/context/ModalContext";
import * as Linking from "expo-linking";

interface LogInFormValues {
  email: string;
  password: string;
}

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { confirmAnicationModal, setConfirmAnicationModal } = useModal();

  const onSubmit = async (values: LogInFormValues) => {
    try {
      setIsLoading(true);
      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setConfirmAnicationModal(true);
    } catch (error) {
      console.error("Login error", error);
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<LogInFormValues>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signinSchema,
      onSubmit,
    });

  return (
    <>
      <StatusBar style="dark" />

      <CustomKeyBoardView>
        <View
          style={{ width: wp(95), flex: 1 }}
          className={`${confirmAnicationModal ? " opacity-0" : "opacity-100"
            } items-center justify-between    mx-auto `}
        >
          <View style={{ paddingTop: hp(15) }} className="">
            <View
              style={{ width: wp("50%"), height: hp(8) }}
              className="flex-row mx-auto"
            >
              <LogoV1 width={"100%"} height={"100%"} />
            </View>
            <View
              style={{ marginTop: hp(3) }}
              className=" w-full p-5 justify-center border border-primary"
            >
              <View className=" ">
                <Text
                  style={{ width: wp(80) }}
                  className=" mx-auto text-center text-[19px]  text-[#696969]"
                >
                  The Online Marketplace
                </Text>
                <Text
                  style={{ width: wp(80) }}
                  className=" mx-auto text-center text-[19px]  text-[#696969]"
                >
                  For Everyone... Check it out!
                </Text>
                <View className=" w-[80%] mx-auto">
                  <MainButton
                    title="Sign up"
                    handlePress={() => router.push("/(sign-up)")}
                    style={{ marginTop: hp(3) }}
                    colors={[Colors.primary, "#85DBF9"]}
                    isDisabled={isLoading}
                  />
                </View>
                <View
                  style={{ marginTop: hp(3) }}
                  className=" flex-row items-center max-w-[80%] w-full  justify-center mx-auto"
                >
                  <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
                  <Text className=" text-[19px] px-5 text-gray-500">or</Text>
                  <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
                </View>

                <View style={{ marginTop: hp(3) }} className=" pb-[10px]">
                  <InputField
                    value={values.email}
                    onChangeText={handleChange("email")}
                    keyboardType="email-address"
                    placeholder="Email Address"
                    error={touched.email && errors?.email}
                    style={""}
                    returnKeyType="done"
                    autoFocus={true}
                    textContentType="none"
                  />
                  <InputField
                    value={values.password}
                    onChangeText={handleChange("password")}
                    keyboardType=""
                    placeholder="Password"
                    error={touched.password && errors?.password}
                    containerStyle={{ marginTop: hp(3.5) }}
                    secureTextEntry={true}
                    returnKeyType="done"
                    textContentType="none"

                  />

                  <Pressable style={{ marginTop: hp(3) }} disabled={isLoading}>
                    <Text
                      style={{ fontSize: hp(2) }}
                      className="  font-semibold text-primary"
                    >
                      Trouble logging in?
                    </Text>
                  </Pressable>
                  <View style={{ marginTop: hp(3) }} className=" px-10 ">
                    <MainButton
                      title="Log In"
                      handlePress={() => handleSubmit()}
                      colors={[Colors.primary, "#85DBF9"]}
                      isLoading={isLoading}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{ marginTop: hp(10), width: wp(70) }}
            className=" relative bottom-0 pb-[20px] flex-row items-center "
          >
            <TouchableOpacity
              className=" flex-1  justify-center p-[10px] items-center"
              onPress={() => router.push("safety")}
            >
              <Text className=" text-xl text-gray-500 font-medium ">
                Safety
              </Text>
            </TouchableOpacity>
            <Pressable
              className=" flex-1  justify-center p-[10px] items-center"
              onPress={() => {
                Linking.openURL("https://www.vendr.com/about");
              }}
            >
              <Text className=" text-xl text-gray-500 font-medium">About</Text>
            </Pressable>
            <TouchableOpacity
              className=" flex-1  justify-center p-2 items-center"
              onPress={() => router.push("serviceterms")}
            >
              <Text className=" text-xl text-gray-500 font-medium ">Terms</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomKeyBoardView>
    </>
  );
};

export default LogIn;
