import React, { useState, useEffect, createContext, FC, useContext } from "react";
import data from "./data.json";
import IUser from "../@types/IUser";
import { IAuthContext } from "../@types/IAuthContext";


const AuthContext = createContext<Partial<IAuthContext>>({});
export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const [ user, setUser ] = useState<IUser | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const user_json = JSON.parse(user as string);
    if (user_json) {
      setUser({
        id: user_json.id,
        name: user_json.name,
        email: user_json.email,
      });
    }
  }, []);

  const login = (creds: { email: string; password: string }): void => {
    if (creds.email === "admin@senorjob.com" && creds.password === "admin") {
      const user = {
        id: "1",
        name: "Ayoub EL AAMRI",
        email: creds.email,
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
    } else {
      throw new Error("Creds Incorrect !");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
