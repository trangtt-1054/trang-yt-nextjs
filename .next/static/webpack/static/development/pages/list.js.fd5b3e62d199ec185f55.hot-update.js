webpackHotUpdate("static/development/pages/list.js",{

/***/ "./src/pages/list.tsx":
/*!****************************!*\
  !*** ./src/pages/list.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/tranthutrang/Desktop/trang-yt-nextjs/src/pages/list.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction List(_ref) {\n  var _this = this;\n\n  var resList = _ref.resList;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, resList && resList.map(function (e, i) {\n    return __jsx(\"div\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      as: \"/\".concat(e.event_date_unix, \"/\").concat(e.id),\n      href: \"/[date]/[id]\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 15\n      }\n    }, e.title)));\n  }));\n}\n_c = List;\nList.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var response, resList;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return fetch('https://api.spacexdata.com/v3/history');\n\n        case 2:\n          response = _context.sent;\n          _context.next = 5;\n          return response.json();\n\n        case 5:\n          resList = _context.sent;\n          return _context.abrupt(\"return\", {\n            resList: resList\n          });\n\n        case 7:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbGlzdC50c3g/ZDJhYiJdLCJuYW1lcyI6WyJMaXN0IiwicmVzTGlzdCIsIm1hcCIsImUiLCJpIiwiZXZlbnRfZGF0ZV91bml4IiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBTWUsU0FBU0EsSUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFDbkQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLE9BQU8sSUFDTkEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDVjtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUUsYUFBTUQsQ0FBQyxDQUFDRSxlQUFSLGNBQTJCRixDQUFDLENBQUNHLEVBQTdCLENBQVI7QUFBMkMsVUFBSSxFQUFDLGNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILENBQUMsQ0FBQ0ksS0FBTixDQURGLENBREYsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQURGO0FBWUQ7S0FidUJQLEk7QUErQnhCQSxJQUFJLENBQUNRLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0VDLEtBQUssQ0FBQyx1Q0FBRCxDQURQOztBQUFBO0FBQ2ZDLGtCQURlO0FBQUE7QUFBQSxpQkFFNkJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUY3Qjs7QUFBQTtBQUVmVixpQkFGZTtBQUFBLDJDQUdkO0FBQUVBLG1CQUFPLEVBQVBBO0FBQUYsV0FIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9saXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgcmVzTGlzdDogSGlzdG9yeUV2ZW50W10gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyByZXNMaXN0IH06IExpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cmVzTGlzdCAmJlxuICAgICAgICByZXNMaXN0Lm1hcCgoZSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDxMaW5rIGFzPXtgLyR7ZS5ldmVudF9kYXRlX3VuaXh9LyR7ZS5pZH1gfSBocmVmPScvW2RhdGVdL1tpZF0nPlxuICAgICAgICAgICAgICA8YT57ZS50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtEZXRhaWwge1xuICByZWRkaXQ6IHN0cmluZyB8IG51bGw7XG4gIGFydGljbGU6IHN0cmluZztcbiAgd2lraXBlZGlhOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUV2ZW50IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZXZlbnRfZGF0ZV91dGM6IHN0cmluZztcbiAgZXZlbnRfZGF0ZV91bml4OiBzdHJpbmc7XG4gIGZsaWdodF9udW1iZXI6IDQ7XG4gIGRldGFpbHM6IHN0cmluZztcbiAgbGlua3M6IExpbmtEZXRhaWw7XG59XG5cbkxpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9oaXN0b3J5Jyk7XG4gIGNvbnN0IHJlc0xpc3Q6IEhpc3RvcnlFdmVudFtdIHwgdW5kZWZpbmVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyByZXNMaXN0IH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/list.tsx\n");

/***/ })

})