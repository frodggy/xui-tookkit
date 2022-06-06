import createStore from "./hooks/addState";
import { Component } from "./component";
declare const xui: {
    nsx: (type: any, props: any, ...children: any[]) => any;
    render: (el: any, rootDomElement: any) => void;
    createStore: typeof createStore;
    Component: typeof Component;
};
export default xui;
