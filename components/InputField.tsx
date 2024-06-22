import React, { ChangeEvent, useState } from "react";
import { Text, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface InputFieldProps {
  label?: string;
  style?: string;
  InputStyle?: string;
  error?: string | false | undefined;
  placeholder?: string;
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  keyboardType?: string;
  containerStyle?: any;
  secureTextEntry?: boolean;
  returnKeyType?: string;
  autoFocus?: boolean;
  onSubmitEditing?: ()=> void
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  style,
  InputStyle,
  containerStyle,
  error,
  placeholder,

  ...inputProps
}) => {
  return (
    <View
      style={containerStyle}
      className={` relative justify-end ${style} w-full text-[14px]`}
    >
      <View>
        {label && (
          <Text className="capitalize text-start flex gap-1 text-base font-medium">
            {label}
          </Text>
        )}
      </View>

      <TextInput
        {...inputProps}
        placeholder={placeholder}
        className={`${
          error
            ? "border border-red-500 bg-red-50/20"
            : "bg-accent  border-primary "
        }  text-base text-black ${
          InputStyle ? InputStyle : "  flex items-center min-h-[50px]"
        } border px-4 duration-500`}
        placeholderTextColor={"gray"}
        style={{ fontSize: hp(2) }}
        autoCorrect={false}
      />

      {error && (
        <Text className="absolute text-red-700 top-[55px] text-[14px]">
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputField;
