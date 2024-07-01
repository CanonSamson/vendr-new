import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "@/constants/Colors";

interface MainButtonProps {
  title: string;
  colors: string[];
  handlePress: () => void;
  style?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  pressableClassName?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  title,
  colors,
  handlePress,
  style,
  isLoading,
  isDisabled,
  className,
  pressableClassName,
}) => {
  return (
    <Pressable
      onPress={!isLoading && !isDisabled ? handlePress : undefined}
      disabled={isLoading || isDisabled}
      style={({ pressed }) => [styles.button, style]}
      className={`${isDisabled ? "" : " bg-[#24BBF1] rounded-xl"}`}
    >
      <LinearGradient
        colors={isDisabled ? ["#d3d3d3", "#d3d3d3"] : colors}
        className={`w-full  h-[50px] items-center justify-center    rounded-[9px] border-[2px] ${isDisabled ? "border-[#d3d3d3]" : "border-[#24BBF1]"} `}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            className={`bg-transparent  ${isDisabled ? " text-gray-500" : "text-white"
              } font-bold text-[24px]  text-center`}
          >
            {title}
          </Text>
        )}
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 2,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default MainButton;
