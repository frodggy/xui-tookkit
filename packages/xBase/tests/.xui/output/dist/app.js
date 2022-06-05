/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../lib/hooks/addState.js":
/*!********************************!*\
  !*** ../lib/hooks/addState.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar state = /*#__PURE__*/function () {\n  function state(initialState) {\n    _classCallCheck(this, state);\n\n    this.value = initialState;\n  }\n\n  _createClass(state, [{\n    key: \"update\",\n    value: function update(newState) {\n      this.value = newState;\n      window.location.href;\n    }\n  }]);\n\n  return state;\n}();\n\nfunction addState(initialState) {\n  var signal = new state(initialState);\n  return signal;\n}\n\nexports[\"default\"] = addState;\n\n//# sourceURL=webpack:///../lib/hooks/addState.js?");

/***/ }),

/***/ "../lib/index.js":
/*!***********************!*\
  !*** ../lib/index.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar nsx_1 = __importDefault(__webpack_require__(/*! ./nsx */ \"../lib/nsx.js\"));\n\nvar render_1 = __importDefault(__webpack_require__(/*! ./render */ \"../lib/render.js\"));\n\nvar addState_1 = __importDefault(__webpack_require__(/*! ./hooks/addState */ \"../lib/hooks/addState.js\"));\n\nvar xui = {\n  nsx: nsx_1[\"default\"],\n  render: render_1[\"default\"],\n  addState: addState_1[\"default\"]\n};\nexports[\"default\"] = xui;\n\n//# sourceURL=webpack:///../lib/index.js?");

/***/ }),

/***/ "../lib/nsx.js":
/*!*********************!*\
  !*** ../lib/nsx.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar createElement = function createElement(tag, props) {\n  var element = document.createElement(tag);\n  Object.entries(props || {}).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        value = _ref2[1];\n\n    if (name.startsWith('on') && name.toLowerCase() in window) element.addEventListener(name.toLowerCase().substr(2), value);else element.setAttribute(name, value.toString());\n  });\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  children.forEach(function (child) {\n    element.appendChild(child.nodeType === undefined ? document.createTextNode(child.toString()) : child);\n  });\n  return element;\n};\n\nexports[\"default\"] = createElement; // export default function nsx(template: nsx): nsx {\n//     return `${template}`\n// }\n\n//# sourceURL=webpack:///../lib/nsx.js?");

/***/ }),

/***/ "../lib/render.js":
/*!************************!*\
  !*** ../lib/render.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval(" // create a render function that takes a component and a target element\n// render the component into the target element\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nfunction render(element, container) {\n  process.stdout.write(element.innerHTML);\n  container.append(element.innerHTML);\n}\n\nexports[\"default\"] = render;\n\n//# sourceURL=webpack:///../lib/render.js?");

/***/ }),

/***/ "./.xui/output/build/app.js":
/*!**********************************!*\
  !*** ./.xui/output/build/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var xui = (__webpack_require__(/*! ../../../../lib/index */ \"../lib/index.js\")[\"default\"]);\n\nfunction App() {\n  var count = xui.addState(1);\n  return xui.nsx(\"div\", null, xui.nsx(\"h1\", null, \"count: $\", count.value), xui.nsx(\"p\", null, \"This is a simple example of a template literal\"));\n}\n\nmodule.exports = App;\n\n//# sourceURL=webpack:///./.xui/output/build/app.js?");

/***/ }),

/***/ "./.xui/output/build/index.js":
/*!************************************!*\
  !*** ./.xui/output/build/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var xui = (__webpack_require__(/*! ../../../../lib/index */ \"../lib/index.js\")[\"default\"]);\n\nvar app = __webpack_require__(/*! ./app */ \"./.xui/output/build/app.js\"); // xui.render(app(), );\n\n\ndocument.getElementById('app').appendChild(app());\n\n//# sourceURL=webpack:///./.xui/output/build/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./.xui/output/build/index.js");
/******/ 	
/******/ })()
;