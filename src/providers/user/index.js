import { createContext, useState, useContext } from "react";
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
      .post("/user/login", user)
      .then((response) => {
        toast.success("Bem vindo!")
        localStorage.setItem(
          "@iSaude:token",
          response.data.token
        )
        localStorage.setItem(
          "@iSaude:info",
          JSON.stringify(response.data.user)
        )
        setUser({ token: response.data.token, info: response.data.user })

        history.push("/dashboard")
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos")
        console.log(err)
      })
  }

  const logout = () => {
    localStorage.clear()
    setUser({token: "", info: ""})
    history.push("/")
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
