import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import InfoIcon from "../assets/icon/info.svg";
import Choice from "./Choice";
import { scale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";
import { useModal } from "@/context/ModalContext";
import DownIcon from "@/assets/icon/down-arrow.svg";

const line = require("@/assets/icon/line.png");
const offer = require("@/assets/icon/offer-button.png");
const next = require("@/assets/icon/next-button.png");


import UndoBtn from "@/assets/icon/CardButtons/3DUndoBtn";
import NopeBtn from "@/assets/icon/CardButtons/3DNopeBtn";
import LikeBtn from "@/assets/icon/CardButtons/3DLikeBtn";
import SearchBtn from "@/assets/icon/CardButtons/3DSearchBtn";
import UnderLine from "@/assets/icon/CardButtons/UnderLine";

import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface CardData {
  name: string;
  location: string;
  distance: string;
  images: { uri: string }[];
  isFirst: boolean;
  seller: {
    name: string;
    avatar: { uri: string };
    user_id: string;
  };
  price: string;
  titlSign: Animated.Value;
  swipe: Animated.ValueXY;
  viewProductDetails: any;
  product_id: string;
  setViewProductDetails: React.Dispatch<React.SetStateAction<any>>;
}

const { width, height } = Dimensions.get("screen");

const heightScale = height / 844; // Using iPhone 13 Pro's height as base

const Card: React.FC<CardData> = ({
  images,
  name,
  location,
  distance,
  isFirst,
  price,
  seller,
  titlSign,
  swipe,
  viewProductDetails,
  product_id,
  setViewProductDetails,
  ...rest
}) => {
  const {
    productModalVisible: modalVisible,
    setProductModalVisible: setModalVisible,
  } = useModal();
  const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
    zIndex: isFirst ? 1 : 0, // Ensure the first card is on top
  };

  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -25],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const fadeAnim = useState(new Animated.Value(0))[0];

  const showModal = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[styles.choice, styles.nope, { opacity: nopeOpacity }]}
        >
          <Choice type="next" />
        </Animated.View>
        <Animated.View
          style={[styles.choice, styles.like, { opacity: likeOpacity }]}
        >
          <Choice type="offer" />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  // Use a flag to track whether the component should be animated or not

  // Use an animated value to control the opacity for the transition effect
  const opacityAnimation = new Animated.Value(modalVisible ? 1 : 0);

  useEffect(() => {
    // Animate the opacity based on the modalVisible flag
    Animated.timing(opacityAnimation, {
      toValue: modalVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  const imageH =
    height -
    verticalScale(98) -
    (Platform.OS === "ios" ? 80 : 75) -
    60 -
    verticalScale(Platform.OS === "ios" ? 45 : 55) -
    (heightScale < 1.2 ? 2 : 3);

  const cardH = useSharedValue<number>(imageH);
  const top = useSharedValue<number>(0);

  const handleOpen = () => {
    setModalVisible(!modalVisible);
    // Animate width and top values

    cardH.value = withTiming(cardH.value - 50, { duration: 500 });
    top.value = withTiming(-18, { duration: 500 });
  };
  const handleClose = () => {
    setModalVisible(!modalVisible);
    // Animate width and top values

    cardH.value = withTiming(cardH.value + 50, { duration: 100 });
    top.value = withTiming(0, { duration: 500 });
  };

  const detailsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: modalVisible && isFirst ? withTiming(100) : withTiming(0),
    };
  }, [modalVisible, isFirst]);

  return (
    <>
      <Reanimated.View
        style={{ top: top }}
        className={` absolute z-50 top-0 right-0 w-full items-center justify-center`}
      >
        <Animated.View
          style={[isFirst && !modalVisible ? animatedCardStyle : null]}
          {...(!modalVisible ? rest : {})}
          className={`
          ${
            modalVisible
              ? isFirst
                ? "z-30  "
                : "hidden"
              : isFirst
              ? "z-30  "
              : " "
          }
           rounded-2xl top-0 w-[95%]  mt-2  transition duration-[35000ms] ease-in-out  absolute overflow-hidden bg-[#303030]`}
        >
          <Reanimated.Image
            source={images[0]}
            style={[{ height: cardH }]}
            resizeMode="contain"
            className={`  w-full duration-700 `}
          />

          <LinearGradient
            colors={[
              "rgba(0,0,0,.9)",
              "transparent",
              "transparent",
              "transparent",
              "rgba(0,0,0,.9)",
            ]}
            className="absolute bottom-0 left-0 right-0 w-full h-full rounded-lg"
          >
            <View
              className={` flex-row items-center px-[18px] absolute top-2 right-0   h-[4px] z-20 w-full`}
            >
              <View className="  flex-1   ">
                <View className=" h-[4px] rounded-2xl bg-white "></View>
              </View>
              <View className="  flex-1   opacity-10 px-[4px] ">
                <View className=" h-[4px] rounded-2xl bg-white "></View>
              </View>
              <View className="  flex-1   opacity-10 ">
                <View className=" h-[4px] rounded-2xl bg-white "></View>
              </View>
            </View>

            <View
              className={`absolute top-[27px] left-0 w-full flex-row ${
                modalVisible ? "hidden" : " block"
              }`}
            >
              <Pressable
                onPress={() => router.push(`/(product)/user/${product_id}`)}
              >
                <View className=" pl-[18px] w-full flex-row items-center">
                  <Image
                    source={seller.avatar}
                    className="w-[61px] h-[61px] rounded-full"
                    resizeMode="contain"
                  />
                  <View className="ml-4">
                    <Text className=" font-bold text-white  capitalize text-[21px]">
                      {seller.name}
                    </Text>
                    <Text className="text-white text-[19px] font-light">
                      {distance} miles away
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>

            <View className="absolute bottom-6 left-0 w-full flex-row">
              <View className=" w-full flex-row items-end">
                <View
                  className={`mr-1 pb-[14px] items-center flex-1 ${
                    modalVisible ? "  opacity-0" : " opacity-100"
                  } duration-700`}
                >
                  <Text className="text-white text-[19px]  text-center font-bold">
                    {name}
                  </Text>
                  <Text className="text-white text-[17px] text-center font-light">
                    {price} or Best Offer
                  </Text>
                </View>
                {modalVisible ? (
                  <Pressable
                    className="  active:scale-110  duration-700 mr-[25px]"
                    onPress={() => handleClose()}
                  >
                    <DownIcon />
                  </Pressable>
                ) : (
                  <Pressable
                    className="  active:scale-110  duration-700 mr-[25px]"
                    onPress={() => handleOpen()}
                  >
                    <InfoIcon />
                  </Pressable>
                )}
              </View>
            </View>
          </LinearGradient>
          {isFirst && renderChoice()}
        </Animated.View>
      </Reanimated.View>

      <Reanimated.View
        style={[
          {
            paddingTop: cardH,
          },
          detailsAnimatedStyle,
        ]}
        className={` bg-[#F3F3F3]  ${
          modalVisible && isFirst ? "" : "hidden"
        }  ${isFirst ? "" : "hidden"}`}
      >
        <Reanimated.View
          style={[detailsAnimatedStyle]}
          className="flex-1 mt-[-18px]  p-[10px]"
        >
          <View
            style={[styles.container]}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-black text-[26px] font-semibold">
              Description
            </Text>

            <Text className="text-black text-[17px] font-light mt-[5px]">
              Size 11 and brand new in box, never worn. I bought them from the
              adidas store. Local pick up or I can ship them out if for $15.
            </Text>
          </View>

          <View
            style={styles.container}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-black text-[26px] font-semibold">
              Seller Details
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Seller: <Text className="text-primary underline">Kyle R</Text>
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Rating: 5 Stars 99% Positive feedback
            </Text>
            <Text className="text-black text-[17px] font-light mt-[5px]">
              Location: Point Pleasant NJ, O8742
            </Text>
          </View>

          <View
            style={styles.container}
            className="px-[20px] py-[10px] mt-[10px] bg-white rounded-xl "
          >
            <Text className="text-[#EE393B] text-[26px]  font-semibold text-center">
              Report Item
            </Text>
          </View>

          <View className=" mt-[20px] flex-1 w-full">
            <View className=" w-full px-[10px] flex-row">
              <Pressable className=" flex-1 items-end mr-[20px] justify-center">
                <View className=" w-[80px] items-center justify-end">
                <NopeBtn />

                </View>
              </Pressable>
              <Pressable className=" flex-1 items-start justify-center">
                <View className=" w-[100px] items-center justify-center">
                 <LikeBtn />
                </View>
              </Pressable>
            </View>
          </View>
          <View className="  w-[50%] -top-[20px] relative  mx-auto ">
            <Image
              source={line}
              width={200}
              className=" w-full "
              resizeMode="contain"
            />
          </View>
        </Reanimated.View>
      </Reanimated.View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // For Android
    elevation: 5,
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  topContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    left: 0,
  },
  sellerContainer: {
    padding: 4,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    left: 0,
  },
  sellerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sellerInfo: {
    marginLeft: 4,
  },
  sellerName: {
    color: "white",
    fontSize: 20,
  },
  distance: {
    fontSize: 16,
    fontWeight: "light",
    color: "white",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    flexDirection: "row",
    left: 0,
  },
  bottomContent: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  productInfo: {
    marginRight: 5,
    alignItems: "center",
    flex: 1,
  },
  productName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "medium",
    color: "white",
  },
  productPrice: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "light",
    color: "white",
  },
  choice: {
    position: "absolute",
    zIndex: 50,
  },
  nope: {
    top: 100,
    right: 45,
    transform: [{ rotate: "30deg" }],
  },
  like: {
    top: 100,
    left: 45,
    transform: [{ rotate: "-30deg" }],
  },
});
