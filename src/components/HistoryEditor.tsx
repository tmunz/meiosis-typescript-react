import React from "react";
import { appStore } from "../store/AppStore";

export class HistoryEditor extends React.Component<{}> {

  render() {
    return (
      <React.Fragment>
        <button onClick={() => appStore.undo()}>Undo</button>
        <button onClick={() => appStore.redo()}>Redo</button>
        <button onClick={() => appStore.reset()}>Reset</button>
      </React.Fragment>
    );
  }
}