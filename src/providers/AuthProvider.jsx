import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    // const [loading, setLoading] = useState(true)

  const authInfo = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
