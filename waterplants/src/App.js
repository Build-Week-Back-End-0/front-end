import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </div>

      <Switch>
        <Route path="/">Home</Route>
        <Route path="/login" component={Login} />
        <Route path="/" />
        <Route path="/login" />
      </Switch>
    </div>
  );
};

export default App;
