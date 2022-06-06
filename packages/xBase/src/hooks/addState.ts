import { th } from "snabbdom-ts";
import render from "../render";

interface StoreOptions {
  initialState: Object;
}

export default class createStore {
  public state: Object;
  
  constructor (options: StoreOptions) {
    this.state = options.initialState;
  }

  // methods
  public setState (newState: Object, ParentElement?: HTMLElement): void {
    this.state = { ...this.state, ...newState };
    render(ParentElement, document.getElementById('app'))
  }

  public getState (): Object {
    return this.state;
  }

  public getStateByKey (key: string, state: any): any {
    return state[key];
  }

  public setStateByKey (key: string, value: any, state: any): any {
    state[key] = value;
    return state;
  }

}
