import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Platform } from "react-native";

interface Product {
  id: string;
  price: string;
  name: string;
  images: any[];
}

const ProductCard: React.FC<Product> = ({ images, name, price }) => {
  return (
    <View className="flex-1 relative w-[120px]  items-center justify-center mr-4">
      <View
        style={styles.container}
        className=" w-[120px] h-[150px]  bg-[#303030]  rounded-xl flex relative justify-center"
      >
        <View className="z-20 absolute p-2 w-full flex-row top-0 left-0 justify-center">
          <Text
            className="text-white font-semibold text-center"
            ellipsizeMode="tail"
          >
            4 miles away
          </Text>
        </View>
        <Image
          source={images[0]}
          className="w-full h-full rounded-full object-cover"
          resizeMode="contain"
          width={200}
          height={200}
        />
        <View className="absolute p-2 w-full bottom-0 right-0 items-center justify-center">
          <Text
            className="text-white font-semibold text-center"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {price}
          </Text>
        </View>
      </View>
      <Text
        style={{ fontSize: hp(1.6) }}
        className="text-black mt-2 h-[50px] font-semibold text-start w-full"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
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
