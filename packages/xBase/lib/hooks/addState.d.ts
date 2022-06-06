interface StoreOptions {
    initialState: Object;
}
export default class createStore {
    state: Object;
    constructor(options: StoreOptions);
    setState(newState: Object, ParentElement?: HTMLElement): void;
    getState(): Object;
    getStateByKey(key: string, state: any): any;
    setStateByKey(key: string, value: any, state: any): any;
}
export {};
