import { Dimensions } from "react-native";
import { Easing } from "react-native-reanimated";

export interface Positions {
  [id: string]: number;
}

const { width } = Dimensions.get("window");

export const MARGIN = 10;
export const SIZE = 100 + MARGIN;
export const COL = 3;

export const animationConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 350,
};

export const getPosition = (position: number) => {
  "worklet";

  return {
    x: position * SIZE,
  };
};

export const getOrder = (tx: number, max: number) => {
  "worklet";
  const index = Math.round(tx / SIZE);
  return Math.max(0, Math.min(index, max));
};
