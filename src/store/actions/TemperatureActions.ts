import { Store } from "../Store";

// these actions could update different stores

export const increment = (stores: Store<any>[], id: string, amount: number) => {
  stores.forEach(store => store.update({ [id]: { value: (x: number) => x + amount } }));
};

export const changeUnits = (stores: Store<any>[], id: string) => {
  stores.forEach(store => store.update({
    [id]: (state: { value: number; units: string; }) => {
      var value = state.value;
      var newUnits = state.units === "C" ? "F" : "C";
      var newValue = convert(value, newUnits);
      state.value = newValue;
      state.units = newUnits;
      return state;
    }
  }));
}

const convert = (value: number, to: string): number => {
  return Math.round(
    to === "C" ? ((value - 32) / 9) * 5 : (value * 9) / 5 + 32
  );
};
