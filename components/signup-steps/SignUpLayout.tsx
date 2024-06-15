import {
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { ArrowRight } from "@/constants/Icons";
import { KeyboardAvoidingView } from "react-native";

interface SignUpLayout {
  title: string;
  Form: any;
  titleStyle?: string;
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}

const SignUpLayout: React.FC<SignUpLayout> = ({
  titleStyle,
  title,
  Form,
  steps,
  setSteps,
}) => {
  return (
    <>
      <View className=" flex-1 justify-start w-full">
        <View className="mt-5 ">
          <View className="z-20 relative gap-2 flex-row justify-end px-5">
            <View
              className={` ${
                steps === 0 ? "bg-primary" : ""
              } border border-primary w-[20px] h-[20px] rounded-full`}
            />
            <View
              className={` ${
                steps === 1 ? "bg-primary" : ""
              } border border-primary w-[20px] h-[20px] rounded-full`}
            />
            <View
              className={` ${
                steps === 2 ? "bg-primary" : ""
              } border border-primary w-[20px] h-[20px] rounded-full`}
            />
            <View
              className={` ${
                steps === 3 ? "bg-primary" : ""
              } border border-primary w-[20px] h-[20px] rounded-full`}
            />
          </View>
        </View>

        <Text
          className={`font-semibold text-2xl text-primary text-center ${
            titleStyle ? titleStyle : " p-20 "
          }`}
        >
          {title}
        </Text>

        <View className="  px-4">{Form}</View>

        <View className=" items-end flex-row  flex-1 ">
          <View className="flex-row justify-between p-5 flex-1 items-center">
            <Pressable onPress={() => setSteps(steps - 1)}>
              {steps !== 0 && (
                <Text className=" text-xl text-gray font-semibold">Back</Text>
              )}
            </Pressable>

            <View>
              {steps === 3 ? (
                <Pressable onPress={() => {}}>
                  <LinearGradient
                    colors={[Colors.primary, "#85DBF9"]}
                    className="items-center justify-center rounded-lg px-4 py-2 relative"
                  >
                    <Text className=" text-xl text-gray font-semibold text-white">
                      Create Account
                    </Text>
                  </LinearGradient>
                </Pressable>
              ) : (
                <Pressable onPress={() => setSteps(steps + 1)}>
                  <LinearGradient
                    colors={[Colors.primary, "#85DBF9"]}
                    className="items-center justify-center rounded-lg w-[45px] h-[45px] relative"
                  >
                    <ArrowRight height={"100%"} />
                  </LinearGradient>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "gray",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 40,
        backgroundColor: "white",
      },
    }),
  },
});

export default SignUpLayout;
