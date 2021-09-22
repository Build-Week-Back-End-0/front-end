import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import CreatePlantForm from "./components/CreatePlantForm";
import EditPlant from "./components/EditPlant";
import PlantList from "./components/PlantList";
import Home from "./components/Home";
import Logout from "./components/Logout";
import EditUser from "./components/EditUser";
import User from "./components/User";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/logout"> Logout </Link>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/addPlant">Add</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={Logout} />

        <Route path="/my-info" component={EditUser} />

        {/* <Route exact path="/plants" component={PlantList} /> */}
        <PrivateRoute path="/user" component={User} />

        <Route path="/addPlant" component={CreatePlantForm} />
        <Route path="/plants/update/:id" component={EditPlant} />
        <Route path="/logout" />
      </Switch>
    </div>
  );
};

export default App;
