import React, { useEffect, useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

// import Login from "./components/Login";

import "./App.css";

const App = () => {
  useEffect(() => {
    axios
      .get(`https://watermyplants01.herokuapp.com/api/plants`)
      .then((res) => {
        console.log(res);
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
        <Route path="/">Home</Route>
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        {/* <Route path="/myInfo" component={UpdateUser} /> */}

        {/* <Route path="/plants" component={PlantList} /> */}

        {/* <Route path="/addPlant" component={CreatePlant} /> */}

        {/* <Route path="/plants/:id" component={UpdatePlant} /> */}
        <Route path="/logout" />
      </Switch>
    </div>
  );
};

export default App;
