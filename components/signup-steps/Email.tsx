import React, { useState, Dispatch, SetStateAction } from "react";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import SignUpLayout from "./SignUpLayout";
import { OtpInput } from "react-native-otp-entry";
import { Text } from "react-native";

interface SignUpFormValues {
  email: string;
}

const Email: React.FC<{
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}> = ({ steps, setSteps }) => {
  const [otp, setOtp] = useState<string>("");
  const [IsVerifyOtp, setIsVerifyOtp] = useState(false);
  const onSubmit = async (values: SignUpFormValues) => {};

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues: {
        email: "",
      },
      validationSchema: signinSchema,
      onSubmit,
    });

  return (
    <>
      <SignUpLayout
        steps={steps}
        setSteps={setSteps}
        title="What’s your email address?"
        Form={
          <>
            {!IsVerifyOtp ? (
              <InputField
                value={values.email}
                onChangeText={handleChange("email")}
                keyboardType=""
                placeholder="Email Address"
                error={touched.email && errors?.email}
                style={""}
              />
            ) : (
              <>
                <OtpInput
                  numberOfDigits={5}
                  focusColor="#42BEED"
                  onTextChange={(text) => setOtp(text)}
                  theme={{
                    pinCodeContainerStyle: {
                      borderBottomWidth: 2,
                      borderBottomColor: "#42BEED",
                      borderColor: "white",
                      borderRadius: 0,
                    },
                  }}
                />

                <Text className=" mt-4 text-md items-center text-start text-[#696969]">
                  Didn’t receive a code?
                </Text>
              </>
            )}
          </>
        }
      />
    </>
  );
};

export default Email;
