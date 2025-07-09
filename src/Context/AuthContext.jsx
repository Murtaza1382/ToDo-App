import { Children, createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [auth, setAuth] = useState(false);
};
