import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import EditIcon from "../assets/svg/EditIcon.svg";
import { Platform } from "react-native";

import ThreeDot from "@/assets/icon/circle_three_dots.svg"

import { useMemo, useCallback } from "react";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

interface ListingCardProps {
  image: ImageSourcePropType;
  price: string;
  openChats?: any;
  messageRequests: number | string;
  type: string;
  status: "Unlisted" | "Sold";
  name: string;
}
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const ListingCard: React.FC<ListingCardProps> = ({
  image,
  price,
  openChats,
  messageRequests,
  type,
  status,
  name,
}) => {
  const statusColor: { [key in ListingCardProps["status"]]: string } = {
    Unlisted: "#46C0EF",
    Sold: "#57F654",
  };

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = () => bottomSheetRef.current?.present();
  const handlePresentTOModalPress = () =>
    bottomSheetRef.current?.snapToIndex(0);



  const memoizedSnapPoints = useMemo(() => ["50%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const insets = useSafeAreaInsets();



  // 
  return (
    <Pressable onPress={() => router.push(`/(item)/details/1`)} className=" flex-1 relative">

      <View
        className=" flex-row items-center py-2 gap-x-2 pb-4 bg-white"
      >
        <Image source={image} className=" h-[120px] rounded-2xl  object-cover  w-[100px]" />
        <View style={styles.details} className=" flex-1">
          <View style={styles.info}>
            <Text style={styles.name} className=" ">{name}</Text>
            <Text style={styles.price}>
              {price}
              <Text style={styles.offerText}> or best offer</Text>
            </Text>
          </View>
          {type !== "Previous" ? (
            <View className=" flex-row items-center justify-between  flex-1">
              <View style={styles.chatSection}>
                <Text className=" text-[20px] font-bold text-primary">{openChats}</Text>
                <Text style={styles.chatLabel}>Open Chats</Text>
              </View>
              <View style={styles.chatSection}>
                <Text className=" text-[20px] font-bold text-primary">{messageRequests}</Text>
                <Text style={styles.chatLabel}>Message Requests</Text>
              </View>
            </View>
          ) : (
            <View style={styles.status}>
              <Text style={[styles.statusText, { color: statusColor[status] }]}>
                {status}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity className=" absolute right-0 top-0 z-2  p-2" onPress={handlePresentModalPress}>
          <ThreeDot width={28} height={28} />
        </TouchableOpacity>
      </View>
      <View className=" h-[1px] bg-gray-200 w-[80%] mx-auto" />


      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={memoizedSnapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ display: "none" }}
        keyboardBehavior="extend"
        backgroundStyle={{ backgroundColor: 'transparent', justifyContent: "flex-end", }}
      >

        <Pressable onPress={() => dismiss()} style={{ paddingBottom: insets.bottom + 10 }} className=" px-4 justify-end flex-1">
          <View className=" bg-white rounded-xl">
            <Pressable className=" p-4  border-b  border-gray-300 ">
              <Text className=" text-[17px] text-center font-bold">Edit</Text>
            </Pressable>
            <Pressable className=" p-4  border-b   border-gray-300 ">
              <Text className=" text-[17px] text-center font-bold">Preview</Text>
            </Pressable>
            <Pressable className=" p-4  border-b border-gray-300  ">
              <Text className=" text-[17px] text-center font-bold">End Listing</Text>
            </Pressable>
          </View>
          <View className=" bg-white rounded-xl mt-4">
            <Pressable className=" p-4    ">
              <Text className=" text-[17px] text-center font-bold">Cancel</Text>
            </Pressable>
          </View>
        </Pressable>

      </BottomSheetModal>
    </Pressable>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
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

  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  details: {
    padding: 4,
  },

  info: {
    marginTop: 5,
    flex: 1,
    width: "100%",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    color: "#000",
  },
  offerText: {
    fontSize: 14,
    color: "#888",
  },
  chats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  chatSection: {
    alignItems: "center",
  },
  chatCount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  chatLabel: {
    fontSize: 12,
    color: "#888",
  },
  status: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  statusText: {
    fontSize: 16,
    textAlign: "right",
  },
});
