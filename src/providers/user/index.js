import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('@user:token') || '',
    info: localStorage.getItem('@user:info') || {},
  })

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
