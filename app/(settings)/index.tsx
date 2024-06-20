import {
  View,
  Text,
  Platform,
  StyleSheet,
  Switch,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "@/firebase_config";
import { useAuth } from "@/context/GlobalContext";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
const ArrowDown = require("@/assets/icon/arrow-down.png");

const Settings = () => {
  const { logout } = useAuth();
  const [itemOfferRequests, setItemOfferRequests] = useState(false);
  const [messageReplies, setMessageReplies] = useState(false);
  const [buyingNotifications, setBuyingNotifications] = useState(false);

  return (
    <>
      <View
        className="pt-14 pb-4  absolute top-0 w-full flex-row justify-between px-4 right-0 z-20 items-center bg-white border-b-[2px] border-primary"
        style={styles.heading}
      >
        <Text className=" text-[#007AFF] opacity-0 ">Back</Text>

        <Text className="text-xl text-black font-medium">Settings</Text>
        <Pressable onPress={() => router.back()}>
          <Text className=" text-[#007AFF] ">Done</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}>
        <View className=" mt-[100px] p-4">
          <View
            style={styles.container}
            className="  p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]">Notifications</Text>
            <View className=" flex-row  mt-[10px] items-center justify-between">
              <Text
                className={`${
                  itemOfferRequests ? "text-primary" : ""
                } text-[19px] `}
              >
                Item Offer Requests
              </Text>

              <Switch
                trackColor={{ false: "#767577", true: Colors.primary }}
                onValueChange={() =>
                  setItemOfferRequests((previousState) => !previousState)
                }
                value={itemOfferRequests}
              />
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text
                className={`${
                  messageReplies ? "text-primary" : ""
                } text-[19px] `}
              >
                Message Replies
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: Colors.primary }}
                onValueChange={() =>
                  setMessageReplies((previousState) => !previousState)
                }
                value={messageReplies}
              />
            </View>
            <View className=" mt-[10px] flex-row items-center justify-between">
              <Text
                className={`${
                  buyingNotifications ? "text-primary" : "text-black"
                } text-[19px] duration-300 `}
              >
                Buying Notifications
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: Colors.primary }}
                onValueChange={() =>
                  setBuyingNotifications((previousState) => !previousState)
                }
                value={buyingNotifications}
              />
            </View>
          </View>

          <View
            style={styles.container}
            className=" mt-4 p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]">Account Information</Text>
            <Text>Verify private information to help secure your account.</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Phone Number</Text>
              <View className=" flex-row gap-2 items-center">
                <Text className=" text-primary">909-956-1534</Text>
                <Image
                  source={ArrowDown}
                  className=" w-[14px] h-[14px] object-contain -rotate-90"
                />
              </View>
            </View>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Email</Text>
              <View className=" flex-row gap-2 items-center">
                <Text className=" text-primary">{auth.currentUser?.email}</Text>

                <Image
                  source={ArrowDown}
                  className=" w-[14px] h-[14px] object-contain -rotate-90"
                />
              </View>
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Connected Accounts</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
          </View>

          <View
            style={styles.container}
            className=" mt-4 p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]">Support</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Terms and Services</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Contact and FAQ</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Report Bugs</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
          </View>

          <View
            style={styles.container}
            className=" mt-4 p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]">App Settings</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Privacy and Security</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px]">Delete Account</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
          </View>

          <Pressable
            onPress={() => {
              Alert.alert(
                "Are you sure you want to logout?",
                "",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Yes",
                    onPress: logout,
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <LinearGradient
              colors={["#B1B1B1", "#E4E4E4"]}
              className={` mt-10 items-center justify-center rounded-lg w-full max-w-[200px] mx-auto  h-[45px] relative `}
            >
              <Text className=" text-white text-[19px]">Logout</Text>
            </LinearGradient>
          </Pressable>
          <Text className=" text-center  mt-[10px]">Version 0.6.01 Beta</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  heading: {
    // For iOS
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // For Android
    elevation: 10,
  },
  container: {
    shadowColor: "gray",
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 40,
        backgroundColor: "white",
      },
    }),
  },
});
