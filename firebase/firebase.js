import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBc7jUAteyV95g5-g0qaOyzFlaPFfiLJIc",
  authDomain: "kaliope-store.firebaseapp.com",
  projectId: "kaliope-store",
  storageBucket: "kaliope-store.appspot.com",
  messagingSenderId: "225879104906",
  appId: "1:225879104906:web:47ca0f8d1591e757fbfc73",
  measurementId: "G-LVP8GM93NX",
};
console.log("FIREBASE:::", firebaseConfig);

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp);

