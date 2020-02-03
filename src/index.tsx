import { render } from "react-dom";
import React from "react";

import { App } from "./App";
import { appStore } from "./store/AppStore";

render(
  <App state={appStore.state} />,
  document.getElementById("app")
);