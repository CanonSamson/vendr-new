import React, { Dispatch, SetStateAction, useState } from "react";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import SignUpLayout from "./SignUpLayout";
import { View, Text, Switch } from "react-native";

interface SignUpFormValues {
  address: string;
  state: string;
  zipcode: string;
}

const Address: React.FC<{
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}> = ({ setSteps, steps }) => {
 

  return (
    <>
      <SignUpLayout
        setSteps={setSteps}
        steps={steps}
        title="Please provide your address"
        titleStyle="p-20 pb-5"
        Form={
          <>
            
          </>
        }
      />
    </>
  );
};

export default Address;
