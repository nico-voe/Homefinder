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
  const register = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  //Signup
  const login = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  //signout
  const logout = async () => {
    await auth.logout();
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
    register,
    login,
    logout,
  };

  const value = { currentUser, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
