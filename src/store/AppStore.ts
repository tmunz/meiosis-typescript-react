import { Conditions } from "../datatypes/Conditions";
import { Temperature } from "../datatypes/Temperature";
import { Store, Stream as AbstractStream } from "./Store";

export interface AppState {
  conditions: Conditions;
  temperatureAir: Temperature;
  temperatureWater: Temperature;
}

export type Stream = AbstractStream<AppState>;


export class AppStore extends Store<AppState> {

  private static initialState: AppState = {
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
  
  private constructor() {
    super(AppStore.initialState);
  }

  private static _instance: AppStore;

  static get instance(): AppStore {
    if (!AppStore._instance) {
      AppStore._instance = new AppStore();
    }
    return AppStore._instance;
  }
}

export const appStore = AppStore.instance;


