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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e0f02d39df11\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NzljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImUwZjAyZDM5ZGYxMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/FramerMotion/AnimationCollapsedMotion.tsx":
/*!******************************************************************!*\
  !*** ./src/components/FramerMotion/AnimationCollapsedMotion.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnimationCollapsedMotion: function() { return /* binding */ AnimationCollapsedMotion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\nconst AnimationCollapsedMotion = (param)=>{\n    let { className, duration = 0.3, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        layout: true,\n        variants: {\n            open: {\n                opacity: 1,\n                height: \"auto\"\n            },\n            collapsed: {\n                opacity: 0,\n                height: 0\n            }\n        },\n        initial: \"collapsed\",\n        animate: \"open\",\n        exit: \"collapsed\",\n        transition: {\n            duration,\n            ease: \"easeInOut\"\n        },\n        className: className,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Andonovic\\\\Desktop\\\\catalyst\\\\src\\\\components\\\\FramerMotion\\\\AnimationCollapsedMotion.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimationCollapsedMotion;\nvar _c;\n$RefreshReg$(_c, \"AnimationCollapsedMotion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZyYW1lck1vdGlvbi9BbmltYXRpb25Db2xsYXBzZWRNb3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDdUM7QUFPaEMsTUFBTUMsMkJBQTBEO1FBQUMsRUFDdEVDLFNBQVMsRUFDVEMsV0FBVyxHQUFHLEVBQ2RDLFFBQVEsRUFDVDtJQUNDLHFCQUNFLDhEQUFDSixpREFBTUEsQ0FBQ0ssR0FBRztRQUNUQyxNQUFNO1FBQ05DLFVBQVU7WUFDUkMsTUFBTTtnQkFBRUMsU0FBUztnQkFBR0MsUUFBUTtZQUFPO1lBQ25DQyxXQUFXO2dCQUFFRixTQUFTO2dCQUFHQyxRQUFRO1lBQUU7UUFDckM7UUFDQUUsU0FBUTtRQUNSQyxTQUFRO1FBQ1JDLE1BQUs7UUFDTEMsWUFBWTtZQUFFWjtZQUFVYSxNQUFNO1FBQVk7UUFDMUNkLFdBQVdBO2tCQUVWRTs7Ozs7O0FBR1AsRUFBRTtLQXJCV0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRnJhbWVyTW90aW9uL0FuaW1hdGlvbkNvbGxhcHNlZE1vdGlvbi50c3g/YzU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvbkNvbGxhcHNlZE1vdGlvbiBleHRlbmRzIFByb3BzV2l0aENoaWxkcmVuIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBbmltYXRpb25Db2xsYXBzZWRNb3Rpb246IEZDPElBbmltYXRpb25Db2xsYXBzZWRNb3Rpb24+ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgZHVyYXRpb24gPSAwLjMsXHJcbiAgY2hpbGRyZW4sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgbGF5b3V0XHJcbiAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgb3BlbjogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgY29sbGFwc2VkOiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9LFxyXG4gICAgICB9fVxyXG4gICAgICBpbml0aWFsPVwiY29sbGFwc2VkXCJcclxuICAgICAgYW5pbWF0ZT1cIm9wZW5cIlxyXG4gICAgICBleGl0PVwiY29sbGFwc2VkXCJcclxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbiwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRpb25Db2xsYXBzZWRNb3Rpb24iLCJjbGFzc05hbWUiLCJkdXJhdGlvbiIsImNoaWxkcmVuIiwiZGl2IiwibGF5b3V0IiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsImhlaWdodCIsImNvbGxhcHNlZCIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FramerMotion/AnimationCollapsedMotion.tsx\n"));

/***/ })

});