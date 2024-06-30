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
      >
        <View
          style={[
            styles.container,
            { marginTop: hp(1), paddingVertical: hp(1) },
          ]}
          className="bg-white rounded-xl mx-1"
        >
          <Text
            style={{ fontSize: hp(3.1), marginBottom: hp(2) }}
            className=" px-5  font-semibold"
          >
            Favorited Sellers
          </Text>
          <FlatList
            horizontal
            className="w-full"
            data={SellersData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>

        <View
          style={[styles.container, {  marginVertical: hp(1) }]}
          className="  bg-white rounded-xl"
        >
          <Text
            style={{
              fontSize: hp(3.1),
              paddingHorizontal: hp(2),
              marginVertical: hp(2),
            }}
            className="font-semibold"
          >
            Active Listings
          </Text>
          <FlatList
            horizontal
            className="w-full "
            style={{ paddingHorizontal: wp(4) }}
            data={ProductData.slice(2, 6)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
          />
          <Text
            style={{
              fontSize: hp(3.1),
              paddingHorizontal: hp(2),
              marginBottom: hp(2),
            }}
            className="font-semibold"
          >
            Delisted Listings
          </Text>
          <FlatList
            horizontal
            className="w-full "
            style={{ paddingHorizontal: wp(4) }}
            data={ProductData.slice(0, 4)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard {...item} />}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Buying;

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
