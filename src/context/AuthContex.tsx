import { useContext, createContext, useEffect, useState } from "react";

export const INITIAL_USER = {
  id: "",
  name: "",
  usename: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContex = createContext<IContextType>(INITIAL_STATE);

const AuthContex = () => {
  return <div>AuthContex</div>;
};

export default AuthContex;
