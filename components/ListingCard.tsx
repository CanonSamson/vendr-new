import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import EditIcon from "../assets/svg/EditIcon.svg";

interface ListingCardProps {
  image: ImageSourcePropType;
  price: string;
  openChats?: any;
  messageRequests: number | string;
  type: string;
  status: "Unlisted" | "Sold";
  name: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  image,
  price,
  openChats,
  messageRequests,
  type,
  status,
  name,
}) => {
  const statusColor: { [key in ListingCardProps["status"]]: string } = {
    Unlisted: "#46C0EF",
    Sold: "#57F654",
  };

  return (
    <View style={styles.card}>
      {type !== "Previous" && (
        <Pressable style={styles.editIcon} onPress={() => {}}>
          <EditIcon width={28} height={28} />
        </Pressable>
      )}

      <Image source={image} resizeMode="contain" style={styles.image} />
      <View style={styles.details}>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>
            {price}
            <Text style={styles.offerText}> or best offer</Text>
          </Text>
        </View>
        {type !== "Previous" ? (
          <View style={styles.chats}>
            <View style={styles.chatSection}>
              <Text style={styles.chatCount}>{openChats}</Text>
              <Text style={styles.chatLabel}>Open Chats</Text>
            </View>
            <View style={styles.chatSection}>
              <Text style={styles.chatCount}>{messageRequests}</Text>
              <Text style={styles.chatLabel}>Message Requests</Text>
            </View>
          </View>
        ) : (
          <View style={styles.status}>
            <Text style={[styles.statusText, { color: statusColor[status] }]}>
              {status}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  details: {
    padding: 4,
  },
  editIcon: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 4,
    right: 4,
  },
  info: {
    marginTop: 5,
    flex: 1,
    width: "100%",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    color: "#000",
  },
  offerText: {
    fontSize: 14,
    color: "#888",
  },
  chats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  chatSection: {
    alignItems: "center",
  },
  chatCount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  chatLabel: {
    fontSize: 12,
    color: "#888",
  },
  status: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: "auto",
  },
  statusText: {
    fontSize: 16,
    textAlign: "right",
  },
});
