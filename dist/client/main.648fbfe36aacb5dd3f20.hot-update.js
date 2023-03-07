webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".userblock__userBox--2YfAi {\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.userblock__userBox--2YfAi:hover span {\\r\\n  color: var(--orange);\\r\\n}\\r\\n.userblock__userBox--2YfAi:hover .userblock__avatarBox--3rX2Q {\\r\\n  box-shadow: 0 0 0 1px var(--orange);\\r\\n}\\r\\n\\r\\n.userblock__avatarBox--3rX2Q {\\r\\n  width: 60px;\\r\\n  height: 60px;\\r\\n  padding: 5px;\\r\\n  border-radius: 100%;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.userblock__avatarImage--39hsu {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  border-radius: 100%;\\r\\n}\\r\\n\\r\\n.userblock__username--1cpLP {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n  .userblock__username--1cpLP {\\r\\n    display: flex;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"userBox\": \"userblock__userBox--2YfAi\",\n\t\"avatarBox\": \"userblock__avatarBox--3rX2Q\",\n\t\"avatarImage\": \"userblock__avatarImage--39hsu\",\n\t\"username\": \"userblock__username--1cpLP\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=fbNtO7IIO3ytjP_ONXggMA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity', className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userName }, loading ? (react_1.default.createElement(Text, { size: 20, color: EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text, { size: 20, color: username ? EColor.black : EColor.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css?");

/***/ })

})