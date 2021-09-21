import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// import logger from "redux-logger";

import { BrowserRouter as Router } from "react-router-dom";

import reducer from "./reducers";
import App from "./App";

import "./index.css";

const store = createStore(reducer);
// const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
