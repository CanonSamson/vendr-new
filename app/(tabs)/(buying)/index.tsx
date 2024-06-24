import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  ScrollView,
} from "react-native";
import { ProductData, SellersData } from "@/constants/testdata";
import ProductCard from "@/components/ProductCard";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Seller {
  id: string;
  avatar: any;
  name: string;
}

const Buying: React.FC = () => {
  const renderItem: ListRenderItem<Seller> = ({ item }) => (
    <View className="flex-1 items-center justify-center m-2">
      <Image
        source={item.avatar}
        className="h-[70px] w-[70px] rounded-full object-cover"
        resizeMode="contain"
      />
    </View>
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className=" flex-1 w-full"
      ></ScrollView>
    </>
  );
};

export default Buying;
