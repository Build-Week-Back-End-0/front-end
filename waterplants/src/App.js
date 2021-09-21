import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CreatePlantForm from "./components/CreatePlantForm";
import EditPlant from "./components/EditPlant";
import PlantList from "./components/PlantList";
import Home from "./components/Home";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/logout"> Logout </Link>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/add">Add</Link>
      </div>

      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />

        {/* <Route path="/myInfo" component={UpdateUser} /> */}
        <PrivateRoute path="/user"> user page </PrivateRoute>

        <Route path="/plants" component={PlantList} />

        <PrivateRoute path={"/add"} component={CreatePlantForm} />

        <Route path={"/plants/update"} component={EditPlant} />
        <Route path="/logout" />

        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
};

export default App;
