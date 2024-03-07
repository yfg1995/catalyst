"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/oncology-cro/page",{

/***/ "(app-pages-browser)/./src/components/DecorBgSection.tsx":
/*!*******************************************!*\
  !*** ./src/components/DecorBgSection.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DecorBgSection: function() { return /* binding */ DecorBgSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ScrollComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollComponent */ \"(app-pages-browser)/./src/components/ScrollComponent.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ \"(app-pages-browser)/./src/components/Section.tsx\");\n/* harmony import */ var _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/SegmentPathContext */ \"(app-pages-browser)/./src/context/SegmentPathContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ DecorBgSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DecorBgSection = (param)=>{\n    let { children, rightCircle = false } = param;\n    _s();\n    const { firstSegment } = (0,_context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_4__.useSegmentPath)();\n    const bgColor = firstSegment === \"oncology-cro\" ? \"bg-[var(--clr-cyan)]\" : firstSegment === \"catalyst-flex\" ? \"bg-[var(--clr-green)]\" : \"bg-[var(--clr-gold)]\";\n    const bgSectionColor = firstSegment === \"oncology-cro\" ? \"bg-[var(--clr-cyan)]\" : firstSegment === \"catalyst-flex\" ? \"bg-[var(--clr-green)]\" : \"bg-[var(--clr-gold)]\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Section__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"bg-[var(--clr-light-blue)]\", rightCircle ? \"rounded-tr-[120px]\" : \"rounded-tl-[120px]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"absolute top-auto bottom-[171px] aspect-[2767/3604] w-[144%] overflow-hidden\", rightCircle ? \"left-0\" : \"right-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"bg-[var(--bg-primary)] absolute aspect-[1] w-full h-full rounded-full bottom-0\", rightCircle ? \"left-0\" : \"right-0\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\DecorBgSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\DecorBgSection.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollComponent__WEBPACK_IMPORTED_MODULE_1__.ScrollComponent, {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"absolute top-full w-[1320px] aspect-[2] h-auto bottom-0\", rightCircle ? \"circle-br right-0\" : \"circle-bl left-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"rounded-full aspect-[1] absolute bottom-auto w-full\", rightCircle ? \"right-0\" : \"left-0\"),\n                    style: {\n                        background: bgColor\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\DecorBgSection.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\DecorBgSection.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\DecorBgSection.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DecorBgSection, \"miH6MNPsJ1YElctDJ0ghp77YC34=\", false, function() {\n    return [\n        _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_4__.useSegmentPath\n    ];\n});\n_c = DecorBgSection;\nvar _c;\n$RefreshReg$(_c, \"DecorBgSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RlY29yQmdTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdvRDtBQUNuQjtBQUNHO0FBQzBCO0FBTXZELE1BQU1JLGlCQUFzQztRQUFDLEVBQ2xEQyxRQUFRLEVBQ1JDLGNBQWMsS0FBSyxFQUNwQjs7SUFDQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHSiwyRUFBY0E7SUFFdkMsTUFBTUssVUFDSkQsaUJBQWlCLGlCQUNiLHlCQUNBQSxpQkFBaUIsa0JBQ2pCLDBCQUNBO0lBRU4sTUFBTUUsaUJBQ0pGLGlCQUFpQixpQkFDYix5QkFDQUEsaUJBQWlCLGtCQUNqQiwwQkFDQTtJQUVOLHFCQUNFLDhEQUFDTCw2Q0FBT0E7UUFDTlEsV0FBV1QsOENBQUVBLENBQ1gsOEJBQ0FLLGNBQWMsdUJBQXVCOzswQkFHdkMsOERBQUNLO2dCQUNDRCxXQUFXVCw4Q0FBRUEsQ0FDWCxnRkFDQUssY0FBYyxXQUFXOzBCQUczQiw0RUFBQ0s7b0JBQ0NELFdBQVdULDhDQUFFQSxDQUNYLGtGQUNBSyxjQUFjLFdBQVc7Ozs7Ozs7Ozs7OzBCQUsvQiw4REFBQ04sNkRBQWVBO2dCQUNkVSxXQUFXVCw4Q0FBRUEsQ0FDWCwyREFDQUssY0FBYyxzQkFBc0I7MEJBR3RDLDRFQUFDSztvQkFDQ0QsV0FBV1QsOENBQUVBLENBQ1gsdURBQ0FLLGNBQWMsWUFBWTtvQkFFNUJNLE9BQU87d0JBQUVDLFlBQVlMO29CQUFROzs7Ozs7Ozs7OztZQUloQ0g7Ozs7Ozs7QUFHUCxFQUFFO0dBM0RXRDs7UUFJY0QsdUVBQWNBOzs7S0FKNUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RlY29yQmdTZWN0aW9uLnRzeD8yMWZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRkMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNjcm9sbENvbXBvbmVudCB9IGZyb20gXCIuL1Njcm9sbENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSBcIi4vU2VjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWdtZW50UGF0aCB9IGZyb20gXCJAL2NvbnRleHQvU2VnbWVudFBhdGhDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWNvckJnU2VjdGlvbiBleHRlbmRzIFByb3BzV2l0aENoaWxkcmVuIHtcclxuICByaWdodENpcmNsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEZWNvckJnU2VjdGlvbjogRkM8SURlY29yQmdTZWN0aW9uPiA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgcmlnaHRDaXJjbGUgPSBmYWxzZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgZmlyc3RTZWdtZW50IH0gPSB1c2VTZWdtZW50UGF0aCgpO1xyXG5cclxuICBjb25zdCBiZ0NvbG9yID1cclxuICAgIGZpcnN0U2VnbWVudCA9PT0gXCJvbmNvbG9neS1jcm9cIlxyXG4gICAgICA/IFwiYmctW3ZhcigtLWNsci1jeWFuKV1cIlxyXG4gICAgICA6IGZpcnN0U2VnbWVudCA9PT0gXCJjYXRhbHlzdC1mbGV4XCJcclxuICAgICAgPyBcImJnLVt2YXIoLS1jbHItZ3JlZW4pXVwiXHJcbiAgICAgIDogXCJiZy1bdmFyKC0tY2xyLWdvbGQpXVwiO1xyXG5cclxuICBjb25zdCBiZ1NlY3Rpb25Db2xvciA9XHJcbiAgICBmaXJzdFNlZ21lbnQgPT09IFwib25jb2xvZ3ktY3JvXCJcclxuICAgICAgPyBcImJnLVt2YXIoLS1jbHItY3lhbildXCJcclxuICAgICAgOiBmaXJzdFNlZ21lbnQgPT09IFwiY2F0YWx5c3QtZmxleFwiXHJcbiAgICAgID8gXCJiZy1bdmFyKC0tY2xyLWdyZWVuKV1cIlxyXG4gICAgICA6IFwiYmctW3ZhcigtLWNsci1nb2xkKV1cIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJiZy1bdmFyKC0tY2xyLWxpZ2h0LWJsdWUpXVwiLFxyXG4gICAgICAgIHJpZ2h0Q2lyY2xlID8gXCJyb3VuZGVkLXRyLVsxMjBweF1cIiA6IFwicm91bmRlZC10bC1bMTIwcHhdXCJcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcImFic29sdXRlIHRvcC1hdXRvIGJvdHRvbS1bMTcxcHhdIGFzcGVjdC1bMjc2Ny8zNjA0XSB3LVsxNDQlXSBvdmVyZmxvdy1oaWRkZW5cIixcclxuICAgICAgICAgIHJpZ2h0Q2lyY2xlID8gXCJsZWZ0LTBcIiA6IFwicmlnaHQtMFwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgIFwiYmctW3ZhcigtLWJnLXByaW1hcnkpXSBhYnNvbHV0ZSBhc3BlY3QtWzFdIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsIGJvdHRvbS0wXCIsXHJcbiAgICAgICAgICAgIHJpZ2h0Q2lyY2xlID8gXCJsZWZ0LTBcIiA6IFwicmlnaHQtMFwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFNjcm9sbENvbXBvbmVudFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcImFic29sdXRlIHRvcC1mdWxsIHctWzEzMjBweF0gYXNwZWN0LVsyXSBoLWF1dG8gYm90dG9tLTBcIixcclxuICAgICAgICAgIHJpZ2h0Q2lyY2xlID8gXCJjaXJjbGUtYnIgcmlnaHQtMFwiIDogXCJjaXJjbGUtYmwgbGVmdC0wXCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYXNwZWN0LVsxXSBhYnNvbHV0ZSBib3R0b20tYXV0byB3LWZ1bGxcIixcclxuICAgICAgICAgICAgcmlnaHRDaXJjbGUgPyBcInJpZ2h0LTBcIiA6IFwibGVmdC0wXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiZ0NvbG9yIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TY3JvbGxDb21wb25lbnQ+XHJcblxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlNjcm9sbENvbXBvbmVudCIsImNuIiwiU2VjdGlvbiIsInVzZVNlZ21lbnRQYXRoIiwiRGVjb3JCZ1NlY3Rpb24iLCJjaGlsZHJlbiIsInJpZ2h0Q2lyY2xlIiwiZmlyc3RTZWdtZW50IiwiYmdDb2xvciIsImJnU2VjdGlvbkNvbG9yIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DecorBgSection.tsx\n"));

/***/ })

});