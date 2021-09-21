import * as yup from "yup";

const signUpSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  phoneNumber: yup.number(),
});

export default signUpSchema;
