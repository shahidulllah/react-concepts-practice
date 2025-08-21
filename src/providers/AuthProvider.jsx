import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "Shahidullah",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
