"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Carousel/CarouselDragFree.tsx":
/*!******************************************************!*\
  !*** ./src/components/Carousel/CarouselDragFree.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CarouselDragFree: function() { return /* binding */ CarouselDragFree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var embla_carousel_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! embla-carousel-react */ \"(app-pages-browser)/./node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js\");\n/* harmony import */ var _svg_LeftArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/svg/LeftArrow */ \"(app-pages-browser)/./src/svg/LeftArrow.tsx\");\n/* harmony import */ var _svg_RightArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/svg/RightArrow */ \"(app-pages-browser)/./src/svg/RightArrow.tsx\");\n/* harmony import */ var _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/SegmentPathContext */ \"(app-pages-browser)/./src/context/SegmentPathContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CarouselDragFree = (param)=>{\n    let { slides, children, className, classNameWrap, classNamePagination, pagination = false } = param;\n    _s();\n    const [emblaRef, emblaApi] = (0,embla_carousel_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { firstSegment } = (0,_context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_5__.useSegmentPath)();\n    const borderColor = firstSegment === \"oncology-cro\" ? \"var(--clr-cyan)\" : firstSegment === \"catalyst-flex\" ? \"var(--clr-green)\" : \"var(--clr-gold)\";\n    const bgHoverColor = firstSegment === \"oncology-cro\" ? \"hover:bg-[var(--clr-cyan)]\" : firstSegment === \"catalyst-flex\" ? \"hover:bg-[var(--clr-green)]\" : \"hover:bg-[var(--clr-gold)]\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (emblaApi) {\n            const updateIndex = ()=>{\n                const index = emblaApi.selectedScrollSnap();\n                setCurrentIndex(index);\n            };\n            emblaApi.on(\"select\", updateIndex);\n            updateIndex();\n            return ()=>{\n                emblaApi.off(\"select\", updateIndex);\n            };\n        }\n    }, [\n        emblaApi\n    ]);\n    const goToPrevSlide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (emblaApi) {\n            emblaApi.scrollPrev();\n        }\n    }, [\n        emblaApi\n    ]);\n    const goToNextSlide = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (emblaApi) {\n            emblaApi.scrollNext();\n        }\n    }, [\n        emblaApi\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"overflow-hidden py-[clamp(0px,2.08vw,40px)] touch-pan-y\", classNameWrap),\n        ref: emblaRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"flex gap-x-8 py-10\", className),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            pagination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"flex items-center justify-center gap-4\", classNamePagination),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToPrevSlide,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"rounded-full border-2 p-3.5\", bgHoverColor, currentIndex === 0 ? \"pointer-events-none !border-inherit hover:!bg-inherit\" : \"cursor-pointer\"),\n                        style: {\n                            borderColor: borderColor\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_LeftArrow__WEBPACK_IMPORTED_MODULE_3__.LeftArrow, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goToNextSlide,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"rounded-full border-2 p-3.5\", bgHoverColor, currentIndex === slides.length - 1 ? \"pointer-events-none !border-inherit hover:!bg-inherit\" : \"cursor-pointer\"),\n                        style: {\n                            borderColor: borderColor\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_svg_RightArrow__WEBPACK_IMPORTED_MODULE_4__.RightArrow, {\n                            className: \"pt-[1px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\Carousel\\\\CarouselDragFree.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarouselDragFree, \"TlC3TOOVwBgq+KjNpL2JWc43cDo=\", false, function() {\n    return [\n        embla_carousel_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _context_SegmentPathContext__WEBPACK_IMPORTED_MODULE_5__.useSegmentPath\n    ];\n});\n_c = CarouselDragFree;\nvar _c;\n$RefreshReg$(_c, \"CarouselDragFree\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsRHJhZ0ZyZWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0I7QUFDbUI7QUFDUjtBQUNFO0FBQ2dCO0FBY3ZELE1BQU1RLG1CQUEwQztRQUFDLEVBQ3REQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxhQUFhLEVBQ2JDLG1CQUFtQixFQUNuQkMsYUFBYSxLQUFLLEVBQ25COztJQUNDLE1BQU0sQ0FBQ0MsVUFBVUMsU0FBUyxHQUFHWixnRUFBZ0JBO0lBQzdDLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNLEVBQUVpQixZQUFZLEVBQUUsR0FBR1osMkVBQWNBO0lBRXZDLE1BQU1hLGNBQ0pELGlCQUFpQixpQkFDYixvQkFDQUEsaUJBQWlCLGtCQUNqQixxQkFDQTtJQUVOLE1BQU1FLGVBQ0pGLGlCQUFpQixpQkFDYiwrQkFDQUEsaUJBQWlCLGtCQUNqQixnQ0FDQTtJQUVObEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxVQUFVO1lBQ1osTUFBTU0sY0FBYztnQkFDbEIsTUFBTUMsUUFBUVAsU0FBU1Esa0JBQWtCO2dCQUN6Q04sZ0JBQWdCSztZQUNsQjtZQUVBUCxTQUFTUyxFQUFFLENBQUMsVUFBVUg7WUFDdEJBO1lBRUEsT0FBTztnQkFDTE4sU0FBU1UsR0FBRyxDQUFDLFVBQVVKO1lBQ3pCO1FBQ0Y7SUFDRixHQUFHO1FBQUNOO0tBQVM7SUFFYixNQUFNVyxnQkFBZ0IzQixrREFBV0EsQ0FBQztRQUNoQyxJQUFJZ0IsVUFBVTtZQUNaQSxTQUFTWSxVQUFVO1FBQ3JCO0lBQ0YsR0FBRztRQUFDWjtLQUFTO0lBRWIsTUFBTWEsZ0JBQWdCN0Isa0RBQVdBLENBQUM7UUFDaEMsSUFBSWdCLFVBQVU7WUFDWkEsU0FBU2MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ2Q7S0FBUztJQUViLHFCQUNFLDhEQUFDZTtRQUNDcEIsV0FBV1IsOENBQUVBLENBQ1gsMkRBQ0FTO1FBRUZvQixLQUFLakI7OzBCQUVMLDhEQUFDZ0I7Z0JBQUlwQixXQUFXUiw4Q0FBRUEsQ0FBQyxzQkFBc0JROzBCQUFhRDs7Ozs7O1lBRXJESSw0QkFDQyw4REFBQ2lCO2dCQUNDcEIsV0FBV1IsOENBQUVBLENBQ1gsMENBQ0FVOztrQ0FHRiw4REFBQ29CO3dCQUNDQyxTQUFTUDt3QkFDVGhCLFdBQVdSLDhDQUFFQSxDQUNYLCtCQUNBa0IsY0FDQUosaUJBQWlCLElBQ2IsMERBQ0E7d0JBRU5rQixPQUFPOzRCQUFFZixhQUFhQTt3QkFBWTtrQ0FFbEMsNEVBQUNmLHFEQUFTQTs7Ozs7Ozs7OztrQ0FHWiw4REFBQzRCO3dCQUNDQyxTQUFTTDt3QkFDVGxCLFdBQVdSLDhDQUFFQSxDQUNYLCtCQUNBa0IsY0FDQUosaUJBQWlCUixPQUFPMkIsTUFBTSxHQUFHLElBQzdCLDBEQUNBO3dCQUVORCxPQUFPOzRCQUFFZixhQUFhQTt3QkFBWTtrQ0FFbEMsNEVBQUNkLHVEQUFVQTs0QkFBQ0ssV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEMsRUFBRTtHQXZHV0g7O1FBUWtCSiw0REFBZ0JBO1FBR3BCRyx1RUFBY0E7OztLQVg1QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWxEcmFnRnJlZS50c3g/Y2U2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZDLFxyXG4gIFByb3BzV2l0aENoaWxkcmVuLFxyXG4gIFJlYWN0Tm9kZSxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCB1c2VFbWJsYUNhcm91c2VsIGZyb20gXCJlbWJsYS1jYXJvdXNlbC1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMZWZ0QXJyb3cgfSBmcm9tIFwiQC9zdmcvTGVmdEFycm93XCI7XHJcbmltcG9ydCB7IFJpZ2h0QXJyb3cgfSBmcm9tIFwiQC9zdmcvUmlnaHRBcnJvd1wiO1xyXG5pbXBvcnQgeyB1c2VTZWdtZW50UGF0aCB9IGZyb20gXCJAL2NvbnRleHQvU2VnbWVudFBhdGhDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgSUNhcm91c2VsRHJhZ0ZyZWVcclxuICBleHRlbmRzIFByb3BzV2l0aENoaWxkcmVuPHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVbXTtcclxuICB9PiB7XHJcbiAgc2xpZGVzOiBzdHJpbmdbXTtcclxuICBwYWdpbmF0aW9uPzogYm9vbGVhbjtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lV3JhcD86IHN0cmluZztcclxuICBjbGFzc05hbWVQYWdpbmF0aW9uPzogc3RyaW5nO1xyXG4gIC8vIG9wdGlvbnM/OiBFbWJsYU9wdGlvbnNUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxEcmFnRnJlZTogRkM8SUNhcm91c2VsRHJhZ0ZyZWU+ID0gKHtcclxuICBzbGlkZXMsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xhc3NOYW1lLFxyXG4gIGNsYXNzTmFtZVdyYXAsXHJcbiAgY2xhc3NOYW1lUGFnaW5hdGlvbixcclxuICBwYWdpbmF0aW9uID0gZmFsc2UsXHJcbn0pID0+IHtcclxuICBjb25zdCBbZW1ibGFSZWYsIGVtYmxhQXBpXSA9IHVzZUVtYmxhQ2Fyb3VzZWwoKTtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHsgZmlyc3RTZWdtZW50IH0gPSB1c2VTZWdtZW50UGF0aCgpO1xyXG5cclxuICBjb25zdCBib3JkZXJDb2xvciA9XHJcbiAgICBmaXJzdFNlZ21lbnQgPT09IFwib25jb2xvZ3ktY3JvXCJcclxuICAgICAgPyBcInZhcigtLWNsci1jeWFuKVwiXHJcbiAgICAgIDogZmlyc3RTZWdtZW50ID09PSBcImNhdGFseXN0LWZsZXhcIlxyXG4gICAgICA/IFwidmFyKC0tY2xyLWdyZWVuKVwiXHJcbiAgICAgIDogXCJ2YXIoLS1jbHItZ29sZClcIjtcclxuXHJcbiAgY29uc3QgYmdIb3ZlckNvbG9yID1cclxuICAgIGZpcnN0U2VnbWVudCA9PT0gXCJvbmNvbG9neS1jcm9cIlxyXG4gICAgICA/IFwiaG92ZXI6YmctW3ZhcigtLWNsci1jeWFuKV1cIlxyXG4gICAgICA6IGZpcnN0U2VnbWVudCA9PT0gXCJjYXRhbHlzdC1mbGV4XCJcclxuICAgICAgPyBcImhvdmVyOmJnLVt2YXIoLS1jbHItZ3JlZW4pXVwiXHJcbiAgICAgIDogXCJob3ZlcjpiZy1bdmFyKC0tY2xyLWdvbGQpXVwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVtYmxhQXBpKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZUluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZW1ibGFBcGkuc2VsZWN0ZWRTY3JvbGxTbmFwKCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGVtYmxhQXBpLm9uKFwic2VsZWN0XCIsIHVwZGF0ZUluZGV4KTtcclxuICAgICAgdXBkYXRlSW5kZXgoKTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgZW1ibGFBcGkub2ZmKFwic2VsZWN0XCIsIHVwZGF0ZUluZGV4KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbZW1ibGFBcGldKTtcclxuXHJcbiAgY29uc3QgZ29Ub1ByZXZTbGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChlbWJsYUFwaSkge1xyXG4gICAgICBlbWJsYUFwaS5zY3JvbGxQcmV2KCk7XHJcbiAgICB9XHJcbiAgfSwgW2VtYmxhQXBpXSk7XHJcblxyXG4gIGNvbnN0IGdvVG9OZXh0U2xpZGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoZW1ibGFBcGkpIHtcclxuICAgICAgZW1ibGFBcGkuc2Nyb2xsTmV4dCgpO1xyXG4gICAgfVxyXG4gIH0sIFtlbWJsYUFwaV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwib3ZlcmZsb3ctaGlkZGVuIHB5LVtjbGFtcCgwcHgsMi4wOHZ3LDQwcHgpXSB0b3VjaC1wYW4teVwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVdyYXBcclxuICAgICAgKX1cclxuICAgICAgcmVmPXtlbWJsYVJlZn1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZmxleCBnYXAteC04IHB5LTEwXCIsIGNsYXNzTmFtZSl9PntjaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZVBhZ2luYXRpb25cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldlNsaWRlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJvcmRlci0yIHAtMy41XCIsXHJcbiAgICAgICAgICAgICAgYmdIb3ZlckNvbG9yLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyBcInBvaW50ZXItZXZlbnRzLW5vbmUgIWJvcmRlci1pbmhlcml0IGhvdmVyOiFiZy1pbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBib3JkZXJDb2xvciB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGVmdEFycm93IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0U2xpZGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYm9yZGVyLTIgcC0zLjVcIixcclxuICAgICAgICAgICAgICBiZ0hvdmVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgPyBcInBvaW50ZXItZXZlbnRzLW5vbmUgIWJvcmRlci1pbmhlcml0IGhvdmVyOiFiZy1pbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIDogXCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBib3JkZXJDb2xvciB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UmlnaHRBcnJvdyBjbGFzc05hbWU9XCJwdC1bMXB4XVwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY24iLCJ1c2VFbWJsYUNhcm91c2VsIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyIsInVzZVNlZ21lbnRQYXRoIiwiQ2Fyb3VzZWxEcmFnRnJlZSIsInNsaWRlcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lV3JhcCIsImNsYXNzTmFtZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwiZW1ibGFSZWYiLCJlbWJsYUFwaSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImZpcnN0U2VnbWVudCIsImJvcmRlckNvbG9yIiwiYmdIb3ZlckNvbG9yIiwidXBkYXRlSW5kZXgiLCJpbmRleCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsIm9uIiwib2ZmIiwiZ29Ub1ByZXZTbGlkZSIsInNjcm9sbFByZXYiLCJnb1RvTmV4dFNsaWRlIiwic2Nyb2xsTmV4dCIsImRpdiIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Carousel/CarouselDragFree.tsx\n"));

/***/ })

});