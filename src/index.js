import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CustomThemeProvider } from "./styles/CustomThemeProvider";
import { App } from "./App";
import "fontsource-roboto";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
