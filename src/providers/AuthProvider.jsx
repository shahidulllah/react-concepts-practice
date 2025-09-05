import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

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

  //update profile
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //log out
  const logout = () => {
    return signOut(auth);
  };

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //jwt
     if(currentUser.email){
      const user = {email: currentUser.email}

       axios.post('http://localhost:5000/jwt', user,)
       .then(res => console.log(res.data))
     }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
    logout,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
