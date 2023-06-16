import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from '../Firebase/firebase.config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
const auth = getAuth(app);

export const Auth = createContext();
const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUSer = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const handleUpdateProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const handleGooglesignin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    createUser,
    resetPassword,
    loginUSer,
    user,
    logOut,
    handleUpdateProfile,
    loader,
    handleGooglesignin,
  };

  return (
    <div>
      <Auth.Provider value={authInfo}>{children}</Auth.Provider>
    </div>
  );
};

export default AuthContext;
