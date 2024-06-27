import React, { ReactElement } from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

import { Positions } from "@/drag-config";
import Item from "./Item";

interface ListProps {
  children: ReactElement<{ id: string }>[];
  editing: boolean;
  onDragEnd: (diff: Positions) => void;
  pickImage: any;
}

const List = ({ children, editing, onDragEnd, pickImage }: ListProps) => {
  const positions = useSharedValue<Positions>(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index }))
    )
  );

  return (
    <Animated.View className="  duration-700 h-[150px]">
      {children.map((child) => {
        return (
          <Item
            key={child.props.id}
            positions={positions}
            id={child.props.id}
            editing={editing}
            onDragEnd={onDragEnd}
            pickImage={pickImage}
          >
            {child}
          </Item>
        );
      })}
    </Animated.View>
  );
};

export default List;
