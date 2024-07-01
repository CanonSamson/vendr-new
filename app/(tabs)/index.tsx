import Card from "@/components/Card";
import { PersonIon, PlusIon } from "@/constants/Icons";
import { ProductObject } from "@/constants/testdata";
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
  ScrollView,
  Platform,
} from "react-native";
import SwiperButtons from "@/components/SwiperButtons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { useModal } from "@/context/ModalContext";
import { verticalScale } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheetModal from "@/components/CustomBottomSheet";
import Filter from "@/components/Model/Filter";

const { height } = Dimensions.get("screen");

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
  const { confirmAnicationModal, productModalVisible } = useModal();
  const [isActionActive, setIsActionActive] = useState(false);

  const filterBottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = () => filterBottomSheetRef.current?.present();
  const handlePresentTOModalPress = () =>
    filterBottomSheetRef.current?.snapToIndex(0);
  const [swipWith, setSwipWith] = useState<string>("card");

  const triggerSwipe = (direction: number) => {
    if (direction === -1 || direction === 1) {
      setSwipWith("card");
    } else {
      setSwipWith("button");
    }
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
      if (isHolding) {
        setIsActionActive(true);
        setSwipWith("card");
      } else setIsActionActive(false);

      swipe.setValue({ x: dx, y: dy });
      titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      console.log(direction);
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

  const insets = useSafeAreaInsets();

  const statusBarHeight =
    Platform.OS === "android" ? StatusBarN.currentHeight : insets.top;


    const scrollViewRef = useRef<ScrollView>(null);

    const scrollToTop = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    };
  return (
    <>
      <CustomBottomSheetModal
        ref={filterBottomSheetRef}
        snapPoints={["60%", "80%"]}
        title="My Custom Bottom Sheet"
      >
        <Filter
          hideModal={() => dismiss()}
          handlePresentTo={handlePresentTOModalPress}
        />
      </CustomBottomSheetModal>
      
      <StatusBar style="light" hidden={false} />
      <ScrollView
        style={{ flex: 1, zIndex: 4 }}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        className=" h-screen  "
        scrollEnabled={productModalVisible}
        ref={scrollViewRef}
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
                scrollToTop={scrollToTop}
              />
            );
          })}
        </View>
      </ScrollView>
      {!productModalVisible && (
        <SwiperButtons
          handleFilter={handlePresentModalPress}
          onSwipeLeft={() => triggerSwipe(-1.3)}
          onSwipeRight={() => triggerSwipe(1.3)}
          isActionActive={isActionActive}
          swipe={swipe}
          swipWith={swipWith}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
