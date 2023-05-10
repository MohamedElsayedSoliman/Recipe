import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase/firebaseAuthentication";
type Props = {
  children: React.ReactNode;
};

const provider = new GoogleAuthProvider();

interface AuthContextType {
  register: (email: string, password: string) => Promise<UserCredential>;
  user: any;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  ResetEmail: (email: string) => Promise<void>;
  googleSignIn: () => Promise<UserCredential>;
}

export const AuthContext = createContext<AuthContextType>({
  register: (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password),
  user: "",
  googleSignIn: () => signInWithPopup(auth, provider),

  signIn: (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password),
  logOut: () => signOut(auth),
  ResetEmail: (email: string) => sendPasswordResetEmail(auth, email),
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    localStorage.removeItem("currentuser");

    return signOut(auth);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const ResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        localStorage.setItem("currentuser", JSON.stringify(currentuser));
        setUser(currentuser);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    register,
    user,
    ResetEmail,
    signIn,
    logOut,
    googleSignIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
