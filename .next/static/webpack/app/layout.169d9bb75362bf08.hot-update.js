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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eb11f6477393\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImViMTFmNjQ3NzM5M1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/MainNavMenuCatalyst.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Header/MainNavMenuCatalyst.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNavMenuCatalyst: function() { return /* binding */ MainNavMenuCatalyst; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _svg_RightArrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/svg/RightArrow */ \"(app-pages-browser)/./src/svg/RightArrow.tsx\");\n/* harmony import */ var _FramerMotion_AnimationOpacityMotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FramerMotion/AnimationOpacityMotion */ \"(app-pages-browser)/./src/components/FramerMotion/AnimationOpacityMotion.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/zustand/useDropdownActiveState */ \"(app-pages-browser)/./src/zustand/useDropdownActiveState.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst aboutCatalystData = [\n    {\n        value: \"Our Purpose\",\n        path: \"/our-purpose\"\n    },\n    {\n        value: \"Our People\",\n        path: \"/our-people\"\n    },\n    {\n        value: \"Our Board\",\n        path: \"/our-board\"\n    },\n    {\n        value: \"Our Partners\",\n        path: \"/our-partners\"\n    },\n    {\n        value: \"News\",\n        path: \"/news-blog\"\n    }\n];\nconst MainNavMenuCatalyst = ()=>{\n    _s();\n    const { isHovered, setIsHovered } = (0,_zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_4__.useDropdownActiveState)();\n    const handleOnClick = ()=>{\n        setIsHovered(false);\n    };\n    console.log(isHovered);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"border-b-2 border-b-slate-200 md:border-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n            children: aboutCatalystData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"group flex py-2 cursor-pointer items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FramerMotion_AnimationOpacityMotion__WEBPACK_IMPORTED_MODULE_3__.AnimationOpacityMotion, {\n                            useExit: true,\n                            delay: index * 0.06,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: item.path,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: handleOnClick,\n                                    children: item.value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_RightArrow__WEBPACK_IMPORTED_MODULE_2__.RightArrow, {\n                            className: \"ml-2 mt-1 opacity-0 md:group-hover:opacity-100 duration-300 ease-in-out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainNavMenuCatalyst, \"phC+wzMi+xszlbLUJclEA1sP+vE=\", false, function() {\n    return [\n        _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_4__.useDropdownActiveState\n    ];\n});\n_c = MainNavMenuCatalyst;\nvar _c;\n$RefreshReg$(_c, \"MainNavMenuCatalyst\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9NYWluTmF2TWVudUNhdGFseXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFFaUI7QUFDa0M7QUFDaEM7QUFDMEI7QUFFMUUsTUFBTUssb0JBQW9CO0lBQ3hCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVNLE1BQU1DLHNCQUEwQjs7SUFDckMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHTix1RkFBc0JBO0lBRTFELE1BQU1PLGdCQUFnQjtRQUNwQkQsYUFBYTtJQUNmO0lBRUFFLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFWixxQkFDRSw4REFBQ0s7UUFBR0MsV0FBVTtrQkFDWiw0RUFBQ1osMERBQWVBO3NCQUNiRSxrQkFBa0JXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDNUIsOERBQUNDO29CQUVDSixXQUFVOztzQ0FFViw4REFBQ2Isd0ZBQXNCQTs0QkFBQ2tCLE9BQU87NEJBQUNDLE9BQU9ILFFBQVE7c0NBQzdDLDRFQUFDbEIsaURBQUlBO2dDQUFDc0IsTUFBTUwsS0FBS1YsSUFBSTswQ0FDbkIsNEVBQUNZO29DQUFJSSxTQUFTWjs4Q0FBZ0JNLEtBQUtYLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTVDLDhEQUFDTCx1REFBVUE7NEJBQUNjLFdBQVU7Ozs7Ozs7bUJBVGpCRzs7Ozs7Ozs7Ozs7Ozs7O0FBZWpCLEVBQUU7R0E3QldWOztRQUN5QkosbUZBQXNCQTs7O0tBRC9DSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvTWFpbk5hdk1lbnVDYXRhbHlzdC50c3g/Y2FiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJpZ2h0QXJyb3cgfSBmcm9tIFwiQC9zdmcvUmlnaHRBcnJvd1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25PcGFjaXR5TW90aW9uIH0gZnJvbSBcIi4uL0ZyYW1lck1vdGlvbi9BbmltYXRpb25PcGFjaXR5TW90aW9uXCI7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZURyb3Bkb3duQWN0aXZlU3RhdGUgfSBmcm9tIFwiQC96dXN0YW5kL3VzZURyb3Bkb3duQWN0aXZlU3RhdGVcIjtcclxuXHJcbmNvbnN0IGFib3V0Q2F0YWx5c3REYXRhID0gW1xyXG4gIHtcclxuICAgIHZhbHVlOiBcIk91ciBQdXJwb3NlXCIsXHJcbiAgICBwYXRoOiBcIi9vdXItcHVycG9zZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFwiT3VyIFBlb3BsZVwiLFxyXG4gICAgcGF0aDogXCIvb3VyLXBlb3BsZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFwiT3VyIEJvYXJkXCIsXHJcbiAgICBwYXRoOiBcIi9vdXItYm9hcmRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiBcIk91ciBQYXJ0bmVyc1wiLFxyXG4gICAgcGF0aDogXCIvb3VyLXBhcnRuZXJzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogXCJOZXdzXCIsXHJcbiAgICBwYXRoOiBcIi9uZXdzLWJsb2dcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5OYXZNZW51Q2F0YWx5c3Q6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWQgfSA9IHVzZURyb3Bkb3duQWN0aXZlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHtcclxuICAgIHNldElzSG92ZXJlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coaXNIb3ZlcmVkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1iLXNsYXRlLTIwMCBtZDpib3JkZXItMFwiPlxyXG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgIHthYm91dENhdGFseXN0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggcHktMiBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QW5pbWF0aW9uT3BhY2l0eU1vdGlvbiB1c2VFeGl0IGRlbGF5PXtpbmRleCAqIDAuMDZ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ucGF0aH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2t9PntpdGVtLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9BbmltYXRpb25PcGFjaXR5TW90aW9uPlxyXG5cclxuICAgICAgICAgICAgPFJpZ2h0QXJyb3cgY2xhc3NOYW1lPVwibWwtMiBtdC0xIG9wYWNpdHktMCBtZDpncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJpZ2h0QXJyb3ciLCJBbmltYXRpb25PcGFjaXR5TW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlRHJvcGRvd25BY3RpdmVTdGF0ZSIsImFib3V0Q2F0YWx5c3REYXRhIiwidmFsdWUiLCJwYXRoIiwiTWFpbk5hdk1lbnVDYXRhbHlzdCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImhhbmRsZU9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJ1c2VFeGl0IiwiZGVsYXkiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/MainNavMenuCatalyst.tsx\n"));

/***/ })

});