"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/catalyst-flex/page",{

/***/ "(app-pages-browser)/./src/components/CarouselStatisticsCard.tsx":
/*!***************************************************!*\
  !*** ./src/components/CarouselStatisticsCard.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CarouselStatisticsCard: function() { return /* binding */ CarouselStatisticsCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/SegmentPathContext */ \"(app-pages-browser)/./src/context/SegmentPathContext.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _FramerMotion_InView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FramerMotion/InView */ \"(app-pages-browser)/./src/components/FramerMotion/InView.tsx\");\n/* __next_internal_client_entry_do_not_use__ CarouselStatisticsCard auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CarouselStatisticsCard = (param)=>{\n    let { card } = param;\n    _s();\n    const { firstSegment } = (0,_context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_1__.useSegmentPath)();\n    const bgColor = firstSegment === \"oncology-cro\" ? \"var(--clr-light-blue)\" : firstSegment === \"catalyst-flex\" ? \"var(--clr-light-green)\" : \"var(--clr-light-gold)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: card.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FramerMotion_InView__WEBPACK_IMPORTED_MODULE_3__.InView, {\n                classNameWrap: \"overflow-hidden\",\n                delay: index * 0.07,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden rounded-[30px] max-w-[330px] w-full py-[50px] px-[20px] h-auto text-center select-none ease-in-out\",\n                    style: {\n                        background: bgColor,\n                        flex: \"0 0 100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-[50px] leading-[1.25] -tracking-[0.5px] mb-[10px]\",\n                            children: [\n                                (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.formatNumberWithCommas)(item.number),\n                                \"+\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\CarouselStatisticsCard.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: item.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\CarouselStatisticsCard.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\CarouselStatisticsCard.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\CarouselStatisticsCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_s(CarouselStatisticsCard, \"miH6MNPsJ1YElctDJ0ghp77YC34=\", false, function() {\n    return [\n        _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_1__.useSegmentPath\n    ];\n});\n_c = CarouselStatisticsCard;\nvar _c;\n$RefreshReg$(_c, \"CarouselStatisticsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsU3RhdGlzdGljc0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFOEQ7QUFDVDtBQUdOO0FBV3hDLE1BQU1HLHlCQUFzRDtRQUFDLEVBQ2xFQyxJQUFJLEVBQ0w7O0lBQ0MsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0wsMkVBQWNBO0lBRXZDLE1BQU1NLFVBQ0pELGlCQUFpQixpQkFDYiwwQkFDQUEsaUJBQWlCLGtCQUNqQiwyQkFDQTtJQUVOLHFCQUNFO2tCQUNHRCxLQUFLRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNQLHdEQUFNQTtnQkFBQ1EsZUFBYztnQkFBa0JDLE9BQU9GLFFBQVE7MEJBQ3JELDRFQUFDRztvQkFFQ0MsV0FBVTtvQkFDVkMsT0FBTzt3QkFBRUMsWUFBWVQ7d0JBQVNVLE1BQU07b0JBQVc7O3NDQUUvQyw4REFBQ0o7NEJBQUlDLFdBQVU7O2dDQUNaWixrRUFBc0JBLENBQUNPLEtBQUtTLE1BQU07Z0NBQUU7Ozs7Ozs7c0NBRXZDLDhEQUFDTDtzQ0FBS0osS0FBS1UsV0FBVzs7Ozs7OzttQkFQakJUOzs7Ozs7Ozs7OztBQWFqQixFQUFFO0dBOUJXTjs7UUFHY0gsdUVBQWNBOzs7S0FINUJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsU3RhdGlzdGljc0NhcmQudHN4P2NkYjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWdtZW50UGF0aCB9IGZyb20gXCJAL2NvbnRleHQvU2VnbWVudFBhdGhDb250ZXh0XCI7XHJcbmltcG9ydCB7IGZvcm1hdE51bWJlcldpdGhDb21tYXMgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5WaWV3IH0gZnJvbSBcIi4vRnJhbWVyTW90aW9uL0luVmlld1wiO1xyXG5cclxudHlwZSBUQ2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZCA9IHtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZCB7XHJcbiAgY2FyZDogVENhcm91c2VsU3RhdGlzdGljc0NhcmRbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsU3RhdGlzdGljc0NhcmQ6IEZDPElDYXJvdXNlbFN0YXRpc3RpY3NDYXJkPiA9ICh7XHJcbiAgY2FyZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgZmlyc3RTZWdtZW50IH0gPSB1c2VTZWdtZW50UGF0aCgpO1xyXG5cclxuICBjb25zdCBiZ0NvbG9yID1cclxuICAgIGZpcnN0U2VnbWVudCA9PT0gXCJvbmNvbG9neS1jcm9cIlxyXG4gICAgICA/IFwidmFyKC0tY2xyLWxpZ2h0LWJsdWUpXCJcclxuICAgICAgOiBmaXJzdFNlZ21lbnQgPT09IFwiY2F0YWx5c3QtZmxleFwiXHJcbiAgICAgID8gXCJ2YXIoLS1jbHItbGlnaHQtZ3JlZW4pXCJcclxuICAgICAgOiBcInZhcigtLWNsci1saWdodC1nb2xkKVwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NhcmQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxJblZpZXcgY2xhc3NOYW1lV3JhcD1cIm92ZXJmbG93LWhpZGRlblwiIGRlbGF5PXtpbmRleCAqIDAuMDd9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1bMzBweF0gbWF4LXctWzMzMHB4XSB3LWZ1bGwgcHktWzUwcHhdIHB4LVsyMHB4XSBoLWF1dG8gdGV4dC1jZW50ZXIgc2VsZWN0LW5vbmUgZWFzZS1pbi1vdXRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiZ0NvbG9yLCBmbGV4OiBcIjAgMCAxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVs1MHB4XSBsZWFkaW5nLVsxLjI1XSAtdHJhY2tpbmctWzAuNXB4XSBtYi1bMTBweF1cIj5cclxuICAgICAgICAgICAgICB7Zm9ybWF0TnVtYmVyV2l0aENvbW1hcyhpdGVtLm51bWJlcil9JiM0MztcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0luVmlldz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU2VnbWVudFBhdGgiLCJmb3JtYXROdW1iZXJXaXRoQ29tbWFzIiwiSW5WaWV3IiwiQ2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZCIsImNhcmQiLCJmaXJzdFNlZ21lbnQiLCJiZ0NvbG9yIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2xhc3NOYW1lV3JhcCIsImRlbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZmxleCIsIm51bWJlciIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CarouselStatisticsCard.tsx\n"));

/***/ })

});