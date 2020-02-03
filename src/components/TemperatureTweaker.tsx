import React from "react";

import { changeUnits, increment } from "../store/actions/TemperatureActions";


export interface Props {
  id: string;
  temperature: any;
}

export class TemperatureTweaker extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.temperature.label} Temperature:
        {this.props.temperature.value} &deg; {this.props.temperature.units}
        <div>
          <button onClick={() => increment(this.props.id, 1)}>
            Increment
          </button>
          <button onClick={() => increment(this.props.id, -1)}>
            Decrement
          </button>
        </div>
        <div>
          <button onClick={() => changeUnits(this.props.id)}>
            Change Units
          </button>
        </div>
      </div>
    );
  }
}