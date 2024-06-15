import React from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface TabBarIconProps {
  Icon: React.ElementType;
  style?: any;
  color: string;
}

export function TabBarIcon({ Icon, style, color }: TabBarIconProps) {
  return (
    <View style={[styles.iconContainer, style]}>
      <Icon width={hp(4)} height={hp(5)} fill={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
