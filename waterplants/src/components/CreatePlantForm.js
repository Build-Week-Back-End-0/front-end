import React, { useState, useEffect } from "react";
import axios from "axios";

const initialFormValues = {
  id: "",
  nickname: "",
  species: "",
  h2ofrequency: "",
};
const initialPlants = [];

const CreatePlantForm = (props) => {
  const [plants, setPlants] = useState(initialPlants);
  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewPlant = (newPlant) => {
    axios.post("https://watermyplants01.herokuapp.com/api/plants");
  };
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <form>
      <h2>Add A New Plant</h2>
      <label>
        Name:
        <input
          name="nickname"
          type="text"
          placeholder="Add A Nickname"
          //   value={values.nickname}
        />
      </label>
      <label>
        What is the plants species?
        <input
          type="text"
          name="species"
          placeholder="What is the plant species"
          //   value={values.species}
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

export default CreatePlantForm;
