import React, { useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageCard from "../components/ImageCard";
import Pen from "../assets/svg/pen.svg";
import { Colors } from "../constants/Colors";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { LinearGradient } from "expo-linear-gradient";

interface ImageData {
  id: string;
  uri?: string | null;
}

const ListAnItem: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: ImageData }>({
    1: { id: "1", uri: null },
    2: { id: "2", uri: null },
    3: { id: "3", uri: null },
    4: { id: "4", uri: null },
    5: { id: "5", uri: null },
    6: { id: "6", uri: null },
  });
  const [values, setValues] = useState({
    localPickup: false,
    allCategories: false,
    maximumDistance: [50],
  });

  const pickImage = async (id: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImages((prev) => ({
        ...prev,
        [id]: { ...prev[id], uri: result.assets[0].uri },
      }));
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Photos</Text>
          </View>
          <View style={styles.grid}>
            {Object.values(images).map((item) => (
              <ImageCard
                key={item.id}
                id={item.id.toString()}
                uri={item.uri ? item.uri.toString() : null}
                pickImage={pickImage}
              />
            ))}
          </View>
        </View>

        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Title</Text>
            <Pen width={24} height={24} />
          </View>

          <TextInput
            value={""}
            style={styles.input}
            placeholder={"Tap here to add a title"}
          />
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Description</Text>
            <Pen width={24} height={24} />
          </View>

          <TextInput
            value={""}
            style={[
              styles.input,
              { height: 200 },
              { textAlignVertical: "top" },
            ]}
            multiline
            placeholder={"Tap here to add a description"}
          />
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Searchability</Text>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchContainerText}>Allow Local Pickup</Text>
            <Switch
              trackColor={{ false: "#C6C6C9", true: "#8BA3E7" }}
              thumbColor={values.localPickup ? "#1648CE" : "#C6C6C9"}
              ios_backgroundColor="#C6C6C9"
              onValueChange={() =>
                setValues((previousState) => ({
                  ...previousState,
                  localPickup: !previousState.localPickup,
                }))
              }
              value={values.localPickup}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.switchContainerText}>
              Allow On All Categories
            </Text>
            <Switch
              trackColor={{ false: "#C6C6C9", true: "#8BA3E7" }}
              thumbColor={values.allCategories ? Colors.primary : "#C6C6C9"}
              ios_backgroundColor="#C6C6C9"
              onValueChange={() =>
                setValues((previousState) => ({
                  ...previousState,
                  allCategories: !previousState.allCategories,
                }))
              }
              value={values.allCategories}
            />
          </View>

          <View style={styles.rangContainer}>
            <View style={styles.rangHeading}>
              <Text style={styles.rangHeadingText}>Maximum Distance</Text>
              <Text>{values.maximumDistance}mi</Text>
            </View>
            <MultiSlider
              values={values.maximumDistance}
              onValuesChange={(newValues) =>
                setValues((previousState) => ({
                  ...previousState,
                  maximumDistance: [newValues[0]],
                }))
              }
              min={0}
              max={100}
              step={1}
            />
          </View>

          <View>
            <Text style={styles.switchContainerText}>Condition</Text>
            <View style={styles.condicationButtons}>
              <Pressable style={styles.condicationButton}>
                <Text>New</Text>
              </Pressable>
              <Pressable style={styles.condicationButton}>
                <Text>Used</Text>
              </Pressable>
              <Pressable style={styles.condicationButton}>
                <Text>Not Specified</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Categories</Text>
          </View>

          <TextInput
            value={""}
            style={styles.input}
            placeholder={"Search category filters"}
          />
        </View>

        <View style={styles.innercontainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>Price</Text>
            <Pen width={24} height={24} />
          </View>

          <TextInput
            value={""}
            style={styles.input}
            placeholder={"Tap here to add an asking price"}
          />
        </View>

        <View style={styles.innercontainer}>
          <View style={styles.confirmListing}>
            <Text style={styles.title}>Confirm Listing</Text>
            <Text
              style={{
                color: Colors.primary,
                textDecorationLine: "underline",
                fontSize: 20,
              }}
            >
              Preview
            </Text>
          </View>

          <Pressable onPress={() => {}}>
            <LinearGradient
              colors={[Colors.primary, "#85DBF9"]}
              style={styles.actionButton}
            >
              <Text style={styles.actionButtonListItemText}>List item</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListAnItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    padding: 10,
  },
  innercontainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
    margin: 10,
    position: "relative",
    padding: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
  },
  switchContainer: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    width: "100%",
  },
  switchContainerText: {
    fontSize: 20,
    color: Colors.primary,
  },
  rangContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  rangHeadingText: {
    fontSize: 20,
  },
  rangHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  condicationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  condicationButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 20,
  },
  actionButton: {
    padding: 15,
    borderRadius: 12,
    width: 240,
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 20,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  actionButtonListItemText: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "#fff",
  },
  confirmListing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
