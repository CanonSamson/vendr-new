import React, { useState, SetStateAction, Dispatch } from "react";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import SignUpLayout from "./SignUpLayout";
import { Pressable, Text, View } from "react-native";

interface SignUpFormValues {
  email: string;
}

const UpLoadPhoto: React.FC<{
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}> = ({ setSteps, steps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signInError, setSignInError] = useState(null);

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
        title="One Last thing, provide a photo"
        Form={
          <>
            <Pressable>
              <View
                className={` h-[150px] w-full  items-center justify-center border border-primary`}
              >
                <View className="border border-primary max-w-[200px] px-10 py-4  bg-white shadow shadow-gray-300 inline-block">
                  <Text className=" text-xl text-center">Add Photo</Text>
                </View>
              </View>
            </Pressable>
            <Text className=" mt-4 text-md items-center text-center text-[#696969]">
              Add a photo of yourself or your store that will be on your profile
              for safer transactions.
            </Text>
          </>
        }
      />
    </>
  );
};

export default UpLoadPhoto;
