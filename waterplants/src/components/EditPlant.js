import React, { useState, useEffect } from "react";
import plantSchema from "../validation/plantSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormErrors = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const initialPlants = [];
const initialDisabled = true;

const EditPlant = (prop) => {
  const initialFormValues = {
    nickname: prop.location.state.plant.nickname,
    species: prop.location.state.plant.species,
    h2oFrequency: prop.location.state.plant.h2oFrequency,
  };

  const [plants, setEditPlant] = useState(prop.plant);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  console.log(prop.location.state.plant);
  const postNewPlant = (editedPlant) => {
    axios
      .put(
        `https://watermyplants01.herokuapp.com/api/plants/${editedPlant.plant_id}`,
        editedPlant
      )
      .then((res) => {
        setEditPlant([res.data, ...plants]);
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

  const onChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h2oFrequency: formValues.h2oFrequency.trim(),
    };
    postNewPlant(newPlant);
  };
  useEffect(() => {
    plantSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
  return (
    <form onSubmit={formSubmit}>
      <h2>Add A New Plant</h2>
      <div className="errors">
        <div>{formErrors.nickname}</div>
        <div>{formErrors.species}</div>
        <div>{formErrors.h2oFrequency}</div>
      </div>
      <label>
        Name:
        <input
          name="nickname"
          type="text"
          placeholder="Add A Nickname"
          onChange={onChange}
          value={formValues.nickname}
        />
      </label>
      <label>
        What is the plants species?
        <input
          type="text"
          name="species"
          placeholder="What is the plant species"
          onChange={onChange}
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
      <button disabled={disabled}>Submit</button>
    </form>
  );
};

export default EditPlant;
