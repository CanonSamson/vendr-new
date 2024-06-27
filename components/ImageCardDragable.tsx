import { View, StyleSheet, Image, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import Add from "../assets/svg/add.svg";
import { Colors } from "../constants/Colors";

interface ImageCardProps {
  onLongPress: () => void;
  uri: string | null;
  id: string;
  pickImage: any
}

const ImageCard = ({ uri, id, pickImage }: ImageCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Pressable onPress={pickImage}>
      <View className=" items-center  justify-center">
        <View
          style={styles.container}
          className=" duration-700 active:opacity-75"
          pointerEvents="none"
        >
          {uri ? (
            <Image
              source={{ uri }}
              style={styles.image}
              onLoadEnd={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
          ) : (
            <View>
              <View className="duration-700" style={styles.placeholder}>
                <View className="  absolute  bottom-[2px] right-[2px]">
                  <Add width={28} height={28} color={Colors.primary} />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
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
    borderWidth: 1.4,
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
