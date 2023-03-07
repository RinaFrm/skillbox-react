webpackHotUpdate("main",{

/***/ "./src/store/posts/postsReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = void 0;\r\nvar postsActions_1 = __webpack_require__(/*! ./postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar postsReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case postsActions_1.FETCH_POSTS:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n            return __assign(__assign({}, state), { data: __spreadArray(__spreadArray([], state.data, true), action.data, true), after: action.after, loading: false, fetchCounter: action.fetchCounter });\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/postsReducer.ts?");

/***/ })

})