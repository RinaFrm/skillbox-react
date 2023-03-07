webpackHotUpdate("main",{

/***/ "./src/shared/Layout/Content/Content.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Layout/Content/Content.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/Layout/Content/CardsList/index.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./CardsList/Card */ \"./src/shared/Layout/Content/CardsList/Card/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ./CardsList/Card/TextContent/Title/Post */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts\");\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Layout/Content/content.css\"));\r\nfunction Content() {\r\n    var location = (0, react_router_dom_1.useLocation)();\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(CardsList_1.CardsList, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: '404 list' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: (react_1.default.createElement(Card_1.Card, null), react_1.default.createElement(Post_1.Post, null)), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: 'Not found 404' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"Path \".concat(location.pathname, \" does not exist\") }) }))));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Layout/Content/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Layout/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/index.ts?");

/***/ })

})