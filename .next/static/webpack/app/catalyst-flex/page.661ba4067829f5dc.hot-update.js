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

/***/ "(app-pages-browser)/./src/components/Flex/FlexExpertise.tsx":
/*!***********************************************!*\
  !*** ./src/components/Flex/FlexExpertise.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FlexExpertise: function() { return /* binding */ FlexExpertise; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CarouselStatisticsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CarouselStatisticsCard */ \"(app-pages-browser)/./src/components/CarouselStatisticsCard.tsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* harmony import */ var _TitleContentCols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TitleContentCols */ \"(app-pages-browser)/./src/components/TitleContentCols.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ FlexExpertise auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst expertiseData = [\n    {\n        number: 150,\n        description: \"full-service oncology projects\"\n    },\n    {\n        number: 18,\n        description: \"years of experience with oncology trials\"\n    },\n    {\n        number: 5,\n        description: \"years of oncology experience per core team member\"\n    },\n    {\n        number: 1000,\n        description: \"staff across the globe in 25+ countries\"\n    }\n];\nconst FlexExpertise = ()=>{\n    _s();\n    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)({\n        target: targetRef,\n        offset: [\n            \"start end\",\n            \"end start\"\n        ]\n    });\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"25%\",\n        \"-100%\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"2xl:py-[170px] xl:py-[140px] w-full overflow-hidden h-[200vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TitleContentCols__WEBPACK_IMPORTED_MODULE_4__.TitleContentCols, {\n                    classNameTitle: \"!text-[45px] !-tracking-[0.45] max-w-[50%] w-full\",\n                    titleFirstRow: \"Access Our Expertise\",\n                    description: \"Catalyst Flex supports clients across multiple therapeutic areas with clinical operations, data management, biostatistics, safety and medical writing. With more than 180 clients, we have many successes to share.\",\n                    btnTitle: \"Read More\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: targetRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative max-w-[450px] w-full h-[510px] aspect-square\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"rounded-lg object-cover w-full\",\n                                src: \"/images/flex-expertise-carousel.jpg\",\n                                alt: \"\",\n                                fill: true,\n                                sizes: \"(min-width: 768px) 100vw, 100%\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            style: {\n                                x\n                            },\n                            className: \"flex gap-x-5 absolute top-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarouselStatisticsCard__WEBPACK_IMPORTED_MODULE_2__.CarouselStatisticsCard, {\n                                card: expertiseData\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Flex\\\\FlexExpertise.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FlexExpertise, \"cWd4GYi9/GtupK/Om914LwB4aIM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform\n    ];\n});\n_c = FlexExpertise;\nvar _c;\n$RefreshReg$(_c, \"FlexExpertise\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZsZXgvRmxleEV4cGVydGlzZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVtQztBQUNnQztBQUMxQjtBQUNjO0FBQ0M7QUFDakI7QUFDUjtBQUkvQixNQUFNUSxnQkFBZ0I7SUFDcEI7UUFDRUMsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFRCxRQUFRO1FBQ1JDLGFBQWE7SUFDZjtJQUNBO1FBQ0VELFFBQVE7UUFDUkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUQsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7Q0FDRDtBQUVNLE1BQU1DLGdCQUFvQzs7SUFDL0MsTUFBTUMsWUFBWVosNkNBQU1BLENBQUM7SUFDekIsTUFBTSxFQUFFYSxlQUFlLEVBQUUsR0FBR1Qsd0RBQVNBLENBQUM7UUFDcENVLFFBQVFGO1FBQ1JHLFFBQVE7WUFBQztZQUFhO1NBQVk7SUFDcEM7SUFFQSxNQUFNQyxJQUFJWCwyREFBWUEsQ0FBQ1EsaUJBQWlCO1FBQUM7UUFBRztLQUFFLEVBQUU7UUFBQztRQUFPO0tBQVE7SUFFaEUscUJBQ0UsOERBQUNJO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDaEIsaURBQVNBOzs4QkFDUiw4REFBQ0MsK0RBQWdCQTtvQkFDZmdCLGdCQUFlO29CQUNmQyxlQUFjO29CQUNkVixhQUFZO29CQUNaVyxVQUFTOzs7Ozs7OEJBR1gsOERBQUNDO29CQUFJQyxLQUFLWDs7c0NBQ1IsOERBQUNVOzRCQUFJSixXQUFVO3NDQUNiLDRFQUFDWCxrREFBS0E7Z0NBQ0pXLFdBQVU7Z0NBQ1ZNLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLElBQUk7Z0NBQ0pDLE9BQU07Z0NBQ05DLFFBQVE7Ozs7Ozs7Ozs7O3NDQUlaLDhEQUFDdEIsaURBQU1BLENBQUNnQixHQUFHOzRCQUFDTyxPQUFPO2dDQUFFYjs0QkFBRTs0QkFBR0UsV0FBVTtzQ0FDbEMsNEVBQUNqQiwyRUFBc0JBO2dDQUFDNkIsTUFBTXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLEVBQUU7R0F0Q1dHOztRQUVpQlAsb0RBQVNBO1FBSzNCQyx1REFBWUE7OztLQVBYTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GbGV4L0ZsZXhFeHBlcnRpc2UudHN4P2JlY2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGQywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsU3RhdGlzdGljc0NhcmQgfSBmcm9tIFwiLi4vQ2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFRpdGxlQ29udGVudENvbHMgfSBmcm9tIFwiLi4vVGl0bGVDb250ZW50Q29sc1wiO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmxleEV4cGVydGlzZSB7fVxyXG5cclxuY29uc3QgZXhwZXJ0aXNlRGF0YSA9IFtcclxuICB7XHJcbiAgICBudW1iZXI6IDE1MCxcclxuICAgIGRlc2NyaXB0aW9uOiBcImZ1bGwtc2VydmljZSBvbmNvbG9neSBwcm9qZWN0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbnVtYmVyOiAxOCxcclxuICAgIGRlc2NyaXB0aW9uOiBcInllYXJzIG9mIGV4cGVyaWVuY2Ugd2l0aCBvbmNvbG9neSB0cmlhbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG51bWJlcjogNSxcclxuICAgIGRlc2NyaXB0aW9uOiBcInllYXJzIG9mIG9uY29sb2d5IGV4cGVyaWVuY2UgcGVyIGNvcmUgdGVhbSBtZW1iZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG51bWJlcjogMTAwMCxcclxuICAgIGRlc2NyaXB0aW9uOiBcInN0YWZmIGFjcm9zcyB0aGUgZ2xvYmUgaW4gMjUrIGNvdW50cmllc1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgRmxleEV4cGVydGlzZTogRkM8SUZsZXhFeHBlcnRpc2U+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRhcmdldFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcclxuICAgIHRhcmdldDogdGFyZ2V0UmVmLFxyXG4gICAgb2Zmc2V0OiBbXCJzdGFydCBlbmRcIiwgXCJlbmQgc3RhcnRcIl0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFtcIjI1JVwiLCBcIi0xMDAlXCJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIjJ4bDpweS1bMTcwcHhdIHhsOnB5LVsxNDBweF0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBoLVsyMDB2aF1cIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8VGl0bGVDb250ZW50Q29sc1xyXG4gICAgICAgICAgY2xhc3NOYW1lVGl0bGU9XCIhdGV4dC1bNDVweF0gIS10cmFja2luZy1bMC40NV0gbWF4LXctWzUwJV0gdy1mdWxsXCJcclxuICAgICAgICAgIHRpdGxlRmlyc3RSb3c9XCJBY2Nlc3MgT3VyIEV4cGVydGlzZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhdGFseXN0IEZsZXggc3VwcG9ydHMgY2xpZW50cyBhY3Jvc3MgbXVsdGlwbGUgdGhlcmFwZXV0aWMgYXJlYXMgd2l0aCBjbGluaWNhbCBvcGVyYXRpb25zLCBkYXRhIG1hbmFnZW1lbnQsIGJpb3N0YXRpc3RpY3MsIHNhZmV0eSBhbmQgbWVkaWNhbCB3cml0aW5nLiBXaXRoIG1vcmUgdGhhbiAxODAgY2xpZW50cywgd2UgaGF2ZSBtYW55IHN1Y2Nlc3NlcyB0byBzaGFyZS5cIlxyXG4gICAgICAgICAgYnRuVGl0bGU9XCJSZWFkIE1vcmVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXYgcmVmPXt0YXJnZXRSZWZ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYXgtdy1bNDUwcHhdIHctZnVsbCBoLVs1MTBweF0gYXNwZWN0LXNxdWFyZVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG9iamVjdC1jb3ZlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZmxleC1leHBlcnRpc2UtY2Fyb3VzZWwuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDc2OHB4KSAxMDB2dywgMTAwJVwiXHJcbiAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHggfX0gY2xhc3NOYW1lPVwiZmxleCBnYXAteC01IGFic29sdXRlIHRvcC0xLzJcIj5cclxuICAgICAgICAgICAgPENhcm91c2VsU3RhdGlzdGljc0NhcmQgY2FyZD17ZXhwZXJ0aXNlRGF0YX0gLz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsIkNhcm91c2VsU3RhdGlzdGljc0NhcmQiLCJDb250YWluZXIiLCJUaXRsZUNvbnRlbnRDb2xzIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwibW90aW9uIiwiSW1hZ2UiLCJleHBlcnRpc2VEYXRhIiwibnVtYmVyIiwiZGVzY3JpcHRpb24iLCJGbGV4RXhwZXJ0aXNlIiwidGFyZ2V0UmVmIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0IiwieCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjbGFzc05hbWVUaXRsZSIsInRpdGxlRmlyc3RSb3ciLCJidG5UaXRsZSIsImRpdiIsInJlZiIsInNyYyIsImFsdCIsImZpbGwiLCJzaXplcyIsInByaW9yaXR5Iiwic3R5bGUiLCJjYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Flex/FlexExpertise.tsx\n"));

/***/ })

});