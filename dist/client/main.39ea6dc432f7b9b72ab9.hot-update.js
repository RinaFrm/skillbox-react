webpackHotUpdate("main",{

/***/ "./src/store/posts/postsActions.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (107:32)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|                                     // commentsQty: post.data.num_comments,\\n|                                     // postText: post.data.selfText,\\n>                                 };\\n|                             });\\n|                             dispatch((0, exports.fetchPostsSuccess)({\");\n\n//# sourceURL=webpack:///./src/store/posts/postsActions.ts?");

/***/ }),

/***/ "./src/store/posts/postsReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = void 0;\r\nvar postsActions_1 = __webpack_require__(/*! ./postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar postsReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case postsActions_1.FETCH_POSTS:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n            return __assign(__assign({}, state), { data: __spreadArray(__spreadArray([], state.data, true), action.data, true), after: action.after, loading: false, fetchCounter: action.fetchCounter });\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/postsReducer.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar commentActions_1 = __webpack_require__(/*! ./comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar commentReducer_1 = __webpack_require__(/*! ./comment/commentReducer */ \"./src/store/comment/commentReducer.ts\");\r\nvar meActions_1 = __webpack_require__(/*! ./me/meActions */ \"./src/store/me/meActions.ts\");\r\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/store/me/meReducer.ts\");\r\nvar postsActions_1 = __webpack_require__(/*! ./posts/postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar postsReducer_1 = __webpack_require__(/*! ./posts/postsReducer */ \"./src/store/posts/postsReducer.ts\");\r\nvar tokenActions_1 = __webpack_require__(/*! ./token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nvar tokenReducer_1 = __webpack_require__(/*! ./token/tokenReducer */ \"./src/store/token/tokenReducer.ts\");\r\nvar initialState = {\r\n    comment: {\r\n        text: ''\r\n    },\r\n    token: {\r\n        loading: false,\r\n        error: '',\r\n        data: ''\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {\r\n            name: '',\r\n            iconImg: ''\r\n        }\r\n    },\r\n    posts: {\r\n        loading: false,\r\n        error: '',\r\n        data: [],\r\n        after: '',\r\n        fetchCounter: 0\r\n    }\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case tokenActions_1.SAVE_TOKEN:\r\n        case tokenActions_1.SAVE_TOKEN_ERROR:\r\n        case tokenActions_1.SAVE_TOKEN_SUCCESS:\r\n            return __assign(__assign({}, state), { token: (0, tokenReducer_1.tokenReducer)(state.token, action) });\r\n        case meActions_1.ME_REQUEST:\r\n        case meActions_1.ME_REQUEST_ERROR:\r\n        case meActions_1.ME_REQUEST_SUCESS:\r\n            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });\r\n        case postsActions_1.FETCH_POSTS:\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n            return __assign(__assign({}, state), { posts: (0, postsReducer_1.postsReducer)(state.posts, action) });\r\n        case commentActions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { comment: (0, commentReducer_1.commentReducer)(state.comment, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ })

})