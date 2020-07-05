module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/[date]/[id].js":
/*!**********************************!*\
  !*** ./src/pages/[date]/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/tranthutrang/Desktop/trang-yt-nextjs/src/pages/[date]/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction User({\n  res\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: item,\n    1: setItem\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(res);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function loadData() {\n      const response = await fetch(`https://api.spacexdata.com/v3/history/${router.query.id}`);\n      const res2 = await response.json();\n      setItem(res2);\n    }\n\n    if (!res) loadData(); //ở client side, nếu res chưa có thì gọi api trên, nếu res đã có từ lần gọi trước rồi thì skip ko gọi loadData nữa\n  }, []);\n  if (!item) return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }, \"Loading...\");\n  return __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }\n  }, item === null || item === void 0 ? void 0 : item.details);\n}\n\nUser.getInitialProps = async ctx => {\n  //if we are in client side, (res & req only available in server side) instead of calling the API before navigating to next page, we JUST navigate and then we can use similar code with useState, useEffect in order to fetch data in client-side\n  if (!ctx.req) {\n    return {\n      res: null\n    };\n  }\n\n  const {\n    query\n  } = ctx;\n  const response = await fetch(`https://api.spacexdata.com/v3/history/${query.id}`);\n  const res = await response.json();\n  return {\n    res\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW2RhdGVdLy5qcz8xNjQwIl0sIm5hbWVzIjpbIlVzZXIiLCJyZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpdGVtIiwic2V0SXRlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicXVlcnkiLCJpZCIsInJlczIiLCJqc29uIiwiZGV0YWlscyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBdUI7QUFDcEMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQ0wsR0FBRCxDQUFoQztBQUNBTSx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsUUFBZixHQUEwQjtBQUN4QixZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUN6Qix5Q0FBd0NSLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhQyxFQUFHLEVBRC9CLENBQTVCO0FBR0EsWUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBVCxFQUFuQjtBQUNBVCxhQUFPLENBQUNRLElBQUQsQ0FBUDtBQUNEOztBQUNELFFBQUksQ0FBQ1osR0FBTCxFQUFVTyxRQUFRLEdBUkosQ0FRUTtBQUN2QixHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsTUFBSSxDQUFDSixJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1gsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFVyxPQUFYLENBQVA7QUFDRDs7QUFFRGYsSUFBSSxDQUFDZ0IsZUFBTCxHQUF1QixNQUFPQyxHQUFQLElBQWU7QUFDcEM7QUFDQSxNQUFJLENBQUNBLEdBQUcsQ0FBQ0MsR0FBVCxFQUFjO0FBQ1osV0FBTztBQUFFakIsU0FBRyxFQUFFO0FBQVAsS0FBUDtBQUNEOztBQUNELFFBQU07QUFBRVU7QUFBRixNQUFZTSxHQUFsQjtBQUNBLFFBQU1SLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLHlDQUF3Q0MsS0FBSyxDQUFDQyxFQUFHLEVBRHhCLENBQTVCO0FBR0EsUUFBTVgsR0FBRyxHQUFHLE1BQU1RLFFBQVEsQ0FBQ0ssSUFBVCxFQUFsQjtBQUNBLFNBQU87QUFBRWI7QUFBRixHQUFQO0FBQ0QsQ0FYRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9bZGF0ZV0vW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyByZXMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUocmVzKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9oaXN0b3J5LyR7cm91dGVyLnF1ZXJ5LmlkfWBcbiAgICAgICk7XG4gICAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0SXRlbShyZXMyKTtcbiAgICB9XG4gICAgaWYgKCFyZXMpIGxvYWREYXRhKCk7IC8v4bufIGNsaWVudCBzaWRlLCBu4bq/dSByZXMgY2jGsGEgY8OzIHRow6wgZ+G7jWkgYXBpIHRyw6puLCBu4bq/dSByZXMgxJHDoyBjw7MgdOG7qyBs4bqnbiBn4buNaSB0csaw4bubYyBy4buTaSB0aMOsIHNraXAga28gZ+G7jWkgbG9hZERhdGEgbuG7r2FcbiAgfSwgW10pO1xuICBpZiAoIWl0ZW0pIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgcmV0dXJuIDxoMj57aXRlbT8uZGV0YWlsc308L2gyPjtcbn1cblxuVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vaWYgd2UgYXJlIGluIGNsaWVudCBzaWRlLCAocmVzICYgcmVxIG9ubHkgYXZhaWxhYmxlIGluIHNlcnZlciBzaWRlKSBpbnN0ZWFkIG9mIGNhbGxpbmcgdGhlIEFQSSBiZWZvcmUgbmF2aWdhdGluZyB0byBuZXh0IHBhZ2UsIHdlIEpVU1QgbmF2aWdhdGUgYW5kIHRoZW4gd2UgY2FuIHVzZSBzaW1pbGFyIGNvZGUgd2l0aCB1c2VTdGF0ZSwgdXNlRWZmZWN0IGluIG9yZGVyIHRvIGZldGNoIGRhdGEgaW4gY2xpZW50LXNpZGVcbiAgaWYgKCFjdHgucmVxKSB7XG4gICAgcmV0dXJuIHsgcmVzOiBudWxsIH07XG4gIH1cbiAgY29uc3QgeyBxdWVyeSB9ID0gY3R4O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9oaXN0b3J5LyR7cXVlcnkuaWR9YFxuICApO1xuICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IHJlcyB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[date]/[id].js\n");

/***/ }),

/***/ 6:
/*!****************************************!*\
  !*** multi ./src/pages/[date]/[id].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tranthutrang/Desktop/trang-yt-nextjs/src/pages/[date]/[id].js */"./src/pages/[date]/[id].js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });