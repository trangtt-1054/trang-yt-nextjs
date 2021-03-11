webpackHotUpdate("static/development/pages/[date]/[id].js",{

/***/ "./src/pages/[date]/[id].js":
/*!**********************************!*\
  !*** ./src/pages/[date]/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/tranthutrang/Desktop/trang-yt-nextjs/src/pages/[date]/[id].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nfunction User(_ref) {\n  _s();\n\n  var res = _ref.res;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(res),\n      item = _useState[0],\n      setItem = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('useEffect running');\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    function _loadData() {\n      _loadData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response, res2;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('loadData running');\n                _context.next = 3;\n                return fetch(\"https://api.spacexdata.com/v3/history/\".concat(router.query.id));\n\n              case 3:\n                response = _context.sent;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                res2 = _context.sent;\n                console.log('res2', res2);\n                setItem(res2);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadData.apply(this, arguments);\n    }\n\n    if (!res) loadData(); //ở client side, nếu res chưa có thì gọi api trên, nếu res đã có từ lần gọi trước rồi thì skip ko gọi loadData nữa\n  }, []);\n  if (!item) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, \"Loading...\");\n  return __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }, item === null || item === void 0 ? void 0 : item.details);\n}\n\n_s(User, \"XI0SsC0Nt3peF5dZAFrpRX6bEPE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = User;\n\nUser.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {\n    var query, response, res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (ctx.req) {\n              _context2.next = 2;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", {\n              res: null\n            });\n\n          case 2:\n            query = ctx.query;\n            _context2.next = 5;\n            return fetch(\"https://api.spacexdata.com/v3/history/\".concat(query.id));\n\n          case 5:\n            response = _context2.sent;\n            _context2.next = 8;\n            return response.json();\n\n          case 8:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              res: res\n            });\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW2RhdGVdLy5qcz8xNjQwIl0sIm5hbWVzIjpbIlVzZXIiLCJyZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIml0ZW0iLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImxvYWREYXRhIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwicmVzcG9uc2UiLCJqc29uIiwicmVzMiIsImRldGFpbHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBdUI7QUFBQTs7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEb0Msa0JBRVpDLHNEQUFRLENBQUNILEdBQUQsQ0FGSTtBQUFBLE1BRTdCSSxJQUY2QjtBQUFBLE1BRXZCQyxPQUZ1Qjs7QUFHcENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFEYyxhQUVDQyxRQUZEO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1NQUVkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRix1QkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFERjtBQUFBLHVCQUV5QkUsS0FBSyxpREFDZVQsTUFBTSxDQUFDVSxLQUFQLENBQWFDLEVBRDVCLEVBRjlCOztBQUFBO0FBRVFDLHdCQUZSO0FBQUE7QUFBQSx1QkFLcUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUxyQjs7QUFBQTtBQUtRQyxvQkFMUjtBQU1FUix1QkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQk8sSUFBcEI7QUFDQVYsdUJBQU8sQ0FBQ1UsSUFBRCxDQUFQOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRmM7QUFBQTtBQUFBOztBQVdkLFFBQUksQ0FBQ2YsR0FBTCxFQUFVUyxRQUFRLEdBWEosQ0FXUTtBQUN2QixHQVpRLEVBWU4sRUFaTSxDQUFUO0FBYUEsTUFBSSxDQUFDTCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFWSxPQUFYLENBQVA7QUFDRDs7R0FsQnVCakIsSTtVQUNQRyxxRDs7O0tBRE9ILEk7O0FBb0J4QkEsSUFBSSxDQUFDa0IsZUFBTDtBQUFBLCtMQUF1QixrQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFaEJBLEdBQUcsQ0FBQ0MsR0FGWTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FHWjtBQUFFbkIsaUJBQUcsRUFBRTtBQUFQLGFBSFk7O0FBQUE7QUFLYlcsaUJBTGEsR0FLSE8sR0FMRyxDQUtiUCxLQUxhO0FBQUE7QUFBQSxtQkFNRUQsS0FBSyxpREFDZUMsS0FBSyxDQUFDQyxFQURyQixFQU5QOztBQUFBO0FBTWZDLG9CQU5lO0FBQUE7QUFBQSxtQkFTSEEsUUFBUSxDQUFDQyxJQUFULEVBVEc7O0FBQUE7QUFTZmQsZUFUZTtBQUFBLDhDQVVkO0FBQUVBLGlCQUFHLEVBQUhBO0FBQUYsYUFWYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9bZGF0ZV0vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyByZXMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUocmVzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygndXNlRWZmZWN0IHJ1bm5pbmcnKTtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkRGF0YSBydW5uaW5nJyk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvaGlzdG9yeS8ke3JvdXRlci5xdWVyeS5pZH1gXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZXMyJywgcmVzMik7XG4gICAgICBzZXRJdGVtKHJlczIpO1xuICAgIH1cbiAgICBpZiAoIXJlcykgbG9hZERhdGEoKTsgLy/hu58gY2xpZW50IHNpZGUsIG7hur91IHJlcyBjaMawYSBjw7MgdGjDrCBn4buNaSBhcGkgdHLDqm4sIG7hur91IHJlcyDEkcOjIGPDsyB04burIGzhuqduIGfhu41pIHRyxrDhu5tjIHLhu5NpIHRow6wgc2tpcCBrbyBn4buNaSBsb2FkRGF0YSBu4buvYVxuICB9LCBbXSk7XG4gIGlmICghaXRlbSkgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICByZXR1cm4gPGgyPntpdGVtPy5kZXRhaWxzfTwvaDI+O1xufVxuXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy9pZiB3ZSBhcmUgaW4gY2xpZW50IHNpZGUsIChyZXMgJiByZXEgb25seSBhdmFpbGFibGUgaW4gc2VydmVyIHNpZGUpIGluc3RlYWQgb2YgY2FsbGluZyB0aGUgQVBJIGJlZm9yZSBuYXZpZ2F0aW5nIHRvIG5leHQgcGFnZSwgd2UgSlVTVCBuYXZpZ2F0ZSBhbmQgdGhlbiB3ZSBjYW4gdXNlIHNpbWlsYXIgY29kZSB3aXRoIHVzZVN0YXRlLCB1c2VFZmZlY3QgaW4gb3JkZXIgdG8gZmV0Y2ggZGF0YSBpbiBjbGllbnQtc2lkZVxuICBpZiAoIWN0eC5yZXEpIHtcbiAgICByZXR1cm4geyByZXM6IG51bGwgfTtcbiAgfVxuICBjb25zdCB7IHF1ZXJ5IH0gPSBjdHg7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2hpc3RvcnkvJHtxdWVyeS5pZH1gXG4gICk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHsgcmVzIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[date]/[id].js\n");

/***/ })

})