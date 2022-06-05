"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class state {
    constructor(initialState) {
        this.value = initialState;
    }
    update(newState) {
        this.value = newState;
        window.location.href;
    }
}
function addState(initialState) {
    let signal = new state(initialState);
    return signal;
}
exports.default = addState;
