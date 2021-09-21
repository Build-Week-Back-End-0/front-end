import * as yup from "yup";

const signUpSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  phone_number: yup
    .number()
    .typeError("You must enter a valid phone number")
    .required("You must enter a valid phone number")
    .min(10, "Phone number must have 10 digits")
});

export default signUpSchema;
