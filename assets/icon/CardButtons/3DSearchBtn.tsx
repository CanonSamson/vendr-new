import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBtn2 from "@/assets/icon/CardButtons/SearchBtn2";

// Add an onPress prop to the component's function parameters
const SearchButton = () => {
  return (
    // Pass the onPress prop to TouchableOpacity
    <View style={styles.outerCircle}>
      <View style={styles.shadow}>
        <View style={styles.innerCircle}>
          <SearchBtn2 width={77} height={77} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06ff00",
    shadowColor: "#000",
    shadowOffset: {
      width: -0.5,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 8,
  },
  shadow: {
    width: 49,
    height: 49,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: -0.5,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.3,
    elevation: 8,
  },
  innerCircle: {
    width: 39,
    height: 39,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  icon: {
    position: "absolute",
    top: -19,
    left: -19,
    width: 84,
    height: 84,
    shadowColor: "#000",
    shadowOffset: {
      width: 1.5,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
});

export default SearchButton;
