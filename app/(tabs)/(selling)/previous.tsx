import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { FlatList } from "react-native";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/utils/data";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const Previous = () => {
  return (
    <View style={styles.main} className=" mt-4">
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadingText}>Previous Listings</Text>

        <Pressable style={styles.filterButton} onPress={() => {}}>
          <Text style={styles.filterButtonTest}>Filter</Text>
        </Pressable>
      </View>

      <FlatList
        data={listings}
        contentContainerStyle={{ paddingBottom: 120 }}
        renderItem={({ item }) => {
          const mappedItem = {
            ...item,
            status:
              item.status === "Unlisted" || item.status === "Sold"
                ? item.status
                : "Unlisted",
          };
          return <ListingCard {...mappedItem} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Previous;

const styles = StyleSheet.create({
  listItem: {
    textAlign: "center",
    maxWidth: 200,
  },

  listItemText: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#fff",
  },
  tabs: {
    flexDirection: "row",
    marginTop: 20,
    paddingVertical: 20,
  },
  main: {
    padding: 20,
    width: "100%",
    flex: 1,
    backgroundColor: "#ffff",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  mainHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  mainHeadingText: {
    fontSize: 26,
    fontWeight: "700",
  },
  filterButton: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  filterButtonTest: {
    color: Colors.primary,
    fontSize: 14,
  },
});
