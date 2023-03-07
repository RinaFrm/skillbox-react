webpackHotUpdate("main",{

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css\"));\r\nfunction Title(_a) {\r\n    //const [isModalOpened, setIsModalOpened] = useState(false);\r\n    var title = _a.title, id = _a.id;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: '/posts/' + id, className: title_css_1.default.postLink }, title))\r\n    // {isModalOpened && (\r\n    //   <Post subreddit={subreddit} id={id} title={title} postText={postText} onClose={() => { setIsModalOpened(false); }}/>\r\n    // )}\r\n    );\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts?");

/***/ })

})