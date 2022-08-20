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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Technologies/TechnologiesStyles */ \"./src/components/Technologies/TechnologiesStyles.js\");\n/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/di */ \"./node_modules/react-icons/di/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"E:\\\\xampp\\\\htdocs\\\\camscott.me-2022\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node === null || node === void 0 ? void 0 : node.scrollTo({\n      left: left,\n      behavior: 'smooth'\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_1__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      children: \"Managed Services\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \"Sleep well at night knowing your website or application is in good hands.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: \"We can provide managed hosting solutions for your website or application.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.List, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiEclipse, {\n            size: \"3rem\",\n            style: {\n              color: '#ddbb85'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"Bronze\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                children: \"- Four hours of after care development per month\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiEclipse, {\n            size: \"3rem\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"Silver\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: \"We are experienced with C# .Net, React, Node, GraphQL and Sanity.io\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"picture\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_6__.DiEclipse, {\n            size: \"3rem\",\n            style: {\n              color: '#ffd700'\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListTitle, {\n            children: \"Gold\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Technologies_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_4__.ListParagraph, {\n            children: \"Modern user experiences and interfaces\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0dELENBbkpEOztHQUFNeEI7O0tBQUFBO0FBcUpOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7TGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZX0gZnJvbSBcIi4uL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXNTdHlsZXNcIjtcclxuaW1wb3J0IHtEaUF0b20sIERpRWNsaXBzZSwgRGlNZXRlb3IsIERpUGhvdG9zaG9wLCBEaVJlYWN0LCBEaVdvcmRwcmVzc30gZnJvbSBcInJlYWN0LWljb25zL2RpXCI7XHJcblxyXG5cclxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlPy5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XHJcbiAgICAgIFxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPk1hbmFnZWQgU2VydmljZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgIFNsZWVwIHdlbGwgYXQgbmlnaHQga25vd2luZyB5b3VyIHdlYnNpdGUgb3IgYXBwbGljYXRpb24gaXMgaW4gZ29vZCBoYW5kcy5cclxuICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgPHA+V2UgY2FuIHByb3ZpZGUgbWFuYWdlZCBob3N0aW5nIHNvbHV0aW9ucyBmb3IgeW91ciB3ZWJzaXRlIG9yIGFwcGxpY2F0aW9uLjwvcD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxEaUVjbGlwc2Ugc2l6ZT1cIjNyZW1cIiBzdHlsZT17e2NvbG9yOiAnI2RkYmI4NSd9fS8+XHJcbiAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpc3RUaXRsZT5Ccm9uemU8L0xpc3RUaXRsZT5cclxuICAgICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPi0gRm91ciBob3VycyBvZiBhZnRlciBjYXJlIGRldmVsb3BtZW50IHBlciBtb250aDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxEaUVjbGlwc2Ugc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxMaXN0VGl0bGU+U2lsdmVyPC9MaXN0VGl0bGU+XHJcbiAgICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIFdlIGFyZSBleHBlcmllbmNlZCB3aXRoIEMjIC5OZXQsIFJlYWN0LCBOb2RlLCBHcmFwaFFMIGFuZCBTYW5pdHkuaW9cclxuICAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgPHBpY3R1cmU+XHJcbiAgICAgICAgICAgIDxEaUVjbGlwc2Ugc2l6ZT1cIjNyZW1cIiBzdHlsZT17eyBjb2xvcjogJyNmZmQ3MDAnIH19IC8+XHJcbiAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExpc3RUaXRsZT5Hb2xkPC9MaXN0VGl0bGU+XHJcbiAgICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgIE1vZGVybiB1c2VyIGV4cGVyaWVuY2VzIGFuZCBpbnRlcmZhY2VzXHJcbiAgICAgICAgICAgIDwvTGlzdFBhcmFncmFwaD5cclxuICAgICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIHsvKjxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT4qL31cclxuICAgICAgey8qICA8PiovfVxyXG4gICAgICB7LyogICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoKi99XHJcbiAgICAgIHsvKiAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUqL31cclxuICAgICAgey8qICAgICAgICBrZXk9e2luZGV4fSovfVxyXG4gICAgICB7LyogICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT4qL31cclxuICAgICAgey8qICAgICAgICA8Q2Fyb3VzZWxJdGVtKi99XHJcbiAgICAgIHsvKiAgICAgICAgICBpbmRleD17aW5kZXh9Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH0qL31cclxuICAgICAgey8qICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX0qL31cclxuICAgICAgey8qICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9PiovfVxyXG4gICAgICB7LyogICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPiovfVxyXG4gICAgICB7LyogICAgICAgICAgICB7YCR7aXRlbS55ZWFyfWB9Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWcqL31cclxuICAgICAgey8qICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4qL31cclxuICAgICAgey8qICAgICAgICAgICAgICA8cGF0aCovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PVwiMC4zM1wiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgey8qICAgICAgICAgICAgICA8ZGVmcz4qL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIiovfVxyXG4gICAgICB7LyogICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIndoaXRlXCIgLz4qL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgPHN0b3AqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgICBzdG9wQ29sb3I9XCJ3aGl0ZVwiKi99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgc3RvcE9wYWNpdHk9XCIwXCIqL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgICAgLz4qL31cclxuICAgICAgey8qICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICAgICAgPC9kZWZzPiovfVxyXG4gICAgICB7LyogICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz4qL31cclxuICAgICAgey8qICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+Ki99XHJcbiAgICAgIHsvKiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD4qL31cclxuICAgICAgey8qICAgICAgICA8L0Nhcm91c2VsSXRlbT4qL31cclxuICAgICAgey8qICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+Ki99XHJcbiAgICAgIHsvKiAgICApKX0qL31cclxuICAgICAgey8qICA8Lz4qL31cclxuICAgICAgey8qPC9DYXJvdXNlbENvbnRhaW5lcj4qL31cclxuICAgICAgey8qPENhcm91c2VsQnV0dG9ucz4qL31cclxuICAgICAgey8qICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsqL31cclxuICAgICAgey8qICAgIHJldHVybiAoKi99XHJcbiAgICAgIHsvKiAgICAgIDxDYXJvdXNlbEJ1dHRvbiovfVxyXG4gICAgICB7LyogICAgICAgIGtleT17aW5kZXh9Ki99XHJcbiAgICAgIHsvKiAgICAgICAgaW5kZXg9e2luZGV4fSovfVxyXG4gICAgICB7LyogICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX0qL31cclxuICAgICAgey8qICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfSovfVxyXG4gICAgICB7LyogICAgICAgIHR5cGU9XCJidXR0b25cIj4qL31cclxuICAgICAgey8qICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPiovfVxyXG4gICAgICB7LyogICAgICA8L0Nhcm91c2VsQnV0dG9uPiovfVxyXG4gICAgICB7LyogICAgKTsqL31cclxuICAgICAgey8qICB9KX0qL31cclxuICAgICAgey8qPC9DYXJvdXNlbEJ1dHRvbnM+Ki99XHJcbiAgICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUaW1lTGluZURhdGEiLCJTZWN0aW9uIiwiU2VjdGlvbkRpdmlkZXIiLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25UaXRsZSIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIkxpc3QiLCJMaXN0Q29udGFpbmVyIiwiTGlzdEl0ZW0iLCJMaXN0UGFyYWdyYXBoIiwiTGlzdFRpdGxlIiwiRGlBdG9tIiwiRGlFY2xpcHNlIiwiRGlNZXRlb3IiLCJEaVBob3Rvc2hvcCIsIkRpUmVhY3QiLCJEaVdvcmRwcmVzcyIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwibGVuZ3RoIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});