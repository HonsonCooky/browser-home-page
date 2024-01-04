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

/***/ "./scripts/file_reader.js":
/*!********************************!*\
  !*** ./scripts/file_reader.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_json: () => (/* binding */ get_json)\n/* harmony export */ });\n/* harmony import */ var _assets_edge_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/edge.json */ \"./assets/edge.json\");\n\n\nfunction get_json(filename) {\n  switch (filename) {\n    case \"edge\":\n      break;\n    default:\n      throw Error(\"Unknown JSON file\");\n  }\n}\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/file_reader.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_responder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll_responder */ \"./scripts/scroll_responder.js\");\n/* harmony import */ var _scroll_responder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_responder__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_responder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme_responder */ \"./scripts/theme_responder.js\");\n/* harmony import */ var _theme_responder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_responder__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _file_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file_reader */ \"./scripts/file_reader.js\");\n\n\n\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/index.js?");

/***/ }),

/***/ "./scripts/scroll_responder.js":
/*!*************************************!*\
  !*** ./scripts/scroll_responder.js ***!
  \*************************************/
/***/ (() => {

eval("window.onscroll = function() {\n  var cur_height = document.body.scrollTop;\n  console.log(cur_height);\n  document.body.style.backgroundPositionY =\n    \"-\" + Math.floor(cur_height / 4) + \"px\";\n};\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/scroll_responder.js?");

/***/ }),

/***/ "./scripts/theme_responder.js":
/*!************************************!*\
  !*** ./scripts/theme_responder.js ***!
  \************************************/
/***/ (() => {

eval("var matcher = window.matchMedia(\"(prefers-color-scheme: dark)\");\nvar lightSchemeIcon = document.querySelector(\"link#light-scheme-icon\");\nvar darkSchemeIcon = document.querySelector(\"link#dark-scheme-icon\");\nmatcher.matches ? to_dark_theme() : to_light_theme();\nmatcher.addEventListener(\"change\", (event) => {\n  event.matches ? to_dark_theme() : to_light_theme();\n});\n\nfunction to_light_theme() {\n  darkSchemeIcon.remove();\n  document.head.append(lightSchemeIcon);\n}\n\nfunction to_dark_theme() {\n  lightSchemeIcon.remove();\n  document.head.append(darkSchemeIcon);\n}\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/theme_responder.js?");

/***/ }),

/***/ "./assets/edge.json":
/*!**************************!*\
  !*** ./assets/edge.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = {\"hello\":\"world\"};\n\n//# sourceURL=webpack://browser-home-page/./assets/edge.json?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;