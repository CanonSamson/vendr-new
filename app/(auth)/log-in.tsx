import MainButton from "@/components/button/MainButton";
import { Vectors } from "@/constants/Vector";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
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
          style={{ marginTop: hp("10%") }}
          className={`${
            confirmAnicationModal ? " opacity-0" : " opacity-100"
          } flex-1 p-4 items-center justify-end`}
        >
          <View
            style={{ width: hp("50%"), height: hp(8) }}
            className="flex-row"
          >
            <LogoV1 width={"100%"} height={"100%"} />
          </View>
          <View
            style={{ marginTop: hp("4%") }}
            className=" w-full p-5 justify-center border border-primary"
          >
            <View className=" ">
              <Text
                style={{ fontSize: hp("2.0%") }}
                className="mt-5 text-center  text-gray"
              >
                The Online Marketplace For Everyone... Check it out!
              </Text>
              <View className=" w-[80%] mx-auto">
                <MainButton
                  title="Sign up"
                  handlePress={() => router.push("/(sign-up)")}
                  style={{ marginTop: hp("4%") }}
                  colors={[Colors.primary, "#85DBF9"]}
                  isDisabled={isLoading}
                />
              </View>
              <View
                style={{ marginTop: hp("4%") }}
                className=" flex-row items-center max-w-[80%] w-full  justify-center mx-auto"
              >
                <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
                <Text
                  style={{ fontSize: hp(2) }}
                  className=" px-5 text-gray-500"
                >
                  Or
                </Text>
                <View className=" flex-1 h-[2px] bg-primary rounded-lg " />
              </View>

              <View style={{ marginTop: hp(2) }} className=" pb-10">
                <InputField
                  value={values.email}
                  onChangeText={handleChange("email")}
                  keyboardType="email-address"
                  placeholder="Email Address"
                  error={touched.email && errors?.email}
                  style={""}
                />
                <InputField
                  value={values.password}
                  onChangeText={handleChange("password")}
                  keyboardType=""
                  placeholder="Password"
                  error={touched.password && errors?.password}
                  containerStyle={{ marginTop: hp(3.5) }}
                  secureTextEntry={true}
                />

                <Pressable style={{ marginTop: hp(3) }} disabled={isLoading}>
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="  font-semibold text-primary"
                  >
                    Trouble logging in?
                  </Text>
                </Pressable>
                <View className=" px-10 mt-[20px]">
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
          <View className=" flex-row items-center max-w-[80%] mx-auto  mt-[10vh]">
            <Pressable
              className=" flex-1  justify-center p-2 items-center"
              onPress={() => {}}
            >
              <Text
                style={{ fontSize: hp(2) }}
                className="  text-gray-500 font-medium "
              >
                Safety
              </Text>
            </Pressable>
            <Pressable
              className=" flex-1  justify-center p-2 items-center"
              onPress={() => {}}
            >
              <Text
                style={{ fontSize: hp(2) }}
                className=" text-gray-500 font-medium"
              >
                About
              </Text>
            </Pressable>
            <Pressable
              className=" flex-1  justify-center p-2 items-center"
              onPress={() => {}}
            >
              <Text
                style={{ fontSize: hp(2) }}
                className="text-gray-500 font-medium "
              >
                Terms
              </Text>
            </Pressable>
          </View>
        </View>
      </CustomKeyBoardView>
    </>
  );
};

export default LogIn;
