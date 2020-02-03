import React from "react";
import { ConditionsTweaker } from "./ConditionsTweaker";
import { TemperatureTweaker } from "./TemperatureTweaker";


interface Props {
  conditions: any;
  temperatureAir: any;
  temperatureWater: any;
}

export class MainView extends React.Component<Props> {

  render() {
    return (
      <div>
        <ConditionsTweaker
          conditions={this.props.conditions}
          id="conditions"
        />
        <TemperatureTweaker
          temperature={this.props.temperatureAir}
          id="temperatureAir"
        />
        <TemperatureTweaker
          temperature={this.props.temperatureWater}
          id="temperatureWater"
        />
        <pre>{JSON.stringify({
          conditions: this.props.conditions,
          temperaturAir: this.props.temperatureAir,
          temperatureWater: this.props.temperatureWater,
        }, null, 4)}</pre>
      </div>
    );
  }
}