"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = __importDefault(require("../render"));
class createStore {
    constructor(options) {
        this.state = options.initialState;
    }
    // methods
    setState(newState, ParentElement) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        (0, render_1.default)(ParentElement, document.getElementById('app'));
    }
    getState() {
        return this.state;
    }
    getStateByKey(key, state) {
        return state[key];
    }
    setStateByKey(key, value, state) {
        state[key] = value;
        return state;
    }
}
exports.default = createStore;
