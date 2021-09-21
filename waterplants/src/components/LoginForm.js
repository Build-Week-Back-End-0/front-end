import React, { useState, useEffect } from "react";
import loginSchema from "../validation/loginSchema";
import axios from "axios";
import * as yup from "yup";
const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};
const initialUsers = [];

const LoginForm = () => {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewUser = (newUser) => {
    axios
      .post("https://watermyplants01.herokuapp.com/api/users", newUser)
      .then((res) => {
        console.log(res.data);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
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
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };
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
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
