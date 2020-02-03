import React from "react";

import { togglePrecipitations, changeSky } from "../store/actions/ConditionsActions";
import { Conditions } from "../datatypes/Conditions";


export interface Props {
  id: string;
  conditions: Conditions;
}

export class ConditionsTweaker extends React.Component<Props> {

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.props.conditions.precipitations}
            onChange={e => togglePrecipitations(e.target.checked)}
          />
          Precipitations
        </label>
        <div>
          <SkyOption
            checked={this.props.conditions.sky === "SUNNY"}
            value="SUNNY"
            label="Sunny"
          />
          <SkyOption
            checked={this.props.conditions.sky === "CLOUDY"}
            value="CLOUDY"
            label="Cloudy"
          />
          <SkyOption
            checked={this.props.conditions.sky === "MIX"}
            value="MIX"
            label="Mix of sun/clouds"
          />
        </div>
      </div>
    );
  }
}

const SkyOption = ({ checked, value, label }: any) => {
  return (
    <label>
      <input
        type="radio"
        id={value}
        name="sky"
        value={value}
        checked={checked}
        onChange={e => changeSky(e.target.value)}
      />
      {label}
    </label>
  );
};




