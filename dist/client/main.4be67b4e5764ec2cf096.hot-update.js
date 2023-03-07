webpackHotUpdate("main",{

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction useCommentsData(subreddit, postId) {\r\n    var _a = react_1.default.useState([]), commentsData = _a[0], setCommentsData = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        axios_1.default.get(\"https://api.reddit.com/r/\".concat(subreddit, \"/comments/\").concat(postId))\r\n            .then(function (resp) {\r\n            var commentsData = resp.data[1].data.children.map(function (item) {\r\n                var _a = item.data, body = _a.body, created = _a.created, id = _a.id, replies = _a.replies, author = _a.author;\r\n                return {\r\n                    commentText: body,\r\n                    publishedData: created,\r\n                    id: id,\r\n                    replies: (replies) ? replies.data.children : undefined,\r\n                    author: author\r\n                };\r\n            }\r\n            // const result: ICommentsData = { comments: [] };\r\n            // for (let comments of response.data[1].data.children) {\r\n            //   result.comments.push({\r\n            //     commentId: comments.data.id,\r\n            //     author: comments.data.author,\r\n            //     created: comments.data.created,\r\n            //     karma: comments.data.score,\r\n            //     body: comments.data.body,\r\n            //     replies: comments.data.replies\r\n            //   })\r\n            , \r\n            // const result: ICommentsData = { comments: [] };\r\n            // for (let comments of response.data[1].data.children) {\r\n            //   result.comments.push({\r\n            //     commentId: comments.data.id,\r\n            //     author: comments.data.author,\r\n            //     created: comments.data.created,\r\n            //     karma: comments.data.score,\r\n            //     body: comments.data.body,\r\n            //     replies: comments.data.replies\r\n            //   })\r\n            console.log(comments.data.replies.data.children));\r\n        }, setCommentsData(result));\r\n    })\r\n        .catch(console.log);\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n[];\r\nreturn [commentsData];\r\n// const token = useSelector<RootState, string>(state => state.token)\r\n// const [loading, setLoading] = useState(false);\r\n// const [errorLoading, setErrorLoading] = useState('');\r\n// const loadComments = async () => {\r\n//   setLoading(true);\r\n//   setErrorLoading('');\r\n//   try {\r\n//     const resp = await axios.get(`http://api.reddit.com/r/${subreddit}/comments/${id}`, {})\r\n//     const commentsData = resp.data[1].data.children.map((item: IResponceItem) => {\r\n//       const { body, created, id, replies, author } = item.data;\r\n//       return {\r\n//         commentText: body,\r\n//         publishedData: created,\r\n//         id: id,\r\n//         replies: (replies) ? replies.data.children : undefined,\r\n//         author: author\r\n//       };\r\n//     });\r\n//     setComments(commentsData);\r\n//   } catch (error) {\r\n//     setErrorLoading(String(error));\r\n//   }\r\n//   setLoading(false);\r\n// } \r\n// useEffect(() => {\r\n//   loadComments();\r\n// }, [])\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nvar NotFoundPage_1 = __webpack_require__(/*! ../../../../../../../UI/NotFoundPage */ \"./src/shared/UI/NotFoundPage/index.ts\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/CommentFormContainer/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/post.css\"));\r\nvar RecursiveComment_1 = __webpack_require__(/*! ./RecursiveComment */ \"./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/RecursiveComment/index.ts\");\r\nfunction Post() {\r\n    var ref = (0, react_1.useRef)(null);\r\n    var navigate = (0, react_router_dom_1.useNavigate)();\r\n    var search = (0, react_router_dom_1.useLocation)();\r\n    var path = new URLSearchParams(search.search).get('id');\r\n    var postData = (0, react_redux_1.useSelector)(function (store) { return store.posts.data.filter(function (post) { return post.postId === path; }).pop(); });\r\n    if (postData === undefined)\r\n        return react_1.default.createElement(NotFoundPage_1.NotFoundPage, { description: \"There is not post with id = \".concat(path) });\r\n    var title = postData.title, postId = postData.postId, publishedData = postData.publishedData, user = postData.user, previewPath = postData.previewPath, karmaValue = postData.karmaValue, url = postData.url, postText = postData.postText, subreddit = postData.subreddit, name = postData.name;\r\n    var commentsData = (0, useCommentsData_1.useCommentsData)(subreddit, postId)[0];\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                navigate('/');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, title),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, postText)),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n        react_1.default.createElement(\"ul\", { className: post_css_1.default.commentsList }, commentsData.comments.map(function (comment) {\r\n            return react_1.default.createElement(RecursiveComment_1.RecursiveComment, { author: comment.author, key: comment.commentId, id: comment.commentId, depth: 1, replies: comment.replies, publishedData: comment.created, commentText: comment.body });\r\n        })))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Content/CardsList/Card/TextContent/Title/Post/Post.tsx?");

/***/ })

})