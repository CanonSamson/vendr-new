import { View, Text, Platform } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/utils/data";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Active = () => {

    return (
        <View style={[{ marginBottom: Platform.OS === "ios" ? 60 : 60, }, styles.container]}
            className=" overflow-hidden mx-1 bg-white rounded-xl">
            <View className=" flex-row justify-between items-center px-4 py-2">
                <Text style={styles.mainHeadingText}>Active Listings</Text>
                <TouchableOpacity style={styles.filterButton} onPress={() => { }}>
                    <Text style={styles.filterButtonTest}>Filter</Text>
                </TouchableOpacity>
            </View>
            <View className=" ">
                <FlatList
                    data={listings}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    className=" px-3"
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
        </View>
    );
};

export default Active;

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },

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
