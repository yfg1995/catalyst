"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"cf823867a623\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImNmODIzODY3YTYyM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Main/Main.tsx":
/*!**************************************!*\
  !*** ./src/components/Main/Main.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/zustand/useDropdownActiveState */ \"(app-pages-browser)/./src/zustand/useDropdownActiveState.ts\");\n/* __next_internal_client_entry_do_not_use__ Main auto */ \nvar _s = $RefreshSig$();\n\n\nconst Main = (param)=>{\n    let { children, className } = param;\n    _s();\n    const isHoveredDropdown = (0,_zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_2__.useDropdownActiveState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"overflow-hidden\", className),\n        children: [\n            isHoveredDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 h-full w-full bg-[var(--bg-primary)] opacity-70 z-40\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"cnxsTrmh0cS0n0153BDO/sOYf6M=\", false, function() {\n    return [\n        _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_2__.useDropdownActiveState\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR2lDO0FBQ3lDO0FBTW5FLE1BQU1FLE9BQWtCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7O0lBQ3JELE1BQU1DLG9CQUFvQkosdUZBQXNCQTtJQUVoRCxxQkFDRSw4REFBQ0s7UUFBS0YsV0FBV0osOENBQUVBLENBQUMsbUJBQW1CSTs7WUFDcENDLG1DQUNDLDhEQUFDRTtnQkFBSUgsV0FBVTs7Ozs7O1lBR2hCRDs7Ozs7OztBQUdQLEVBQUU7R0FaV0Q7O1FBQ2VELG1GQUFzQkE7OztLQURyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLnRzeD9hMTAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRkMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7IHVzZURyb3Bkb3duQWN0aXZlU3RhdGUgfSBmcm9tIFwiQC96dXN0YW5kL3VzZURyb3Bkb3duQWN0aXZlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1haW4gZXh0ZW5kcyBQcm9wc1dpdGhDaGlsZHJlbiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbjogRkM8SU1haW4+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgaXNIb3ZlcmVkRHJvcGRvd24gPSB1c2VEcm9wZG93bkFjdGl2ZVN0YXRlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e2NuKFwib3ZlcmZsb3ctaGlkZGVuXCIsIGNsYXNzTmFtZSl9PlxyXG4gICAgICB7aXNIb3ZlcmVkRHJvcGRvd24gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LWZ1bGwgYmctW3ZhcigtLWJnLXByaW1hcnkpXSBvcGFjaXR5LTcwIHotNDBcIiAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjbiIsInVzZURyb3Bkb3duQWN0aXZlU3RhdGUiLCJNYWluIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpc0hvdmVyZWREcm9wZG93biIsIm1haW4iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Main/Main.tsx\n"));

/***/ })

});