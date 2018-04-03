import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import App from "./App";
//Provider component provides our components the ability to connect to the store.
//We don't want every component re-rendering in response to every change in the state.
//So the connect() function allows us to specify which changes to the store's state should prompt a re-render of the application.

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
