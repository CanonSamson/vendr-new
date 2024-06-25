import { verticalScale } from "react-native-size-matters";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
const line = require("@/assets/icon/line.png");
const undo = require("@/assets/icon/undo-button.png");
const search = require("@/assets/icon/search-button.png");
const offer = require("@/assets/icon/offer-button.png");
const next = require("@/assets/icon/next-button.png");
import UndoBtn from "@/assets/icon/CardButtons/3DUndoBtn";
import NopeBtn from "@/assets/icon/CardButtons/3DNopeBtn";
import LikeBtn from "@/assets/icon/CardButtons/3DLikeBtn";
import SearchBtn from "@/assets/icon/CardButtons/3DSearchBtn";
import UnderLine from "@/assets/icon/CardButtons/UnderLine";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
interface SwiperButtonsProps {
  handleFilter: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}
const SwiperButtons: React.FC<SwiperButtonsProps> = ({
  handleFilter,
  onSwipeLeft,
  onSwipeRight,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.smallBtn}>
          <UndoBtn />
        </TouchableOpacity>
        <TouchableOpacity>
          <NopeBtn />
        </TouchableOpacity>
        <TouchableOpacity>
          <LikeBtn />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallBtn}>
          <SearchBtn />
        </TouchableOpacity>
      </View>
      <View style={styles.actionRow}>
        <UnderLine />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    // flex: 1,
    height: 110,
    justifyContent: 'flex-end',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 2,
    paddingHorizontal: 30,
  },
  smallBtn: {
    paddingTop: 20,
  }
});

export default SwiperButtons;
