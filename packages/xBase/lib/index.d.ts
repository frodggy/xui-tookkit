import render from "./render";
import addState from "./hooks/addState";
declare const xui: {
    nsx: (tag: string, props: object, ...children: Node[]) => HTMLElement;
    render: typeof render;
    addState: typeof addState;
};
export default xui;
