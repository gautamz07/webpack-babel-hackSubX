"use strict";
(self["webpackChunkwebpack_babel_hack"] = self["webpackChunkwebpack_babel_hack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");



function component() {
  const element = document.createElement('div');
 const btn = document.createElement('button');

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');

 btn.innerHTML = 'Click me and check the console!';
 btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

 element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log('I get called from print.js!');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0I7QUFDVzs7QUFFakM7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrREFBTTs7QUFFNUI7QUFDQSxlQUFlLGlEQUFPOztBQUV0Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWhhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1oYWNrLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuXG4gZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9