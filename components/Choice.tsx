import { View, Text } from "react-native";
import React from "react";

type ChoiceType = "next" | "offer";

interface ChoiceProps {
  type: ChoiceType;
}

const COLORS = {
  next: "#E31518",
  offer: "#3FC0EF",
};

const Choice: React.FC<ChoiceProps> = ({ type }) => {
  return (
    <View
      className={` border-[7px] rounded-[15px] bg-[rgba(0,0,0,.2)] 
        ${type == "offer" ? "border-primary" : "border-[#E31518] "}`}
    >
      <Text
        className={` uppercase font-semibold text-[48px] ${
          type == "offer" ? "text-primary" : "text-[#E31518]"
        }
       `}
      >
        {type}
      </Text>
    </View>
  );
};

export default Choice;
