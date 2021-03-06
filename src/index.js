import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/Store";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
