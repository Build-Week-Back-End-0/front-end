import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import plantSchema from "../validation/plantSchema";

import * as yup from "yup";
import {
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText
  // FormLabel
} from "@material-ui/core";

import { addPlant } from "../actions";
import { useHistory } from "react-router";

const initialFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: ""
};
const initialFormErrors = {
  nickname: "",
  species: "",
  h2oFrequency: ""
};
// const initialPlants = [];
const initialDisabled = true;

const CreatePlantForm = (props) => {
  const { push } = useHistory();
  // const [plants, setPlants] = useState(initialPlants);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const { addPlant } = props;

  const user = localStorage.getItem("user_id");

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
      h2oFrequency: formValues.h2oFrequency
    };
    addPlant(newPlant, user);
    push("/user");
  };

  useEffect(() => {
    plantSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="hero-image">
      <div className="hero-text">
        <form className="text-form" onSubmit={formSubmit}>
          <Typography variant="h2" color="primary">
            Add a New Plant
          </Typography>
          <div className="errors">
            <div>{formErrors.nickname}</div>
            <div>{formErrors.species}</div>
            <div>{formErrors.h2oFrequency}</div>
          </div>
          <TextField
            name="nickname"
            variant="outlined"
            label="Plant Name:"
            value={formValues.nickname}
            onChange={onChange}
            color="primary"
            focused
          />
          <TextField
            name="species"
            variant="outlined"
            label="What Species is the Plant?"
            value={formValues.species}
            onChange={onChange}
            color="primary"
            focused
          />
          <Typography variant="h5" color="primary">
            Watering Frequency
          </Typography>
          <FormControl>
            <FormHelperText>Freq.</FormHelperText>

            <Select focused variant="filled" name="h2oFrequency" onChange={onChange} label="--Select an Option--">
              {/* <MenuItem value={""}>--Select an Option--</MenuItem> */}
              <MenuItem value={1}>Everyday</MenuItem>
              <MenuItem value={3}>Every three days</MenuItem>
              <MenuItem value={5}>Every five days</MenuItem>
              <MenuItem value={7}>Once a week</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={formSubmit} disabled={disabled}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.user
  };
};

export default connect(mapStateToProps, { addPlant })(CreatePlantForm);
