import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState({});

  const getUser = () => {
    // setUser({
    //   token: localStorage.getItem("@user:token") || "",
    //   info: localStorage.getItem("@user:info") || {},
    // });
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  const login = (user) => {
    // api
    //   .post("/sessions", user)
    //   .then((response) => {
    //     toast.success("Bem vindo!");
    //     localStorage.setItem(
    //       "@iSaude:token",
    //       JSON.stringify(response.data.token)
    //     );
    //     localStorage.setItem(
    //       "@iSaude:user",
    //       JSON.stringify(response.data.user)
    //     );
    //     // setAuth(true);
    //     return history.push("/dashboard");
    //   })
    //   .catch((err) => {
    //     toast.error("Email ou senha inválidos");
    //     console.log(err);
    //   });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
