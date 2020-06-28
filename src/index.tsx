import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { HashRouter, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <App />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
