"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Technologies/TechnologiesStyles */ \"./src/components/Technologies/TechnologiesStyles.js\");\n/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons */ \"./node_modules/react-icons/lib/esm/index.js\");\n/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/all */ \"./node_modules/react-icons/all.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"E:\\\\xampp\\\\htdocs\\\\camscott.me-2022\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node === null || node === void 0 ? void 0 : node.scrollTo({\n      left: left,\n      behavior: 'smooth'\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      children: \"Managed Services\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \"Sleep well at night knowing your website or application is in good hands.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: \"We can provide managed hosting solutions for your website or application.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.List, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons_all__WEBPACK_IMPORTED_MODULE_7__.IoIosMedal, {\n            size: \"3rem\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"WordPress\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: \"Custom tailored responsive WordPress websites\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_5__.DiReact, {\n            size: \"3rem\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"Applications\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: \"We are experienced with C# .Net, React, Node, GraphQL and Sanity.io\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons__WEBPACK_IMPORTED_MODULE_5__.DiPhotoshop, {\n            size: \"3rem\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"UI/UX\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: \"Modern user experiences and interfaces\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TGluZS5qcz85MTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xyXG5pbXBvcnQge0xpc3QsIExpc3RDb250YWluZXIsIExpc3RJdGVtLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGV9IGZyb20gXCIuLi9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzXCI7XHJcbmltcG9ydCB7RGlBdG9tLCBEaU1ldGVvciwgRGlQaG90b3Nob3AsIERpUmVhY3QsIERpV29yZHByZXNzfSBmcm9tIFwicmVhY3QtaWNvbnNcIjtcclxuaW1wb3J0IHsgSW9Jb3NNZWRhbCB9IGZyb20gXCJyZWFjdC1pY29ucy9hbGxcIjtcclxuXHJcblxyXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XHJcblxyXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xyXG4gICAgcmV0dXJuIG5vZGU/LnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpKTtcclxuICAgICAgXHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+TWFuYWdlZCBTZXJ2aWNlczwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgU2xlZXAgd2VsbCBhdCBuaWdodCBrbm93aW5nIHlvdXIgd2Vic2l0ZSBvciBhcHBsaWNhdGlvbiBpcyBpbiBnb29kIGhhbmRzLlxyXG4gICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICA8cD5XZSBjYW4gcHJvdmlkZSBtYW5hZ2VkIGhvc3Rpbmcgc29sdXRpb25zIGZvciB5b3VyIHdlYnNpdGUgb3IgYXBwbGljYXRpb24uPC9wPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgPElvSW9zTWVkYWwgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaXN0VGl0bGU+V29yZFByZXNzPC9MaXN0VGl0bGU+XHJcbiAgICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIEN1c3RvbSB0YWlsb3JlZCByZXNwb25zaXZlIFdvcmRQcmVzcyB3ZWJzaXRlc1xyXG4gICAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgPERpUmVhY3Qgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaXN0VGl0bGU+QXBwbGljYXRpb25zPC9MaXN0VGl0bGU+XHJcbiAgICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIFdlIGFyZSBleHBlcmllbmNlZCB3aXRoIEMjIC5OZXQsIFJlYWN0LCBOb2RlLCBHcmFwaFFMIGFuZCBTYW5pdHkuaW9cclxuICAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxEaVBob3Rvc2hvcCBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpc3RUaXRsZT5VSS9VWDwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBNb2Rlcm4gdXNlciBleHBlcmllbmNlcyBhbmQgaW50ZXJmYWNlc1xyXG4gICAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICB7Lyo8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+Ki99XHJcbiAgICAgIHsvKiAgPD4qL31cclxuICAgICAgey8qICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKCovfVxyXG4gICAgICB7LyogICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlKi99XHJcbiAgICAgIHsvKiAgICAgICAga2V5PXtpbmRleH0qL31cclxuICAgICAgey8qICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX0+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgPENhcm91c2VsSXRlbSovfVxyXG4gICAgICB7LyogICAgICAgICAgaW5kZXg9e2luZGV4fSovfVxyXG4gICAgICB7LyogICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfT4qL31cclxuICAgICAgey8qICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT4qL31cclxuICAgICAgey8qICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfSovfVxyXG4gICAgICB7LyogICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIGhlaWdodD1cIjZcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIGZpbGw9XCJub25lXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgPHBhdGgqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT1cIjAuMzNcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIC8+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgPGRlZnM+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCJ3aGl0ZVwiIC8+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIDxzdG9wKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgc3RvcENvbG9yPVwid2hpdGVcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICAgIHN0b3BPcGFjaXR5PVwiMFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIC8+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIDwvZGVmcz4qL31cclxuICAgICAgey8qICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPiovfVxyXG4gICAgICB7LyogICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgPC9DYXJvdXNlbEl0ZW0+Ki99XHJcbiAgICAgIHsvKiAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPiovfVxyXG4gICAgICB7LyogICAgKSl9Ki99XHJcbiAgICAgIHsvKiAgPC8+Ki99XHJcbiAgICAgIHsvKjwvQ2Fyb3VzZWxDb250YWluZXI+Ki99XHJcbiAgICAgIHsvKjxDYXJvdXNlbEJ1dHRvbnM+Ki99XHJcbiAgICAgIHsvKiAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7Ki99XHJcbiAgICAgIHsvKiAgICByZXR1cm4gKCovfVxyXG4gICAgICB7LyogICAgICA8Q2Fyb3VzZWxCdXR0b24qL31cclxuICAgICAgey8qICAgICAgICBrZXk9e2luZGV4fSovfVxyXG4gICAgICB7LyogICAgICAgIGluZGV4PXtpbmRleH0qL31cclxuICAgICAgey8qICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19Ki99XHJcbiAgICAgIHsvKiAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX0qL31cclxuICAgICAgey8qICAgICAgICB0eXBlPVwiYnV0dG9uXCI+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz4qL31cclxuICAgICAgey8qICAgICAgPC9DYXJvdXNlbEJ1dHRvbj4qL31cclxuICAgICAgey8qICAgICk7Ki99XHJcbiAgICAgIHsvKiAgfSl9Ki99XHJcbiAgICAgIHsvKjwvQ2Fyb3VzZWxCdXR0b25zPiovfVxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVGltZUxpbmVEYXRhIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90IiwiQ2Fyb3VzZWxCdXR0b25zIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbEl0ZW0iLCJDYXJvdXNlbEl0ZW1JbWciLCJDYXJvdXNlbEl0ZW1UZXh0IiwiQ2Fyb3VzZWxJdGVtVGl0bGUiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJMaXN0IiwiTGlzdENvbnRhaW5lciIsIkxpc3RJdGVtIiwiTGlzdFBhcmFncmFwaCIsIkxpc3RUaXRsZSIsIkRpQXRvbSIsIkRpTWV0ZW9yIiwiRGlQaG90b3Nob3AiLCJEaVJlYWN0IiwiRGlXb3JkcHJlc3MiLCJJb0lvc01lZGFsIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJsZW5ndGgiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiaGFuZGxlU2Nyb2xsIiwiaW5kZXgiLCJyb3VuZCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});