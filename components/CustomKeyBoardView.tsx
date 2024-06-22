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
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps='always'
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default CustomKeyBoardView;
