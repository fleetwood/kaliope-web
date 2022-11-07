/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase/AuthContext.jsx":
/*!**********************************!*\
  !*** ./firebase/AuthContext.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"UserAuth\": () => (/* binding */ UserAuth),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const googleAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    googleAuth.addScope(\"profile\");\n    googleAuth.addScope(\"email\");\n    const createUser = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const login = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const googleLogin = async ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, googleAuth);\n    const logout = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, (currentUser)=>{\n            console.log(user);\n            setUser(currentUser);\n        });\n        return ()=>unsubscribe();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            googleAuth,\n            onAuthStateChanged: firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged,\n            login,\n            googleLogin,\n            logout,\n            createUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Admin/Documents/code/kaliope-web/firebase/AuthContext.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\nconst UserAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9BdXRoQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDN0I7QUFRbkI7QUFFaEIsTUFBTVcsNEJBQWNYLG9EQUFhQSxHQUFHO0FBR3BDLE1BQU1ZLHNCQUFzQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxDLE1BQU1hLGFBQWEsSUFBSU4sNkRBQWtCQTtJQUN2Q00sV0FBV0MsUUFBUSxDQUFDO0lBQ3BCRCxXQUFXQyxRQUFRLENBQUM7SUFFdEIsTUFBTUMsYUFBYSxDQUFDQyxPQUFPQyxXQUFhZiw2RUFBOEJBLENBQUNELG1EQUFZQSxFQUFFZSxPQUFNQztJQUMzRixNQUFNQyxRQUFRLENBQUNGLE9BQU9DLFdBQWFiLHlFQUEwQkEsQ0FBQ0gsbURBQVlBLEVBQUVlLE9BQU1DO0lBQ2xGLE1BQU1FLGNBQWMsVUFBWWIsOERBQWVBLENBQUNMLG1EQUFZQSxFQUFFWTtJQUM5RCxNQUFNTyxTQUFTLElBQU1mLHNEQUFPQSxDQUFDSixtREFBWUE7SUFFekNGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNc0IsY0FBY2xCLGlFQUFrQkEsQ0FBQ0YsbURBQVlBLEVBQUUsQ0FBQ3FCLGNBQWdCO1lBQ3BFQyxRQUFRQyxHQUFHLENBQUNiO1lBQ1pDLFFBQVFVO1FBQ1Y7UUFDQSxPQUFPLElBQUtEO0lBQ2Q7SUFHQSxxQkFDRSw4REFBQ2IsWUFBWWlCLFFBQVE7UUFBQ0MsT0FBTztZQUMzQmY7WUFDQUU7WUFDQVYsa0JBQWtCQSwrREFBQUE7WUFDbEJlO1lBQ0FDO1lBQ0FDO1lBQ0FMO1FBRUY7a0JBQUlMOzs7Ozs7QUFFUixFQUFFO0FBRUssTUFBTWlCLFdBQVcsSUFBTTtJQUM1QixPQUFPN0IsaURBQVVBLENBQUNVO0FBQ3BCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9BdXRoQ29udGV4dC5qc3g/MTY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBzaWduSW5XaXRoUG9wdXAsXG4gIEdvb2dsZUF1dGhQcm92aWRlclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IGdvb2dsZUF1dGggPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgZ29vZ2xlQXV0aC5hZGRTY29wZSgncHJvZmlsZScpO1xuICAgIGdvb2dsZUF1dGguYWRkU2NvcGUoJ2VtYWlsJyk7XG5cbiAgY29uc3QgY3JlYXRlVXNlciA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChmaXJlYmFzZUF1dGgsIGVtYWlsLHBhc3N3b3JkKVxuICBjb25zdCBsb2dpbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGZpcmViYXNlQXV0aCwgZW1haWwscGFzc3dvcmQpXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gYXN5bmMgKCkgPT4gc2lnbkluV2l0aFBvcHVwKGZpcmViYXNlQXV0aCwgZ29vZ2xlQXV0aCk7XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHNpZ25PdXQoZmlyZWJhc2VBdXRoKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgIHNldFVzZXIoY3VycmVudFVzZXIpXG4gICAgfSlcbiAgICByZXR1cm4gKCk9PiB1bnN1YnNjcmliZSgpO1xuICB9KVxuXG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgIHVzZXIsIFxuICAgICAgZ29vZ2xlQXV0aCxcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZCwgXG4gICAgICBsb2dpbixcbiAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgbG9nb3V0LFxuICAgICAgY3JlYXRlVXNlcixcblxuICAgIH19PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmaXJlYmFzZUF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJVc2VyQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZ29vZ2xlQXV0aCIsImFkZFNjb3BlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImdvb2dsZUxvZ2luIiwibG9nb3V0IiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwiVXNlckF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/AuthContext.jsx\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseApp\": () => (/* binding */ firebaseApp),\n/* harmony export */   \"firebaseAuth\": () => (/* binding */ firebaseAuth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// const firebaseConfig = {\n//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,\n//   appId: process.env.REACT_APP_FIREBASE_APP_ID,\n// };\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBc7jUAteyV95g5-g0qaOyzFlaPFfiLJIc\",\n    authDomain: \"kaliope-store.firebaseapp.com\",\n    projectId: \"kaliope-store\",\n    storageBucket: \"kaliope-store.appspot.com\",\n    messagingSenderId: \"225879104906\",\n    appId: \"1:225879104906:web:47ca0f8d1591e757fbfc73\",\n    measurementId: \"G-LVP8GM93NX\"\n};\nconsole.log(\"FIREBASE:::\", firebaseConfig);\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst firebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFFeEMsMkJBQTJCO0FBQzNCLG9EQUFvRDtBQUNwRCw0REFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELGtFQUFrRTtBQUNsRSx5RUFBeUU7QUFDekUsa0RBQWtEO0FBQ2xELEtBQUs7QUFDTCxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFDQUMsUUFBUUMsR0FBRyxDQUFDLGVBQWVUO0FBRXBCLE1BQU1VLGNBQWNaLDJEQUFhQSxDQUFDRSxnQkFBZTtBQUNqRCxNQUFNVyxlQUFlWixzREFBT0EsQ0FBQ1csYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlL2ZpcmViYXNlLmpzP2U3NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG4vLyBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbi8vICAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVBJX0tFWSxcbi8vICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuLy8gICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9QUk9KRUNUX0lELFxuLy8gICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4vLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfTUVTU0FHRV9TRU5ERVJfSUQsXG4vLyAgIGFwcElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfQVBQX0lELFxuLy8gfTtcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QmM3alVBdGV5Vjk1ZzUtZzBxYU95ekZsYVBGZmlMSkljXCIsXG4gIGF1dGhEb21haW46IFwia2FsaW9wZS1zdG9yZS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImthbGlvcGUtc3RvcmVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJrYWxpb3BlLXN0b3JlLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjIyNTg3OTEwNDkwNlwiLFxuICBhcHBJZDogXCIxOjIyNTg3OTEwNDkwNjp3ZWI6NDdjYTBmOGQxNTkxZTc1N2ZiZmM3M1wiLFxuICBtZWFzdXJlbWVudElkOiBcIkctTFZQOEdNOTNOWFwiLFxufTtcbmNvbnNvbGUubG9nKFwiRklSRUJBU0U6OjpcIiwgZmlyZWJhc2VDb25maWcpO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQXV0aCA9IGdldEF1dGgoZmlyZWJhc2VBcHApO1xuXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJjb25zb2xlIiwibG9nIiwiZmlyZWJhc2VBcHAiLCJmaXJlYmFzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/AuthContext */ \"./firebase/AuthContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction KaliopeWebApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/Admin/Documents/code/kaliope-web/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Admin/Documents/code/kaliope-web/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KaliopeWebApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUUrQjtBQUU3RCxTQUFTQyxjQUFjLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDekQscUJBQU8sOERBQUNILHNFQUFtQkE7a0JBQ25CLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRWxDO0FBRUEsaUVBQWVGLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlL0F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBLYWxpb3BlV2ViQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxBdXRoQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBLYWxpb3BlV2ViQXBwXG4iXSwibmFtZXMiOlsiQXV0aENvbnRleHRQcm92aWRlciIsIkthbGlvcGVXZWJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();