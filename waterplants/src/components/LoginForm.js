import React, { useState, useEffect } from "react";
import loginSchema from "../validation/loginSchema";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router";

const initialFormValues = {
  username: "",
  password: ""
};

const initialFormErrors = {
  username: "",
  password: ""
};
const initialDisabled = true;

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    // validate(name, value);
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
        push("/plants");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form onSubmit={formSubmit}>
      <h2>Please enter your login information</h2>
      <div className="errors">
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
      </div>
      <label>
        Username:{"  "}
        <input
          type="text"
          name="username"
          placeholder="Please enter a username"
          onChange={onChange}
          value={formValues.username}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          placeholder="Please enter a password"
          onChange={onChange}
          value={formValues.password}
        />
      </label>
      <button disabled={disabled}>Login</button>
    </form>
  );
};

export default LoginForm;
