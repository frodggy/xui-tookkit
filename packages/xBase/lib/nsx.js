"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createElement = (tag, props, ...children) => {
    const element = document.createElement(tag);
    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith('on') && name.toLowerCase() in window)
            element.addEventListener(name.toLowerCase().substr(2), value);
        else
            element.setAttribute(name, value.toString());
    });
    children.forEach((child) => {
        element.appendChild(child.nodeType === undefined
            ? document.createTextNode(child.toString())
            : child);
    });
    return element;
};
exports.default = createElement;
// export default function nsx(template: nsx): nsx {
//     return `${template}`
// }
