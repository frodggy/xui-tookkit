"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nsx_1 = __importDefault(require("./nsx"));
const render_1 = __importDefault(require("./render"));
const addState_1 = __importDefault(require("./hooks/addState"));
const xui = {
    nsx: nsx_1.default,
    render: render_1.default,
    addState: addState_1.default
};
exports.default = xui;
