import { createContext, useState, useEffect, Children } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  useEffect(() => {
    const storeUser = localStorage.getItem("user");
    if (storeUser) SetUser(JSON.parse(storeUser));
  }, []);

  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    SetUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    SetUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
