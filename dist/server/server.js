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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./icons/ArrowIcon.tsx":
/*!*****************************!*\
  !*** ./icons/ArrowIcon.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || 19, height: height || 10, viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.ArrowIcon = ArrowIcon;\r\n\n\n//# sourceURL=webpack:///./icons/ArrowIcon.tsx?");

/***/ }),

/***/ "./icons/BlockIcon.tsx":
/*!*****************************!*\
  !*** ./icons/BlockIcon.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || 14, height: height || 14, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./icons/BlockIcon.tsx?");

/***/ }),

/***/ "./icons/CommentsIcon.tsx":
/*!********************************!*\
  !*** ./icons/CommentsIcon.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || '14', height: height || '14', viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./icons/IconAnon.tsx":
/*!****************************!*\
  !*** ./icons/IconAnon.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || 50, height: height || 50, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./icons/IconAnon.tsx?");

/***/ }),

/***/ "./icons/MenuIcon.tsx":
/*!****************************!*\
  !*** ./icons/MenuIcon.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (React.createElement(\"svg\", { width: '5', height: '20', viewBox: \"0 0 5 20\", fill: \"none\" },\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9d9d9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9d9d9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9d9d9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./icons/MenuIcon.tsx?");

/***/ }),

/***/ "./icons/SaveIcon.tsx":
/*!****************************!*\
  !*** ./icons/SaveIcon.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || '14', height: height || '14', viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./icons/SaveIcon.tsx?");

/***/ }),

/***/ "./icons/ShareIcon.tsx":
/*!*****************************!*\
  !*** ./icons/ShareIcon.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || '12', height: height || '14', viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./icons/ShareIcon.tsx?");

/***/ }),

/***/ "./icons/WarningIcon.tsx":
/*!*******************************!*\
  !*** ./icons/WarningIcon.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon(_a) {\r\n    var width = _a.width, height = _a.height;\r\n    return (React.createElement(\"svg\", { width: width || '14', height: height || '14', viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        React.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./icons/WarningIcon.tsx?");

/***/ }),

/***/ "./icons/index.ts":
/*!************************!*\
  !*** ./icons/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./icons/IconAnon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowIcon */ \"./icons/ArrowIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./icons/index.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./react/js/hoursAgo.js":
/*!******************************!*\
  !*** ./react/js/hoursAgo.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.hoursAgo = void 0;\r\nfunction hoursAgo(created) {\r\n    var currentDate = new Date;\r\n    var diff = currentDate.getTime() - (created * 1000);\r\n    var result = Math.floor(diff / (1000 * 60 * 60));\r\n    if (result.toString().endsWith('1')) {\r\n        return result + ' час назад';\r\n    }\r\n    else if (result.toString() < 1) {\r\n        return 'меньше часа назад';\r\n    }\r\n    else if (result.toString().endsWith('2')) {\r\n        return result + ' часа назад';\r\n    }\r\n    else if (result.toString().endsWith('3')) {\r\n        return result + ' часа назад';\r\n    }\r\n    else if (result.toString().endsWith('4')) {\r\n        return result + ' часа назад';\r\n    }\r\n    else {\r\n        return result + ' часов назад';\r\n    }\r\n}\r\nexports.hoursAgo = hoursAgo;\r\n\n\n//# sourceURL=webpack:///./react/js/hoursAgo.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar reducer_1 = __webpack_require__(/*! ./store/reducer */ \"./src/store/reducer.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\n//import { BrowserRouter } from 'react-router-dom';\r\nvar Header_1 = __webpack_require__(/*! ./shared/Layout/Header */ \"./src/shared/Layout/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Layout/Content */ \"./src/shared/Layout/Content/index.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar store = (0, redux_1.createStore)(reducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    // useEffect(() => {\r\n    // @ts-ignore\r\n    // store.dispatch(timeout(3000))\r\n    //   if(window.__token__) {\r\n    //     store.dispatch(setToken(window.__token__))\r\n    //   }\r\n    // }, []);\r\n    //store.dispatch(saveToken());\r\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (\r\n    //<BrowserRouter>\r\n    react_1.default.createElement(react_router_dom_1.HashRouter, null,\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(Header_1.Header, null),\r\n            react_1.default.createElement(Content_1.Content, null)))\r\n    //</BrowserRouter>\r\n    )));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction useCommentsData(subreddit, postId) {\r\n    var _a = react_1.default.useState([]), commentsData = _a[0], setCommentsData = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        axios_1.default.get(\"https://api.reddit.com/r/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (resp) {\r\n            var commentsData = resp.data[1].data.children.map(function (item) {\r\n                var _a = item.data, body = _a.body, created = _a.created, commentId = _a.commentId, karma = _a.karma, replies = _a.replies, author = _a.author;\r\n                return {\r\n                    body: body,\r\n                    created: created,\r\n                    commentId: commentId,\r\n                    karma: karma,\r\n                    replies: (replies) ? replies.data.children : undefined,\r\n                    author: author\r\n                };\r\n            });\r\n            // const result: ICommentsData = { comments: [] };\r\n            // for (let comments of response.data[1].data.children) {\r\n            //   result.comments.push({\r\n            //     commentId: comments.data.id,\r\n            //     author: comments.data.author,\r\n            //     created: comments.data.created,\r\n            //     karma: comments.data.score,\r\n            //     body: comments.data.body,\r\n            //     replies: comments.data.replies\r\n            //   })\r\n            //console.log(comments.data.replies.data.children)\r\n            //}\r\n            setCommentsData(commentsData);\r\n        })\r\n            .catch(console.log);\r\n    }, []);\r\n    return [commentsData];\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n// const token = useSelector<RootState, string>(state => state.token)\r\n// const [loading, setLoading] = useState(false);\r\n// const [errorLoading, setErrorLoading] = useState('');\r\n// const loadComments = async () => {\r\n//   setLoading(true);\r\n//   setErrorLoading('');\r\n//   try {\r\n//     const resp = await axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`, {})\r\n//     const commentsData = resp.data[1].data.children.map((item: IResponceItem) => {\r\n//       const { body, created, id, replies, author } = item.data;\r\n//       return {\r\n//         commentText: body,\r\n//         publishedData: created,\r\n//         id: id,\r\n//         replies: (replies) ? replies.data.children : undefined,\r\n//         author: author\r\n//       };\r\n//     });\r\n//     setComments(commentsData);\r\n//   } catch (error) {\r\n//     setErrorLoading(String(error));\r\n//   }\r\n//   setLoading(false);\r\n// } \r\n// useEffect(() => {\r\n//   loadComments();\r\n// }, [])\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar tokenActions_1 = __webpack_require__(/*! ../store/token/tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nfunction useToken() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.token.loading; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    react_1.default.useEffect(function () {\r\n        var code = window.__code__;\r\n        var clientId = window.__clientId__;\r\n        var redditSecret = window.__redditSecret__;\r\n        if (code) {\r\n            //@ts-ignore\r\n            dispatch((0, tokenActions_1.saveTokenAsync)(code, clientId, redditSecret));\r\n        }\r\n    }, []);\r\n    return { token: token, loading: loading };\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar meActions_1 = __webpack_require__(/*! ../store/me/meActions */ \"./src/store/me/meActions.ts\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction useUserData() {\r\n    var data = (0, react_redux_1.useSelector)(function (state) { return state.me.data; });\r\n    var loading = (0, react_redux_1.useSelector)(function (state) { return state.me.loading; });\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    react_1.default.useEffect(function () {\r\n        if (!token || token === 'undefined')\r\n            return;\r\n        //@ts-ignore\r\n        dispatch((0, meActions_1.meRequestAsync)());\r\n    }, [token]);\r\n    return { data: data, loading: loading };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black:          #333333;\\r\\n  --orange:         #CC6633;\\r\\n  --green:          #A4CC33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white:          hsl(0, 0%, var(--whiteLightness));\\r\\n  --greyF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, code, clientId, redditSecret) { return \"\\n\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\"> \\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Title</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n  window.__code__ = '\".concat(code, \"';\\n  window.__clientId__ = '\").concat(clientId, \"';\\n  window.__redditSecret__ = '\").concat(redditSecret, \"';\\n  </script>\\n  </head>\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n  <div id=\\\"comment_root\\\"></div>\\n</body>\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar IS_DEV = \"development\" !== 'production';\r\nvar app = (0, express_1.default)();\r\n//поменять ссылки переходов с локалхост\r\nif (!IS_DEV) {\r\n    app.use((0, compression_1.default)());\r\n    app.use((0, helmet_1.default)({\r\n        contentSecurityPolicy: false,\r\n    }));\r\n}\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), req.query.code, 'fbNtO7IIO3ytjP_ONXggMA', process.env.SECRET));\r\n    // axios\r\n    //   .post(\r\n    //     'https://www.reddit.com/api/v1/access_token',\r\n    //     `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,\r\n    //     {\r\n    //       auth: { username: process.env.CLIENT_ID, password: '6HcKAN5xwKoP1VwUiGR1bStv3Xd01A' },\r\n    //       headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    //     } \r\n    //   ) \r\n    //   .then(({ data }) => {\r\n    //     res.send(\r\n    //       indexTemplate(ReactDOM.renderToString(App()), data['access_token']),\r\n    //     );\r\n    //   })\r\n    //   .catch(console.log);\r\n});\r\napp.get('*', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"Server started on http://localhost:\".concat(PORT));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Card.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Card.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/Layout/Content/CardsList/Card/card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/Layout/Content/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/Layout/Content/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/Layout/Content/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts\");\r\nfunction Card(props) {\r\n    var title = props.title, postId = props.postId, publishedData = props.publishedData, user = props.user, previewPath = props.previewPath, karmaValue = props.karmaValue;\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { postId: postId, user: user, publishedData: publishedData, title: title }),\r\n        react_1.default.createElement(Preview_1.Preview, { previewPath: previewPath }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, { karmaValue: karmaValue })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/Layout/Content/CardsList/Card/Controls/controls.css\"));\r\nfunction Controls(_a) {\r\n    var karmaValue = _a.karmaValue;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, karmaValue),\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.down },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))),\r\n        react_1.default.createElement(\"button\", { className: controls_css_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.commentsNumber }, \"1\")),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: controls_css_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/controls.css":
/*!************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/controls.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2Kv00\",\n\t\"actions\": \"controls__actions--yHSar\",\n\t\"karmaCounter\": \"controls__karmaCounter--2wKMG\",\n\t\"karmaValue\": \"controls__karmaValue--1wPM9\",\n\t\"down\": \"controls__down--4ChuS\",\n\t\"up\": \"controls__up--2B1kP\",\n\t\"commentsButton\": \"controls__commentsButton--3J-dU\",\n\t\"commentsNumber\": \"controls__commentsNumber--2ciT7\",\n\t\"shareButton\": \"controls__shareButton--1V8Y1\",\n\t\"saveButton\": \"controls__saveButton--2DjHU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Controls/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Controls/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/Layout/Content/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/Menu.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/Menu.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../icons */ \"./icons/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../../../helpers/Dropdown */ \"./src/shared/helpers/Dropdown/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/Layout/Content/CardsList/Card/Menu/menu.css\"));\r\nfunction Menu() {\r\n    var _a = (0, react_1.useState)(false), isDropdownOpen = _a[0], setIsDropdownOpen = _a[1];\r\n    var btnRef = (0, react_1.useRef)(null);\r\n    var _b = (0, react_1.useState)({ left: 0, top: 0, width: 0 }), coors = _b[0], setCoors = _b[1];\r\n    var setPosition = function () {\r\n        if (btnRef.current) {\r\n            var coordinates = btnRef.current.getBoundingClientRect();\r\n            setCoors({\r\n                left: coordinates.left,\r\n                top: coordinates.top + coordinates.width,\r\n                width: coordinates.width,\r\n            });\r\n        }\r\n    };\r\n    (0, react_1.useEffect)(function () {\r\n        if (isDropdownOpen) {\r\n            setPosition();\r\n            document.addEventListener('scroll', setPosition);\r\n            return function () {\r\n                document.removeEventListener('scroll', setPosition);\r\n            };\r\n        }\r\n    }, []);\r\n    react_1.default.useEffect(function () {\r\n        if (isDropdownOpen) {\r\n            setPosition();\r\n        }\r\n    }, [isDropdownOpen]);\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(\"button\", { ref: btnRef, className: menu_css_1.default.menuButton, onClick: function () { setIsDropdownOpen(true); } },\r\n            react_1.default.createElement(icons_1.MenuIcon, null)),\r\n        isDropdownOpen && (react_1.default.createElement(Dropdown_1.Dropdown, { coorsTop: coors.top, coorsLeft: coors.left, onClose: function () { setIsDropdownOpen(false); } }))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/MenuList.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/MenuList.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../../icons */ \"./icons/index.ts\");\r\nvar menulist_css_1 = __importDefault(__webpack_require__(/*! ./menulist.css */ \"./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/menulist.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction MenuList(_a) {\r\n    return (react_1.default.createElement(\"ul\", null,\r\n        react_1.default.createElement(\"li\", { className: menulist_css_1.default.listItem },\r\n            react_1.default.createElement(icons_1.CommentsIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n        react_1.default.createElement(\"li\", { className: menulist_css_1.default.listItem },\r\n            react_1.default.createElement(icons_1.ShareIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"li\", { className: menulist_css_1.default.listItem },\r\n            react_1.default.createElement(icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"li\", { className: menulist_css_1.default.listItem },\r\n            react_1.default.createElement(icons_1.SaveIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"li\", { className: menulist_css_1.default.listItem },\r\n            react_1.default.createElement(icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuList = MenuList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/MenuList.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuList */ \"./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/MenuList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/menulist.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/menulist.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"listItem\": \"menulist__listItem--3_U9D\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/menulist.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/Layout/Content/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Menu/menu.css":
/*!****************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Menu/menu.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3rJOf\",\n\t\"menuButton\": \"menu__menuButton--mDpCF\",\n\t\"dropdown\": \"menu__dropdown--3tvWX\",\n\t\"closeButton\": \"menu__closeButton--1bnVb\",\n\t\"listItem\": \"menu__listItem--3KjIM\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/Layout/Content/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var previewPath = _a.previewPath;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview }, previewPath\r\n        ? react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: previewPath })\r\n        : react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: \"https://cdn.dribbble.com/userupload/3629148/file/original-bf91cbf462544f438eb17ed3f7776b27.png?compress=1&resize=1200x877\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/Layout/Content/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/Preview/preview.css":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/Preview/preview.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3teus\",\n\t\"previewImg\": \"preview__previewImg--2hX5m\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../icons */ \"./icons/index.ts\");\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts\");\r\nvar hoursAgo_1 = __webpack_require__(/*! ../../../../../../../react/js/hoursAgo */ \"./react/js/hoursAgo.js\");\r\nfunction TextContent(_a) {\r\n    var postId = _a.postId, title = _a.title, user = _a.user, publishedData = _a.publishedData;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_css_1.default.userLink },\r\n                user.logoPath\r\n                    ? react_1.default.createElement(\"img\", { src: user.logoPath, className: textcontent_css_1.default.avatar, alt: \"avatar\" })\r\n                    : react_1.default.createElement(icons_1.IconAnon, { width: 20, height: 20 }),\r\n                react_1.default.createElement(\"a\", { href: '#user-url', className: textcontent_css_1.default.username }, user.name)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel },\r\n                    \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \",\r\n                    (0, hoursAgo_1.hoursAgo)(publishedData)))),\r\n        react_1.default.createElement(Title_1.Title, { id: postId, title: title })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/CommentForm.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/CommentForm.tsx ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Yup = __importStar(__webpack_require__(/*! yup */ \"yup\"));\r\n//import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';\r\n//import { commentContext } from '../../context/commentContext';\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/commentform.css\"));\r\n// type Props = {\r\n//   value: string;\r\n//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;\r\n//   onSubmit: (event: FormEvent) => void;\r\n// }\r\n// export function CommentForm({ value, onChange, onSubmit }: Props) {\r\n//   return (\r\n//     <form className={styles.form} onSubmit={onSubmit}>\r\n//       <textarea className={styles.input} value={value} onChange={onChange}/>\r\n//       <button type=\"submit\" className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   )\r\n// }\r\n//модуль 12\r\n// export function CommentForm() {\r\n//   const [value, setValue] = useState('');\r\n//   const [touched, setTouched] = useState(false);\r\n//   const [valueError, setValueError] = useState('');\r\n//   function handleSubmit(event: FormEvent) {\r\n//     event.preventDefault(); \r\n//     setTouched(true);\r\n//     setValueError(validateValue())\r\n//     const isFormValid = !validateValue();\r\n//     if (!isFormValid) return;\r\n//     alert('Форма отправлена');\r\n//   }\r\n//   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {\r\n//     setValue(event.target.value);\r\n//   }\r\n//   function validateValue() {\r\n//     if(value.length <= 3) return 'Введите больше трех символов';\r\n//     return '';\r\n//   }\r\n//   return (\r\n//     <form className={styles.form} onSubmit={handleSubmit}>\r\n//       <textarea \r\n//         className={styles.input} \r\n//         value={value} \r\n//         onChange={handleChange} \r\n//         aria-invalid={valueError ? 'true' : undefined}/>\r\n//       {touched && valueError && (<div>{valueError}</div>)}\r\n//       <button type=\"submit\" className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   );\r\n// }\r\nfunction CommentForm() {\r\n    var formik = (0, formik_1.useFormik)({\r\n        initialValues: {\r\n            comment: ''\r\n        },\r\n        validationSchema: Yup.object({\r\n            comment: Yup.string()\r\n                .min(3, 'Введите больше трех символов')\r\n                .required('Поле не может быть пустым')\r\n        }),\r\n        onSubmit: function (values) {\r\n            alert('Ваш комментарий: ' + values.comment);\r\n        },\r\n    });\r\n    return (react_1.default.createElement(\"form\", { onSubmit: formik.handleSubmit, className: commentform_css_1.default.form },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, id: \"comment\", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.comment }),\r\n        formik.touched.comment && formik.errors.comment ? (react_1.default.createElement(\"div\", null, formik.errors.comment)) : null,\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/commentform.css":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/commentform.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--2jjzT\",\n\t\"input\": \"commentform__input--3tJe0\",\n\t\"button\": \"commentform__button--2n3oq\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar commentActions_1 = __webpack_require__(/*! ../../../../../../../../../store/comment/commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentForm/index.ts\");\r\nfunction CommentFormContainer() {\r\n    var value = (0, react_redux_1.useSelector)(function (state) { return state.comment.text; });\r\n    //достали данные из стора, положили в значение\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    function handleChange(event) {\r\n        dispatch((0, commentActions_1.updateComment)(event.target.value));\r\n        //({ type: 'UPDATE_COMMENT', text: event.target.value })\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm\r\n    // value={value}\r\n    // onChange={handleChange}\r\n    // onSubmit={handleSubmit}\r\n    , null));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../../../../../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css\"));\r\nvar RecursiveComment_1 = __webpack_require__(/*! ./RecursiveComment */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/index.ts\");\r\nfunction Post() {\r\n    var ref = (0, react_1.useRef)(null);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var location = (0, react_router_dom_1.useLocation)();\r\n    //const search = useLocation();\r\n    //const path = new URLSearchParams(search.search).get('id');\r\n    var path = location.pathname.substr(7);\r\n    var postData = (0, react_redux_1.useSelector)(function (store) { return store.posts.data.filter(function (post) { return post.postId === path; }).pop(); });\r\n    if (postData === undefined)\r\n        return react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"There is not post with id = \".concat(path) });\r\n    var title = postData.title, postId = postData.postId, publishedData = postData.publishedData, user = postData.user, previewPath = postData.previewPath, karmaValue = postData.karmaValue, url = postData.url, postText = postData.postText, subreddit = postData.subreddit, name = postData.name;\r\n    var commentsData = (0, useCommentsData_1.useCommentsData)(subreddit, postId)[0];\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                navigate('/');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, title),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, postText)),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n        react_1.default.createElement(\"ul\", { className: post_css_1.default.commentsList }, commentsData.map(function (comment) {\r\n            return react_1.default.createElement(RecursiveComment_1.RecursiveComment, { author: comment.author, key: comment.commentId, id: comment.commentId, depth: 1, replies: comment.replies, publishedData: comment.created, commentText: comment.body });\r\n        })))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/ReCommentForm.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/ReCommentForm.tsx ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReCommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar recommentform_css_1 = __importDefault(__webpack_require__(/*! ./recommentform.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/recommentform.css\"));\r\n//контролируемая\r\nfunction ReCommentForm(_a) {\r\n    var id = _a.id, author = _a.author, onClose = _a.onClose;\r\n    var node = document.getElementById(\"\".concat(id));\r\n    var formRef = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = formRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    if (!node)\r\n        return null;\r\n    var _b = (0, react_1.useState)(\"\".concat(author, \", \")), comment = _b[0], setComment = _b[1];\r\n    function handleChange(event) {\r\n        setComment(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        alert('Ваш комментарий: ' + comment);\r\n        setComment(\"\".concat(author, \", \"));\r\n    }\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"form\", { ref: formRef, className: recommentform_css_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"input\", { value: comment, ref: function (input) { return input && input.focus(); }, className: recommentform_css_1.default.input, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: recommentform_css_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))), node);\r\n}\r\nexports.ReCommentForm = ReCommentForm;\r\n//неконтролируемая\r\n// export function ReCommentForm({id, author}: IReCommentProps) {\r\n//   const ref = useRef<HTMLInputElement>(null);\r\n//   const node = document.getElementById(`${id}`);\r\n//   if(!node) return null;\r\n//   function handleSubmit(event: FormEvent) {\r\n//     event.preventDefault();\r\n//     alert('Ваш комментарий: ' + ref.current?.value)\r\n//   }\r\n//   return ReactDOM.createPortal ((\r\n//     <form className={styles.form} onSubmit={handleSubmit}>\r\n//       <input value={`${author}, `} autoFocus={true} className={styles.input} ref={ref}/>\r\n//       <button type=\"submit\" className={styles.button}>Комментировать</button>\r\n//     </form>\r\n//   ), node);\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/ReCommentForm.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/index.ts":
/*!************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/index.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ReCommentForm */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/ReCommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/recommentform.css":
/*!*********************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/recommentform.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"recommentform__form--3FC5m\",\n\t\"input\": \"recommentform__input--xng03\",\n\t\"button\": \"recommentform__button--2je47\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/recommentform.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/CommentList.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/CommentList.tsx ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../../../../../icons */ \"./icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../../../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar ReCommentForm_1 = __webpack_require__(/*! ../../ReCommentForm */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/ReCommentForm/index.ts\");\r\nvar commentlist_css_1 = __importDefault(__webpack_require__(/*! ./commentlist.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/commentlist.css\"));\r\nfunction CommentList(_a) {\r\n    var id = _a.id, author = _a.author;\r\n    var _b = (0, react_1.useState)(false), isReCommentOpen = _b[0], setIsReCommentOpen = _b[1];\r\n    var btnRef = (0, react_1.useRef)(null);\r\n    return (react_1.default.createElement(\"ul\", { className: commentlist_css_1.default.list },\r\n        react_1.default.createElement(\"li\", { className: commentlist_css_1.default.listItem },\r\n            react_1.default.createElement(\"button\", { ref: btnRef, onClick: function () { return setIsReCommentOpen(!isReCommentOpen); } },\r\n                react_1.default.createElement(icons_1.CommentsIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n            isReCommentOpen && (react_1.default.createElement(ReCommentForm_1.ReCommentForm, { id: id, author: author, onClose: function () { setIsReCommentOpen(false); } }))),\r\n        react_1.default.createElement(\"li\", { className: commentlist_css_1.default.listItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(icons_1.ShareIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"))),\r\n        react_1.default.createElement(\"li\", { className: commentlist_css_1.default.listItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(icons_1.WarningIcon, null),\r\n                react_1.default.createElement(Text_1.Text, { size: 14, mobileSize: 12, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")))));\r\n}\r\nexports.CommentList = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/CommentList.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/commentlist.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/commentlist.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"commentlist__list--n5EDO\",\n\t\"listItem\": \"commentlist__listItem--Qsceu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/commentlist.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/index.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/index.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentList */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/CommentList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/RecursiveComment.tsx":
/*!***************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/RecursiveComment.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RecursiveComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../../../../../icons */ \"./icons/index.ts\");\r\nvar CommentList_1 = __webpack_require__(/*! ./CommentList */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/CommentList/index.ts\");\r\nvar recursiveComment_css_1 = __importDefault(__webpack_require__(/*! ./recursiveComment.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/recursiveComment.css\"));\r\nvar hoursAgo_1 = __webpack_require__(/*! ../../../../../../../../../../react/js/hoursAgo */ \"./react/js/hoursAgo.js\");\r\nvar RecursiveComment = function (_a) {\r\n    var id = _a.id, commentText = _a.commentText, publishedData = _a.publishedData, author = _a.author, replies = _a.replies, _b = _a.depth, depth = _b === void 0 ? 1 : _b, _c = _a.className, className = _c === void 0 ? 'commentList' : _c;\r\n    var style = { paddingLeft: 20, marginTop: 34 };\r\n    return (react_1.default.createElement(\"li\", { className: recursiveComment_css_1.default.parent, style: style, id: id },\r\n        react_1.default.createElement(\"div\", { className: recursiveComment_css_1.default.commentInfo },\r\n            react_1.default.createElement(\"div\", { className: recursiveComment_css_1.default.user },\r\n                react_1.default.createElement(icons_1.IconAnon, { width: 20, height: 20 }),\r\n                react_1.default.createElement(\"span\", { className: recursiveComment_css_1.default.userName }, author),\r\n                react_1.default.createElement(\"span\", { className: recursiveComment_css_1.default.createdAt }, (0, hoursAgo_1.hoursAgo)(publishedData))),\r\n            react_1.default.createElement(\"span\", { className: recursiveComment_css_1.default.league })),\r\n        react_1.default.createElement(\"div\", { className: recursiveComment_css_1.default.text }, commentText),\r\n        react_1.default.createElement(CommentList_1.CommentList, { id: id, author: author }),\r\n        Array.isArray(replies) ? (react_1.default.createElement(\"ul\", { className: recursiveComment_css_1.default.child }, replies.map(function (item) {\r\n            var _a;\r\n            return (react_1.default.createElement(exports.RecursiveComment, { key: item.data.id, id: item.data.id, commentText: item.data.body, depth: depth + 1, publishedData: item.data.created, replies: item.data.replies ? (_a = item.data.replies) === null || _a === void 0 ? void 0 : _a.data.children : undefined, author: item.data.author, className: className }));\r\n        }))) : null));\r\n};\r\nexports.RecursiveComment = RecursiveComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/RecursiveComment.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/index.ts":
/*!***************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/index.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./RecursiveComment */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/RecursiveComment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/recursiveComment.css":
/*!***************************************************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/recursiveComment.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"parent\": \"recursiveComment__parent--yRKgq\",\n\t\"user\": \"recursiveComment__user--U69F5\",\n\t\"userName\": \"recursiveComment__userName--1svsG\",\n\t\"createdAt\": \"recursiveComment__createdAt--MBsfE\",\n\t\"text\": \"recursiveComment__text--1YCW3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/recursiveComment.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--1rTWP\",\n\t\"content\": \"post__content--1dajc\",\n\t\"close\": \"post__close--ihNmt\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css\"));\r\nfunction Title(_a) {\r\n    //const [isModalOpened, setIsModalOpened] = useState(false);\r\n    var title = _a.title, id = _a.id;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: '/posts/' + id, className: title_css_1.default.postLink }, title))\r\n    // {isModalOpened && (\r\n    //   <Post subreddit={subreddit} id={id} title={title} postText={postText} onClose={() => { setIsModalOpened(false); }}/>\r\n    // )}\r\n    );\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--2GdaG\",\n\t\"postLink\": \"title__postLink--3g7_3\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css":
/*!******************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--3oTPz\",\n\t\"metaData\": \"textcontent__metaData--b3Jl9\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--20jSS\",\n\t\"createdAt\": \"textcontent__createdAt--2kGUH\",\n\t\"userLink\": \"textcontent__userLink--2w-pz\",\n\t\"avatar\": \"textcontent__avatar--10wu1\",\n\t\"username\": \"textcontent__username--3CBOX\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/card.css":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/card.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--2QuPb\",\n\t\"textContent\": \"card__textContent--14FBZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/Layout/Content/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/CardsList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/CardsList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar postsActions_1 = __webpack_require__(/*! ../../../../store/posts/postsActions */ \"./src/store/posts/postsActions.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/Layout/Content/CardsList/Card/index.ts\");\r\nvar cardsList_css_1 = __importDefault(__webpack_require__(/*! ./cardsList.css */ \"./src/shared/Layout/Content/CardsList/cardsList.css\"));\r\nfunction CardsList() {\r\n    var token = (0, react_redux_1.useSelector)(function (state) { return state.token.data; });\r\n    var _a = (0, react_redux_1.useSelector)(function (store) { return store.posts; }), data = _a.data, loading = _a.loading, error = _a.error, after = _a.after, fetchCounter = _a.fetchCounter;\r\n    var dispatch = (0, react_redux_1.useDispatch)();\r\n    var bottomOfList = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        if (!token || token == 'undefined')\r\n            return;\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (entries[0].isIntersecting &&\r\n                (fetchCounter % 3 !== 0 || fetchCounter === 0)) {\r\n                // @ts-ignore\r\n                dispatch((0, postsActions_1.fetchPostsAsync)(token, after));\r\n            }\r\n        }, {\r\n            rootMargin: \"20px\",\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [token, bottomOfList.current, after]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardsList_css_1.default.cardsList },\r\n        data.length === 0 && !loading && !error && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        data.map(function (post) { return (react_1.default.createElement(Card_1.Card, { postId: post.postId, name: post.name, user: post.user, title: post.title, karmaValue: post.karmaValue, url: post.url, publishedData: post.publishedData, subreddit: post.subreddit, key: post.postId, previewPath: post.previewPath, postText: post.postText })); }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        fetchCounter % 3 === 0 && fetchCounter !== 0 && !loading &&\r\n            (react_1.default.createElement(\"button\", { onClick: function () {\r\n                    //@ts-ignore\r\n                    dispatch((0, postsActions_1.fetchPostsAsync)(token, after));\r\n                }, style: { display: 'block', border: '1px solid black', borderRadius: '10px', cursor: 'pointer', padding: '10px', margin: '0 auto' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\")),\r\n        error && (react_1.default.createElement(\"div\", { role: 'alert', style: { textAlign: 'center' } }, error))));\r\n}\r\nexports.CardsList = CardsList;\r\n// try {\r\n//   const { data: { data: { after, children}} } = await axios.get('https://oauth.reddit.com/r/rising', {\r\n//     headers: { Authorization: `bearer ${token}` },\r\n//     params: {\r\n//       limit: 7,\r\n//       after: nextAfter,           \r\n//     }\r\n//   });\r\n//   const postsData = children.map((item: IResponseItem) => {\r\n//     const { author, subreddit, selftext, score, created, thumbnail, title, url, id, sr_detail } = item.data;\r\n//     return {\r\n//       title: title,\r\n//       publishedData: created,\r\n//       user: { logoPath: sr_detail?.icon_img, name: author },\r\n//       previewPath:\r\n//         thumbnail && /\\.jpg|png|jpeg$/.test(thumbnail)\r\n//           ? thumbnail\r\n//           : undefined,\r\n//       karmaValue: score,\r\n//       url: url,\r\n//       id: id,\r\n//       postText: selftext,\r\n//       subreddit: subreddit\r\n//     };\r\n//   });\r\n//   setNextAfter(after);\r\n//   setPosts(prevChildren => prevChildren.concat(...postsData));\r\n// } catch (error) {\r\n//   setErrorLoading(String(error));\r\n// }\r\n// setLoading(false);\r\n// })()\r\n// \r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/cardsList.css":
/*!***********************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/cardsList.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardsList__cardsList--kkPMD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/cardsList.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/Layout/Content/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/Content.tsx":
/*!***********************************************!*\
  !*** ./src/shared/Layout/Content/Content.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./CardsList */ \"./src/shared/Layout/Content/CardsList/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ./CardsList/Card/TextContent/Title/Post */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/index.ts\");\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Layout/Content/content.css\"));\r\nfunction Content() {\r\n    var location = (0, react_router_dom_1.useLocation)();\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content },\r\n        react_1.default.createElement(react_router_dom_1.Routes, null,\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', element: react_1.default.createElement(react_router_dom_1.Navigate, { to: '/posts' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts', element: react_1.default.createElement(CardsList_1.CardsList, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: '404 list' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: react_1.default.createElement(Post_1.Post, null), errorElement: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: 'Not found 404' }) }),\r\n            react_1.default.createElement(react_router_dom_1.Route, { path: '/*', element: react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"Path \".concat(location.pathname, \" does not exist\") }) }))));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Content/content.css":
/*!***********************************************!*\
  !*** ./src/shared/Layout/Content/content.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--29jAg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/content.css?");

/***/ }),

/***/ "./src/shared/Layout/Content/index.ts":
/*!********************************************!*\
  !*** ./src/shared/Layout/Content/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Layout/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Layout/Header/Header.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Layout/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Layout/Header/SearchBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Layout/Header/SortBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Layout/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Layout/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = (0, useUserData_1.useUserData)(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons_1 = __webpack_require__(/*! ../../../../../../icons */ \"./icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css\"));\r\nvar Text_2 = __webpack_require__(/*! ../../../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: 'https://www.reddit.com/api/v1/authorize?client_id=fbNtO7IIO3ytjP_ONXggMA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity', \r\n        //href={ `https://www.reddit.com/api/v1/authorize?client_id=${ process.env.CLIENT_ID }&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity` }\r\n        className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(icons_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userName }, loading ? (react_1.default.createElement(Text_2.Text, { size: 20, color: Text_1.EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_2.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/UserBlock.tsx?");

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
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--2YfAi\",\n\t\"avatarBox\": \"userblock__avatarBox--3rX2Q\",\n\t\"avatarImage\": \"userblock__avatarImage--39hsu\",\n\t\"username\": \"userblock__username--1cpLP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Layout/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/SearchBlock/searchblock.css":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/SearchBlock/searchblock.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--Tvo2B\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/SortBlock/SortBlock.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/Layout/Header/SortBlock/SortBlock.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: 'styles.sortBlock' }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/SortBlock/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Layout/Header/SortBlock/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Layout/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Layout/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadtitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Layout/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Header/ThreadTitle/threadtitle.css":
/*!**************************************************************!*\
  !*** ./src/shared/Layout/Header/ThreadTitle/threadtitle.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--1-ZGp\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/header.css":
/*!*********************************************!*\
  !*** ./src/shared/Layout/Header/header.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--2rAev\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/header.css?");

/***/ }),

/***/ "./src/shared/Layout/Header/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/Layout/Header/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Layout/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useToken_1 = __webpack_require__(/*! ../../hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    (0, useToken_1.useToken)();\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/NotFoundPage.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/NotFoundPage.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotFoundPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar notfoundpage_css_1 = __importDefault(__webpack_require__(/*! ./notfoundpage.css */ \"./src/shared/UI/NotFoundPage/notfoundpage.css\"));\r\nvar Text_1 = __webpack_require__(/*! ../../helpers/Text */ \"./src/shared/helpers/Text/index.ts\");\r\nfunction NotFoundPage(_a) {\r\n    var description = _a.description;\r\n    return (react_1.default.createElement(\"div\", { className: notfoundpage_css_1.default.errorPage },\r\n        react_1.default.createElement(Text_1.Text, { As: 'h2', size: 20, className: notfoundpage_css_1.default.header }, \"\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\"),\r\n        react_1.default.createElement(Text_1.Text, { As: 'p', size: 14, className: notfoundpage_css_1.default.description }, description)));\r\n}\r\nexports.NotFoundPage = NotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/NotFoundPage.tsx?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/UI/NotFoundPage/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./NotFoundPage */ \"./src/shared/UI/NotFoundPage/NotFoundPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/index.ts?");

/***/ }),

/***/ "./src/shared/UI/NotFoundPage/notfoundpage.css":
/*!*****************************************************!*\
  !*** ./src/shared/UI/NotFoundPage/notfoundpage.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"errorPage\": \"notfoundpage__errorPage--33KU4\",\n\t\"header\": \"notfoundpage__header--204El\",\n\t\"description\": \"notfoundpage__description--3Kkp-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/UI/NotFoundPage/notfoundpage.css?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/Dropdown.tsx":
/*!**************************************************!*\
  !*** ./src/shared/helpers/Dropdown/Dropdown.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar MenuList_1 = __webpack_require__(/*! ../../Layout/Content/CardsList/Card/Menu/MenuList */ \"./src/shared/Layout/Content/CardsList/Card/Menu/MenuList/index.ts\");\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/helpers/Dropdown/dropdown.css\"));\r\nfunction Dropdown(_a) {\r\n    var onClose = _a.onClose, coorsTop = _a.coorsTop, coorsLeft = _a.coorsLeft;\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#comment_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { style: { top: coorsTop, left: coorsLeft }, className: dropdown_css_1.default.container, ref: ref },\r\n        react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"ul\", { className: dropdown_css_1.default.list },\r\n                react_1.default.createElement(MenuList_1.MenuList, { postId: \"123\" }),\r\n                react_1.default.createElement(\"button\", { className: dropdown_css_1.default.listButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))), node);\r\n}\r\nexports.Dropdown = Dropdown;\r\n// interface IDropdownProps {\r\n//   button: React.ReactNode;\r\n//   children: React.ReactNode;\r\n//   isOpen?: boolean;\r\n//   onOpen?: () => void;\r\n//   onClose?: () => void;\r\n// }\r\n// const NOOP = () => {};\r\n// export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {\r\n//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);\r\n//   //React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n//   React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])\r\n//   const handleOpen = () => {\r\n//     if (isOpen == undefined) {\r\n//       setIsDropdownOpen(!isDropdownOpen)\r\n//     }\r\n//   }\r\n//   return (\r\n//     <div className={styles.container}>\r\n//       <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>\r\n//         { button }\r\n//       </div>\r\n//       {isDropdownOpen && (\r\n//         <div className={styles.listContainer}>\r\n//           <ul className={styles.list}>\r\n//             { children }\r\n//             <button className={styles.listButton} onClick={() => setIsDropdownOpen(false)}>\r\n//               Закрыть\r\n//             </button>\r\n//           </ul>\r\n//         </div>\r\n//       )}\r\n//     </div>\r\n//   );\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/dropdown.css":
/*!**************************************************!*\
  !*** ./src/shared/helpers/Dropdown/dropdown.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--2Ms7s\",\n\t\"listContainer\": \"dropdown__listContainer--un3EB\",\n\t\"list\": \"dropdown__list--1zvc6\",\n\t\"listButton\": \"dropdown__listButton--ob6iM\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/helpers/Dropdown/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/helpers/Dropdown/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/helpers/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Text/Text.tsx":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/Text.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/helpers/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, className = props.className, href = props.href, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize, onClick = props.onClick, _h = props.visible, visible = _h === void 0 ? true : _h;\r\n    var classes = (0, classnames_1.default)(text_css_1.default[\"s\".concat(size)], (_a = {}, _a[text_css_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_css_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_css_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), text_css_1.default[color], (_d = {}, _d[text_css_1.default.bold] = bold, _d));\r\n    return (react_1.default.createElement(As, { className: classes, href: href, onClick: onClick }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/helpers/Text/index.ts":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/helpers/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/index.ts?");

/***/ }),

/***/ "./src/shared/helpers/Text/text.css":
/*!******************************************!*\
  !*** ./src/shared/helpers/Text/text.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--3ZMFh\",\n\t\"s20\": \"text__s20--hQm7W\",\n\t\"s16\": \"text__s16--30lhK\",\n\t\"s14\": \"text__s14--XXQC3\",\n\t\"s12\": \"text__s12--1CvXT\",\n\t\"s10\": \"text__s10--2dJkb\",\n\t\"bold\": \"text__bold--2lQkg\",\n\t\"black\": \"text__black--3m0cl\",\n\t\"orange\": \"text__orange--2-QQj\",\n\t\"green\": \"text__green--1PqEy\",\n\t\"white\": \"text__white--3jPPB\",\n\t\"greyF4\": \"text__greyF4--1DZGt\",\n\t\"greyF3\": \"text__greyF3--3aSbW\",\n\t\"greyD9\": \"text__greyD9--34Mwk\",\n\t\"greyC4\": \"text__greyC4--7ewWF\",\n\t\"grey99\": \"text__grey99--2cru7\",\n\t\"grey66\": \"text__grey66--25URW\",\n\t\"m28\": \"text__m28--2k0Ih\",\n\t\"m20\": \"text__m20--28u9L\",\n\t\"m16\": \"text__m16--p0sbD\",\n\t\"m14\": \"text__m14--2S4bF\",\n\t\"m12\": \"text__m12--1HezQ\",\n\t\"m10\": \"text__m10--3mk6C\",\n\t\"t28\": \"text__t28--2Nk7G\",\n\t\"t20\": \"text__t20--1QUQk\",\n\t\"t16\": \"text__t16--rJe2j\",\n\t\"t14\": \"text__t14--2oic0\",\n\t\"t12\": \"text__t12--rXxed\",\n\t\"t10\": \"text__t10--3kQJ1\",\n\t\"d28\": \"text__d28--1EQa1\",\n\t\"d20\": \"text__d20--eWk8P\",\n\t\"d16\": \"text__d16--1PDk6\",\n\t\"d14\": \"text__d14--3uz2k\",\n\t\"d12\": \"text__d12--3ojRs\",\n\t\"d10\": \"text__d10--vH_nq\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/helpers/Text/text.css?");

/***/ }),

/***/ "./src/store/comment/commentActions.ts":
/*!*********************************************!*\
  !*** ./src/store/comment/commentActions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateComment = exports.UPDATE_COMMENT = void 0;\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (text) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    text: text\r\n}); };\r\nexports.updateComment = updateComment;\r\n\n\n//# sourceURL=webpack:///./src/store/comment/commentActions.ts?");

/***/ }),

/***/ "./src/store/comment/commentReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/comment/commentReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentReducer = void 0;\r\nvar commentActions_1 = __webpack_require__(/*! ./commentActions */ \"./src/store/comment/commentActions.ts\");\r\nvar commentReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case commentActions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { text: action.text });\r\n    }\r\n};\r\nexports.commentReducer = commentReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/comment/commentReducer.ts?");

/***/ }),

/***/ "./src/store/me/meActions.ts":
/*!***********************************!*\
  !*** ./src/store/me/meActions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCESS,\r\n    data: data\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.meRequest)());\r\n        axios_1.default\r\n            .get('https://oauth.reddit.com/api/v1/me.json', {\r\n            headers: { Authorization: \"bearer \".concat(getState().token.data) }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img.replaceAll('amp;', '') }));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.meRequestError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meActions.ts?");

/***/ }),

/***/ "./src/store/me/meReducer.ts":
/*!***********************************!*\
  !*** ./src/store/me/meReducer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar meActions_1 = __webpack_require__(/*! ./meActions */ \"./src/store/me/meActions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case meActions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case meActions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        case meActions_1.ME_REQUEST_SUCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/meReducer.ts?");

/***/ }),

/***/ "./src/store/posts/postsActions.ts":
/*!*****************************************!*\
  !*** ./src/store/posts/postsActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.fetchPostsAsync = exports.fetchPostsError = exports.FETCH_POSTS_ERROR = exports.fetchPostsSuccess = exports.FETCH_POSTS_SUCCESS = exports.fetchPosts = exports.FETCH_POSTS = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.FETCH_POSTS = 'FETCH_POSTS';\r\nvar fetchPosts = function () { return ({\r\n    type: exports.FETCH_POSTS,\r\n    loading: true,\r\n    error: ''\r\n}); };\r\nexports.fetchPosts = fetchPosts;\r\nexports.FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';\r\nvar fetchPostsSuccess = function (data) { return ({\r\n    type: exports.FETCH_POSTS_SUCCESS,\r\n    data: data.data,\r\n    after: data.after,\r\n    fetchCounter: data.fetchCounter\r\n}); };\r\nexports.fetchPostsSuccess = fetchPostsSuccess;\r\nexports.FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';\r\nvar fetchPostsError = function (error) { return ({\r\n    type: exports.FETCH_POSTS_ERROR,\r\n    error: error\r\n}); };\r\nexports.fetchPostsError = fetchPostsError;\r\nvar fetchPostsAsync = function (token, after) {\r\n    return function (dispatch, getState) {\r\n        dispatch((0, exports.fetchPosts)());\r\n        function loadPosts() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var resp, posts, error_1;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            _a.trys.push([0, 2, , 3]);\r\n                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/r/rising', {\r\n                                    headers: { Authorization: \"bearer \".concat(token) },\r\n                                    params: {\r\n                                        //sr_detail: true,\r\n                                        after: after,\r\n                                        limit: 5\r\n                                    }\r\n                                })];\r\n                        case 1:\r\n                            resp = _a.sent();\r\n                            posts = resp.data.data.children.map(function (post) {\r\n                                var _a;\r\n                                return {\r\n                                    title: post.data.title,\r\n                                    postId: post.data.id,\r\n                                    publishedData: post.data.created,\r\n                                    user: { logoPath: (_a = post.data.sr_detail) === null || _a === void 0 ? void 0 : _a.icon_img, name: post.data.author },\r\n                                    previewPath: post.data.thumbnail && /\\.jpg|png|jpeg$/.test(post.data.thumbnail)\r\n                                        ? post.data.thumbnail\r\n                                        : undefined,\r\n                                    karmaValue: post.data.score,\r\n                                    url: post.data.url,\r\n                                    postText: post.data.selfText,\r\n                                    subreddit: post.data.subreddit,\r\n                                    name: post.data.name,\r\n                                    // author: post.data.author,\r\n                                    // karma: post.data.score,\r\n                                    // imgUrl: post.data.url_overridden_by_dest,\r\n                                    // subreddit: post.data.subreddit,\r\n                                    // commentsQty: post.data.num_comments,\r\n                                    // postText: post.data.selfText,\r\n                                };\r\n                            });\r\n                            dispatch((0, exports.fetchPostsSuccess)({\r\n                                data: posts,\r\n                                after: posts[posts.length - 1].name,\r\n                                fetchCounter: getState().posts.fetchCounter + 1\r\n                            }));\r\n                            return [3 /*break*/, 3];\r\n                        case 2:\r\n                            error_1 = _a.sent();\r\n                            dispatch((0, exports.fetchPostsError)(String(error_1)));\r\n                            return [3 /*break*/, 3];\r\n                        case 3: return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        loadPosts();\r\n    };\r\n};\r\nexports.fetchPostsAsync = fetchPostsAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/postsActions.ts?");

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

/***/ }),

/***/ "./src/store/token/tokenActions.ts":
/*!*****************************************!*\
  !*** ./src/store/token/tokenActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveTokenAsync = exports.saveTokenError = exports.SAVE_TOKEN_ERROR = exports.saveTokenSuccess = exports.SAVE_TOKEN_SUCCESS = exports.saveToken = exports.SAVE_TOKEN = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.SAVE_TOKEN = 'TOKEN_REQUEST';\r\nvar saveToken = function () { return ({\r\n    type: exports.SAVE_TOKEN\r\n}); };\r\nexports.saveToken = saveToken;\r\nexports.SAVE_TOKEN_SUCCESS = 'TOKEN_REQUEST_SUCCESS';\r\nvar saveTokenSuccess = function (data) { return ({\r\n    type: exports.SAVE_TOKEN_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.saveTokenSuccess = saveTokenSuccess;\r\nexports.SAVE_TOKEN_ERROR = 'TOKEN_REQUEST_ERROR';\r\nvar saveTokenError = function (error) { return ({\r\n    type: exports.SAVE_TOKEN_ERROR,\r\n    error: error\r\n}); };\r\nexports.saveTokenError = saveTokenError;\r\nvar saveTokenAsync = function (code, clientId, redditSecret) {\r\n    return function (dispatch) {\r\n        if (code === 'undefined')\r\n            return;\r\n        dispatch((0, exports.saveToken)());\r\n        axios_1.default\r\n            .post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n            auth: {\r\n                username: clientId,\r\n                password: redditSecret\r\n            },\r\n            headers: {\r\n                'Content-Type': 'application/x-www-form-urlencoded'\r\n            }\r\n        })\r\n            .then(function (resp) {\r\n            dispatch((0, exports.saveTokenSuccess)(resp.data.access_token));\r\n        })\r\n            .catch(function (error) {\r\n            console.log(error);\r\n            dispatch((0, exports.saveTokenError)(String(error)));\r\n        });\r\n    };\r\n};\r\nexports.saveTokenAsync = saveTokenAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/token/tokenActions.ts?");

/***/ }),

/***/ "./src/store/token/tokenReducer.ts":
/*!*****************************************!*\
  !*** ./src/store/token/tokenReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = void 0;\r\nvar tokenActions_1 = __webpack_require__(/*! ./tokenActions */ \"./src/store/token/tokenActions.ts\");\r\nvar tokenReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case tokenActions_1.SAVE_TOKEN:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case tokenActions_1.SAVE_TOKEN_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case tokenActions_1.SAVE_TOKEN_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/token/tokenReducer.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });