import React, { ReactNode } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";

const ios = Platform.OS === "ios";

interface CustomKeyBoardViewProps {
  children: ReactNode;
}

const CustomKeyBoardView: React.FC<CustomKeyBoardViewProps> = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default CustomKeyBoardView;
