import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomKeyBoardView from "../CustomKeyBoardView";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { LinearGradient } from "expo-linear-gradient";

interface FilterProductModalProps {
  modalVisible: boolean;
  hideModal: () => void;
}

const FilterProductModal: React.FC<FilterProductModalProps> = ({
  modalVisible,
  hideModal,
}) => {
  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [20, 50],
  });

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={hideModal}
      animationType="slide"
      transparent={true}
    >
      <View className="flex-1 justify-end items-center bg-black/20">
        <View
          style={{ height: hp(60) }}
          className="w-full bg-white rounded-lg p-5 shadow-lg"
        >
          <Pressable onPress={hideModal}>
            <Text style={{ fontSize: hp(2) }} className="  text-[#007AFF] mb-4">
              Done
            </Text>
          </Pressable>

          <Text style={{ fontSize: hp(4) }} className=" font-bold">
            Filter
          </Text>
          <View className=" flex-row items-center px-3  rounded-xl bg-[#E9E9EC]">
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
              <Text style={{ fontSize: hp(3) }}>$</Text>
              <TextInput
                placeholder=""
                className=" h-[50px] flex-1"
                placeholderTextColor={"#3C3C4399"}
              />
            </View>
            <Text style={{ fontSize: hp(3) }} className=" px-4">
              to
            </Text>
            <View className=" flex-1 border-2 items-center px-2 flex-row border-primary ">
              <Text style={{ fontSize: hp(3) }}>$</Text>
              <TextInput
                placeholder=""
                className=" h-[50px]  flex-1"
                placeholderTextColor={"#3C3C4399"}
              />
            </View>
          </View>
          <View className=" mt-5 flex-row items-center justify-between">
            <Text style={{ fontSize: hp(2) }} className=" opacity-0">
              {values.maximumDistance.join(" - ")}mi.
            </Text>

            <Text style={{ fontSize: hp(3) }}>Distance</Text>
            <Text style={{ fontSize: hp(2) }}>
              {" "}
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
            />
          </View>
          <View>
            <Text style={{ fontSize: hp(3) }} className=" mt-4  text-center">
              Condition
            </Text>
            <View className=" flex-row w-full gap-2 mt-5 ">
              <Pressable className="  flex-1">
                <LinearGradient
                  colors={
                    false ? ["#d3d3d3", "#d3d3d3"] : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3  rounded-full bg-[#DBDBDB]  items-center`}
                >
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className=" font-semibold"
                  >
                    New
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable className="  flex-1">
                <LinearGradient
                  colors={
                    false ? ["#d3d3d3", "#d3d3d3"] : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3  rounded-full bg-[#DBDBDB]  items-center`}
                >
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className=" font-semibold"
                  >
                    Used
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable className="  flex-1">
                <LinearGradient
                  colors={
                    true ? ["#26BCF2", "#82DAF9"] : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3  rounded-full bg-[#DBDBDB]  items-center`}
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
      </View>
    </Modal>
  );
};

export default FilterProductModal;
