import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import Store from "../src/store";
import "typeface-poppins";
import RouteList from "./router/routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={Store}>
      <RouteList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
