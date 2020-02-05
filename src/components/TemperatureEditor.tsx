import React from "react";

import { changeUnits, increment } from "../store/actions/TemperatureActions";
import { appStore } from "../store/AppStore";


export interface Props {
  id: string;
  temperature: any;
}

export class TemperatureEditor extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.temperature.label} Temperature:
        {this.props.temperature.value} &deg; {this.props.temperature.units}
        <div>
          <button onClick={() => increment([appStore], this.props.id, 1)}>
            Increment
          </button>
          <button onClick={() => increment([appStore], this.props.id, -1)}>
            Decrement
          </button>
        </div>
        <div>
          <button onClick={() => changeUnits([appStore], this.props.id)}>
            Change Units
          </button>
        </div>
      </div>
    );
  }
}