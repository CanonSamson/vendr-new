import Card from "@/components/Card";
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
  StatusBar as StatusBarN,
} from "react-native";
import SwiperButtons from "@/components/SwiperButtons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import FilterProductModal from "@/components/Model/FIlterModel";
import { useModal } from "@/context/ModalContext";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Filter from "@/components/Model/Filter";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

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
  const [viewProductDetails, setViewProductDetails] = useState<any>();
  const {
    confirmAnicationModal,
    productModalVisible,
    filterProduct,
    setFilterProduct,
  } = useModal();
  const [isActionActive, setIsActionActive] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

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
      const distance = Math.sqrt(dx * dx + dy * dy);
      const isHolding = distance > 15;
      if (isHolding) setIsActionActive(true);
      else setIsActionActive(false);

      setIsHolding(isHolding);
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
      setTimeout(() => setIsActionActive(false), 10);
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

  const insets = useSafeAreaInsets();

  const statusBarHeight =
    Platform.OS === "android" ? StatusBarN.currentHeight : insets.top;

  useEffect(() => {
    console.log(isActionActive);
  }, [isActionActive]);

  return (
    <>
      <StatusBar style="light" hidden={false} />
      <ScrollView
        style={{ flex: 1, zIndex: isActionActive ? 4 : 2 }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        className=" h-screen  "
        scrollEnabled={productModalVisible}
      >
        <LinearGradient
          colors={["#00A3FF", "#85DBF9"]}
          className={`${
            confirmAnicationModal ? " opacity-0" : " opacity-100"
          } z-40 px-4 items-center justify-center relative pb-[10px]`}
          style={{
            height: verticalScale(85),
            paddingTop: statusBarHeight,
          }}
        >
          <View className="  w-full justify-between items-center relative flex-row  ">
            <Pressable
              onPress={() => router.push("list-an-item")}
              className={` ${
                productModalVisible ? " opacity-0" : " opacity-100"
              } active:scale-90 duration-900   `}
            >
              <PlusIon width={40} height={40} />
            </Pressable>

            <View className=" w-auto h-[45px] z-40 relative ">
              <LogoV1White color={`#fff`} height={"100%"} />
            </View>
            <Pressable
              onPress={() => router.push("user-profile")}
              className={` ${
                productModalVisible ? " opacity-0" : " opacity-100"
              } active:scale-90 duration-900   `}
            >
              <PersonIon width={40} height={40} />
            </Pressable>
          </View>
        </LinearGradient>

        <View
          style={{ height: !productModalVisible ? height : "auto" }}
          className={`  ${
            productModalVisible ? "bg-[#F3F3F3] " : "   "
          } items-center   overflow-visible relative z-50 justify-center `}
        >
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
                product_id={item.id}
              />
            );
          })}
        </View>
      </ScrollView>
      {!productModalVisible && (
        <SwiperButtons
          handleFilter={() => setFilterProduct(true)}
          onSwipeLeft={() => triggerSwipe(-1)}
          onSwipeRight={() => triggerSwipe(1)}
          isActionActive={isActionActive}
          swipe={swipe}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
