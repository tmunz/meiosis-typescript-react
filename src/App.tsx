import React, { useState, useEffect } from "react";

import { Stream } from "./store/AppStore";
import { MainView } from "./components/MainView";

interface Props {
  state: Stream;
}

export const App = (props: Props) => {
  const [state, setState] = useState(props.state());
  useEffect(() => props.state.map((stream: Stream) => setState(stream)));
  return < MainView {...state} />;
}
