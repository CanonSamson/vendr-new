import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { passwordSchema } from "@/validation/auth";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { uploadImage } from "@/utils/firebase/storage";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase_config";
import { createDB } from "@/utils/firebase/database";
import { useModal } from "@/context/ModalContext";

interface SignUpFormValues {
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const { confirmAnicationModal, setConfirmAnicationModal } = useModal();

  const handleChangeAccount = async () => {
    try {
      setIsLoading(true);
      const addressJsonString = await AsyncStorage.getItem(
        "user-sign-up-address"
      );
      const emailJsonString = await AsyncStorage.getItem("user-sign-up-email");
      const firstLastNameJsonString = await AsyncStorage.getItem(
        "user-sign-up-first-last-name"
      );
      const downloadURLJsonString = await AsyncStorage.getItem(
        "user-avatar-url"
      );

      const address = addressJsonString ? JSON.parse(addressJsonString) : null;
      const email = emailJsonString ? JSON.parse(emailJsonString) : null;
      const firstLastName = firstLastNameJsonString
        ? JSON.parse(firstLastNameJsonString)
        : null;
      const downloadURL = downloadURLJsonString
        ? JSON.parse(downloadURLJsonString)
        : null;

      const Res = await createUserWithEmailAndPassword(
        auth,
        email.email,
        values.password
      );
      setConfirmAnicationModal(true);

      // You can update the user's profile here with username and profileUrl
      await updateProfile(Res.user, {
        displayName: `${firstLastName.firstname} ${firstLastName.lastname}`,
        photoURL: typeof downloadURL?.url === "string" ? downloadURL?.url : "",
      });
      const joinAt = new Date();
      await createDB("users", Res?.user?.uid, {
        ...email,
        ...firstLastName,
        ...address,
        email_isVerified: true,
        photoURL:
          downloadURL?.url != (null || undefined) ? downloadURL?.url : "",
        joinAt: joinAt.toString(),
      });
    } catch (error) {
      console.error("Error:", error);
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
    useFormik<SignUpFormValues>({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema: passwordSchema,
      onSubmit: handleChangeAccount,
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
          className={`flex-1  mt-[110px]    ${
            confirmAnicationModal ? "opacity-0" : " opacity-100"
          }`}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 5 }}
          bounces={false}
        >
          <View
            style={styles.container}
            className=" flex-1 mx-2  rounded-xl bg-white"
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
                className={`  border border-primary w-[20px] h-[20px] rounded-full`}
              />
              <View
                className={` bg-primary border border-primary w-[20px] h-[20px] rounded-full`}
              />
            </View>

            <Text
              style={{ width: wp(80) }}
              className={` font-bold mx-auto my-10  text-[32px] text-primary text-center  `}
            >
              Create an Account
            </Text>

            <View style={{ width: wp(80) }} className=" mx-auto">
              <InputField
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Password"
                error={touched.password && errors?.password}
                secureTextEntry={hidePassword}
              />
              <InputField
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirm Password"
                error={touched.confirmPassword && errors?.confirmPassword}
                containerStyle={{ marginTop: hp(3) }}
                secureTextEntry={hidePassword}
              />
            </View>

            <View className=" bottom-0 flex-1 justify-end items-end  relative w-full ">
              <View className=" p-4 flex-row justify-between w-full items-center">
                <Pressable
                  disabled={isLoading}
                  onPress={() => {
                    router.back();
                  }}
                >
                  <Text className=" text-xl text-[#B3B3B3] font-semibold">
                    Back
                  </Text>
                </Pressable>

                <Pressable 
                 style={styles.container} disabled={isLoading} onPress={() => handleSubmit()}>
                  <LinearGradient
                    colors={[Colors.primary, "#85DBF9"]}
                    className="items-center flex-row text-[19[x]] justify-center rounded-lg px-4 py-2 relative"
                  >
                    <Text className=" text-xl text-gray font-semibold text-white">
                      Create Account
                    </Text>
                    {isLoading ? (
                      <ActivityIndicator color="#fff" className=" ml-2" />
                    ) : null}
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
