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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"UserAuth\": () => (/* binding */ UserAuth),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const googleAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    googleAuth.addScope(\"profile\");\n    googleAuth.addScope(\"email\");\n    const createUser = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const login = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const googleLogin = async ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, googleAuth);\n    const logout = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, (currentUser)=>{\n            console.log(user);\n            setUser(currentUser);\n        });\n        return ()=>unsubscribe();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            googleAuth,\n            onAuthStateChanged: firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged,\n            login,\n            googleLogin,\n            logout,\n            createUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Admin/Documents/code/kaliope-web/firebase/AuthContext.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\nconst UserAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9BdXRoQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDN0I7QUFRbkI7QUFFaEIsTUFBTVcsNEJBQWNYLG9EQUFhQSxHQUFHO0FBRXBDLE1BQU1ZLHNCQUFzQixDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQ25ELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU1hLGFBQWEsSUFBSU4sNkRBQWtCQTtJQUN2Q00sV0FBV0MsUUFBUSxDQUFDO0lBQ3BCRCxXQUFXQyxRQUFRLENBQUM7SUFFdEIsTUFBTUMsYUFBYSxDQUFDQyxPQUFPQyxXQUFhZiw2RUFBOEJBLENBQUNELG1EQUFZQSxFQUFFZSxPQUFNQztJQUMzRixNQUFNQyxRQUFRLENBQUNGLE9BQU9DLFdBQWFiLHlFQUEwQkEsQ0FBQ0gsbURBQVlBLEVBQUVlLE9BQU1DO0lBQ2xGLE1BQU1FLGNBQWMsVUFBWWIsOERBQWVBLENBQUNMLG1EQUFZQSxFQUFFWTtJQUM5RCxNQUFNTyxTQUFTLElBQU1mLHNEQUFPQSxDQUFDSixtREFBWUE7SUFFekNGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNc0IsY0FBY2xCLGlFQUFrQkEsQ0FBQ0YsbURBQVlBLEVBQUUsQ0FBQ3FCLGNBQWdCO1lBQ3BFQyxRQUFRQyxHQUFHLENBQUNiO1lBQ1pDLFFBQVFVO1FBQ1Y7UUFDQSxPQUFPLElBQUtEO0lBQ2Q7SUFHQSxxQkFDRSw4REFBQ2IsWUFBWWlCLFFBQVE7UUFBQ0MsT0FBTztZQUMzQmY7WUFDQUU7WUFDQVYsa0JBQWtCQSwrREFBQUE7WUFDbEJlO1lBQ0FDO1lBQ0FDO1lBQ0FMO1FBQ0Y7a0JBQUlMOzs7Ozs7QUFFUixFQUFFO0FBRUssTUFBTWlCLFdBQVcsSUFBTTtJQUM1QixPQUFPN0IsaURBQVVBLENBQUNVO0FBQ3BCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9BdXRoQ29udGV4dC5qc3g/MTY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBzaWduSW5XaXRoUG9wdXAsXG4gIEdvb2dsZUF1dGhQcm92aWRlclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgZ29vZ2xlQXV0aCA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBnb29nbGVBdXRoLmFkZFNjb3BlKCdwcm9maWxlJyk7XG4gICAgZ29vZ2xlQXV0aC5hZGRTY29wZSgnZW1haWwnKTtcblxuICBjb25zdCBjcmVhdGVVc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGZpcmViYXNlQXV0aCwgZW1haWwscGFzc3dvcmQpXG4gIGNvbnN0IGxvZ2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZmlyZWJhc2VBdXRoLCBlbWFpbCxwYXNzd29yZClcbiAgY29uc3QgZ29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoLCBnb29nbGVBdXRoKTtcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4gc2lnbk91dChmaXJlYmFzZUF1dGgpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcilcbiAgICB9KVxuICAgIHJldHVybiAoKT0+IHVuc3Vic2NyaWJlKCk7XG4gIH0pXG5cblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgdXNlciwgXG4gICAgICBnb29nbGVBdXRoLFxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkLCBcbiAgICAgIGxvZ2luLFxuICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICBsb2dvdXQsXG4gICAgICBjcmVhdGVVc2VyLFxuICAgIH19PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmaXJlYmFzZUF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJVc2VyQ29udGV4dCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiZ29vZ2xlQXV0aCIsImFkZFNjb3BlIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImdvb2dsZUxvZ2luIiwibG9nb3V0IiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwiVXNlckF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/AuthContext.jsx\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseApp\": () => (/* binding */ firebaseApp),\n/* harmony export */   \"firebaseAuth\": () => (/* binding */ firebaseAuth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// const firebaseConfig = {\n//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,\n//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,\n//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,\n//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,\n//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,\n//   appId: process.env.REACT_APP_FIREBASE_APP_ID,\n// };\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBc7jUAteyV95g5-g0qaOyzFlaPFfiLJIc\",\n    authDomain: \"kaliope-store.firebaseapp.com\",\n    projectId: \"kaliope-store\",\n    storageBucket: \"kaliope-store.appspot.com\",\n    messagingSenderId: \"225879104906\",\n    appId: \"1:225879104906:web:47ca0f8d1591e757fbfc73\",\n    measurementId: \"G-LVP8GM93NX\"\n};\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst firebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFFeEMsMkJBQTJCO0FBQzNCLG9EQUFvRDtBQUNwRCw0REFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELGtFQUFrRTtBQUNsRSx5RUFBeUU7QUFDekUsa0RBQWtEO0FBQ2xELEtBQUs7QUFDTCxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFTyxNQUFNQyxjQUFjViwyREFBYUEsQ0FBQ0UsZ0JBQWU7QUFDakQsTUFBTVMsZUFBZVYsc0RBQU9BLENBQUNTLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9maXJlYmFzZS5qcz9lNzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuLy8gY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4vLyAgIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQSV9LRVksXG4vLyAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GSVJFQkFTRV9BVVRIX0RPTUFJTixcbi8vICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRklSRUJBU0VfUFJPSkVDVF9JRCxcbi8vICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuLy8gICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX01FU1NBR0VfU0VOREVSX0lELFxuLy8gICBhcHBJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZJUkVCQVNFX0FQUF9JRCxcbi8vIH07XG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUJjN2pVQXRleVY5NWc1LWcwcWFPeXpGbGFQRmZpTEpJY1wiLFxuICBhdXRoRG9tYWluOiBcImthbGlvcGUtc3RvcmUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJrYWxpb3BlLXN0b3JlXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwia2FsaW9wZS1zdG9yZS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMjU4NzkxMDQ5MDZcIixcbiAgYXBwSWQ6IFwiMToyMjU4NzkxMDQ5MDY6d2ViOjQ3Y2EwZjhkMTU5MWU3NTdmYmZjNzNcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUxWUDhHTTkzTlhcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmaXJlYmFzZUFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG5leHBvcnQgY29uc3QgZmlyZWJhc2VBdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XG5cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/AuthContext */ \"./firebase/AuthContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction KaliopeWebApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_firebase_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/Admin/Documents/code/kaliope-web/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Admin/Documents/code/kaliope-web/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KaliopeWebApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUUrQjtBQUU3RCxTQUFTQyxjQUFjLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFFekQscUJBQU8sOERBQUNILHNFQUFtQkE7a0JBQ25CLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRWxDO0FBRUEsaUVBQWVGLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlL0F1dGhDb250ZXh0J1xuXG5mdW5jdGlvbiBLYWxpb3BlV2ViQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcblxuICByZXR1cm4gPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEthbGlvcGVXZWJBcHBcbiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dFByb3ZpZGVyIiwiS2FsaW9wZVdlYkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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