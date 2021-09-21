import React, { useEffect, useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CreatePlantForm from "./components/CreatePlantForm";
import EditPlant from "./components/EditPlant";
import PlantList from "./components/PlantList";

import "./App.css";

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

  return (
    <div className="App">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/logout"> Logout </Link>
      </div>

      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        {/* <Route path="/myInfo" component={UpdateUser} /> */}

        <Route path="/plants" component={PlantList} />

        <Route path="/addPlant" component={CreatePlantForm} />

        <Route path="/plants/update/:id" component={EditPlant} />
        <Route path="/logout" />
      </Switch>
    </div>
  );
};

export default App;
