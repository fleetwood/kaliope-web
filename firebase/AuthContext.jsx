import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const UserContext = createContext();

export const createUser = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email,password)
export const login = (email, password) => signInWithEmailAndPassword(firebaseAuth, email,password)
export const signout = () => signOut(firebaseAuth)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const logout = () => {
    return signOut(firebaseAuth)
  }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      console.log(user)
      setUser(currentUser)
    })
    return ()=> unsubscribe();
  })


  return (
    <UserContext.Provider value={{user, onAuthStateChanged, logout}}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
