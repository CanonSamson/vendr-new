import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { chatData } from "@/constants/testdata";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomKeyBoardView from "@/components/CustomKeyBoardView";

const ProductMessages = () => {
  return (
    <>
      <CustomKeyBoardView>
        <View className="  px-1" style={{ marginTop: hp(1) }} >
          <View
            style={[styles.container, { paddingVertical: hp(2) }]}
            className=" rounded-xl  bg-white "
          >
            <Text
              style={{
                fontSize: hp(3.1),
                paddingHorizontal: hp(2),
                marginBottom: hp(2),
              }}
              className="font-semibold"
            >
              Open Chats
            </Text>
            <View
              style={{
                paddingHorizontal: hp(2),
              }}
              className=" flex-row   gap-2 flex-wrap"
            >
              {chatData.map((item, index) => (
                <View key={index}>
                  <Image
                    style={{ width: hp(8), height: hp(8) }}
                    source={item.productImages[0]}
                    className=" rounded-full object-cover"
                    resizeMode="contain"
                  />
                </View>
              ))}
            </View>
          </View>
          <View
            style={[styles.container, { paddingVertical: hp(2),  marginTop: hp(1)}]}
            className=" rounded-xl  bg-white "
          >
            <Text
              style={{
                fontSize: hp(3.1),
                paddingHorizontal: hp(2),
                marginBottom: hp(2),
              }}
              className="font-semibold"
            >
              Outgoing Messages
            </Text>
            <View
              style={{
                paddingHorizontal: hp(2),
              }}
              className=" flex-row   gap-2 flex-wrap"
            >
              {chatData.map((item, index) => (
                <View key={index}>
                  <Image
                    style={{ width: hp(8), height: hp(8) }}
                    source={item.productImages[0]}
                    className=" rounded-full object-cover"
                    resizeMode="contain"
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </CustomKeyBoardView>
    </>
  );
};

export default ProductMessages;

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
