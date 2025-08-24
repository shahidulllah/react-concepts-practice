import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //create User
  const createUser = (email, passsword) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, passsword);
  };

  //login User
  const loginUser = (email, passsword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passsword);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
