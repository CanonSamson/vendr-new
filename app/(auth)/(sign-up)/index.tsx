import {
  View,
  Text,
  Platform,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ArrowRight } from "@/constants/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { firstLastNameSchema } from "@/validation/auth";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SignUpFormValues {
  lastname: string;
  firstname: string;
}

const SignUp = () => {
  const onSubmit = async (values: SignUpFormValues) => {
    const jsonString = JSON.stringify(values);
    await AsyncStorage.setItem("user-sign-up-first-last-name", jsonString);
    router.push("email");
  };

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues: {
        firstname: "",
        lastname: "",
      },
      validationSchema: firstLastNameSchema,
      onSubmit,
    });

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
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
        keyboardShouldPersistTaps='always'

      >
        <View style={styles.container} className=" flex-1 mx-1 mt-2  bg-white">
          <View className="z-20 relative gap-2  p-4 flex-row justify-end ">
            <View
              className={`  bg-primary  border border-primary w-[20px] h-[20px] rounded-full`}
            />
            <View
              className={`border border-primary w-[20px] h-[20px] rounded-full`}
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
            className={`font-bold leading-none text-[35px]  text-primary text-center mx-auto  mt-10`}
          >
            Please provide
          </Text>
          <Text
            style={{ width: wp(80) }}
            className={`font-bold leading-none text-[35px]  text-primary text-center mx-auto  mb-10`}
          >
            your name
          </Text>

          <View style={{ width: wp(80) }} className=" mx-auto">
            <InputField
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              keyboardType=""
              placeholder="First Name"
              error={touched.firstname && errors?.firstname}
              style={""}
              returnKeyType="done" 
              autoFocus={true} 
            />
            <InputField
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              placeholder="Last Name"
              error={touched.lastname && errors?.lastname}
              containerStyle={{ marginTop: hp(3) }}
              returnKeyType="done" 
            />
          </View>

          <View className=" bottom-0 flex-1 justify-end items-end  relative w-full ">
            <View className=" p-4 flex-row justify-end items-end">
              <Pressable
                style={styles.container}
                onPress={() => handleSubmit()}
              >
                <LinearGradient
                  style={{ width: hp(6.5), height: hp(5.5) }}
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
