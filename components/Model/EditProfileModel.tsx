// EditProfileModel.tsx
import {
  Image,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import ImageCard from "../ImageCard";
import * as ImagePicker from "expo-image-picker";

import InputField from "../InputField";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Pen from "@/assets/icon/pen.svg";
import { StatusBar } from "expo-status-bar";
import CustomKeyBoardView from "../CustomKeyBoardView";

const ArrowDown = require("@/assets/icon/arrow-down.png");

interface EditProfileModelProps {
  modalVisible: boolean;
  hideModal: () => void;
}

interface SignUpFormValues {
  address: string;
  state: string;
  zipcode: string;
}

const EditProfileModel: React.FC<EditProfileModelProps> = ({
  modalVisible,
  hideModal,
}) => {
  const [userAvatar, setUserAvatar] = useState<string | null>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setUserAvatar(result.assets[0].uri);
    }
  };

  const [phonenumberOnProfile, setPhonenumberOnProfile] = useState(false);
  const [addresOnProfile, setAddressOnProile] = useState(false);
  const [linkedAccountOnProfile, setLinkedAccountOnProfile] = useState(false);
  const onSubmit = async (values: SignUpFormValues) => {};

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues: {
        address: "",
        state: "",
        zipcode: "",
      },
      validationSchema: signinSchema,
      onSubmit,
    });

  return (
    <Modal
      visible={modalVisible}
      onRequestClose={hideModal}
      animationType="slide"
    >
      <StatusBar style="dark" />
      <View
        className="pt-14 pb-4  absolute top-0 w-full flex-row  justify-between px-4 right-0 z-20 items-center bg-white border-b-[2px] border-primary"
        style={styles.heading}
      >
        <Pressable onPress={hideModal}>
          <Image
            source={ArrowDown}
            className=" w-[24px] h-[24px] object-contain rotate-90"
          />
        </Pressable>
        <Text className="text-xl text-black font-medium">Edit Profile</Text>
        <View className="  w-[24px] h-[24px] o rotate-90" />
      </View>

      <CustomKeyBoardView>
        <View className=" px-4">
          <View className=" mt-[100px] py-4">
            <View
              style={styles.container}
              className="  p-4 rounded-xl  bg-white "
            >
              <Text className=" text-[26px] font-medium">Photos</Text>
              <ImageCard
                id={"1"}
                uri={userAvatar ? userAvatar.toString() : null}
                pickImage={pickImage}
              />
            </View>

            <View
              style={styles.container}
              className="  p-5 mt-4 rounded-xl  bg-white "
            >
              <View className=" flex-row items-center">
                <Text className=" text-[26px] mr-1 font-medium">Title</Text>
                <Pen width={24} height={24} />
              </View>
              <TextInput
                className=" py-2"
                placeholder={"Tap here to add a store bio."}
                placeholderTextColor={"gray"}
              />
            </View>

            <View
              style={styles.container}
              className="  p-4 mt-4 rounded-xl  bg-white "
            >
              <View className=" flex-row items-center">
                <Text className=" text-[26px] mr-1 font-medium">Address</Text>
                <Pen width={24} height={24} />
              </View>

              <InputField
                value={values.address}
                onChangeText={handleChange("address")}
                placeholder="Address Line"
                error={touched.address && errors?.address}
                style={" mt-4"}
              />

              <InputField
                value={values.address}
                onChangeText={handleChange("address")}
                placeholder="City"
                error={touched.address && errors?.address}
                style={" mt-4"}
              />
              <View className="flex-row flex-wrap mt-5 -mx-2">
                <View className="w-1/2 px-2 mb-4">
                  <InputField
                    value={values.address}
                    onChangeText={handleChange("address")}
                    placeholder="State"
                    error={touched.address && errors?.address}
                    style={""}
                  />
                </View>
                <View className="w-1/2 px-2 mb-4">
                  <InputField
                    value={values.address}
                    onChangeText={handleChange("address")}
                    placeholder="Zipcode"
                    error={touched.address && errors?.address}
                    style={""}
                  />
                </View>
              </View>
            </View>

            <View
              style={styles.container}
              className="  p-4 mt-4 rounded-xl  bg-white "
            >
              <Text className=" text-[26px] font-medium">
                Appearance Privacy
              </Text>
              <View className=" flex-row mt-4 items-center justify-between">
                <Text
                  className={` text-[19px]  ${
                    phonenumberOnProfile ? "text-primary " : ""
                  }`}
                >
                  Show phone number on profile
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.primary }}
                  onValueChange={() =>
                    setPhonenumberOnProfile((previousState) => !previousState)
                  }
                  value={phonenumberOnProfile}
                />
              </View>
              <View className=" flex-row mt-2 items-center justify-between">
                <Text
                  className={` text-[19px]  ${
                    addresOnProfile ? "text-primary " : ""
                  }`}
                >
                  Show address on profile
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.primary }}
                  onValueChange={() =>
                    setAddressOnProile((previousState) => !previousState)
                  }
                  value={addresOnProfile}
                />
              </View>
              <View className=" flex-row mt-2 items-center justify-between">
                <Text
                  className={` text-[19px]  ${
                    linkedAccountOnProfile ? "text-primary " : ""
                  }`}
                >
                  Show linked accounts on profile
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: Colors.primary }}
                  onValueChange={() =>
                    setLinkedAccountOnProfile((previousState) => !previousState)
                  }
                  value={linkedAccountOnProfile}
                />
              </View>
            </View>

            <View
              style={styles.container}
              className="  p-4 mt-4 rounded-xl  bg-white "
            >
              <Text className=" text-[26px] font-medium">Confirm</Text>

              <Pressable className=" mt-4" onPress={() => {}}>
                <LinearGradient
                  colors={[Colors.primary, "#85DBF9"]}
                  className="mx-auto p-3 rounded-lg w-[200px] items-center justify-center"
                >
                  <Text className=" text-white text-[26px]">List item</Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </View>
      </CustomKeyBoardView>
    </Modal>
  );
};

export default EditProfileModel;

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
