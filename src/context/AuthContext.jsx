import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  const loginAsAdmin = () => {
    setRole("admin");
  };

  const logout = () => {
    setRole(null);
  };

  return (
    <AuthContext
      value={{
        role,
        loginAsAdmin,
        logout,
        isAdmin: role === "admin",
      }}
    >
      {children}
    </AuthContext>
  );
};

export const useAuth = () => useContext(AuthContext);