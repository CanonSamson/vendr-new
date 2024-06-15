import * as yup from "yup";

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email address is required"),
  password: yup.string().min(8).required("Password address is required"),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email address is required"),
});

export const firstLastNameSchema = yup.object().shape({
  lastname: yup.string().required("Last name address is required"),
  firstname: yup.string().required("First name address is required"),
});

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup.string().required("Phone Number is required"),
});

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const addressSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  zipcode: yup
    .string()
    .required("Zipcode is required")
    .matches(/^\d{5}$/, "Zipcode must be exactly 5 digits"),
  city: yup.string().required("City is required"),
  showAddressLine: yup.boolean(),
});
