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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b75694aba2b0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI3NTY5NGFiYTJiMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Header/MainNavMenuCatalyst.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Header/MainNavMenuCatalyst.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNavMenuCatalyst: function() { return /* binding */ MainNavMenuCatalyst; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _svg_RightArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/svg/RightArrow */ \"(app-pages-browser)/./src/svg/RightArrow.tsx\");\n/* harmony import */ var _FramerMotion_AnimationOpacityMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FramerMotion/AnimationOpacityMotion */ \"(app-pages-browser)/./src/components/FramerMotion/AnimationOpacityMotion.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/zustand/useDropdownActiveState */ \"(app-pages-browser)/./src/zustand/useDropdownActiveState.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst aboutCatalystData = [\n    {\n        value: \"Our Purpose\",\n        path: \"/our-purpose\"\n    },\n    {\n        value: \"Our People\",\n        path: \"/our-people\"\n    },\n    {\n        value: \"Our Board\",\n        path: \"/our-board\"\n    },\n    {\n        value: \"Our Partners\",\n        path: \"/our-partners\"\n    },\n    {\n        value: \"News\",\n        path: \"/news-blog\"\n    }\n];\nconst MainNavMenuCatalyst = ()=>{\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const setIsHoveredDropdown = (0,_zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_5__.useDropdownActiveState)((state)=>state.setIsHovered);\n    const handleOnClick = ()=>{\n        setIsHovered(false);\n        setIsHoveredDropdown(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"border-b-2 border-b-slate-200 md:border-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n            children: aboutCatalystData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handleOnClick,\n                    className: \"group flex py-2 cursor-pointer items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FramerMotion_AnimationOpacityMotion__WEBPACK_IMPORTED_MODULE_4__.AnimationOpacityMotion, {\n                            useExit: true,\n                            delay: index * 0.06,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: item.path,\n                                children: item.value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_RightArrow__WEBPACK_IMPORTED_MODULE_3__.RightArrow, {\n                            className: \"ml-2 mt-1 opacity-0 md:group-hover:opacity-100 duration-300 ease-in-out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Header\\\\MainNavMenuCatalyst.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainNavMenuCatalyst, \"Vafm4hmXu2Z9xf0hQpcfXEwf6JY=\", false, function() {\n    return [\n        _zustand_useDropdownActiveState__WEBPACK_IMPORTED_MODULE_5__.useDropdownActiveState\n    ];\n});\n_c = MainNavMenuCatalyst;\nvar _c;\n$RefreshReg$(_c, \"MainNavMenuCatalyst\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9NYWluTmF2TWVudUNhdGFseXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNRO0FBQ1M7QUFDa0M7QUFDaEM7QUFDMEI7QUFFMUUsTUFBTU0sb0JBQW9CO0lBQ3hCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRDtBQUVNLE1BQU1DLHNCQUEwQjs7SUFDckMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1XLHVCQUF1QlAsdUZBQXNCQSxDQUNqRCxDQUFDUSxRQUFVQSxNQUFNRixZQUFZO0lBRy9CLE1BQU1HLGdCQUFnQjtRQUNwQkgsYUFBYTtRQUNiQyxxQkFBcUI7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBR0MsV0FBVTtrQkFDWiw0RUFBQ1osMERBQWVBO3NCQUNiRSxrQkFBa0JXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDNUIsOERBQUNDO29CQUVDQyxTQUFTUDtvQkFDVEUsV0FBVTs7c0NBRVYsOERBQUNiLHdGQUFzQkE7NEJBQUNtQixPQUFPOzRCQUFDQyxPQUFPSixRQUFRO3NDQUM3Qyw0RUFBQ25CLGlEQUFJQTtnQ0FBQ3dCLE1BQU1OLEtBQUtWLElBQUk7MENBQUdVLEtBQUtYLEtBQUs7Ozs7Ozs7Ozs7O3NDQUdwQyw4REFBQ0wsdURBQVVBOzRCQUFDYyxXQUFVOzs7Ozs7O21CQVJqQkc7Ozs7Ozs7Ozs7Ozs7OztBQWNqQixFQUFFO0dBL0JXVjs7UUFHa0JKLG1GQUFzQkE7OztLQUh4Q0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL01haW5OYXZNZW51Q2F0YWx5c3QudHN4P2NhYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmlnaHRBcnJvdyB9IGZyb20gXCJAL3N2Zy9SaWdodEFycm93XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbk9wYWNpdHlNb3Rpb24gfSBmcm9tIFwiLi4vRnJhbWVyTW90aW9uL0FuaW1hdGlvbk9wYWNpdHlNb3Rpb25cIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlRHJvcGRvd25BY3RpdmVTdGF0ZSB9IGZyb20gXCJAL3p1c3RhbmQvdXNlRHJvcGRvd25BY3RpdmVTdGF0ZVwiO1xyXG5cclxuY29uc3QgYWJvdXRDYXRhbHlzdERhdGEgPSBbXHJcbiAge1xyXG4gICAgdmFsdWU6IFwiT3VyIFB1cnBvc2VcIixcclxuICAgIHBhdGg6IFwiL291ci1wdXJwb3NlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogXCJPdXIgUGVvcGxlXCIsXHJcbiAgICBwYXRoOiBcIi9vdXItcGVvcGxlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWx1ZTogXCJPdXIgQm9hcmRcIixcclxuICAgIHBhdGg6IFwiL291ci1ib2FyZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFsdWU6IFwiT3VyIFBhcnRuZXJzXCIsXHJcbiAgICBwYXRoOiBcIi9vdXItcGFydG5lcnNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHZhbHVlOiBcIk5ld3NcIixcclxuICAgIHBhdGg6IFwiL25ld3MtYmxvZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbk5hdk1lbnVDYXRhbHlzdDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2V0SXNIb3ZlcmVkRHJvcGRvd24gPSB1c2VEcm9wZG93bkFjdGl2ZVN0YXRlKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zZXRJc0hvdmVyZWRcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNIb3ZlcmVkKGZhbHNlKTtcclxuICAgIHNldElzSG92ZXJlZERyb3Bkb3duKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLWItc2xhdGUtMjAwIG1kOmJvcmRlci0wXCI+XHJcbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAge2Fib3V0Q2F0YWx5c3REYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBweS0yIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxBbmltYXRpb25PcGFjaXR5TW90aW9uIHVzZUV4aXQgZGVsYXk9e2luZGV4ICogMC4wNn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5wYXRofT57aXRlbS52YWx1ZX08L0xpbms+XHJcbiAgICAgICAgICAgIDwvQW5pbWF0aW9uT3BhY2l0eU1vdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxSaWdodEFycm93IGNsYXNzTmFtZT1cIm1sLTIgbXQtMSBvcGFjaXR5LTAgbWQ6Z3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIlJpZ2h0QXJyb3ciLCJBbmltYXRpb25PcGFjaXR5TW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwidXNlRHJvcGRvd25BY3RpdmVTdGF0ZSIsImFib3V0Q2F0YWx5c3REYXRhIiwidmFsdWUiLCJwYXRoIiwiTWFpbk5hdk1lbnVDYXRhbHlzdCIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsInNldElzSG92ZXJlZERyb3Bkb3duIiwic3RhdGUiLCJoYW5kbGVPbkNsaWNrIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXYiLCJvbkNsaWNrIiwidXNlRXhpdCIsImRlbGF5IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/MainNavMenuCatalyst.tsx\n"));

/***/ })

});