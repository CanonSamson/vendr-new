import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";


const TabsLayout = () => {
  return (
    <>
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
            lazy: true,

          }}
        />

      </Tabs>
    </>
  );
};

export default TabsLayout;
