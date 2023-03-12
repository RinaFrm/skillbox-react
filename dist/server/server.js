/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);
__exportStar(__webpack_require__(48), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveTokenAsync = exports.saveTokenError = exports.SAVE_TOKEN_ERROR = exports.saveTokenSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveToken = exports.SAVE_TOKEN = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
exports.SAVE_TOKEN = 'TOKEN_REQUEST';
var saveToken = function () { return ({
    type: exports.SAVE_TOKEN
}); };
exports.saveToken = saveToken;
exports.SAVE_TOKEN_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
var saveTokenSuccess = function (data) { return ({
    type: exports.SAVE_TOKEN_SUCCESS,
    data: data
}); };
exports.saveTokenSuccess = saveTokenSuccess;
exports.SAVE_TOKEN_ERROR = 'TOKEN_REQUEST_ERROR';
var saveTokenError = function (error) { return ({
    type: exports.SAVE_TOKEN_ERROR,
    error: error
}); };
exports.saveTokenError = saveTokenError;
var saveTokenAsync = function (code, clientId, redditSecret) {
    return function (dispatch) {
        if (code === 'undefined')
            return;
        dispatch((0, exports.saveToken)());
        axios_1.default
            .post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=".concat(code, "&redirect_uri=http://localhost:3000/auth"), {
            auth: {
                username: clientId,
                password: redditSecret
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (resp) {
            dispatch((0, exports.saveTokenSuccess)(resp.data.access_token));
        })
            .catch(function (error) {
            console.log(error);
            dispatch((0, exports.saveTokenError)(String(error)));
        });
    };
};
exports.saveTokenAsync = saveTokenAsync;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComment = exports.UPDATE_COMMENT = void 0;
exports.UPDATE_COMMENT = 'UPDATE_COMMENT';
var updateComment = function (text) { return ({
    type: exports.UPDATE_COMMENT,
    text: text
}); };
exports.updateComment = updateComment;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCESS = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
exports.ME_REQUEST = 'ME_REQUEST';
var meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.meRequest = meRequest;
exports.ME_REQUEST_SUCESS = 'ME_REQUEST_SUCCESS';
var meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCESS,
    data: data
}); };
exports.meRequestSuccess = meRequestSuccess;
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
var meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error
}); };
exports.meRequestError = meRequestError;
var meRequestAsync = function () {
    return function (dispatch, getState) {
        dispatch((0, exports.meRequest)());
        axios_1.default
            .get('https://oauth.reddit.com/api/v1/me.json', {
            headers: { Authorization: "bearer ".concat(getState().token.data) }
        })
            .then(function (resp) {
            var userData = resp.data;
            dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.replaceAll('amp;', '') }));
        })
            .catch(function (error) {
            console.log(error);
            dispatch((0, exports.meRequestError)(String(error)));
        });
    };
};
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPostsAsync = exports.fetchPostsError = exports.FETCH_POSTS_ERROR = exports.fetchPostsSuccess = exports.FETCH_POSTS_SUCCESS = exports.fetchPosts = exports.FETCH_POSTS = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
exports.FETCH_POSTS = 'FETCH_POSTS';
var fetchPosts = function () { return ({
    type: exports.FETCH_POSTS,
    loading: true,
    error: ''
}); };
exports.fetchPosts = fetchPosts;
exports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
var fetchPostsSuccess = function (data) { return ({
    type: exports.FETCH_POSTS_SUCCESS,
    data: data.data,
    after: data.after,
    fetchCounter: data.fetchCounter
}); };
exports.fetchPostsSuccess = fetchPostsSuccess;
exports.FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
var fetchPostsError = function (error) { return ({
    type: exports.FETCH_POSTS_ERROR,
    error: error
}); };
exports.fetchPostsError = fetchPostsError;
var fetchPostsAsync = function (token, after) {
    return function (dispatch, getState) {
        dispatch((0, exports.fetchPosts)());
        function loadPosts() {
            return __awaiter(this, void 0, void 0, function () {
                var resp, posts, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/r/rising', {
                                    headers: { Authorization: "bearer ".concat(token) },
                                    params: {
                                        //sr_detail: true,
                                        after: after,
                                        limit: 5
                                    }
                                })];
                        case 1:
                            resp = _a.sent();
                            posts = resp.data.data.children.map(function (post) {
                                var _a;
                                return {
                                    title: post.data.title,
                                    postId: post.data.id,
                                    publishedData: post.data.created,
                                    user: { logoPath: (_a = post.data.sr_detail) === null || _a === void 0 ? void 0 : _a.icon_img, name: post.data.author },
                                    previewPath: post.data.thumbnail && /\.jpg|png|jpeg$/.test(post.data.thumbnail)
                                        ? post.data.thumbnail
                                        : undefined,
                                    karmaValue: post.data.score,
                                    url: post.data.url,
                                    postText: post.data.selfText,
                                    subreddit: post.data.subreddit,
                                    name: post.data.name,
                                    // author: post.data.author,
                                    // karma: post.data.score,
                                    // imgUrl: post.data.url_overridden_by_dest,
                                    // subreddit: post.data.subreddit,
                                    // commentsQty: post.data.num_comments,
                                    // postText: post.data.selfText,
                                };
                            });
                            dispatch((0, exports.fetchPostsSuccess)({
                                data: posts,
                                after: posts[posts.length - 1].name,
                                fetchCounter: getState().posts.fetchCounter + 1
                            }));
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            dispatch((0, exports.fetchPostsError)(String(error_1)));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        loadPosts();
    };
};
exports.fetchPostsAsync = fetchPostsAsync;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursAgo = void 0;
function hoursAgo(created) {
    var currentDate = new Date;
    var diff = currentDate.getTime() - (created * 1000);
    var result = Math.floor(diff / (1000 * 60 * 60));
    if (result.toString().endsWith('1')) {
        return result + ' час назад';
    }
    else if (result.toString() < 1) {
        return 'меньше часа назад';
    }
    else if (result.toString().endsWith('2')) {
        return result + ' часа назад';
    }
    else if (result.toString().endsWith('3')) {
        return result + ' часа назад';
    }
    else if (result.toString().endsWith('4')) {
        return result + ' часа назад';
    }
    else {
        return result + ' часов назад';
    }
}
exports.hoursAgo = hoursAgo;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(14));
var server_1 = __importDefault(__webpack_require__(15));
var App_1 = __webpack_require__(16);
var indexTemplate_1 = __webpack_require__(110);
var compression_1 = __importDefault(__webpack_require__(111));
var helmet_1 = __importDefault(__webpack_require__(112));
var PORT = process.env.PORT || 3000;
var IS_DEV = "production" !== 'production';
var app = (0, express_1.default)();
//поменять ссылки переходов с локалхост
if (!IS_DEV) {
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
}
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), req.query.code, 'undefined', process.env.SECRET));
    // axios
    //   .post(
    //     'https://www.reddit.com/api/v1/access_token',
    //     `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    //     {
    //       auth: { username: process.env.CLIENT_ID, password: '6HcKAN5xwKoP1VwUiGR1bStv3Xd01A' },
    //       headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    //     } 
    //   ) 
    //   .then(({ data }) => {
    //     res.send(
    //       indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
    //     );
    //   })
    //   .catch(console.log);
});
app.get('*', function (req, res) {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));
});
app.listen(PORT, function () {
    console.log("Server started on http://localhost:".concat(PORT));
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var root_1 = __webpack_require__(17);
var react_1 = __importStar(__webpack_require__(0));
var Layout_1 = __webpack_require__(18);
__webpack_require__(22);
var redux_1 = __webpack_require__(24);
var react_redux_1 = __webpack_require__(1);
var redux_devtools_extension_1 = __webpack_require__(25);
var reducer_1 = __webpack_require__(26);
var redux_thunk_1 = __importDefault(__webpack_require__(31));
//import { BrowserRouter } from 'react-router-dom';
var Header_1 = __webpack_require__(32);
var Content_1 = __webpack_require__(58);
var react_router_dom_1 = __webpack_require__(5);
var store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function AppComponent() {
    // useEffect(() => {
    // @ts-ignore
    // store.dispatch(timeout(3000))
    //   if(window.__token__) {
    //     store.dispatch(setToken(window.__token__))
    //   }
    // }, []);
    //store.dispatch(saveToken());
    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setMounted(true);
    }, []);
    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (
    //<BrowserRouter>
    react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null)))
    //</BrowserRouter>
    )));
}
exports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useToken_1 = __webpack_require__(20);
var layout_css_1 = __importDefault(__webpack_require__(21));
function Layout(_a) {
    var children = _a.children;
    (0, useToken_1.useToken)();
    return (react_1.default.createElement("div", { className: layout_css_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var tokenActions_1 = __webpack_require__(6);
function useToken() {
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.token.loading; });
    var dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(function () {
        var code = window.__code__;
        var clientId = window.__clientId__;
        var redditSecret = window.__redditSecret__;
        if (code) {
            //@ts-ignore
            dispatch((0, tokenActions_1.saveTokenAsync)(code, clientId, redditSecret));
        }
    }, []);
    return { token: token, loading: loading };
}
exports.useToken = useToken;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "layout__layout--2fANc"
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(23);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n  --black:          #333333;\r\n  --orange:         #CC6633;\r\n  --green:          #A4CC33;\r\n  --whiteLightness: 100%;\r\n  --white:          hsl(0, 0%, var(--whiteLightness));\r\n  --greyF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\r\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\r\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--grayF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var commentActions_1 = __webpack_require__(7);
var commentReducer_1 = __webpack_require__(27);
var meActions_1 = __webpack_require__(8);
var meReducer_1 = __webpack_require__(28);
var postsActions_1 = __webpack_require__(9);
var postsReducer_1 = __webpack_require__(29);
var tokenActions_1 = __webpack_require__(6);
var tokenReducer_1 = __webpack_require__(30);
var initialState = {
    comment: {
        text: ''
    },
    token: {
        loading: false,
        error: '',
        data: ''
    },
    me: {
        loading: false,
        error: '',
        data: {
            name: '',
            iconImg: ''
        }
    },
    posts: {
        loading: false,
        error: '',
        data: [],
        after: '',
        fetchCounter: 0
    }
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case tokenActions_1.SAVE_TOKEN:
        case tokenActions_1.SAVE_TOKEN_ERROR:
        case tokenActions_1.SAVE_TOKEN_SUCCESS:
            return __assign(__assign({}, state), { token: (0, tokenReducer_1.tokenReducer)(state.token, action) });
        case meActions_1.ME_REQUEST:
        case meActions_1.ME_REQUEST_ERROR:
        case meActions_1.ME_REQUEST_SUCESS:
            return __assign(__assign({}, state), { me: (0, meReducer_1.meReducer)(state.me, action) });
        case postsActions_1.FETCH_POSTS:
        case postsActions_1.FETCH_POSTS_ERROR:
        case postsActions_1.FETCH_POSTS_SUCCESS:
            return __assign(__assign({}, state), { posts: (0, postsReducer_1.postsReducer)(state.posts, action) });
        case commentActions_1.UPDATE_COMMENT:
            return __assign(__assign({}, state), { comment: (0, commentReducer_1.commentReducer)(state.comment, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentReducer = void 0;
var commentActions_1 = __webpack_require__(7);
var commentReducer = function (state, action) {
    switch (action.type) {
        case commentActions_1.UPDATE_COMMENT:
            return __assign(__assign({}, state), { text: action.text });
    }
};
exports.commentReducer = commentReducer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var meActions_1 = __webpack_require__(8);
var meReducer = function (state, action) {
    switch (action.type) {
        case meActions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case meActions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case meActions_1.ME_REQUEST_SUCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsReducer = void 0;
var postsActions_1 = __webpack_require__(9);
var postsReducer = function (state, action) {
    switch (action.type) {
        case postsActions_1.FETCH_POSTS:
            return __assign(__assign({}, state), { loading: true });
        case postsActions_1.FETCH_POSTS_SUCCESS:
            return __assign(__assign({}, state), { data: __spreadArray(__spreadArray([], state.data, true), action.data, true), after: action.after, loading: false, fetchCounter: action.fetchCounter });
        case postsActions_1.FETCH_POSTS_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        default:
            return state;
    }
};
exports.postsReducer = postsReducer;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
var tokenActions_1 = __webpack_require__(6);
var tokenReducer = function (state, action) {
    switch (action.type) {
        case tokenActions_1.SAVE_TOKEN:
            return __assign(__assign({}, state), { loading: true });
        case tokenActions_1.SAVE_TOKEN_SUCCESS:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        case tokenActions_1.SAVE_TOKEN_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(34));
var SearchBlock_1 = __webpack_require__(35);
var SortBlock_1 = __webpack_require__(53);
var ThreadTitle_1 = __webpack_require__(55);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--2rAev"
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var useUserData_1 = __webpack_require__(37);
var searchblock_css_1 = __importDefault(__webpack_require__(38));
var UserBlock_1 = __webpack_require__(39);
function SearchBlock() {
    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;
    return (react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_redux_1 = __webpack_require__(1);
var meActions_1 = __webpack_require__(8);
var react_1 = __importDefault(__webpack_require__(0));
function useUserData() {
    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });
    var dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(function () {
        if (!token || token === 'undefined')
            return;
        //@ts-ignore
        dispatch((0, meActions_1.meRequestAsync)());
    }, [token]);
    return { data: data, loading: loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--Tvo2B"
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var Text_1 = __webpack_require__(3);
var userblock_css_1 = __importDefault(__webpack_require__(52));
var Text_2 = __webpack_require__(3);
function UserBlock(_a) {
    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;
    return (react_1.default.createElement("a", { href: 'https://www.reddit.com/api/v1/authorize?client_id=fbNtO7IIO3ytjP_ONXggMA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity', 
        //href={ `https://www.reddit.com/api/v1/authorize?client_id=${ process.env.CLIENT_ID }&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity` }
        className: userblock_css_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_css_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_css_1.default.avatarImage })
            : react_1.default.createElement(icons_1.IconAnon, null)),
        react_1.default.createElement("div", { className: userblock_css_1.default.userName }, loading ? (react_1.default.createElement(Text_2.Text, { size: 20, color: Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_2.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var React = __importStar(__webpack_require__(0));
function MenuIcon() {
    return (React.createElement("svg", { width: '5', height: '20', viewBox: "0 0 5 20", fill: "none" },
        React.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9d9d9" }),
        React.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9d9d9" }),
        React.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9d9d9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockIcon = void 0;
var React = __importStar(__webpack_require__(0));
function BlockIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || 14, height: height || 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#999999" })));
}
exports.BlockIcon = BlockIcon;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningIcon = void 0;
var React = __importStar(__webpack_require__(0));
function WarningIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || '14', height: height || '14', viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}
exports.WarningIcon = WarningIcon;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsIcon = void 0;
var React = __importStar(__webpack_require__(0));
function CommentsIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || '14', height: height || '14', viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.CommentsIcon = CommentsIcon;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ShareIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || '12', height: height || '14', viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var React = __importStar(__webpack_require__(0));
function SaveIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || '14', height: height || '14', viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
var React = __importStar(__webpack_require__(0));
function IconAnon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || 50, height: height || 50, viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon = void 0;
var React = __importStar(__webpack_require__(0));
function ArrowIcon(_a) {
    var width = _a.width, height = _a.height;
    return (React.createElement("svg", { width: width || 19, height: height || 10, viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#D9D9D9" }),
        React.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#D9D9D9" })));
}
exports.ArrowIcon = ArrowIcon;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(50));
var classnames_1 = __importDefault(__webpack_require__(51));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["greyF4"] = "greyF4";
    EColor["greyF3"] = "greyF3";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, className = props.className, href = props.href, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, onClick = props.onClick, _h = props.visible, visible = _h === void 0 ? true : _h;
    var classes = (0, classnames_1.default)(text_css_1.default["s".concat(size)], (_a = {}, _a[text_css_1.default["m".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default["t".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default["d".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color], (_d = {}, _d[text_css_1.default.bold] = bold, _d));
    return (react_1.default.createElement(As, { className: classes, href: href, onClick: onClick }, children));
}
exports.Text = Text;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--3ZMFh",
	"s20": "text__s20--hQm7W",
	"s16": "text__s16--30lhK",
	"s14": "text__s14--XXQC3",
	"s12": "text__s12--1CvXT",
	"s10": "text__s10--2dJkb",
	"bold": "text__bold--2lQkg",
	"black": "text__black--3m0cl",
	"orange": "text__orange--2-QQj",
	"green": "text__green--1PqEy",
	"white": "text__white--3jPPB",
	"greyF4": "text__greyF4--1DZGt",
	"greyF3": "text__greyF3--3aSbW",
	"greyD9": "text__greyD9--34Mwk",
	"greyC4": "text__greyC4--7ewWF",
	"grey99": "text__grey99--2cru7",
	"grey66": "text__grey66--25URW",
	"m28": "text__m28--2k0Ih",
	"m20": "text__m20--28u9L",
	"m16": "text__m16--p0sbD",
	"m14": "text__m14--2S4bF",
	"m12": "text__m12--1HezQ",
	"m10": "text__m10--3mk6C",
	"t28": "text__t28--2Nk7G",
	"t20": "text__t20--1QUQk",
	"t16": "text__t16--rJe2j",
	"t14": "text__t14--2oic0",
	"t12": "text__t12--rXxed",
	"t10": "text__t10--3kQJ1",
	"d28": "text__d28--1EQa1",
	"d20": "text__d20--eWk8P",
	"d16": "text__d16--1PDk6",
	"d14": "text__d14--3uz2k",
	"d12": "text__d12--3ojRs",
	"d10": "text__d10--vH_nq"
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--2YfAi",
	"avatarBox": "userblock__avatarBox--3rX2Q",
	"avatarImage": "userblock__avatarImage--39hsu",
	"username": "userblock__username--1cpLP"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SortBlock() {
    return (react_1.default.createElement("div", { className: 'styles.sortBlock' }, "sorting dropdown"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(57));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadtitle }, "Header"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--1-ZGp"
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(5);
var NotFoundPage_1 = __webpack_require__(11);
var CardsList_1 = __webpack_require__(62);
var Post_1 = __webpack_require__(89);
var content_css_1 = __importDefault(__webpack_require__(109));
function Content() {
    var location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement("main", { className: content_css_1.default.content },
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(CardsList_1.CardsList, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: '404 list' }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: react_1.default.createElement(Post_1.Post, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: 'Not found 404' }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: '/*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: "Path ".concat(location.pathname, " does not exist") }) }))));
}
exports.Content = Content;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundPage = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var notfoundpage_css_1 = __importDefault(__webpack_require__(61));
var Text_1 = __webpack_require__(3);
function NotFoundPage(_a) {
    var description = _a.description;
    return (react_1.default.createElement("div", { className: notfoundpage_css_1.default.errorPage },
        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, className: notfoundpage_css_1.default.header }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
        react_1.default.createElement(Text_1.Text, { As: 'p', size: 14, className: notfoundpage_css_1.default.description }, description)));
}
exports.NotFoundPage = NotFoundPage;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"errorPage": "notfoundpage__errorPage--33KU4",
	"header": "notfoundpage__header--204El",
	"description": "notfoundpage__description--3Kkp-"
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var postsActions_1 = __webpack_require__(9);
var Card_1 = __webpack_require__(64);
var cardsList_css_1 = __importDefault(__webpack_require__(88));
function CardsList() {
    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });
    var _a = (0, react_redux_1.useSelector)(function (store) { return store.posts; }), data = _a.data, loading = _a.loading, error = _a.error, after = _a.after, fetchCounter = _a.fetchCounter;
    var dispatch = (0, react_redux_1.useDispatch)();
    var bottomOfList = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!token || token == 'undefined')
            return;
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting &&
                (fetchCounter % 3 !== 0 || fetchCounter === 0)) {
                // @ts-ignore
                dispatch((0, postsActions_1.fetchPostsAsync)(token, after));
            }
        }, {
            rootMargin: "20px",
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return function () {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [token, bottomOfList.current, after]);
    return (react_1.default.createElement("ul", { className: cardsList_css_1.default.cardsList },
        data.length === 0 && !loading && !error && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        data.map(function (post) { return (react_1.default.createElement(Card_1.Card, { postId: post.postId, name: post.name, user: post.user, title: post.title, karmaValue: post.karmaValue, url: post.url, publishedData: post.publishedData, subreddit: post.subreddit, key: post.postId, previewPath: post.previewPath, postText: post.postText })); }),
        react_1.default.createElement("div", { ref: bottomOfList }),
        loading && (react_1.default.createElement("div", { style: { textAlign: 'center' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        fetchCounter % 3 === 0 && fetchCounter !== 0 && !loading &&
            (react_1.default.createElement("button", { onClick: function () {
                    //@ts-ignore
                    dispatch((0, postsActions_1.fetchPostsAsync)(token, after));
                }, style: { display: 'block', border: '1px solid black', borderRadius: '10px', cursor: 'pointer', padding: '10px', margin: '0 auto' } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451")),
        error && (react_1.default.createElement("div", { role: 'alert', style: { textAlign: 'center' } }, error))));
}
exports.CardsList = CardsList;
// try {
//   const { data: { data: { after, children}} } = await axios.get('https://oauth.reddit.com/r/rising', {
//     headers: { Authorization: `bearer ${token}` },
//     params: {
//       limit: 7,
//       after: nextAfter,           
//     }
//   });
//   const postsData = children.map((item: IResponseItem) => {
//     const { author, subreddit, selftext, score, created, thumbnail, title, url, id, sr_detail } = item.data;
//     return {
//       title: title,
//       publishedData: created,
//       user: { logoPath: sr_detail?.icon_img, name: author },
//       previewPath:
//         thumbnail && /\.jpg|png|jpeg$/.test(thumbnail)
//           ? thumbnail
//           : undefined,
//       karmaValue: score,
//       url: url,
//       id: id,
//       postText: selftext,
//       subreddit: subreddit
//     };
//   });
//   setNextAfter(after);
//   setPosts(prevChildren => prevChildren.concat(...postsData));
// } catch (error) {
//   setErrorLoading(String(error));
// }
// setLoading(false);
// })()
// 


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(65), exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(66));
var Controls_1 = __webpack_require__(67);
var Menu_1 = __webpack_require__(70);
var Preview_1 = __webpack_require__(79);
var TextContent_1 = __webpack_require__(82);
function Card(props) {
    var title = props.title, postId = props.postId, publishedData = props.publishedData, user = props.user, previewPath = props.previewPath, karmaValue = props.karmaValue;
    return (react_1.default.createElement("li", { className: card_css_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { postId: postId, user: user, publishedData: publishedData, title: title }),
        react_1.default.createElement(Preview_1.Preview, { previewPath: previewPath }),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, { karmaValue: karmaValue })));
}
exports.Card = Card;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--2QuPb",
	"textContent": "card__textContent--14FBZ"
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(69));
function Controls(_a) {
    var karmaValue = _a.karmaValue;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement("div", { className: controls_css_1.default.karmaCounter },
            react_1.default.createElement("button", { className: controls_css_1.default.up },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
            react_1.default.createElement("span", { className: controls_css_1.default.karmaValue }, karmaValue),
            react_1.default.createElement("button", { className: controls_css_1.default.down },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })))),
        react_1.default.createElement("button", { className: controls_css_1.default.commentsButton },
            react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
            react_1.default.createElement("span", { className: controls_css_1.default.commentsNumber }, "1")),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement("button", { className: controls_css_1.default.shareButton },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
            react_1.default.createElement("button", { className: controls_css_1.default.saveButton },
                react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                    react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" }))))));
}
exports.Controls = Controls;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--2Kv00",
	"actions": "controls__actions--yHSar",
	"karmaCounter": "controls__karmaCounter--2wKMG",
	"karmaValue": "controls__karmaValue--1wPM9",
	"down": "controls__down--4ChuS",
	"up": "controls__up--2B1kP",
	"commentsButton": "controls__commentsButton--3J-dU",
	"commentsNumber": "controls__commentsNumber--2ciT7",
	"shareButton": "controls__shareButton--1V8Y1",
	"saveButton": "controls__saveButton--2DjHU"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importStar(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var Dropdown_1 = __webpack_require__(72);
var menu_css_1 = __importDefault(__webpack_require__(78));
function Menu() {
    var _a = (0, react_1.useState)(false), isDropdownOpen = _a[0], setIsDropdownOpen = _a[1];
    var btnRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)({ left: 0, top: 0, width: 0 }), coors = _b[0], setCoors = _b[1];
    var setPosition = function () {
        if (btnRef.current) {
            var coordinates = btnRef.current.getBoundingClientRect();
            setCoors({
                left: coordinates.left,
                top: coordinates.top + coordinates.width,
                width: coordinates.width,
            });
        }
    };
    (0, react_1.useEffect)(function () {
        if (isDropdownOpen) {
            setPosition();
            document.addEventListener('scroll', setPosition);
            return function () {
                document.removeEventListener('scroll', setPosition);
            };
        }
    }, []);
    react_1.default.useEffect(function () {
        if (isDropdownOpen) {
            setPosition();
        }
    }, [isDropdownOpen]);
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu },
        react_1.default.createElement("button", { ref: btnRef, className: menu_css_1.default.menuButton, onClick: function () { setIsDropdownOpen(true); } },
            react_1.default.createElement(icons_1.MenuIcon, null)),
        isDropdownOpen && (react_1.default.createElement(Dropdown_1.Dropdown, { coorsTop: coors.top, coorsLeft: coors.left, onClose: function () { setIsDropdownOpen(false); } }))));
}
exports.Menu = Menu;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(10));
var MenuList_1 = __webpack_require__(74);
var dropdown_css_1 = __importDefault(__webpack_require__(77));
function Dropdown(_a) {
    var onClose = _a.onClose, coorsTop = _a.coorsTop, coorsLeft = _a.coorsLeft;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#comment_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { style: { top: coorsTop, left: coorsLeft }, className: dropdown_css_1.default.container, ref: ref },
        react_1.default.createElement("div", { className: dropdown_css_1.default.listContainer },
            react_1.default.createElement("ul", { className: dropdown_css_1.default.list },
                react_1.default.createElement(MenuList_1.MenuList, { postId: "123" }),
                react_1.default.createElement("button", { className: dropdown_css_1.default.listButton }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))), node);
}
exports.Dropdown = Dropdown;
// interface IDropdownProps {
//   button: React.ReactNode;
//   children: React.ReactNode;
//   isOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }
// const NOOP = () => {};
// export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
//   //React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
//   React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])
//   const handleOpen = () => {
//     if (isOpen == undefined) {
//       setIsDropdownOpen(!isDropdownOpen)
//     }
//   }
//   return (
//     <div className={styles.container}>
//       <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//         { button }
//       </div>
//       {isDropdownOpen && (
//         <div className={styles.listContainer}>
//           <ul className={styles.list}>
//             { children }
//             <button className={styles.listButton} onClick={() => setIsDropdownOpen(false)}>
//               Закрыть
//             </button>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var menulist_css_1 = __importDefault(__webpack_require__(76));
var Text_1 = __webpack_require__(3);
function MenuList(_a) {
    return (react_1.default.createElement("ul", null,
        react_1.default.createElement("li", { className: menulist_css_1.default.listItem },
            react_1.default.createElement(icons_1.CommentsIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("li", { className: menulist_css_1.default.listItem },
            react_1.default.createElement(icons_1.ShareIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("li", { className: menulist_css_1.default.listItem },
            react_1.default.createElement(icons_1.BlockIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("li", { className: menulist_css_1.default.listItem },
            react_1.default.createElement(icons_1.SaveIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("li", { className: menulist_css_1.default.listItem },
            react_1.default.createElement(icons_1.WarningIcon, null),
            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuList = MenuList;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"listItem": "menulist__listItem--3_U9D"
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--2Ms7s",
	"listContainer": "dropdown__listContainer--un3EB",
	"list": "dropdown__list--1zvc6",
	"listButton": "dropdown__listButton--ob6iM"
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--3rJOf",
	"menuButton": "menu__menuButton--mDpCF",
	"dropdown": "menu__dropdown--3tvWX",
	"closeButton": "menu__closeButton--1bnVb",
	"listItem": "menu__listItem--3KjIM"
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(81));
function Preview(_a) {
    var previewPath = _a.previewPath;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview }, previewPath
        ? react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: previewPath })
        : react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: "https://cdn.dribbble.com/userupload/3629148/file/original-bf91cbf462544f438eb17ed3f7776b27.png?compress=1&resize=1200x877" })));
}
exports.Preview = Preview;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--3teus",
	"previewImg": "preview__previewImg--2hX5m"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(83), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var textcontent_css_1 = __importDefault(__webpack_require__(84));
var Title_1 = __webpack_require__(85);
var hoursAgo_1 = __webpack_require__(12);
function TextContent(_a) {
    var postId = _a.postId, title = _a.title, user = _a.user, publishedData = _a.publishedData;
    return (react_1.default.createElement("div", { className: textcontent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textcontent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_css_1.default.userLink },
                user.logoPath
                    ? react_1.default.createElement("img", { src: user.logoPath, className: textcontent_css_1.default.avatar, alt: "avatar" })
                    : react_1.default.createElement(icons_1.IconAnon, { width: 20, height: 20 }),
                react_1.default.createElement("a", { href: '#user-url', className: textcontent_css_1.default.username }, user.name)),
            react_1.default.createElement("span", { className: textcontent_css_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_css_1.default.publishedLabel },
                    "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E ",
                    (0, hoursAgo_1.hoursAgo)(publishedData)))),
        react_1.default.createElement(Title_1.Title, { id: postId, title: title })));
}
exports.TextContent = TextContent;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--3oTPz",
	"metaData": "textcontent__metaData--b3Jl9",
	"publishedLabel": "textcontent__publishedLabel--20jSS",
	"createdAt": "textcontent__createdAt--2kGUH",
	"userLink": "textcontent__userLink--2w-pz",
	"avatar": "textcontent__avatar--10wu1",
	"username": "textcontent__username--3CBOX"
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(86), exports);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(5);
var title_css_1 = __importDefault(__webpack_require__(87));
function Title(_a) {
    //const [isModalOpened, setIsModalOpened] = useState(false);
    var title = _a.title, id = _a.id;
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: '/posts/' + id, className: title_css_1.default.postLink }, title))
    // {isModalOpened && (
    //   <Post subreddit={subreddit} id={id} title={title} postText={postText} onClose={() => { setIsModalOpened(false); }}/>
    // )}
    );
}
exports.Title = Title;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--2GdaG",
	"postLink": "title__postLink--3g7_3"
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsList": "cardsList__cardsList--kkPMD"
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(90), exports);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(10));
var react_redux_1 = __webpack_require__(1);
var react_router_dom_1 = __webpack_require__(5);
var useCommentsData_1 = __webpack_require__(91);
var NotFoundPage_1 = __webpack_require__(11);
var CommentFormContainer_1 = __webpack_require__(92);
var post_css_1 = __importDefault(__webpack_require__(99));
var RecursiveComment_1 = __webpack_require__(100);
function Post() {
    var ref = (0, react_1.useRef)(null);
    var navigate = (0, react_router_dom_1.useNavigate)();
    var location = (0, react_router_dom_1.useLocation)();
    //const search = useLocation();
    //const path = new URLSearchParams(search.search).get('id');
    var path = location.pathname.substr(7);
    var postData = (0, react_redux_1.useSelector)(function (store) { return store.posts.data.filter(function (post) { return post.postId === path; }).pop(); });
    if (postData === undefined)
        return react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: "There is not post with id = ".concat(path) });
    var title = postData.title, postId = postData.postId, publishedData = postData.publishedData, user = postData.user, previewPath = postData.previewPath, karmaValue = postData.karmaValue, url = postData.url, postText = postData.postText, subreddit = postData.subreddit, name = postData.name;
    var commentsData = (0, useCommentsData_1.useCommentsData)(subreddit, postId)[0];
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                navigate('/');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_css_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, title),
        react_1.default.createElement("div", { className: post_css_1.default.content },
            react_1.default.createElement("p", null, postText)),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),
        react_1.default.createElement("ul", { className: post_css_1.default.commentsList }, commentsData.map(function (comment) {
            return react_1.default.createElement(RecursiveComment_1.RecursiveComment, { author: comment.author, key: comment.commentId, id: comment.commentId, depth: 1, replies: comment.replies, publishedData: comment.created, commentText: comment.body });
        })))), node);
}
exports.Post = Post;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommentsData = void 0;
var axios_1 = __importDefault(__webpack_require__(4));
var react_1 = __importDefault(__webpack_require__(0));
function useCommentsData(subreddit, postId) {
    var _a = react_1.default.useState([]), commentsData = _a[0], setCommentsData = _a[1];
    react_1.default.useEffect(function () {
        axios_1.default.get("https://api.reddit.com/r/".concat(subreddit, "/comments/").concat(postId))
            .then(function (resp) {
            var commentsData = resp.data[1].data.children.map(function (item) {
                var _a = item.data, body = _a.body, created = _a.created, commentId = _a.commentId, karma = _a.karma, replies = _a.replies, author = _a.author;
                return {
                    body: body,
                    created: created,
                    commentId: commentId,
                    karma: karma,
                    replies: (replies) ? replies.data.children : undefined,
                    author: author
                };
            });
            // const result: ICommentsData = { comments: [] };
            // for (let comments of response.data[1].data.children) {
            //   result.comments.push({
            //     commentId: comments.data.id,
            //     author: comments.data.author,
            //     created: comments.data.created,
            //     karma: comments.data.score,
            //     body: comments.data.body,
            //     replies: comments.data.replies
            //   })
            //console.log(comments.data.replies.data.children)
            //}
            setCommentsData(commentsData);
        })
            .catch(console.log);
    }, []);
    return [commentsData];
}
exports.useCommentsData = useCommentsData;
// const token = useSelector<RootState, string>(state => state.token)
// const [loading, setLoading] = useState(false);
// const [errorLoading, setErrorLoading] = useState('');
// const loadComments = async () => {
//   setLoading(true);
//   setErrorLoading('');
//   try {
//     const resp = await axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`, {})
//     const commentsData = resp.data[1].data.children.map((item: IResponceItem) => {
//       const { body, created, id, replies, author } = item.data;
//       return {
//         commentText: body,
//         publishedData: created,
//         id: id,
//         replies: (replies) ? replies.data.children : undefined,
//         author: author
//       };
//     });
//     setComments(commentsData);
//   } catch (error) {
//     setErrorLoading(String(error));
//   }
//   setLoading(false);
// } 
// useEffect(() => {
//   loadComments();
// }, [])


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var commentActions_1 = __webpack_require__(7);
var CommentForm_1 = __webpack_require__(94);
function CommentFormContainer() {
    var value = (0, react_redux_1.useSelector)(function (state) { return state.comment.text; });
    //достали данные из стора, положили в значение
    var dispatch = (0, react_redux_1.useDispatch)();
    function handleChange(event) {
        dispatch((0, commentActions_1.updateComment)(event.target.value));
        //({ type: 'UPDATE_COMMENT', text: event.target.value })
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm
    // value={value}
    // onChange={handleChange}
    // onSubmit={handleSubmit}
    , null));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var formik_1 = __webpack_require__(96);
var react_1 = __importDefault(__webpack_require__(0));
var Yup = __importStar(__webpack_require__(97));
//import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
//import { commentContext } from '../../context/commentContext';
var commentform_css_1 = __importDefault(__webpack_require__(98));
// type Props = {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }
// export function CommentForm({ value, onChange, onSubmit }: Props) {
//   return (
//     <form className={styles.form} onSubmit={onSubmit}>
//       <textarea className={styles.input} value={value} onChange={onChange}/>
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   )
// }
//модуль 12
// export function CommentForm() {
//   const [value, setValue] = useState('');
//   const [touched, setTouched] = useState(false);
//   const [valueError, setValueError] = useState('');
//   function handleSubmit(event: FormEvent) {
//     event.preventDefault(); 
//     setTouched(true);
//     setValueError(validateValue())
//     const isFormValid = !validateValue();
//     if (!isFormValid) return;
//     alert('Форма отправлена');
//   }
//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//     setValue(event.target.value);
//   }
//   function validateValue() {
//     if(value.length <= 3) return 'Введите больше трех символов';
//     return '';
//   }
//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <textarea 
//         className={styles.input} 
//         value={value} 
//         onChange={handleChange} 
//         aria-invalid={valueError ? 'true' : undefined}/>
//       {touched && valueError && (<div>{valueError}</div>)}
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   );
// }
function CommentForm() {
    var formik = (0, formik_1.useFormik)({
        initialValues: {
            comment: ''
        },
        validationSchema: Yup.object({
            comment: Yup.string()
                .min(3, 'Введите больше трех символов')
                .required('Поле не может быть пустым')
        }),
        onSubmit: function (values) {
            alert('Ваш комментарий: ' + values.comment);
        },
    });
    return (react_1.default.createElement("form", { onSubmit: formik.handleSubmit, className: commentform_css_1.default.form },
        react_1.default.createElement("textarea", { className: commentform_css_1.default.input, id: "comment", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.comment }),
        formik.touched.comment && formik.errors.comment ? (react_1.default.createElement("div", null, formik.errors.comment)) : null,
        react_1.default.createElement("button", { type: "submit", className: commentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "commentform__form--2jjzT",
	"input": "commentform__input--3tJe0",
	"button": "commentform__button--2n3oq"
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "post__modal--1rTWP",
	"content": "post__content--1dajc",
	"close": "post__close--ihNmt"
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveComment = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var CommentList_1 = __webpack_require__(102);
var recursiveComment_css_1 = __importDefault(__webpack_require__(108));
var hoursAgo_1 = __webpack_require__(12);
var RecursiveComment = function (_a) {
    var id = _a.id, commentText = _a.commentText, publishedData = _a.publishedData, author = _a.author, replies = _a.replies, _b = _a.depth, depth = _b === void 0 ? 1 : _b, _c = _a.className, className = _c === void 0 ? 'commentList' : _c;
    var style = { paddingLeft: 20, marginTop: 34 };
    return (react_1.default.createElement("li", { className: recursiveComment_css_1.default.parent, style: style, id: id },
        react_1.default.createElement("div", { className: recursiveComment_css_1.default.commentInfo },
            react_1.default.createElement("div", { className: recursiveComment_css_1.default.user },
                react_1.default.createElement(icons_1.IconAnon, { width: 20, height: 20 }),
                react_1.default.createElement("span", { className: recursiveComment_css_1.default.userName }, author),
                react_1.default.createElement("span", { className: recursiveComment_css_1.default.createdAt }, (0, hoursAgo_1.hoursAgo)(publishedData))),
            react_1.default.createElement("span", { className: recursiveComment_css_1.default.league })),
        react_1.default.createElement("div", { className: recursiveComment_css_1.default.text }, commentText),
        react_1.default.createElement(CommentList_1.CommentList, { id: id, author: author }),
        Array.isArray(replies) ? (react_1.default.createElement("ul", { className: recursiveComment_css_1.default.child }, replies.map(function (item) {
            var _a;
            return (react_1.default.createElement(exports.RecursiveComment, { key: item.data.id, id: item.data.id, commentText: item.data.body, depth: depth + 1, publishedData: item.data.created, replies: item.data.replies ? (_a = item.data.replies) === null || _a === void 0 ? void 0 : _a.data.children : undefined, author: item.data.author, className: className }));
        }))) : null));
};
exports.RecursiveComment = RecursiveComment;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var icons_1 = __webpack_require__(2);
var Text_1 = __webpack_require__(3);
var ReCommentForm_1 = __webpack_require__(104);
var commentlist_css_1 = __importDefault(__webpack_require__(107));
function CommentList(_a) {
    var id = _a.id, author = _a.author;
    var _b = (0, react_1.useState)(false), isReCommentOpen = _b[0], setIsReCommentOpen = _b[1];
    var btnRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement("ul", { className: commentlist_css_1.default.list },
        react_1.default.createElement("li", { className: commentlist_css_1.default.listItem },
            react_1.default.createElement("button", { ref: btnRef, onClick: function () { return setIsReCommentOpen(!isReCommentOpen); } },
                react_1.default.createElement(icons_1.CommentsIcon, null),
                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")),
            isReCommentOpen && (react_1.default.createElement(ReCommentForm_1.ReCommentForm, { id: id, author: author, onClose: function () { setIsReCommentOpen(false); } }))),
        react_1.default.createElement("li", { className: commentlist_css_1.default.listItem },
            react_1.default.createElement("button", null,
                react_1.default.createElement(icons_1.ShareIcon, null),
                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"))),
        react_1.default.createElement("li", { className: commentlist_css_1.default.listItem },
            react_1.default.createElement("button", null,
                react_1.default.createElement(icons_1.WarningIcon, null),
                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
}
exports.CommentList = CommentList;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(105), exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReCommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(10));
var recommentform_css_1 = __importDefault(__webpack_require__(106));
//контролируемая
function ReCommentForm(_a) {
    var id = _a.id, author = _a.author, onClose = _a.onClose;
    var node = document.getElementById("".concat(id));
    var formRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = formRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    if (!node)
        return null;
    var _b = (0, react_1.useState)("".concat(author, ", ")), comment = _b[0], setComment = _b[1];
    function handleChange(event) {
        setComment(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert('Ваш комментарий: ' + comment);
        setComment("".concat(author, ", "));
    }
    return react_dom_1.default.createPortal((react_1.default.createElement("form", { ref: formRef, className: recommentform_css_1.default.form, onSubmit: handleSubmit },
        react_1.default.createElement("input", { value: comment, ref: function (input) { return input && input.focus(); }, className: recommentform_css_1.default.input, onChange: handleChange }),
        react_1.default.createElement("button", { type: "submit", className: recommentform_css_1.default.button }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))), node);
}
exports.ReCommentForm = ReCommentForm;
//неконтролируемая
// export function ReCommentForm({id, author}: IReCommentProps) {
//   const ref = useRef<HTMLInputElement>(null);
//   const node = document.getElementById(`${id}`);
//   if(!node) return null;
//   function handleSubmit(event: FormEvent) {
//     event.preventDefault();
//     alert('Ваш комментарий: ' + ref.current?.value)
//   }
//   return ReactDOM.createPortal ((
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <input value={`${author}, `} autoFocus={true} className={styles.input} ref={ref}/>
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   ), node);
// }


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "recommentform__form--3FC5m",
	"input": "recommentform__input--xng03",
	"button": "recommentform__button--2je47"
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "commentlist__list--n5EDO",
	"listItem": "commentlist__listItem--Qsceu"
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"parent": "recursiveComment__parent--yRKgq",
	"user": "recursiveComment__user--U69F5",
	"userName": "recursiveComment__userName--1svsG",
	"createdAt": "recursiveComment__createdAt--MBsfE",
	"text": "recursiveComment__text--1YCW3"
};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--29jAg"
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
var indexTemplate = function (content, code, clientId, redditSecret) { return "\n\n<!DOCTYPE html>\n<html lang=\"en\"> \n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Title</title>\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n  <script>\n  window.__code__ = '".concat(code, "';\n  window.__clientId__ = '").concat(clientId, "';\n  window.__redditSecret__ = '").concat(redditSecret, "';\n  </script>\n  </head>\n<body>\n  <div id=\"react_root\">").concat(content, "</div>\n  <div id=\"modal_root\"></div>\n  <div id=\"comment_root\"></div>\n</body>\n</html>\n"); };
exports.indexTemplate = indexTemplate;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ })
/******/ ]);