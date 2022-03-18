import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory()

  const [user, setUser] = useState({
    token: localStorage.getItem("@iSaude:token") || "",
    info: JSON.parse(localStorage.getItem("@iSaude:info")) || {}
  })

  const login = (user) => {
    api
      .post("/login", user)
      .then((response) => {
        toast.success("Bem vindo!")
        localStorage.setItem(
          "@iSaude:token",
          response.data.accessToken
        )
        localStorage.setItem(
          "@iSaude:info",
          JSON.stringify(response.data.user)
        )
        setUser({ ...user, token: response.data.accessToken, info: response.data.user })

        history.push("/dashboard")
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos")
        console.log(err)
      })
  }

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
