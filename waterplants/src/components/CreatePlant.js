import React, { useState, useEffect } from "react";
import plantSchema from "../validation/plantSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2ofrequency: "",
};
const initialFormErrors = {
  id: "",
  nickname: "",
  species: "",
  h2ofrequency: "",
};
const initialPlants = [];

const CreatePlant = (props) => {
  const [plants, setPlants] = useState(initialPlants);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewPlant = (newPlant) => {
    axios
      .post("https://watermyplants01.herokuapp.com/api/plants", newPlant)
      .then((res) => {
        console.log(res.data);
        setPlants([res.data, ...plants]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
  };
  const validate = (name, value) => {
    yup
      .reach(plantSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = (evt) => {
    evt.preventDefault();
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h2ofrequency: formValues.h20frequency.trim(),
    };
    postNewPlant(newPlant);
  };
  return (
    <form onSubmit={formSubmit}>
      <h2>Add A New Plant</h2>
      <label>
        Name:
        <input
          name="nickname"
          type="text"
          placeholder="Add A Nickname"
          onChange={inputChange}
          value={formValues.nickname}
        />
      </label>
      <label>
        What is the plants species?
        <input
          type="text"
          name="species"
          placeholder="What is the plant species"
          onChange={inputChange}
          value={formValues.species}
        />
      </label>
      <label>
        How often do you water your plant?
        <select>
          <option value="">--Select an Option--</option>
          <option value="1">Everyday</option>
          <option value="3">Every three days</option>
          <option value="5">Every five days</option>
          <option value="7">Once a week</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default CreatePlant;
