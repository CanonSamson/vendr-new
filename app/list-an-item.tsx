import React, { useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import CustomKeyBoardView from "@/components/CustomKeyBoardView";

import Pen from "@/assets/icon/pen.svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Slider from "@react-native-community/slider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface ImageData {
  id: string;
  uri?: string | null;
}

import ImageCard from "@/components/ImageCardDragable";
import SortableList from "@/components/SortableList";

const ListAnItem: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: ImageData }>({
    "0": {
      id: "1",
      uri: null,
    },
    "1": {
      id: "1",
      uri: null,
    },
    "2": {
      id: "1",
      uri: null,
    },
  });
  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [50],
  });
  const [rangeValue, setRangeValue] = useState(20);

  const [condication, setCondication] = useState("Not Specified");

  const pickImage = async (id: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      orderedSelection: true,
      selectionLimit: 3,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages((prev) => ({
        ...prev,
        [id]: { ...prev[id], uri: result.assets[0].uri },
      }));
    }
  };

  const AddImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageLng = Object.keys(images).length;

      setImages((prev) => ({
        [`${Number(imageLng) + 1}`]: {
          id: `${Number(imageLng) + 1}`,
          uri: result.assets[0].uri,
        },
        ...prev,
      }));
    }
  };
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const [rightLabel, setRightLabel] = useState<string>("0-20mi.");
  const maxDistance = 50;

  const updateRange = (range: number) => {
    setRangeValue(range);

    if (range <= 0) {
      setRightLabel("Local Pickup Only");
    } else if (range < maxDistance) {
      setRightLabel(`0-${range}mi.`);
    } else {
      setRightLabel("Global");
    }
  };

  return (
    <>
      <StatusBar style="dark" hidden={false} />

      <CustomKeyBoardView>
        <View style={styles.container} className="bg-[#F3F3F3]">
          <View style={styles.innercontainer}>
            <View style={styles.heading}>
              <Text
                style={{ fontSize: hp(3.2) }}
                className="  mr-2 font-semibold "
              >
                Photos
              </Text>
            </View>
            <View
              style={styles.grid}
              className=" duration-700  items-start justify-start mt-[10px] pb-2"
            >
              <GestureHandlerRootView>
                <SortableList
                  editing={true}
                  onDragEnd={(positions) =>
                    console.log(JSON.stringify(positions, null, 2))
                  }
                  pickImage={() => {}}
                >
                  {[...Object.values(images)].map((item, index) => (
                    <ImageCard
                      onLongPress={() => true}
                      key={item.id + "-" + index}
                      id={item.id + "-" + index}
                      uri={item.uri ? item.uri : null}
                      // pickImage={() => Alert.alert(`${index}`)}
                      pickImage={() => pickImage(`${index}`)}
                    />
                  ))}
                </SortableList>
              </GestureHandlerRootView>

              {/* {Object.values(images).map((item) => (
                <ImageCard
                  key={item.id}
                  id={item.id.toString()}
                  uri={item.uri ? item.uri.toString() : null}
                  pickImage={pickImage}
                />
              ))}
              {Object.keys(images).length < 6 && (
                <ImageCard id={"1"} uri={null} pickImage={AddImage} />
              )}
              {(Object.keys(images).length == 1 ||
                Object.keys(images).length == 3) && (
                <View className="  relative   opacity-0">
                  <View style={styles.placeholder}></View>
                </View>
              )}
              {(Object.keys(images).length == 3 ||
                Object.keys(images).length == 4) && (
                <View className="  relative   opacity-0">
                  <View style={styles.placeholder}></View>
                </View>
              )} */}
            </View>
          </View>

          <View style={styles.innercontainer}>
            <View className=" flex-row items-center ">
              <Text
                style={{ fontSize: hp(3.2) }}
                className="  mr-2 leading-none font-semibold "
              >
                Title
              </Text>
              <Pen width={16} height={16} />
            </View>

            <TextInput
              style={styles.input}
              placeholder={"Tap here to add a title"}
              placeholderTextColor={"gray"}
              className=" text-[16px]"
            />
          </View>
          <View style={styles.innercontainer}>
            <View className=" flex-row items-center ">
              <Text
                style={{ fontSize: hp(3.2) }}
                className="  mr-2 leading-none font-semibold "
              >
                Description
              </Text>
              <Pen width={16} height={16} />
            </View>
            <TextInput
              style={[
                styles.input,
                { height: 200 },
                { textAlignVertical: "top" },
              ]}
              multiline
              placeholder={"Tap here to add a description"}
              placeholderTextColor={"gray"}
              className="text-[16px] mt-[10px]"
            />
          </View>
          <View style={styles.innercontainer}>
            <Text
              style={{ fontSize: hp(3.2) }}
              className="  mr-2 font-semibold "
            >
              Search
            </Text>
            <View className=" flex-row justify-between mt-[15px] ">
              <Text
                style={styles.switchContainerText}
                className={`${values.localPickup ? " text-[#42C1F0] " : ""}`}
              >
                Allow Local Pickup
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: Colors.primary }}
                onValueChange={() =>
                  setValues((previousState) => ({
                    ...previousState,
                    localPickup: !previousState.localPickup,
                  }))
                }
                value={values.localPickup}
              />
            </View>
            <View className=" mt-[10px] flex-row justify-between">
              <Text
                style={styles.switchContainerText}
                className={`${values.allCategories ? " text-primary" : ""}`}
              >
                Allow On All Categories
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: Colors.primary }}
                onValueChange={() =>
                  setValues((previousState) => ({
                    ...previousState,
                    allCategories: !previousState.allCategories,
                  }))
                }
                value={values.allCategories}
              />
            </View>

            <View className=" mt-[17px] items-center flex-row justify-between">
              <Text style={{ fontSize: hp(2.4) }} className="  text-primary ">
                Maximum Distance
              </Text>
              <Text style={{ fontSize: hp(1.7) }} className=" text-[#949494]">
                {rightLabel}
              </Text>
            </View>
            <View className=" flex-row justify-center">
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={5}
                value={rangeValue}
                onValueChange={(value) => updateRange(value)}
                minimumTrackTintColor="#3DCBFF"
                thumbTintColor="#3FBFEF"
              />
            </View>

            <Text className="my-4 text-[24px]  text-primary text-p ">
              Condition
            </Text>
            <View className=" flex-row  w-full gap-2">
              <Pressable
                onPress={() => setCondication("New")}
                className=" active:scale-95 duration-300  flex-1"
              >
                <LinearGradient
                  colors={
                    condication == "New"
                      ? ["#26BCF2", "#82DAF9"]
                      : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3  rounded-full bg-[#DBDBDB]  items-center`}
                >
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className=" font-medium text-white"
                  >
                    New
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={() => setCondication("Used")}
                className=" active:scale-95 duration-300  flex-1"
              >
                <LinearGradient
                  colors={
                    condication == "Used"
                      ? ["#26BCF2", "#82DAF9"]
                      : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3 duration-500  rounded-full bg-[#DBDBDB]  items-center`}
                >
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className=" font-medium text-white"
                  >
                    Used
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable
                onPress={() => setCondication("Not Specified")}
                className=" active:scale-95 duration-300  flex-1"
              >
                <LinearGradient
                  colors={
                    condication == "Not Specified"
                      ? ["#26BCF2", "#82DAF9"]
                      : ["#d3d3d3", "#d3d3d3"]
                  }
                  className={`py-3 duration-300 rounded-full bg-[#DBDBDB]  items-center`}
                >
                  <Text
                    style={{ fontSize: hp(1.5) }}
                    className="  font-medium text-white"
                  >
                    Not Specified
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>

          <View style={styles.innercontainer}>
            <View style={styles.heading}>
              <Text
                style={{ fontSize: hp(3.2) }}
                className=" mr-2 font-semibold "
              >
                Categories
              </Text>
            </View>

            <View className=" mt-[17px] flex-row items-center px-3  rounded-xl bg-[#E9E9EC]">
              <MaterialIcons name="search" size={24} color="#3C3C4399" />
              <TextInput
                placeholder="Search for categories to add"
                placeholderTextColor={"#3C3C4399"}
                className=" text-[16px] flex-1 py-3"
              />
            </View>
          </View>

          <View style={styles.innercontainer}>
            <View className=" flex-row items-center ">
              <Text
                style={{ fontSize: hp(3.2) }}
                className="  mr-2 leading-none font-semibold "
              >
                Price
              </Text>
              <Pen width={16} height={16} />
            </View>

            <TextInput
              style={styles.input}
              placeholder={"Tap here to add an asking price"}
              placeholderTextColor={"#3C3C4399"}
              className="text-[16px]"
            />
          </View>

          <View style={styles.innercontainer} className=" pb-[20px]">
            <View style={styles.confirmListing}>
              <Text
                style={{ fontSize: hp(3.2) }}
                className=" mr-2 font-semibold"
              >
                Confirm Listing
              </Text>
              <Text
                style={{
                  color: Colors.primary,
                  textDecorationLine: "underline",
                  fontSize: 20,
                }}
              >
                Preview
              </Text>
            </View>

            <Pressable
              className=" active:scale-95 active:opacity-80 mt-4"
              onPress={() => {}}
            >
              <LinearGradient
                colors={[Colors.primary, "#85DBF9"]}
                className="mx-auto p-3 rounded-xl w-[200px] items-center  justify-center"
              >
                <Text
                  style={styles.actionButtonListItemText}
                  className="font-semibold"
                >
                  List item
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </CustomKeyBoardView>
    </>
  );
};

export default ListAnItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 0,
    paddingTop: 2,
    paddingBottom: 2,
  },
  innercontainer: {
    borderRadius: 14,
    backgroundColor: "#fff",
    margin: 4,
    position: "relative",
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
  },
  slider: {
    width: "95%",
    height: 40,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "semibold",
    marginBottom: 10,
    marginRight: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
  },
  switchContainer: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    width: "100%",
  },
  switchContainerText: {
    fontSize: 20,
  },
  rangContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  rangHeadingText: {
    fontSize: 20,
  },
  rangHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  condicationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  condicationButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 20,
  },
  actionButton: {
    padding: 15,
    borderRadius: 12,
    width: 240,
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 20,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  actionButtonListItemText: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#fff",
  },
  confirmListing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF9FF",
    width: 100,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
    borderWidth: 4,
    borderColor: Colors.primary,
    borderStyle: "dashed",
  },
});
