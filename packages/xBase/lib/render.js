"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__updater = void 0;
// file: src/qnd-react-dom.js
const snabbdom = __importStar(require("snabbdom-ts"));
const props_1 = require("snabbdom-ts/modules/props");
const eventlisteners_1 = require("snabbdom-ts/modules/eventlisteners");
// propsModule -> this helps in patching text attributes
// eventlistenersModule -> this helps in patching event attributes
const reconcile = snabbdom.init([props_1.PropsModule, eventlisteners_1.EventListenerModule]);
// we need to maintain the latest rootVNode returned by render
let rootVNode = null;
// React.render(<App />, document.getElementById('root'));
// el -> <App />
// rootDomElement -> document.getElementById('root')
const render = (el, rootDomElement) => {
    // logic to put el into the rootDomElement
    // ie. QndReactDom.render(<App />, document.getElementById('root'));
    // happens when we call render for the first time
    if (rootVNode == null) {
        rootVNode = rootDomElement;
    }
    // remember the VNode that reconcile returns
    rootVNode = reconcile(rootVNode, el);
};
// QndReactDom telling React how to update DOM
let __updater = (componentInstance) => {
    // logic on how to update the DOM when you call this.setState
    // get the oldVNode stored in __vNode
    const oldVNode = componentInstance.__vNode;
    // find the updated DOM node by calling the render method
    const newVNode = componentInstance.render();
    // update the __vNode property with updated __vNode
    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};
exports.__updater = __updater;
// to be exported like ReactDom.render
exports.default = render;
