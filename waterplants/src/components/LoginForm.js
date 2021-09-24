import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import loginSchema from "../validation/loginSchema";
import axios from "axios";
import * as yup from "yup";
import { TextField, Typography, Button } from "@material-ui/core";
import { getCurrentPlants } from "../actions";

const initialFormValues = {
  username: "",
  password: ""
};

const initialFormErrors = {
  username: "",
  password: ""
};
const initialDisabled = true;

const LoginForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  // const user_id = localStorage.getItem("user_id");
  // const { getCurrentPlants } = props;

  // useEffect(() => {
  //   getCurrentPlants(user_id);
  // }, []);

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://watermyplants01.herokuapp.com/api/auth/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        // login(res.data.user_id);
        // props.getCurrentPlants(res.data.user_id);

        push("/user");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="hero-image">
      <div className="hero-text">
        <form className="text-form" onSubmit={formSubmit}>
          <Typography variant="h2" color="primary">
            Please enter your login information
          </Typography>

          <div className="errors">
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
          </div>

          <TextField
            name="username"
            variant="outlined"
            label="Username:"
            value={formValues.username}
            onChange={onChange}
            color="primary"
            focused
          />
          <TextField
            name="password"
            type="password"
            variant="outlined"
            label="Password:"
            value={formValues.password}
            onChange={onChange}
            color="primary"
            focused
          />

          <Button variant="contained" color="primary" disabled={disabled} onClick={formSubmit}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { getCurrentPlants })(LoginForm);
