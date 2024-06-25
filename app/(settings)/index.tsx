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
import Header from "@/components/layout/Header";
const ArrowDown = require("@/assets/icon/arrow-down.png");

const Settings = () => {
  const { logout } = useAuth();
  const [itemOfferRequests, setItemOfferRequests] = useState(false);
  const [messageReplies, setMessageReplies] = useState(false);
  const [buyingNotifications, setBuyingNotifications] = useState(false);

  return (
    <>
      <Header
        Left={<Text className=" text-[#007AFF] opacity-0">Back</Text>}
        hendleLeft={() => {}}
        hendleRight={() => router.back()}
        Right={<Text className=" text-[#007AFF] text-[17px]">Done</Text>}
        title="Settings"
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}>
        <View className=" p-[7px]">
          <View
            style={styles.container}
            className="  p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]  font-bold">Notifications</Text>
            <View className=" flex-row  mt-[4px] items-center justify-between">
              <Text
                className={`${
                  itemOfferRequests ? "text-primary" : ""
                } text-[19px] leading-none font-semibold `}
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
            <View className="   flex-row items-center justify-between">
              <Text
                className={`${
                  messageReplies ? "text-primary" : ""
                } text-[19px] leading-none font-semibold `}
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
            <View className=" leading-none flex-row items-center justify-between">
              <Text
                className={`${
                  buyingNotifications ? "text-primary" : "text-black"
                } text-[19px] font-semibold duration-300 `}
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
            className="mt-[10px] p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]  font-bold">Account Information</Text>
            <Text>Verify private information to help secure your account.</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Phone Number</Text>
              <View className=" flex-row gap-2 items-center">
                <Text className=" text-primary">909-956-1534</Text>
                <Image
                  source={ArrowDown}
                  className=" w-[14px] h-[14px] object-contain -rotate-90"
                />
              </View>
            </View>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Email</Text>
              <View className=" flex-row gap-2 items-center">
                <Text className=" text-primary">{auth.currentUser?.email}</Text>

                <Image
                  source={ArrowDown}
                  className=" w-[14px] h-[14px] object-contain -rotate-90"
                />
              </View>
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Connected Accounts</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
          </View>

          <View
            style={styles.container}
            className=" mt-[10px] p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]  font-bold">Support</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Terms and Services</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Contact and FAQ</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Report Bugs</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
          </View>

          <View
            style={styles.container}
            className="mt-[10px] p-4 rounded-xl  bg-white "
          >
            <Text className=" text-[26px]  font-bold">App Settings</Text>

            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Privacy and Security</Text>

              <Image
                source={ArrowDown}
                className=" w-[14px] h-[14px] object-contain -rotate-90"
              />
            </View>
            <View className="  mt-[10px] flex-row items-center justify-between">
              <Text className=" text-[19px] font-semibold">Delete Account</Text>

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
              <Text className=" text-white text-[19px] font-semibold">Logout</Text>
            </LinearGradient>
          </Pressable>
          <Text className=" text-center mb-[20px] mt-[10px]">
            Version 0.6.01 Beta
          </Text>
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
