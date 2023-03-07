webpackHotUpdate("main",{

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar tokenActions_1 = __webpack_require__(/*! ../store/token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nfunction useToken() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.token.loading; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    react_1.default.useEffect(function () {\r\n        var code = window.__code__;\r\n        var clientId = window.__clientId__;\r\n        var redditSecret = window.__redditSecret__;\r\n        if (code) {\r\n            //@ts-ignore\r\n            dispatch((0, tokenActions_1.saveTokenAsync)(code, clientId, redditSecret));\r\n        }\r\n    }, []);\r\n    return { token: token, loading: loading };\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar commentActions_1 = __webpack_require__(/*! ./comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar commentReducer_1 = __webpack_require__(/*! ./comment/commentReducer */ \"./src/store/comment/commentReducer.ts\");\r\nvar meActions_1 = __webpack_require__(/*! ./me/meActions */ \"./src/store/me/meActions.ts\");\r\nvar meReducer_1 = __webpack_require__(/*! ./me/meReducer */ \"./src/store/me/meReducer.ts\");\r\nvar postsActions_1 = __webpack_require__(/*! ./posts/postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar postsReducer_1 = __webpack_require__(/*! ./posts/postsReducer */ \"./src/store/posts/postsReducer.ts\");\r\nvar tokenActions_1 = __webpack_require__(/*! ./token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nvar tokenReducer_1 = __webpack_require__(/*! ./token/tokenReducer */ \"./src/store/token/tokenReducer.ts\");\r\nvar initialState = {\r\n    comment: {\r\n        text: ''\r\n    },\r\n    token: {\r\n        loading: false,\r\n        error: '',\r\n        data: ''\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {\r\n            name: '',\r\n            iconImg: ''\r\n        }\r\n    },\r\n    posts: {\r\n        loading: false,\r\n        error: '',\r\n        data: [],\r\n        after: '',\r\n        fetchCounter: 0\r\n    }\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case tokenActions_1.SAVE_TOKEN:\r\n        case tokenActions_1.SAVE_TOKEN_ERROR:\r\n        case tokenActions_1.SAVE_TOKEN_SUCCESS:\r\n            return __assign(__assign({}, state), { token: (0, tokenReducer_1.tokenReducer)(state.token, action) });\r\n        case meActions_1.ME_REQUEST:\r\n        case meActions_1.ME_REQUEST_ERROR:\r\n        case meActions_1.ME_REQUEST_SUCESS:\r\n            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });\r\n        case postsActions_1.FETCH_POSTS:\r\n        case postsActions_1.FETCH_POSTS_ERROR:\r\n        case postsActions_1.FETCH_POSTS_SUCCESS:\r\n            return __assign(__assign({}, state), { posts: (0, postsReducer_1.postsReducer)(state.posts, action) });\r\n        case commentActions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { comment: (0, commentReducer_1.commentReducer)(state.comment, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/reducer.ts?");

/***/ }),

/***/ "./src/store/token/tokenActions.ts":
/*!*****************************************!*\
  !*** ./src/store/token/tokenActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenAsync = exports.saveTokenError = exports.SAVE_TOKEN_ERROR = exports.saveTokenSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveToken = exports.SAVE_TOKEN = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nexports.SAVE_TOKEN = 'TOKEN_REQUEST';\r\nvar saveToken = function () { return ({\r\n    type: exports.SAVE_TOKEN\r\n}); };\r\nexports.saveToken = saveToken;\r\nexports.SAVE_TOKEN_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar saveTokenSuccess = function (data) { return ({\r\n    type: exports.SAVE_TOKEN_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.saveTokenSuccess = saveTokenSuccess;\r\nexports.SAVE_TOKEN_ERROR = 'TOKEN_REQUEST_ERROR';\r\nvar saveTokenError = function (error) { return ({\r\n    type: exports.SAVE_TOKEN_ERROR,\r\n    error: error\r\n}); };\r\nexports.saveTokenError = saveTokenError;\r\nvar saveTokenAsync = function (code, clientId, redditSecret) {\r\n    return function (dispatch) {\r\n        if (code === 'undefined')\r\n            return;\r\n        dispatch((0, exports.saveToken)());\r\n        console.log(cid);\r\n        axios_1.default\r\n            .post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n            auth: {\r\n                username: clientId,\r\n                password: redditSecret\r\n            },\r\n            headers: {\r\n                'Content-Type': 'application/x-www-form-urlencoded'\r\n            }\r\n        })\r\n            .then(function (resp) {\r\n            dispatch((0, exports.saveTokenSuccess)(resp.data.access_token));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.saveTokenError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.saveTokenAsync = saveTokenAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/token/tokenActions.ts?");

/***/ })

})