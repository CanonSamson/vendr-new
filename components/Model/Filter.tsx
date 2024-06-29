import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Dimensions } from "react-native";
import { BottomSheetModal, BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const { width, height } = Dimensions.get("screen");

interface FilterProductModalProps {
  hideModal: () => void;
  handlePresentTo: any;
}

const Filter: React.FC<FilterProductModalProps> = ({
  hideModal,
  handlePresentTo,
}) => {
  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [20, 50],
  });
  const [condiction, setCondiction] = useState("Not Specified");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        handlePresentTo();
      }}
    >
      <View className=" flex-1 px-2">
        <View className=" items-end">
          <Pressable className=" inline-block px-4 " onPress={hideModal}>
            <Text
              style={{ fontSize: hp(2), marginBottom: hp(1.5) }}
              className=" items-end text-end  text-[#007AFF] font-bold"
            >
              Done
            </Text>
          </Pressable>
        </View>
        <Text style={{ fontSize: hp(3.8) }} className=" font-bold">
          Filter
        </Text>
        <View className=" mt-[10px] flex-row items-center px-3  rounded-xl bg-[#E9E9EC]">
          <MaterialIcons name="search" size={24} color="#3C3C4399" />
          <BottomSheetTextInput
            placeholder="Search for categories to add"
            placeholderTextColor={"#3C3C4399"}
            className=" flex-1 py-3 text-lg h-[20px]"
            style={{ height: hp(5) }}
          />
        </View>

        <Text
          style={{ fontSize: hp(3), marginTop: hp(2) }}
          className=" font-bold text-center "
        >
          Pricing
        </Text>
        <View
          style={{ width: hp(80), marginTop: hp(2) }}
          className=" w-full max-w-[80%] items-center mx-auto flex-row"
        >
          <View className=" flex-1 border-[3px] items-center px-2 flex-row border-primary ">
            <Text style={{ fontSize: hp(2.8), paddingHorizontal: hp(0.4) }}>
              $
            </Text>

            <BottomSheetTextInput
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
          <View className=" flex-1 border-[3px] items-center pl-2 flex-row border-primary ">
            <Text style={{ fontSize: hp(2.8), paddingHorizontal: hp(0.4) }}>
              $
            </Text>
            <BottomSheetTextInput
              className=" h-full flex-1  pl-2"
              placeholderTextColor={"#3C3C4399"}
              style={{ fontSize: hp(2.8) }}
              keyboardType="numeric"
              placeholder="MAX"
            />
          </View>
        </View>
        <View
          style={{ marginTop: hp(2.5) }}
          className=" flex-row items-center justify-between"
        >
          <Text style={{ fontSize: hp(2) }} className=" opacity-0">
            {values.maximumDistance.join(" - ")}mi.
          </Text>

          <Text style={{ fontSize: hp(3) }} className="font-bold">
            Distance
          </Text>
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
          style={{ fontSize: hp(3), marginVertical: hp(2.5) }}
          className="text-center font-bold"
        >
          Condition
        </Text>
        <View className=" flex-row   w-full gap-2">
          <Pressable
            onPress={() => setCondiction("New")}
            className=" active:scale-95 duration-300 rounded-full  flex-1"
            style={condiction == "New" ? styles.condictions : {}}
          >
            <LinearGradient
              colors={
                condiction == "New"
                  ? ["#26BCF2", "#82DAF9"]
                  : ["#d3d3d3", "#d3d3d3"]
              }
              className={`py-2  rounded-full bg-[#DBDBDB]  items-center`}
            >
              <Text
                style={{ fontSize: hp(1.96) }}
                className=" font-bold text-white"
              >
                New
              </Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => setCondiction("Used")}
            className=" rounded-full active:scale-95 duration-300  flex-1"
            style={condiction == "Used" ? styles.condictions : {}}
          >
            <LinearGradient
              colors={
                condiction == "Used"
                  ? ["#26BCF2", "#82DAF9"]
                  : ["#d3d3d3", "#d3d3d3"]
              }
              className={`py-2 duration-500  rounded-full bg-[#DBDBDB]  items-center`}
            >
              <Text
                style={{ fontSize: hp(1.96) }}
                className=" font-bold text-white"
              >
                Used
              </Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            onPress={() => setCondiction("Not Specified")}
            className=" active:scale-95 duration-300  rounded-full flex-1"
            style={condiction == "Not Specified" ? styles.condictions : {}}
          >
            <LinearGradient
              colors={
                condiction == "Not Specified"
                  ? ["#26BCF2", "#82DAF9"]
                  : ["#d3d3d3", "#d3d3d3"]
              }
              className={`py-2 duration-300 rounded-full bg-[#DBDBDB]  items-center`}
            >
              <Text
                style={{ fontSize: hp(1.96) }}
                className="  font-bold text-white"
              >
                Not Specified
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  condictions: {
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

export default Filter;
