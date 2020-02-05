import React from "react";
import { ConditionsEditor } from "./ConditionsEditor";
import { TemperatureEditor } from "./TemperatureEditor";
import { HistoryEditor } from "./HistoryEditor";


interface Props {
  conditions: any;
  temperatureAir: any;
  temperatureWater: any;
}

export class MainView extends React.Component<Props> {

  render() {
    return (
      <div>
        <HistoryEditor />
        <ConditionsEditor
          conditions={this.props.conditions}
          id="conditions"
        />
        <TemperatureEditor
          temperature={this.props.temperatureAir}
          id="temperatureAir"
        />
        <TemperatureEditor
          temperature={this.props.temperatureWater}
          id="temperatureWater"
        />
        <div>
          <h2>AppState</h2>
          <pre>{JSON.stringify(this.props, null, 4)}
          </pre>
        </div>
      </div>
    );
  }
}