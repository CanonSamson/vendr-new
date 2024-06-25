import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

interface FilterProductModalProps {
  modalVisible: boolean;
  hideModal: () => void;
}

const ios = Platform.OS === "ios";

const FilterProductModal: React.FC<FilterProductModalProps> = ({
  modalVisible,
  hideModal,
}) => {
  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [20, 50],
  });
  const [condition, setCondition] = useState("Not Specified");
  const insets = useSafeAreaInsets();

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={hideModal}
      animationType="slide"
      transparent={true}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={ios ? "padding" : "height"}
      >
        <ScrollView
          style={{ flex: 1 }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-1 justify-end h-screen items-end bg-black/20">
            <View
              style={{ paddingBottom: insets.bottom + 20 }}
              className="w-full h-auto  mt-auto bg-white rounded-lg px-5 pt-5 shadow-lg"
            >
              <Pressable onPress={hideModal}>
                <Text
                  style={{ fontSize: hp(2) }}
                  className="  text-[#007AFF] mb-4"
                >
                  Done
                </Text>
              </Pressable>

              <Text style={{ fontSize: hp(4) }} className=" font-bold">
                Filter
              </Text>
              <View className=" mt-[10px] flex-row items-center px-3  rounded-xl bg-[#E9E9EC]">
                <MaterialIcons name="search" size={24} color="#3C3C4399" />
                <TextInput
                  placeholder="Search for categories to add"
                  placeholderTextColor={"#3C3C4399"}
                  className=" flex-1 py-3"
                />
              </View>

              <Text
                style={{ fontSize: hp(3), marginTop: hp(2) }}
                className="  text-center "
              >
                Pricing
              </Text>
              <View
                style={{ width: hp(80), marginTop: hp(2) }}
                className=" w-full max-w-[80%] items-center mx-auto flex-row"
              >
                <View className=" flex-1 border-2 items-center px-2 flex-row border-primary ">
                  <Text style={{ fontSize: hp(2.8) }}>$</Text>

                  <TextInput
                    className=" h-full flex-1  pl-2"
                    placeholderTextColor={"#3C3C4399"}
                    style={{ fontSize: hp(2.8) }}
                    keyboardType="numeric"
                    placeholder="MIN"
                  />
                </View>
                <Text style={{ fontSize: hp(2.8) }} className=" px-4">
                  to
                </Text>
                <View className=" flex-1 border-2 items-center pl-2 flex-row border-primary ">
                  <Text style={{ fontSize: hp(2.8) }}>$</Text>
                  <TextInput
                    className=" h-full flex-1  pl-2"
                    placeholderTextColor={"#3C3C4399"}
                    style={{ fontSize: hp(2.8) }}
                    keyboardType="numeric"
                    placeholder="MAX"
                  />
                </View>
              </View>
              <View className=" flex-row mt-[20px] items-center justify-between">
                <Text style={{ fontSize: hp(2) }} className=" opacity-0">
                  {values.maximumDistance.join(" - ")}mi.
                </Text>

                <Text style={{ fontSize: hp(3) }}>Distance</Text>
                <Text style={{ fontSize: hp(2) }}>
                  {values.maximumDistance.join(" - ")}mi.
                </Text>
              </View>
              <View className=" flex-row justify-center w-full">
                <MultiSlider
                  values={values.maximumDistance}
                  onValuesChange={(newValues) =>
                    setValues((previousState) => ({
                      ...previousState,
                      maximumDistance: newValues,
                    }))
                  }
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap={false}
                  snapped
                  selectedStyle={{
                    backgroundColor: "#42BEED",
                  }}
                  unselectedStyle={{
                    backgroundColor: "grey",
                  }}
                  markerStyle={{
                    backgroundColor: "#42BEED",
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
              <Text
                style={{ fontSize: hp(3) }}
                className=" my-[20px] text-center"
              >
                Condition
              </Text>
              <View className=" flex-row   w-full gap-2">
                <Pressable
                  onPress={() => setCondition("New")}
                  className=" active:scale-95 duration-300  flex-1"
                >
                  <LinearGradient
                    colors={
                      condition == "New"
                        ? ["#26BCF2", "#82DAF9"]
                        : ["#d3d3d3", "#d3d3d3"]
                    }
                    className={`py-3  rounded-full bg-[#DBDBDB]  items-center`}
                  >
                    <Text
                      style={{ fontSize: hp(1.5) }}
                      className=" font-semibold text-white"
                    >
                      New
                    </Text>
                  </LinearGradient>
                </Pressable>
                <Pressable
                  onPress={() => setCondition("Used")}
                  className=" active:scale-95 duration-300  flex-1"
                >
                  <LinearGradient
                    colors={
                      condition == "Used"
                        ? ["#26BCF2", "#82DAF9"]
                        : ["#d3d3d3", "#d3d3d3"]
                    }
                    className={`py-3 duration-500  rounded-full bg-[#DBDBDB]  items-center`}
                  >
                    <Text
                      style={{ fontSize: hp(1.5) }}
                      className=" font-semibold text-white"
                    >
                      Used
                    </Text>
                  </LinearGradient>
                </Pressable>
                <Pressable
                  onPress={() => setCondition("Not Specified")}
                  className=" active:scale-95 duration-300  flex-1"
                >
                  <LinearGradient
                    colors={
                      condition == "Not Specified"
                        ? ["#26BCF2", "#82DAF9"]
                        : ["#d3d3d3", "#d3d3d3"]
                    }
                    className={`py-3 duration-300 rounded-full bg-[#DBDBDB]  items-center`}
                  >
                    <Text
                      style={{ fontSize: hp(1.5) }}
                      className="  font-semibold text-white"
                    >
                      Not Specified
                    </Text>
                  </LinearGradient>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default FilterProductModal;
