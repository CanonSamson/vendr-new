import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constants/Colors";
import SellingNavTabs from "../../components/SellingNavTabs";
import { listings } from "../../utils/data";
import ListingCard from "../../components/ListingCard";
import { useListing } from "../../hooks/useListings";
import { router } from "expo-router";

type Listing = {
  id: string;
};

const Selling: React.FC = () => {
  const [listingType, setListingType] = useState<string>("Active");
  const [displayedListing, setDisplayedListing] = useState<Listing[]>(listings);

  useListing(setDisplayedListing, listingType);

  return <View style={styles.container}></View>;
};

export default Selling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F3F3F3",
  },
  heading: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    height: 150,
  },
  listItem: {
    textAlign: "center",
    maxWidth: 200,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 12,
    width: 300,
    marginHorizontal: "auto",
    marginTop: 20,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
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
    backgroundColor: "#fff",
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
  filterButtonText: {
    color: Colors.primary,
    fontSize: 14,
  },
});
