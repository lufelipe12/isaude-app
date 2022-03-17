import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState({});

  const getUser = () => {
    setUser({
      token: localStorage.getItem("@iSaude:token") || "",
      info: localStorage.getItem("@iSaude:info") || {},
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const login = (user) => {
    api
      .post("/login", user)
      .then((response) => {
        toast.success("Bem vindo!");
        localStorage.setItem(
          "@iSaude:token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@iSaude:user",
          JSON.stringify(response.data.user)
        );
        // setUser({ ...user, token: response.data.accessToken, info: response.data.user })

        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.log(err);
      });
  };

  const logout = () => localStorage.clear();

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
