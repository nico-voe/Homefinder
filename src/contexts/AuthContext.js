import { createContext, useContext, useState, useEffect } from "react";
import app, {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //signup
  const firebaseRegister = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  //Signup
  const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  //signout
  const logout = async () => {
    await auth.signOut();
  };

  //firebase listens to any change

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const exports = {
    user,
    firebaseRegister,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={exports}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
