import { LinearGradient } from "expo-linear-gradient";
import { Link, router, usePathname, withLayoutContext } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import { LogoV1White } from "@/constants/Vector";
import { Text } from "react-native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors } from "@/constants/Colors";
import MainButton from "@/components/button/MainButton";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function RootLayout() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <>
      <LinearGradient
        colors={["#00A3FF", "#85DBF9"]}
        className={` z-40 px-4 items-center justify-center relative  pb-4 pt-14`}
      >
        <View className="  w-full  items-center relative   ">
          <View className=" w-auto h-[45px]  relative ">
            <LogoV1White color={`#fff`} height={"100%"} />
          </View>
        </View>
      </LinearGradient>
      <View style={{ width: wp(70) }} className=" justify-center mx-auto mt-4 ">
        <MainButton
          title="List an item"
          handlePress={() => router.push("/list-an-item")}
          colors={[Colors.primary, "#85DBF9"]}
          pressableClassName="rounded-[9px] "
        />
      </View>


      <View className=" justify-evenly px-1 mt-2 flex-row">
        <Link href={"/selling/active"} className=" flex-1 items-center " asChild>
          <TouchableOpacity onPress={() => router.push(`/active`)}>
            <Text style={styles.tabNumbers}> 6 </Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/selling"} className=" flex-1 items-center " asChild>
          <TouchableOpacity onPress={() => router.push(`/selling`)}>
            <Text style={styles.tabNumbers}> 5 </Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/selling/previous"} className=" flex-1 items-center " asChild>
          <TouchableOpacity onPress={() => router.push(`/previous`)}>
            <Text style={styles.tabNumbers}> 8 </Text>
          </TouchableOpacity>
        </Link>
      </View>

      <MaterialTopTabs screenOptions={{
        tabBarActiveTintColor: '#5C5C5C',
        tabBarInactiveTintColor: '#5C5C5C',
        tabBarPressOpacity: 0.5,
        tabBarBounces: true,
        tabBarLabelStyle: { fontSize: 21, fontWeight: 'bold', textTransform: 'capitalize', bottom: 19 },
        tabBarIndicatorStyle: { backgroundColor: '#2BBEF3', height: 4, bottom: 25, width: '13.5%', left: '10.2%', borderRadius: 4 },
        tabBarStyle: { backgroundColor: '#00000000', elevation: 0 },
        tabBarPressColor: 'transparent',
      }}>

        <MaterialTopTabs.Screen
          name="active"
          options={{ title: "Active" }}

        />
        <MaterialTopTabs.Screen
          name="index"
          options={{ title: "Tasks" }}
        />
        <MaterialTopTabs.Screen
          name="previous"
          options={{ title: "Previous" }}
        />
      </MaterialTopTabs>
    </>
  );
}

const styles = StyleSheet.create({

  tabNumbers: {
    fontSize: 44,
    //paddingHorizontal: 18,
    color: "#2CBFF3",
    fontWeight: "bold",
    //backgroundColor: 'red',
  },
});
