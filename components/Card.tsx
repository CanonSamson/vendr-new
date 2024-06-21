import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import InfoIcon from "../assets/icon/info.svg";
import Choice from "./Choice";
import ProductDetails from "./Model/ProductDetails";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CardData {
  name: string;
  location: string;
  distance: string;
  images: { uri: string }[];
  isFirst: boolean;
  seller: {
    name: string;
    avatar: { uri: string };
  };
  price: string;
  titlSign: Animated.Value;
  swipe: Animated.ValueXY;
  viewProductDetails: any;
  setViewProductDetails: React.Dispatch<React.SetStateAction<any>>;
}

const { width, height } = Dimensions.get("screen");

// Scale factors based on current device vs. base design
const widthScale = width / 390; // Using iPhone 13 Pro's width as base
const heightScale = height / 844; // Using iPhone 13 Pro's height as base

// Dynamic margin bottom to ensure consistent spacing
const dynamicMarginBottom = heightScale === 1 ? 0 : heightScale * 13;
const dynamicTabHeight = heightScale < 0.95 ? heightScale * 0.8 : 1;

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
  setViewProductDetails,
  ...rest
}) => {
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

  const [modalVisible, setModalVisible] = useState(false);
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

  return (
    <>
      <Animated.View
        style={[styles.card, isFirst && animatedCardStyle]}
        {...rest}
      >
        <Image source={images[0]} style={styles.image} resizeMode="contain" />
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
          <View className=" flex-row items-center absolute top-2 right-0  px-[18px] h-[4px] z-20 w-full">
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

          <View className="absolute top-[27px] left-0 w-full flex-row">
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
          </View>

          <View className="absolute bottom-6 left-0 w-full flex-row">
            <View className=" w-full flex-row items-end">
              <View className="mr-1 pb-[14px] items-center flex-1">
                <Text className="text-white text-[19px]  text-center font-bold">
                  {name}
                </Text>
                <Text className="text-white text-[17px] text-center font-light">
                  {price} or Best Offer
                </Text>
              </View>
              <Pressable
                className=" active:scale-150  duration-500 mr-[25px]"
                onPress={showModal}
              >
                <InfoIcon />
              </Pressable>
            </View>
          </View>
        </LinearGradient>
        {isFirst && renderChoice()}
      </Animated.View>

      <ProductDetails
        modalVisible={modalVisible}
        hideModal={hideModal}
        images={images}
        price={price}
        name={name}
      />
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 10,
    backgroundColor: "#303030",
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    width: width * 0.95,
    height: hp(64),
    borderRadius: 20,
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
