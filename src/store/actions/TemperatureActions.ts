import { appStore } from "../AppStore";

export const increment = (id: string, amount: number) => {
  appStore.update({ [id]: { value: (x: number) => x + amount } });
};

export const changeUnits = (id: string) => {
  appStore.update({
    [id]: (state: { value: number; units: string; }) => {
      var value = state.value;
      var newUnits = state.units === "C" ? "F" : "C";
      var newValue = convert(value, newUnits);
      state.value = newValue;
      state.units = newUnits;
      return state;
    }
  })
}

const convert = (value: number, to: string): number => {
  return Math.round(
    to === "C" ? ((value - 32) / 9) * 5 : (value * 9) / 5 + 32
  );
};
