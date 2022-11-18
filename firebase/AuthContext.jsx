import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { log } from "./../utils/helpers";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleAuth = new GoogleAuthProvider();
  googleAuth.addScope("profile");
  googleAuth.addScope("email");

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const login = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);
  const googleLogin = async () => signInWithPopup(firebaseAuth, googleAuth);
  const logout = () => signOut(firebaseAuth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      log("user authorized");
      setUser(currentUser);
    });
    return () => unsubscribe();
  });

  return (
    <UserContext.Provider
      value={{
        user,
        googleAuth,
        onAuthStateChanged,
        login,
        googleLogin,
        logout,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
