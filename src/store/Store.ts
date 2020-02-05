import flyd from "flyd";
import { ObjectUtils } from "../utils/ObjectUtils";
import { HistoryManager } from "../utils/HistoryManager";

export type Stream<T> = flyd.Stream<T>;

export abstract class Store<T extends Object> {

  private _initialState: T;
  private _update: Stream<T>;
  private _state: Stream<T>;

  private _history: HistoryManager<T>;

  constructor(initialState: T, withHistory = true) {
    this._initialState = initialState;
    this._update = flyd.stream();
    this._state = flyd.scan(ObjectUtils.merge, initialState, this._update);
    if (withHistory) {
      this._history = this.createHistory();
    }
  }

  get state(): Stream<T> {
    return this._state;
  }

  update(value: any) {
    this._update(value);
    if (this.withHistory) {
      this._history.push(this._state());
    }
  }
  
  reset() {
    this._update(this._initialState);
    if (this.withHistory) {
      this._history = this.createHistory();
    }
  }

  undo() {
    if (this.withHistory) {
      this._update(this._history.undo());
    }
  }

  redo() {
    if (this.withHistory) {
      this._update(this._history.redo());
    }
  }

  private get withHistory() {
    return typeof this._history !== "undefined";
  }

  private createHistory() {
    return new HistoryManager<T>(this._initialState);
  }
}