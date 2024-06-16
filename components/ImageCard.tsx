import {
  View,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import Add from "../assets/svg/add.svg";
import { Colors } from "../constants/Colors";

interface ImageCardProps {
  uri: string | null;
  id: string;
  pickImage: (id: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ uri, id, pickImage }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        pickImage(id);
      }}
    >
      {uri ? (
        <Image source={{ uri }} style={styles.image} />
      ) : (
        <View>
          <View style={styles.placeholder}></View>
          <View className="  absolute -bottom-[2px] -right-[2px]">
            <Add width={28} height={28} color={Colors.primary} />
          </View>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "visible",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF9FF",
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
    borderWidth: 4,
    borderColor: Colors.primary,
    borderStyle: "dashed",
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF9FF",
    width: 100,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
    borderWidth: 4,
    borderColor: Colors.primary,
    borderStyle: "dashed",
  },
  add: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30,
  },
});

export default ImageCard;
