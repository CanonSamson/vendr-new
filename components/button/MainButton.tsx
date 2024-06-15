import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface MainButtonProps {
  title: string;
  colors: string[];
  handlePress: () => void;
  style?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  title,
  colors,
  handlePress,
  style,
  isLoading,
  isDisabled,
}) => {
  return (
    <Pressable
      onPress={!isLoading && !isDisabled ? handlePress : undefined}
      disabled={isLoading || isDisabled}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1.0,
          elevation: isDisabled ? 0 : 2,
        },
        isDisabled && styles.disabledButton,
        styles.button,
        style,
      ]}
    >
      <LinearGradient
        colors={isDisabled ? ["#d3d3d3", "#d3d3d3"] : colors}
        className={`w-full p-[15px] rounded-[7px] `}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text
            style={{ fontSize: hp(2.3) }}
            className={`bg-transparent  ${
              isDisabled ? " text-gray-500" : "text-white"
            } font-bold  text-center`}
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
        shadowOpacity: 0.5,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default MainButton;
