import React, { useRef } from "react";
import { Pressable, Animated, Easing } from "react-native";

interface AnimatedPressableProps {
  onPress: () => void;
  style?: any;
  className: any;
  children: React.ReactNode;
}

const AnimatedPressable: React.FC<AnimatedPressableProps> = ({
  onPress,
  style,
  children,
  className,
}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  const scaleIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const scaleOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 150,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const pressIn = () => {
    scaleIn();
    Animated.timing(opacityValue, {
      toValue: 0.8,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    scaleOut();
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      className={className}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        animatedStyle,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default AnimatedPressable;
