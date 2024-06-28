import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, Dimensions } from "react-native";
import TabBar from "@/components/TabBar";
import Filter from "@/components/Model/Filter";
import { useModal } from "@/context/ModalContext";

// Device dimensions and base design dimensions
const { width, height } = Dimensions.get("window");

// Scale factors based on current device vs. base design
const widthScale = width / 390; // Using iPhone 13 Pro's width as base
const heightScale = height / 844; // Using iPhone 13 Pro's height as base

// Dynamic margin bottom to ensure consistent spacing
const dynamicMarginBottom = heightScale === 1 ? 0 : heightScale * 13;
const dynamicTabHeight = heightScale < 0.95 ? heightScale * 0.8 : 1.1;

const TabsLayout = () => {
  const { filterProduct, setFilterProduct } = useModal();
  return (
    <>
      <Filter
        modalVisible={filterProduct}
        hideModal={() => setFilterProduct(false)}
        setFilterProduct={setFilterProduct}
      />

      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="(buying)"
          options={{
            headerShown: false,
            title: "Buying",
          }}
        />
        <Tabs.Screen
          name="selling"
          options={{
            headerShown: false,
            title: "Selling",
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            headerShown: false,
            title: "Messages",
          }}
        />
      </Tabs>
    </>
  );
};

const titleStyle = {
  fontSize: 12 * widthScale,
  fontWeight: "700",
  marginBottom: dynamicMarginBottom,
};

const tabBarIconStyle = {
  width: 35 * widthScale, // Direct scaling for clarity
  height: 35 * widthScale, // Keep aspect ratio consistent
  marginTop: dynamicMarginBottom * 0.5, // Ensure consistent spacing
};

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabsLayout;
