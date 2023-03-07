webpackHotUpdate("main",{

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../icons */ \"./icons/index.ts\");\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts\");\r\nvar __1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../../../../../'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\nfunction TextContent(_a) {\r\n    var url = _a.url, subreddit = _a.subreddit, postId = _a.postId, postText = _a.postText, title = _a.title, user = _a.user, publishedData = _a.publishedData;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\r\n                user.logoPath\r\n                    ? react_1.default.createElement(\"img\", { src: user.logoPath, className: textcontent_css_1.default.avatar, alt: \"avatar\" })\r\n                    : react_1.default.createElement(icons_1.IconAnon, { width: 20, height: 20 }),\r\n                react_1.default.createElement(\"a\", { href: '#user-url', className: textcontent_css_1.default.username }, user.name)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel },\r\n                    \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \",\r\n                    (0, __1.hoursAgo)(publishedData)))),\r\n        react_1.default.createElement(Title_1.Title, { subreddit: subreddit, id: postId, title: title, postText: postText, url: url })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts?");

/***/ })

})