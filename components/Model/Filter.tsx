import React, {
  useCallback,
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import BottomSheet, {
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomKeyBoardView from "../CustomKeyBoardView";
import { Keyboard } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

interface FilterProductModalProps {
  modalVisible: boolean;
  hideModal: () => void;
  setFilterProduct: any;
}

interface BottomSheetBackdropProps {
  animatedIndex: SharedValue<number>;
  style?: StyleProp<ViewStyle>; // Making style optional
  onPress: () => void;
}

const Filter: React.FC<FilterProductModalProps> = ({
  modalVisible,
  setFilterProduct,
}) => {
  const filterSheetRef = useRef<BottomSheet>(null);

  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [20, 50],
  });
  const [condiction, setCondiction] = useState("Not Specified");

  const snapPoints = useMemo(() => ["65%"], []);

  const handleSheetChanges = (index: number) => {
    console.log("handleSheetChanges", index);
    setFilterProduct(true);
  };

  useEffect(() => {
    if (modalVisible) {
      filterSheetRef.current?.expand();
    } else {
      filterSheetRef.current?.close();
    }
  }, [modalVisible]);

  const BottomSheetBackdrop: React.FC<BottomSheetBackdropProps> = ({
    style,
    onPress,
  }) => {
    return (
      <TouchableOpacity style={[style]} activeOpacity={1} onPress={onPress} />
    );
  };

  return (
    <GestureHandlerRootView
      style={{ height: height }}
      className={`flex-1 w-full  z-50 duration-200  absolute top-0 ${
        modalVisible ? " block" : "hidden"
      }`}
      onTouchMove={() => Keyboard.dismiss()}
      onTouchStart={() => {
        Keyboard.dismiss();
      }}
    >
      <BottomSheet
        snapPoints={snapPoints}
        ref={filterSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        onClose={() => {
          console.log("BottomSheet closed");
          setFilterProduct(false);
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            onPress={() => {
              console.log("BottomSheet closed");
              setFilterProduct(false);
            }}
          />
        )}
      >
        <CustomKeyBoardView>
          <BottomSheetView
            style={{ paddingHorizontal: hp(1.5) }}
            className=" flex-1 w-full  "
          >
            <Pressable
              className=" items-end"
              onPress={() => setFilterProduct(false)}
            >
              <Text
                style={{ fontSize: hp(2), marginBottom: hp(1.5), marginRight:wp(1)}}
                className=" items-end text-end  text-[#007AFF] font-bold"
              >
                Done
              </Text>
            </Pressable>

            <Text style={{ fontSize: hp(3.8) }} className=" font-bold">
              Filter
            </Text>
            <View className=" mt-[10px] flex-row items-center px-3  rounded-xl bg-[#E9E9EC]">
              <MaterialIcons name="search" size={24} color="#3C3C4399" />
              <TextInput
                placeholder="Search for categories to add"
                placeholderTextColor={"#3C3C4399"}
                className=" flex-1 py-3 text-lg"
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
              <View className=" flex-1 border-[3px] items-center pl-2 flex-row border-primary ">
                <Text style={{ fontSize: hp(2.8), paddingHorizontal: hp(0.4) }}>
                  $
                </Text>
                <TextInput
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
          </BottomSheetView>
        </CustomKeyBoardView>
      </BottomSheet>
    </GestureHandlerRootView>
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
