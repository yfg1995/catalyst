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

/***/ "(app-pages-browser)/./src/components/OncologyCro/OncologyTherapyStudies.tsx":
/*!***************************************************************!*\
  !*** ./src/components/OncologyCro/OncologyTherapyStudies.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OncologyTherapyStudies: function() { return /* binding */ OncologyTherapyStudies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CarouselStatisticsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CarouselStatisticsCard */ \"(app-pages-browser)/./src/components/CarouselStatisticsCard.tsx\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ \"(app-pages-browser)/./src/components/Container.tsx\");\n/* harmony import */ var _TitleContentCols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TitleContentCols */ \"(app-pages-browser)/./src/components/TitleContentCols.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ OncologyTherapyStudies auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst therapyStudiesStatisticsData = [\n    {\n        number: 150,\n        suffix: \"+\",\n        description: \"full-service oncology projects\"\n    },\n    {\n        number: 18,\n        suffix: \"+\",\n        description: \"years of experience with oncology trials\"\n    },\n    {\n        number: 5,\n        suffix: \"+\",\n        description: \"years of oncology experience per core team member\"\n    },\n    {\n        number: 1000,\n        suffix: \"+\",\n        description: \"staff across the globe in 25+ countries\"\n    }\n];\nconst OncologyTherapyStudies = ()=>{\n    _s();\n    const targetRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)({\n        target: targetRef\n    });\n    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateDimensions = ()=>{\n            if (targetRef.current) {\n                setContainerWidth(targetRef.current.offsetWidth);\n            }\n        };\n        updateDimensions();\n        window.addEventListener(\"resize\", updateDimensions);\n        return ()=>window.removeEventListener(\"resize\", updateDimensions);\n    }, []);\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        \"-120%\",\n        \"-\".concat((containerWidth !== null && containerWidth !== void 0 ? containerWidth : 0) * 0.32, \"px\")\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: targetRef,\n        className: \"2xl:py-[170px] xl:py-[140px] w-full h-[300vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sticky top-0 z-50 h-screen overflow-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TitleContentCols__WEBPACK_IMPORTED_MODULE_4__.TitleContentCols, {\n                        classNameTitle: \"!text-[45px] !-tracking-[0.45] max-w-[50%] w-full\",\n                        titleFirstRow: \"Accelerate Oncology Therapy\",\n                        titleSecondRow: \"Studies\",\n                        description: \"Catalyst Oncology is a specialty oncology CRO devoting time, energy, and capital to supporting biotechs in bringing next-generation and novel cancer therapies to patients.\",\n                        btnTitle: \"Read More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative max-w-[450px] w-full aspect-square overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"rounded-lg object-cover w-full\",\n                                    src: \"/images/oncology-therapy-studies-carousel.jpg\",\n                                    alt: \"\",\n                                    fill: true,\n                                    sizes: \"(min-width: 768px) 100vw, 100%\",\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                style: {\n                                    x\n                                },\n                                className: \"flex gap-x-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CarouselStatisticsCard__WEBPACK_IMPORTED_MODULE_2__.CarouselStatisticsCard, {\n                                    card: therapyStudiesStatisticsData\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\OncologyCro\\\\OncologyTherapyStudies.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(OncologyTherapyStudies, \"7GkjZC56oK8KsEN4SaWJAeHXg3g=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useTransform\n    ];\n});\n_c = OncologyTherapyStudies;\nvar _c;\n$RefreshReg$(_c, \"OncologyTherapyStudies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL09uY29sb2d5Q3JvL09uY29sb2d5VGhlcmFweVN0dWRpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0Q7QUFDVztBQUMxQjtBQUNjO0FBQ0M7QUFDakI7QUFDUjtBQUkvQixNQUFNVSwrQkFBK0I7SUFDbkM7UUFDRUMsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLGFBQWE7SUFDZjtDQUNEO0FBRU0sTUFBTUMseUJBQXNEOztJQUNqRSxNQUFNQyxZQUFZZiw2Q0FBTUEsQ0FBYztJQUN0QyxNQUFNLEVBQUVnQixlQUFlLEVBQUUsR0FBR1Ysd0RBQVNBLENBQUM7UUFDcENXLFFBQVFGO0lBQ1Y7SUFFQSxNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FDbERrQjtJQUdGbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsbUJBQW1CO1lBQ3ZCLElBQUlOLFVBQVVPLE9BQU8sRUFBRTtnQkFDckJILGtCQUFrQkosVUFBVU8sT0FBTyxDQUFDQyxXQUFXO1lBQ2pEO1FBQ0Y7UUFFQUY7UUFDQUcsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUo7UUFDbEMsT0FBTyxJQUFNRyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVTDtJQUNwRCxHQUFHLEVBQUU7SUFFTCxNQUFNTSxJQUFJcEIsMkRBQVlBLENBQ3BCUyxpQkFDQTtRQUFDO1FBQUc7S0FBRSxFQUNOO1FBQUM7UUFBVSxJQUFnQyxPQUE3QixDQUFDRSwyQkFBQUEsNEJBQUFBLGlCQUFrQixLQUFLLE1BQUs7S0FBSTtJQUdqRCxxQkFDRSw4REFBQ1U7UUFDQ0MsS0FBS2Q7UUFDTGUsV0FBVTtrQkFFViw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQzFCLGlEQUFTQTs7a0NBQ1IsOERBQUNDLCtEQUFnQkE7d0JBQ2YyQixnQkFBZTt3QkFDZkMsZUFBYzt3QkFDZEMsZ0JBQWU7d0JBQ2ZyQixhQUFZO3dCQUNac0IsVUFBUzs7Ozs7O2tDQUdYLDhEQUFDSjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDckIsa0RBQUtBO29DQUNKcUIsV0FBVTtvQ0FDVk0sS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsSUFBSTtvQ0FDSkMsT0FBTTtvQ0FDTkMsUUFBUTs7Ozs7Ozs7Ozs7MENBSVosOERBQUNoQyxpREFBTUEsQ0FBQ3VCLEdBQUc7Z0NBQUNVLE9BQU87b0NBQUVkO2dDQUFFO2dDQUFHRyxXQUFVOzBDQUNsQyw0RUFBQzNCLDJFQUFzQkE7b0NBQUN1QyxNQUFNaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QyxFQUFFO0dBL0RXSTs7UUFFaUJSLG9EQUFTQTtRQW9CM0JDLHVEQUFZQTs7O0tBdEJYTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9PbmNvbG9neUNyby9PbmNvbG9neVRoZXJhcHlTdHVkaWVzLnRzeD8xYmY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRkMsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbFN0YXRpc3RpY3NDYXJkIH0gZnJvbSBcIi4uL0Nhcm91c2VsU3RhdGlzdGljc0NhcmRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBUaXRsZUNvbnRlbnRDb2xzIH0gZnJvbSBcIi4uL1RpdGxlQ29udGVudENvbHNcIjtcclxuaW1wb3J0IHsgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uY29sb2d5VGhlcmFweVN0dWRpZXMge31cclxuXHJcbmNvbnN0IHRoZXJhcHlTdHVkaWVzU3RhdGlzdGljc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgbnVtYmVyOiAxNTAsXHJcbiAgICBzdWZmaXg6IFwiK1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiZnVsbC1zZXJ2aWNlIG9uY29sb2d5IHByb2plY3RzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW1iZXI6IDE4LFxyXG4gICAgc3VmZml4OiBcIitcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInllYXJzIG9mIGV4cGVyaWVuY2Ugd2l0aCBvbmNvbG9neSB0cmlhbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG51bWJlcjogNSxcclxuICAgIHN1ZmZpeDogXCIrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJ5ZWFycyBvZiBvbmNvbG9neSBleHBlcmllbmNlIHBlciBjb3JlIHRlYW0gbWVtYmVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBudW1iZXI6IDEwMDAsXHJcbiAgICBzdWZmaXg6IFwiK1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwic3RhZmYgYWNyb3NzIHRoZSBnbG9iZSBpbiAyNSsgY291bnRyaWVzXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBPbmNvbG9neVRoZXJhcHlTdHVkaWVzOiBGQzxJT25jb2xvZ3lUaGVyYXB5U3R1ZGllcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0UmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcclxuICAgIHRhcmdldDogdGFyZ2V0UmVmLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY29udGFpbmVyV2lkdGgsIHNldENvbnRhaW5lcldpZHRoXSA9IHVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRhcmdldFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGgodGFyZ2V0UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZURpbWVuc2lvbnMoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZURpbWVuc2lvbnMpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZURpbWVuc2lvbnMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeCA9IHVzZVRyYW5zZm9ybShcclxuICAgIHNjcm9sbFlQcm9ncmVzcyxcclxuICAgIFswLCAxXSxcclxuICAgIFtcIi0xMjAlXCIsIGAtJHsoY29udGFpbmVyV2lkdGggPz8gMCkgKiAwLjMyfXB4YF1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgcmVmPXt0YXJnZXRSZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT1cIjJ4bDpweS1bMTcwcHhdIHhsOnB5LVsxNDBweF0gdy1mdWxsIGgtWzMwMHZoXVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTAgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxUaXRsZUNvbnRlbnRDb2xzXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZVRpdGxlPVwiIXRleHQtWzQ1cHhdICEtdHJhY2tpbmctWzAuNDVdIG1heC13LVs1MCVdIHctZnVsbFwiXHJcbiAgICAgICAgICAgIHRpdGxlRmlyc3RSb3c9XCJBY2NlbGVyYXRlIE9uY29sb2d5IFRoZXJhcHlcIlxyXG4gICAgICAgICAgICB0aXRsZVNlY29uZFJvdz1cIlN0dWRpZXNcIlxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhdGFseXN0IE9uY29sb2d5IGlzIGEgc3BlY2lhbHR5IG9uY29sb2d5IENSTyBkZXZvdGluZyB0aW1lLCBlbmVyZ3ksIGFuZCBjYXBpdGFsIHRvIHN1cHBvcnRpbmcgYmlvdGVjaHMgaW4gYnJpbmdpbmcgbmV4dC1nZW5lcmF0aW9uIGFuZCBub3ZlbCBjYW5jZXIgdGhlcmFwaWVzIHRvIHBhdGllbnRzLlwiXHJcbiAgICAgICAgICAgIGJ0blRpdGxlPVwiUmVhZCBNb3JlXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LVs0NTBweF0gdy1mdWxsIGFzcGVjdC1zcXVhcmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG9iamVjdC1jb3ZlciB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9vbmNvbG9neS10aGVyYXB5LXN0dWRpZXMtY2Fyb3VzZWwuanBnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDc2OHB4KSAxMDB2dywgMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgc3R5bGU9e3sgeCB9fSBjbGFzc05hbWU9XCJmbGV4IGdhcC14LTVcIj5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZCBjYXJkPXt0aGVyYXB5U3R1ZGllc1N0YXRpc3RpY3NEYXRhfSAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWxTdGF0aXN0aWNzQ2FyZCIsIkNvbnRhaW5lciIsIlRpdGxlQ29udGVudENvbHMiLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJtb3Rpb24iLCJJbWFnZSIsInRoZXJhcHlTdHVkaWVzU3RhdGlzdGljc0RhdGEiLCJudW1iZXIiLCJzdWZmaXgiLCJkZXNjcmlwdGlvbiIsIk9uY29sb2d5VGhlcmFweVN0dWRpZXMiLCJ0YXJnZXRSZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJjb250YWluZXJXaWR0aCIsInNldENvbnRhaW5lcldpZHRoIiwidW5kZWZpbmVkIiwidXBkYXRlRGltZW5zaW9ucyIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwieCIsInNlY3Rpb24iLCJyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJjbGFzc05hbWVUaXRsZSIsInRpdGxlRmlyc3RSb3ciLCJ0aXRsZVNlY29uZFJvdyIsImJ0blRpdGxlIiwic3JjIiwiYWx0IiwiZmlsbCIsInNpemVzIiwicHJpb3JpdHkiLCJzdHlsZSIsImNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/OncologyCro/OncologyTherapyStudies.tsx\n"));

/***/ })

});