import React, { useState, Dispatch, SetStateAction } from "react";
import InputField from "@/components/InputField";
import { useFormik } from "formik";
import { signinSchema } from "@/validation/auth";
import SignUpLayout from "./SignUpLayout";

interface SignUpFormValues {
  lastname: string;
  firstname: string;
}

const FirstLastName: React.FC<{
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}> = ({ setSteps, steps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signInError, setSignInError] = useState(null);

  const onSubmit = async (values: SignUpFormValues) => {};

  const { errors, touched, handleChange, values, handleSubmit } =
    useFormik<SignUpFormValues>({
      initialValues: {
        firstname: "",
        lastname: "",
      },
      validationSchema: signinSchema,
      onSubmit,
    });

  return (
    <>
      <SignUpLayout
        steps={steps}
        setSteps={setSteps}
        title=" Please provide your name"
        Form={
          <>
            <InputField
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              keyboardType=""
              placeholder="First Name"
              error={touched.firstname && errors?.firstname}
              style={""}
            />
            <InputField
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              placeholder="Last Name"
              error={touched.lastname && errors?.lastname}
              style={`mt-5`}
            />
          </>
        }
      />
    </>
  );
};

export default FirstLastName;
