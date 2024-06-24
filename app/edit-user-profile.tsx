// EditProfileModel.tsx
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Pen from "@/assets/icon/pen.svg";
import { StatusBar } from "expo-status-bar";
import { CloseIconSvg } from "@/constants/Icons";
import { useAuth } from "@/context/GlobalContext";
import { getNameInitials } from "@/utils/functions";

const ArrowDown = require("@/assets/icon/arrow-down.png");
import PenBlue from "@/assets/svg/pen_blue.svg";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { auth } from "@/firebase_config";
import CustomKeyBoardView from "@/components/CustomKeyBoardView";
import InputField from "@/components/InputField";
import Header from "@/components/layout/Header";

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
  const { user } = useAuth();

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
    <>
      <StatusBar style="dark" />

    <CustomKeyBoardView>
        <View className=" px-1 bg-[#F3F3F3]">
          <View className={` mt-2`}>
            <View
              style={styles.container}
              className="  p-4 rounded-xl  bg-white "
            >
              <Text className=" text-[26px] font-semibold">Profile Photo</Text>

              <Pressable
                onPress={() => pickImage()}
                style={[
                  {
                    ...Platform.select({
                      ios: {
                        shadowColor: "black",
                        shadowOpacity: 0.4,
                        shadowOffset: { width: 0, height: 4 },
                        shadowRadius: 2,
                      },
                      android: {
                        elevation: 10,
                      },
                    }),
                  },
                  { height: 200, width: 200 },
                ]}
                className=" relative border-4 justify-center
                   p-2 mx-auto flex-row bg-white  items-center border-primary rounded-full"
              >
                {userAvatar ? (
                  <Image
                    source={{ uri: userAvatar.toString() }}
                    className=" rounded-full object-cover w-full h-full"
                  />
                ) : user?.photoURL ? (
                  <Image
                    source={{ uri: user?.photoURL }}
                    className=" rounded-full object-cover w-full h-full"
                  />
                ) : (
                  <Text className=" text-primary" style={{ fontSize: hp(10) }}>
                    {getNameInitials(
                      auth.currentUser?.displayName
                        ? auth.currentUser?.displayName
                        : ""
                    )}
                  </Text>
                )}

                <Pressable
                  style={styles.container}
                  onPress={() => pickImage()}
                  className=" absolute -right-5 top-5"
                >
                  <PenBlue width={40} />
                </Pressable>
              </Pressable>
            </View>

            <View
              style={styles.container}
              className="  p-5 mt-[7px] rounded-xl  bg-white "
            >
              <View className=" flex-row items-center">
                <Text className=" text-[26px] mr-1 font-medium">Bio</Text>
                <Pen width={16} height={16} />
              </View>
              <TextInput
                className=" py-2 text-[18px]"
                placeholder={"Tap here to add a store bio."}
                placeholderTextColor={"gray"}
              />
            </View>

            <View
              style={styles.container}
              className="  p-4 mt-[7px] rounded-xl  bg-white "
            >
              <View className=" flex-row items-center">
                <Text className=" text-[26px] mr-1 font-medium">Address</Text>
                <Pen width={16} height={16} />
              </View>

              <InputField
                value={values.address}
                onChangeText={handleChange("address")}
                placeholder="Address Line"
                error={touched.address && errors?.address}
                style={" mt-[7px]"}
              />

              <InputField
                value={values.address}
                onChangeText={handleChange("address")}
                placeholder="City"
                error={touched.address && errors?.address}
                style={" mt-[7px]"}
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
              className="  p-4 mt-[7px] rounded-xl  bg-white "
            >
              <Text className=" text-[26px] font-medium">
                Appearance Privacy
              </Text>
              <View className=" flex-row mt-[7px] items-center justify-between">
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
              className=" p-4 mt-[7px] rounded-xl  pb-10 bg-white "
            >
              <Text className=" text-[26px] font-medium">Confirm</Text>

              <Pressable className=" mt-[7px]" onPress={() => {}}>
                <LinearGradient
                  colors={[Colors.primary, "#85DBF9"]}
                  className="mx-auto p-2 rounded-lg w-[200px] items-center justify-center"
                >
                  <Text className=" text-white text-[26px] font-bold">
                    Save Changes
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </View>
      </CustomKeyBoardView>
    </>
  );
};

export default EditProfileModel;

const styles = StyleSheet.create({
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
      },
    }),
  },
});
