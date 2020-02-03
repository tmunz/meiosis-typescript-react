import React from "react";

import { Stream, AppState } from "./store/AppStore";
import { MainView } from "./components/MainView";

interface Props {
  state: Stream;
}

export class App extends React.Component<Props, AppState>  {

  constructor(props: Props) {
    super(props);
    this.state = props.state();
  }

  componentDidMount() {
    this.props.state.map((stream: Stream) => {
      this.setState(stream);
    });
  }

  render() {
    return < MainView {...this.state } />
  }
}
