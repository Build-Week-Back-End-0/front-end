import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
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
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b5c6bc",
    },
    secondary: {
      main: "#385144",
    },
    text: {
      primary: "#b5c6bc",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="nav-bar">
          {/* <Link to="/"> Home </Link> */}
          {/* <Link to="/login"> Login </Link> */}
          {/* <Link to="/logout"> Logout </Link> */}
          {/* <Link to="/signup"> Sign Up </Link>
        <Link to="/addPlant">Add</Link> */}
          <Button color="primary" component={Link} to="/">
            Home
          </Button>
          <Button color="primary" component={Link} to="/login">
            Login
          </Button>
          <Button color="primary" component={Link} to="/logout">
            Logout
          </Button>
          <Button color="primary" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button color="primary" component={Link} to="/addPlant">
            Add Plant
          </Button>
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
    </ThemeProvider>
  );
};

export default App;
