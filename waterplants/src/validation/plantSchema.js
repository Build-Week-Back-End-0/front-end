import * as yup from "yup";

const plantSchema = yup.object().shape({
  nickname: yup.string().trim().required("Nickname is required"),
  species: yup.string().trim().required("Species is required"),
  h2oFrequency: yup
    .string()
    .oneOf(["1", "3", "5", "7"], "Watering Frequency is required"),
});

export default plantSchema;
