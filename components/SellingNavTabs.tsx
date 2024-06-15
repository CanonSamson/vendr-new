import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

interface SellingNavTabsProps {
  labelText: string;
  handleOnPress: () => void;
  numberText: string;
  listingType: string;
}

const SellingNavTabs: React.FC<SellingNavTabsProps> = ({
  labelText,
  handleOnPress,
  numberText,
  listingType,
}) => {
  return (
    <Pressable onPress={handleOnPress} style={styles.tabsPressable}>
      <View style={styles.innerTabs}>
        <Text style={[styles.numberText, { color: Colors.primary }]}>
          {numberText}
        </Text>
        <Text style={styles.labelText}>{labelText}</Text>
      </View>
      <View
        style={[
          styles.active,
          listingType === labelText ? null : styles.inActive,
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItemText: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#fff",
  },
  tabsPressable: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  numberText: {
    fontSize: 37,
    textAlign: "center",
    fontWeight: "800",
  },
  labelText: {
    textAlign: "center",
    fontSize: 24,
  },
  active: {
    position: "absolute",
    bottom: -10,
    width: "60%",
    margin: "auto",
    backgroundColor: Colors.primary,
    height: 5,
    borderRadius: 10,
  },
  inActive: {
    opacity: 0,
  },
  innerTabs: {
    alignItems: "center",
  },
});

export default SellingNavTabs;
