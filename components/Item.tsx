import React, { ReactNode } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useAnimatedReaction,
  withSpring,
  withTiming,
  useSharedValue,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  animationConfig,
  getOrder,
  getPosition,
  Positions,
} from "@/drag-config";
import { Alert, Pressable } from "react-native";

interface ItemProps {
  children: ReactNode;
  positions: Animated.SharedValue<Positions>;
  id: string;
  editing: boolean;
  onDragEnd: (diffs: Positions) => void;
  pickImage: any
}

const Item = ({ children, positions, id, onDragEnd, editing, pickImage }: ItemProps) => {
  const inset = useSafeAreaInsets();
  // const containerHeight =
  //   Dimensions.get("window").height - inset.top - inset.bottom;
  const isGestureActive = useSharedValue(false);

  const position = getPosition(positions.value[id]!);
  const translateX = useSharedValue(position.x);

  useAnimatedReaction(
    () => positions.value[id]!,
    (newOrder) => {
      if (!isGestureActive.value) {
        const pos = getPosition(newOrder);
        translateX.value = withTiming(pos.x, animationConfig);
      }
    }
  );

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      // dont allow drag start if we're done editing
      if (editing) {
        ctx.x = translateX.value;
        isGestureActive.value = true;
      }
    },
    onActive: ({ translationX }, ctx) => {
      // dont allow drag if we're done editing
      if (editing) {
        translateX.value = ctx.x + translationX;

        const newOrder = getOrder(
          translateX.value,
          Object.keys(positions.value).length - 1
        );

        // 2. We swap the positions
        const oldOlder = positions.value[id];
        if (newOrder !== oldOlder) {
          const idToSwap = Object.keys(positions.value).find(
            (key) => positions.value[key] === newOrder
          );
          if (idToSwap) {
            const newPositions = JSON.parse(JSON.stringify(positions.value));
            newPositions[id] = newOrder;
            newPositions[idToSwap] = oldOlder;
            positions.value = newPositions;
          }
        }
      }
    },
    onEnd: () => {
      const newPosition = getPosition(positions.value[id]!);
      translateX.value = withTiming(newPosition.x, animationConfig, () => {
        isGestureActive.value = false;
        runOnJS(onDragEnd)(positions.value);
      });
    },
  });
  const style = useAnimatedStyle(() => {
    const zIndex = isGestureActive.value ? 100 : 0;
    const scale = withSpring(isGestureActive.value ? 1.05 : 1);
    return {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex,
      transform: [{ translateX: translateX.value }, { scale }],
    };
  });
  return (
    <Animated.View style={style} className="relative">
      <PanGestureHandler enabled={editing} onGestureEvent={onGestureEvent}>
        <Animated.View className="">
          <Pressable onPress={pickImage}>{children}</Pressable>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default Item;
