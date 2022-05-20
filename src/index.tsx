import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { store } from "./todo-with-errors/state/store";
import { Provider } from "react-redux";
import App from "./main/App";
import { AppTODO } from "./todo-with-errors/AppTODO";
import { AppFirstDop } from "./first/AppFirstDop";
import { store } from "./first/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <AppTODO /> С доп занятий */}
    {/* <AppFirstDop /> */}
  </Provider>,
  document.getElementById("root")
);
