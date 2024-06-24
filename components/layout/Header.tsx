import React from "react";
import { View, Text, Pressable, Platform, StyleSheet } from "react-native";

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
  return (
    <View
      className={` ${Platform.OS === "ios" ? " pt-14" : "  pt-14"}   ${
        absolute && "absolute"
      }  top-0 w-full flex-row   justify-between  right-0 z-20 items-center bg-white border-b-[3px] border-primary`}
      style={styles.heading}
    >
      <Pressable onPress={hendleLeft} className="p-4 px-7   ">
        {Left}
      </Pressable>
      <Text className="text-[26px] text-black font-bold">{title}</Text>
      <Pressable onPress={hendleRight} className="p-4 px-7  ">
        {Right}
      </Pressable>
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
