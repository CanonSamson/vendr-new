import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import HomeIcon from "@/assets/icon/Tabs/homeTab";
import BuyingIcon from "@/assets/icon/Tabs/buyingTab";
import SellingIcon from "@/assets/icon/Tabs/sellingTab";
import MessagesIcon from "@/assets/icon/Tabs/messagesTab";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useModal } from "@/context/ModalContext";

// Define the keys of the icons object
type IconNames = "Home" | "Buying" | "Selling" | "Messages";

const icons: Record<
  IconNames,
  React.FC<{ width: number; height: number; color: string }>
> = {
  Home: HomeIcon,
  Buying: BuyingIcon,
  Selling: SellingIcon,
  Messages: MessagesIcon,
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  insets,
}) => {
  const { productModalVisible } = useModal();
  return (
    <View
      style={{ height: Platform.OS === "ios" ? 95 : 75 }}
      className={`flex-row  items-center justify-evenly bg-white border-t-[2.5px] border-primary ${
        Platform.OS === "ios" ? " pb-[20px] " : " "
      } ${productModalVisible ? "hidden" : ""}`}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? typeof options.tabBarLabel === "function"
              ? options.tabBarLabel({
                  focused: state.index === index,
                  color: "#222",
                  position: "below-icon",
                  children: route.name,
                })
              : options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const IconComponent = icons[label as IconNames];

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="items-center justify-center"
          >
            {IconComponent && (
              <IconComponent
                width={hp(4.3)}
                height={hp(4.3)}
                color={isFocused ? "#42BEED" : "#B3B3B3"}
              />
            )}
            {typeof label === "string" ? (
              <Text
                className={`font-bold mt-1 ${
                  isFocused ? "text-primary" : " text-[#B3B3B3]"
                }`}
              >
                {label}
              </Text>
            ) : (
              label
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
