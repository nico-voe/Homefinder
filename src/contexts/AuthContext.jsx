import React from "react";
import { useContext, useState, useEffect } from "react";
import app, { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  console.log("auth", auth);
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
