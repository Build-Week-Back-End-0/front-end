import React, { useState, useEffect } from "react";
import signUpSchema from "../validation/signUpSchema";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router";

const initialFormValues = {
  username: "",
  password: "",
  phone_number: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  phone_number: "",
};
const initialUsers = [];

const initialDisabled = true;

const SignUpForm = () => {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();

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
      .reach(signUpSchema, name)
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
    const newUser = {
      username: formValues.username.trim(),
      phone_number: formValues.phone_number.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
    push("/plants");
  };
  useEffect(() => {
    signUpSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form onSubmit={formSubmit}>
      <h2>Please enter your information</h2>
      <div className="error">
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.phone_number}</div>
      </div>
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          placeholder="Please enter a username"
          onChange={onChange}
          value={formValues.username}
        />
      </label>
      <label>
        Phone Number:{" "}
        <input
          type="tel"
          name="phone_number"
          placeholder="Please enter your phone number"
          onChange={onChange}
          value={formValues.phone_number}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          name="password"
          placeholder="Please enter a password"
          onChange={onChange}
          value={formValues.password}
        />
      </label>
      <button disabled={disabled}>Sign Up!</button>
    </form>
  );
};

export default SignUpForm;
