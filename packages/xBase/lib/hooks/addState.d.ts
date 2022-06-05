declare class state {
    value: any;
    constructor(initialState: any);
    update(newState: any): void;
}
export default function addState(initialState: any): state;
export {};
