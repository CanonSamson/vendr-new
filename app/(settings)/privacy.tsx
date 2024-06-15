import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { router } from "expo-router";
const ArrowDown = require("@/assets/icon/arrow-down.png");

const Privacy = () => {
  return (
    <>
      <View
        className="pt-14 pb-4  absolute top-0 w-full flex-row 
         justify-between px-4 right-0 z-20
         items-center bg-white border-b-[2px] border-primary"
        style={styles.heading}
      >
        <Pressable onPress={() => router.back()}>
          <Image
            source={ArrowDown}
            className=" w-[24px] h-[24px] object-contain rotate-90"
          />
        </Pressable>
        <Text className="text-xl text-black font-medium">Privacy</Text>
        <View className="  w-[24px] h-[24px] rotate-90" />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 20 }}>
        <View className=" mt-[100px] py-4">
          <View
            style={styles.container}
            className="  p-4 rounded-xl  bg-white "
          >
            <Text className=" text-xl text-primary font-semibold">
              Data Collection and Usage
            </Text>

            <Text className=" my-4 leading-xl font-light">
              Protecting Your Privacy At Vendr, your privacy is our priority. We
              collect various types of data to improve your shopping experience
              and provide you with personalized recommendations. This includes
              personal information such as your name, email address, shipping
              address, and payment information. We also collect usage data,
              including products viewed, items added to your cart, purchase
              history, and browsing behavior. Additionally, we gather device
              information, such as your IP address, browser type, device type,
              and operating system. We use this data to offer personalized
              product recommendations, enhance app functionality and user
              experience, and deliver relevant advertisements and promotional
              offers. Rest assured, your data is securely stored and protected
              against unauthorized access.
            </Text>
            <Text className=" text-xl text-primary font-semibold">
              Data Sharing and Opt-Out Options
            </Text>

            <Text className=" my-4 leading-xl font-light">
              We may share your data with third-party advertising agencies to
              provide you with relevant ads. However, you have the right to
              control how your data is used and shared. If you prefer not to
              receive personalized recommendations, you can opt-out by adjusting
              your preferences in the app's settings. Additionally, to opt-out
              of data sharing for marketing purposes, you can adjust your
              privacy settings in the app or contact our customer support team
              at [support@vendr.com]. Please note that opting out may limit the
              relevance of the products and ads you see, but you will still
              retain access to all other features of the app.
            </Text>

            <Text className=" text-xl text-primary font-semibold">
              Why We Need Your Data
            </Text>

            <Text className=" my-4 leading-xl font-light">
              Enhancing Your Experience. We collect and use your data to provide
              you with a more enjoyable and efficient shopping experience.
              Understanding your preferences allows us to continuously improve
              our app and develop new features. Furthermore, sharing data with
              advertising agencies enables us to show you ads that are more
              likely to interest you, supporting our business and keeping the
              app free to use. By using Vendr, you acknowledge that you have
              read, understood, and agreed to these terms and conditions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Privacy;

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
