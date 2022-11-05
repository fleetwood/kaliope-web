import { createContext, useContext } from "react";
import { firebaseAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
    signOut,
  //   onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();

export const createUser = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email,password)
export const login = (email, password) => signInWithEmailAndPassword(firebaseAuth, email,password)
export const signout = () => signOut(firebaseAuth)
// export const authStateChanged = () => onAuthStateChanged(firebaseAuth)

export const AuthContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={[]}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
