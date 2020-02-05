import { render } from "react-dom";
import React from "react";

import { App } from "./App";
import { appStore } from "./store/AppStore";
import { MainView } from "./components/MainView";

render(
  <App stream={appStore.state} view={MainView} />,
  document.getElementById("app")
);