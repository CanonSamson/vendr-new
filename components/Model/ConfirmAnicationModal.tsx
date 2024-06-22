import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { Modal, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useModal } from "@/context/ModalContext";
import { StatusBar } from "expo-status-bar";

const animation = require("@/assets/animation/confirmed-animation.json");

const ConfirmAnicationModal: React.FC = () => {
  const { confirmAnicationModal, setConfirmAnicationModal } = useModal();

  return (
    <Modal
      visible={confirmAnicationModal}
      onRequestClose={() => setConfirmAnicationModal(false)}
      className="  flex-1 items-center justify-center bg-white "
    >
      <StatusBar backgroundColor="white" style="dark" />
      <View className=" flex-1 items-center justify-center bg-white ">
        <View
          style={{ height: hp(100) }}
          className=" w-full   flex-row items-center justify-center"
        >
          <LottieView
            source={animation}
            autoPlay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmAnicationModal;
