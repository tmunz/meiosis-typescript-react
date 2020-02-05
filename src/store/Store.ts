import flyd from "flyd";
import { ObjectUtils } from "../ObjectUtils";

export type Stream<T> = flyd.Stream<T>;

export abstract class Store<T extends Object> {

  private _update: Stream<T>;
  private _state: Stream<T>;

  get update(): (mergeValue: any) => void {
    return this._update;
  }

  get state(): Stream<T> {
    return this._state;
  }

  constructor(initialState: T) {
    this._update = flyd.stream();
    this._state = flyd.scan(ObjectUtils.merge, initialState, this._update);
  }
}