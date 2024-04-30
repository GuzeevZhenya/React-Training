import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configurateStore } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configurateStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
