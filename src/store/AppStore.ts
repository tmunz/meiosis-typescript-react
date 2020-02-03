// @ts-ignore // TODO connect typing
import flyd, { Stream as FlydStream } from "flyd";
import { Conditions } from "../datatypes/Conditions";
import { Temperature } from "../datatypes/Temperature";
import { ObjectUtils } from "../ObjectUtils";

export type Stream = FlydStream<{ state: AppState }>;

export interface AppState {
  conditions: Conditions;
  temperatureAir: Temperature;
  temperatureWater: Temperature;
}

export class AppStore {

  private static _instance: AppStore;

  private _update: Stream;
  private _state: Stream;
  
  private initialState: AppState = {
    conditions: {
      precipitations: false,
      sky: "Sunny"
    },
    temperatureAir: {
      label: "air",
      value: 22,
      units: "C"
    },
    temperatureWater: {
      label: "water",
      value: 22,
      units: "C"
    },
  };

  get update() {
    return this._update;
  }

  get state() {
    return this._state;
  }

  private constructor() {
    this._update = flyd.stream();
    this._state = flyd.scan(ObjectUtils.merge, this.initialState, this.update);
  }

  static get instance(): AppStore {
    if (!AppStore._instance) {
      AppStore._instance = new AppStore();
    }
    return AppStore._instance;
  }
}

export const appStore = AppStore.instance;


