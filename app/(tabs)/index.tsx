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
  const [filterProduct, setFilterProduct] = useState(false);
  const { confirmAnicationModal, productModalVisible } = useModal();

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

  const heightScale = height / 844; // Using iPhone 13 Pro's height as base

  const imageH =
    height -
    verticalScale(98) -
    (Platform.OS === "ios" ? 80 : 75) -
    60 -
    verticalScale(Platform.OS === "ios" ? 45 : 55) -
    (heightScale < 1.2 ? 2 : 3);

  return (
    <>
      <StatusBar style="light" hidden={false} />
        <ScrollView
          style={{ flex: 1 }}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={productModalVisible}
        >
          <LinearGradient
            colors={["#00A3FF", "#85DBF9"]}
            className={`${
              confirmAnicationModal ? " opacity-0" : " opacity-100"
            } z-40   pt-[50px]  px-4 items-center relative pb-[10px]`}
            style={{ height: verticalScale(85) }}
          >
            <View className="  px-[10px] w-full justify-center items-center relative flex-row  ">
              <Pressable
                onPress={() => router.push("list-an-item")}
                className={` ${
                  productModalVisible ? " opacity-0" : " opacity-100"
                } active:scale-90 duration-900  absolute left-0`}
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
                } active:scale-90 duration-900  absolute right-0`}
              >
                <PersonIon width={40} height={40} />
              </Pressable>
            </View>
          </LinearGradient>

          <View
            className={`  ${
              productModalVisible ? "bg-[#F3F3F3] " : "   "
            } items-center   relative z-50 justify-center `}
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

          <FilterProductModal
            modalVisible={filterProduct}
            hideModal={() => setFilterProduct(false)}
          />
        </ScrollView>
        {!productModalVisible && (
          <SwiperButtons
            handleFilter={() => setFilterProduct(true)}
            onSwipeLeft={() => triggerSwipe(-1)}
            onSwipeRight={() => triggerSwipe(1)}
          />
        )}
    </>
  );
}

const styles = StyleSheet.create({});
