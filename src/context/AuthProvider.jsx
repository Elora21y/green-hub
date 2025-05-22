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
  const [loading , setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
  const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
    setLoading(false)
      } else {
        setUser(null);
      }
    });
    return () => {
      unSubscribe()
    }
  }, []);
  // console.log(user);
  const googleLogin = () => {
    setLoading(true)
   return signInWithPopup(auth, provider)
      
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  const userInfo = {
    createUser,
    loginUser,
    logOut,
    user,
    setUser,
    googleLogin,
    loading
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AuthProvider;
