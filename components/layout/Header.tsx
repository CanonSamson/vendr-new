import React from "react";
import {
  View,
  Text,
    Platform,
  StyleSheet,
  StatusBar,
TouchableOpacity
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  Left: React.ReactNode;
  hendleLeft: () => void;
  hendleRight: () => void;
  Right: React.ReactNode;
  title: string;
  absolute?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  Left,
  hendleLeft,
  hendleRight,
  Right,
  title,
  absolute,
}) => {
  const insets = useSafeAreaInsets();

  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : insets.top;

  return (
    <View
      className={`  ${
        absolute && "absolute"
      }  top-0 w-full flex-row   justify-between  right-0 z-20 items-center bg-white border-b-[3px] border-primary`}
      style={[styles.heading, { paddingTop: statusBarHeight }]}
    >
      <TouchableOpacity onPress={hendleLeft} className=" flex-1 items-start p-4 px-7   ">
        {Left}
      </TouchableOpacity>
      <Text className=" flex-2 text-center text-[26px] text-black font-bold">{title}</Text>
      <TouchableOpacity onPress={hendleRight} className=" flex-1 items-end p-4 px-7  ">
        {Right}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

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
});
