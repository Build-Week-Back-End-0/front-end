import React, { useEffect, useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import PrivateRoute from "./components/PrivateRoute";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CreatePlant from "./components/CreatePlant";
import EditPlant from "./components/EditPlant";
import PlantList from "./components/PlantList";

import "./App.css";

const user = "username";

const App = () => {
  useEffect(() => {
    axios
      .get(`https://watermyplants01.herokuapp.com/api/plants`)
      .then((res) => {
        console.log("testing");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClick = () => {
    localStorage.setItem("token", "just for testing private routes");
  };

  return (
    <div className="App">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/logout"> Logout </Link>
        <Link to="/add">Add</Link>
      </div>

      <Switch>
        <Route path="/login">Login Form</Route>
        {/* <Route path="/signup" component={SignUpForm} /> */}
        {/* <Route path="/myInfo" component={UpdateUser} /> */}
        <PrivateRoute path="/user"> user page </PrivateRoute>

        {/* <Route path="/plants" component={PlantList} /> */}

        <PrivateRoute path={"/add"} component={CreatePlant} />

        <Route path={"/plants/update"} component={EditPlant} />
        <Route path="/logout" />

        <Route path="/">
          Home
          <button onClick={handleClick}>set token</button>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
