import { appStore } from "../AppStore";

export const togglePrecipitations = (value: boolean) => {
  appStore.update({ conditions: { precipitations: value } });
};

export const changeSky = (value: string) => {
  appStore.update({ conditions: { sky: value } });
};