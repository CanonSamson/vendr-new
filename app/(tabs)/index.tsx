import Card from "@/components/Card";
import { Colors } from "@/constants/Colors";
import { PersonIon, PlusIon } from "@/constants/Icons";
import { ProductData, ProductObject } from "@/constants/testdata";
import { LogoV1White } from "@/constants/Vector";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Pressable,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import SwiperButtons from "@/components/SwiperButtons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { GestureResponderEvent } from "react-native";
import { PanResponderGestureState } from "react-native";
import { router } from "expo-router";
import FilterProductModal from "@/components/Model/FIlterModel";

const { width, height } = Dimensions.get("screen");

interface ProductData {
  id: string;
  name: string;
  location: string;
  distance: string;
  images: { uri: string }[];
  seller: {
    name: string;
    avatar: { uri: string };
  };
  price: string;
}

type ProductDataMap = {
  [key: string]: ProductData;
};

export default function HomeScreen() {
  const swipe = useRef(new Animated.ValueXY()).current;
  const titlSign = useRef(new Animated.Value(1)).current;
  const [productData, setProductData] = useState<ProductDataMap>(ProductObject);
  const [viewProductDetails, setViewProductDetails] = useState<ProductData>();
  const [filterProduct, setFilterProduct] = useState(false);

  const triggerSwipe = (direction: number) => {
    Animated.timing(swipe, {
      duration: 200,
      toValue: {
        x: direction * 500,
        y: 0,
      },
      useNativeDriver: true,
    }).start(() => {
      handleSwipe(
        Object.keys(productData)[Object.keys(productData).length - 1]
      );
      swipe.setValue({ x: 0, y: 0 });
    });
  };
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        triggerSwipe(direction);
      } else {
        Animated.spring(swipe, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const handleSwipe = (id: string) => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      delete newData[id];
      return newData;
    });
  };

  useEffect(() => {
    if (!productData) {
      setTimeout(() => {
        setProductData(ProductObject);
      }, 100);
    }
  }, [productData]);

  return (
    <>
      <StatusBar style="light" hidden={false} />
      <LinearGradient
        colors={[Colors.primary, Colors.primary, "#85DBF9"]}
        className=" pt-14  px-4 items-center relative rounded-md  pb-5"
      >
        <View className="  px-4 w-full justify-center items-center relative flex-row  ">
          <Pressable
            onPress={() => router.push("user-profile")}
            className=" active:scale-90 duration-900  absolute left-0"
          >
            <PersonIon width={40} height={40} />
          </Pressable>
          <View className=" w-auto h-[45px] z-40 relative ">
            <LogoV1White color={`#fff`} height={"100%"} />
          </View>
          <Pressable
            onPress={() => router.push("list-an-item")}
            className=" active:scale-90 duration-900  absolute right-0"
          >
            <PlusIon width={40} height={40} />
          </Pressable>
        </View>
      </LinearGradient>

      <View className=" flex items-center justify-center">
        {Object.values(productData).map((item, index) => {
          let isFirst =
            item.id ===
            Object.keys(productData)[Object.keys(productData).length - 1];

          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={index}
              {...item}
              isFirst={isFirst}
              swipe={swipe}
              titlSign={titlSign}
              {...dragHandlers}
              viewProductDetails={viewProductDetails}
              setViewProductDetails={setViewProductDetails}
            />
          );
        })}
      </View>

      <FilterProductModal
        modalVisible={filterProduct}
        hideModal={() => setFilterProduct(false)}
      />
      <SwiperButtons
        handleFilter={() => setFilterProduct(true)}
        onSwipeLeft={() => triggerSwipe(-1)}
        onSwipeRight={() => triggerSwipe(1)}
      />
    </>
  );
}

const styles = StyleSheet.create({});
