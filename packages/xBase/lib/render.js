"use strict";
// create a render function that takes a component and a target element
// render the component into the target element
Object.defineProperty(exports, "__esModule", { value: true });
function render(element, container) {
    process.stdout.write(element.innerHTML);
    container.append(element.innerHTML);
}
exports.default = render;
