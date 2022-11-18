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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"UserAuth\": () => (/* binding */ UserAuth),\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/helpers */ \"./utils/helpers.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const googleAuth = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    googleAuth.addScope(\"profile\");\n    googleAuth.addScope(\"email\");\n    const createUser = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const login = (email, password)=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, email, password);\n    const googleLogin = async ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, googleAuth);\n    const logout = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, (currentUser)=>{\n            (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.log)(\"user authorized\");\n            setUser(currentUser);\n        });\n        return ()=>unsubscribe();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            googleAuth,\n            onAuthStateChanged: firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged,\n            login,\n            googleLogin,\n            logout,\n            createUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Admin/Documents/code/kaliope-web/firebase/AuthContext.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\nconst UserAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9BdXRoQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQzdCO0FBUW5CO0FBQ2tCO0FBRWxDLE1BQU1ZLDRCQUFjWixvREFBYUEsR0FBRztBQUVwQyxNQUFNYSxzQkFBc0IsQ0FBQyxFQUFFQyxTQUFRLEVBQUUsR0FBSztJQUNuRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNYyxhQUFhLElBQUlQLDZEQUFrQkE7SUFDekNPLFdBQVdDLFFBQVEsQ0FBQztJQUNwQkQsV0FBV0MsUUFBUSxDQUFDO0lBRXBCLE1BQU1DLGFBQWEsQ0FBQ0MsT0FBT0MsV0FDekJoQiw2RUFBOEJBLENBQUNELG1EQUFZQSxFQUFFZ0IsT0FBT0M7SUFDdEQsTUFBTUMsUUFBUSxDQUFDRixPQUFPQyxXQUNwQmQseUVBQTBCQSxDQUFDSCxtREFBWUEsRUFBRWdCLE9BQU9DO0lBQ2xELE1BQU1FLGNBQWMsVUFBWWQsOERBQWVBLENBQUNMLG1EQUFZQSxFQUFFYTtJQUM5RCxNQUFNTyxTQUFTLElBQU1oQixzREFBT0EsQ0FBQ0osbURBQVlBO0lBRXpDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTXVCLGNBQWNuQixpRUFBa0JBLENBQUNGLG1EQUFZQSxFQUFFLENBQUNzQixjQUFnQjtZQUNwRWYsbURBQUdBLENBQUM7WUFDSkssUUFBUVU7UUFDVjtRQUNBLE9BQU8sSUFBTUQ7SUFDZjtJQUVBLHFCQUNFLDhEQUFDYixZQUFZZSxRQUFRO1FBQ25CQyxPQUFPO1lBQ0xiO1lBQ0FFO1lBQ0FYLGtCQUFrQkEsK0RBQUFBO1lBQ2xCZ0I7WUFDQUM7WUFDQUM7WUFDQUw7UUFDRjtrQkFFQ0w7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNZSxXQUFXLElBQU07SUFDNUIsT0FBTzVCLGlEQUFVQSxDQUFDVztBQUNwQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvQXV0aENvbnRleHQuanN4PzE2ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbk91dCxcbiAgc2lnbkluV2l0aFBvcHVwLFxuICBHb29nbGVBdXRoUHJvdmlkZXIsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi8uLi91dGlscy9oZWxwZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgZ29vZ2xlQXV0aCA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZ29vZ2xlQXV0aC5hZGRTY29wZShcInByb2ZpbGVcIik7XG4gIGdvb2dsZUF1dGguYWRkU2NvcGUoXCJlbWFpbFwiKTtcblxuICBjb25zdCBjcmVhdGVVc2VyID0gKGVtYWlsLCBwYXNzd29yZCkgPT5cbiAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZmlyZWJhc2VBdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICBjb25zdCBsb2dpbiA9IChlbWFpbCwgcGFzc3dvcmQpID0+XG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZmlyZWJhc2VBdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICBjb25zdCBnb29nbGVMb2dpbiA9IGFzeW5jICgpID0+IHNpZ25JbldpdGhQb3B1cChmaXJlYmFzZUF1dGgsIGdvb2dsZUF1dGgpO1xuICBjb25zdCBsb2dvdXQgPSAoKSA9PiBzaWduT3V0KGZpcmViYXNlQXV0aCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgbG9nKFwidXNlciBhdXRob3JpemVkXCIpO1xuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB1c2VyLFxuICAgICAgICBnb29nbGVBdXRoLFxuICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICBnb29nbGVMb2dpbixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICBjcmVhdGVVc2VyLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VyQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmlyZWJhc2VBdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0Iiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwibG9nIiwiVXNlckNvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImdvb2dsZUF1dGgiLCJhZGRTY29wZSIsImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJnb29nbGVMb2dpbiIsImxvZ291dCIsInVuc3Vic2NyaWJlIiwiY3VycmVudFVzZXIiLCJQcm92aWRlciIsInZhbHVlIiwiVXNlckF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/AuthContext.jsx\n");

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

/***/ "./utils/constants.ts":
/*!****************************!*\
  !*** ./utils/constants.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__host__\": () => (/* binding */ __host__),\n/* harmony export */   \"__port__\": () => (/* binding */ __port__),\n/* harmony export */   \"__prod__\": () => (/* binding */ __prod__)\n/* harmony export */ });\nconst __prod__ = \"development\" === \"production\";\nconst __port__ = Number(process.env.REACT_APP_PORT) || 3000;\nconst __host__ = process.env.REACT_APP_HOST || \"localhost\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsV0FBV0Msa0JBQXlCLGFBQVk7QUFFdEQsTUFBTUMsV0FBV0MsT0FBT0YsUUFBUUcsR0FBRyxDQUFDQyxjQUFjLEtBQUssS0FBSTtBQUMzRCxNQUFNQyxXQUFXTCxRQUFRRyxHQUFHLENBQUNHLGNBQWMsSUFBSSxZQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uc3RhbnRzLnRzP2EzNDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IF9fcHJvZF9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgY29uc3QgX19wb3J0X18gPSBOdW1iZXIocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BPUlQpIHx8IDMwMDBcbmV4cG9ydCBjb25zdCBfX2hvc3RfXyA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9IT1NUIHx8ICdsb2NhbGhvc3QnIl0sIm5hbWVzIjpbIl9fcHJvZF9fIiwicHJvY2VzcyIsIl9fcG9ydF9fIiwiTnVtYmVyIiwiZW52IiwiUkVBQ1RfQVBQX1BPUlQiLCJfX2hvc3RfXyIsIlJFQUNUX0FQUF9IT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/constants.ts\n");

/***/ }),

/***/ "./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URLify\": () => (/* binding */ URLify),\n/* harmony export */   \"jsonify\": () => (/* binding */ jsonify),\n/* harmony export */   \"log\": () => (/* binding */ log),\n/* harmony export */   \"logError\": () => (/* binding */ logError),\n/* harmony export */   \"now\": () => (/* binding */ now),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./utils/constants.ts\");\n\nconst URLify = (content)=>{\n    const urls = content.match(/((((ftp|https?):\\/\\/)|(w{3}\\.))[\\-\\w@:%_\\+.~#?,&\\/\\/=]+)/g);\n    if (urls) {\n        urls.forEach(function(url) {\n            content = content.replace(url, '<a target=\"_blank\" href=\"' + url + '\">' + url + \"</a>\");\n        });\n    }\n    return content.replace(\"(\", \"<br/>(\");\n};\nconst jsonify = (obj)=>JSON.stringify(obj, null, 2);\nconst log = (message, ...optionalParams)=>{\n    if (!_constants__WEBPACK_IMPORTED_MODULE_0__.__prod__) {\n        if (optionalParams && \"string\" === typeof optionalParams[0]) {\n            console.log(message + \" \" + optionalParams);\n        } else if (optionalParams && optionalParams.length > 0) {\n            console.log(message, jsonify(optionalParams.map((o)=>o)));\n        } else {\n            console.log(message);\n        }\n    }\n};\nconst logError = (message, ...optionalParams)=>{\n    if (!_constants__WEBPACK_IMPORTED_MODULE_0__.__prod__) {\n        console.error(message, optionalParams);\n    }\n};\nconst todo = (...params)=>log(`!!!TODO!!!`, ...params);\nconst now = ()=>new Date();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9oZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDc0M7QUFFL0IsTUFBTUMsU0FBUyxDQUFDQyxVQUFtQjtJQUN4QyxNQUFNQyxPQUFPRCxRQUFRRSxLQUFLLENBQ3hCO0lBRUYsSUFBSUQsTUFBTTtRQUNSQSxLQUFLRSxPQUFPLENBQUMsU0FBVUMsR0FBVSxFQUFFO1lBQ2pDSixVQUFVQSxRQUFRSyxPQUFPLENBQ3ZCRCxLQUNBLDhCQUE4QkEsTUFBTSxPQUFPQSxNQUFNO1FBRXJEO0lBQ0YsQ0FBQztJQUNELE9BQU9KLFFBQVFLLE9BQU8sQ0FBQyxLQUFLO0FBQzlCLEVBQUU7QUFFSyxNQUFNQyxVQUFVLENBQUNDLE1BQVlDLEtBQUtDLFNBQVMsQ0FBQ0YsS0FBSSxJQUFJLEVBQUMsR0FBRTtBQUV2RCxNQUFNRyxNQUFNLENBQUNDLFNBQWUsR0FBR0MsaUJBQTBCO0lBQzVELElBQUksQ0FBQ2QsZ0RBQVFBLEVBQUU7UUFDWCxJQUFJYyxrQkFBa0IsYUFBYSxPQUFPQSxjQUFjLENBQUMsRUFBRSxFQUFHO1lBQzFEQyxRQUFRSCxHQUFHLENBQUNDLFVBQVEsTUFBSUM7UUFDMUIsT0FDSyxJQUFJQSxrQkFBa0JBLGVBQWVFLE1BQU0sR0FBRyxHQUFHO1lBQ2xERCxRQUFRSCxHQUFHLENBQUNDLFNBQVFMLFFBQVFNLGVBQWVHLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0E7UUFDeEQsT0FDSztZQUNESCxRQUFRSCxHQUFHLENBQUNDO1FBQ2hCLENBQUM7SUFDUCxDQUFDO0FBQ0wsRUFBQztBQUVNLE1BQU1NLFdBQVcsQ0FBQ04sU0FBZSxHQUFHQyxpQkFBMEI7SUFDakUsSUFBSSxDQUFDZCxnREFBUUEsRUFBRTtRQUNYZSxRQUFRSyxLQUFLLENBQUNQLFNBQVFDO0lBQzFCLENBQUM7QUFDTCxFQUFFO0FBRUssTUFBTU8sT0FBTyxDQUFDLEdBQUdDLFNBQWVWLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSVUsUUFBTztBQUUzRCxNQUFNQyxNQUFNLElBQU0sSUFBSUMsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2hlbHBlcnMudHM/ZDJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IF9fcHJvZF9fIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGNvbnN0IFVSTGlmeSA9IChjb250ZW50OnN0cmluZykgPT4ge1xuICBjb25zdCB1cmxzID0gY29udGVudC5tYXRjaChcbiAgICAvKCgoKGZ0cHxodHRwcz8pOlxcL1xcLyl8KHd7M31cXC4pKVtcXC1cXHdAOiVfXFwrLn4jPywmXFwvXFwvPV0rKS9nXG4gICk7XG4gIGlmICh1cmxzKSB7XG4gICAgdXJscy5mb3JFYWNoKGZ1bmN0aW9uICh1cmw6c3RyaW5nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgICAgICB1cmwsXG4gICAgICAgICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHVybCArICdcIj4nICsgdXJsICsgXCI8L2E+XCJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZShcIihcIiwgXCI8YnIvPihcIik7XG59O1xuXG5leHBvcnQgY29uc3QganNvbmlmeSA9IChvYmo6YW55KSA9PiBKU09OLnN0cmluZ2lmeShvYmosbnVsbCwyKVxuXG5leHBvcnQgY29uc3QgbG9nID0gKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4ge1xuICAgIGlmICghX19wcm9kX18pIHtcbiAgICAgICAgaWYgKG9wdGlvbmFsUGFyYW1zICYmIFwic3RyaW5nXCIgPT09IHR5cGVvZiBvcHRpb25hbFBhcmFtc1swXSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UrJyAnK29wdGlvbmFsUGFyYW1zKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChvcHRpb25hbFBhcmFtcyAmJiBvcHRpb25hbFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UsanNvbmlmeShvcHRpb25hbFBhcmFtcy5tYXAobyA9PiBvKSkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dFcnJvciA9IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHtcbiAgICBpZiAoIV9fcHJvZF9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSxvcHRpb25hbFBhcmFtcylcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9kbyA9ICguLi5wYXJhbXM6YW55KSA9PiBsb2coYCEhIVRPRE8hISFgLC4uLnBhcmFtcylcblxuZXhwb3J0IGNvbnN0IG5vdyA9ICgpID0+IG5ldyBEYXRlKCk7Il0sIm5hbWVzIjpbIl9fcHJvZF9fIiwiVVJMaWZ5IiwiY29udGVudCIsInVybHMiLCJtYXRjaCIsImZvckVhY2giLCJ1cmwiLCJyZXBsYWNlIiwianNvbmlmeSIsIm9iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2ciLCJtZXNzYWdlIiwib3B0aW9uYWxQYXJhbXMiLCJjb25zb2xlIiwibGVuZ3RoIiwibWFwIiwibyIsImxvZ0Vycm9yIiwiZXJyb3IiLCJ0b2RvIiwicGFyYW1zIiwibm93IiwiRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/helpers.ts\n");

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