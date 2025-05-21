import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase-init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Toaster } from "react-hot-toast";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  console.log(user);
  const googleLogin = () => {
   return signInWithPopup(auth, provider)
      
  };
  const logOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    createUser,
    loginUser,
    logOut,
    user,
    setUser,
    googleLogin,
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AuthProvider;
