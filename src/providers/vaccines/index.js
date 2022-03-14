import { createContext, useState, useContext } from 'react'

const VaccinesContext = createContext()

export const VaccinesProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState(localStorage.getItem('@vaccines') || [])

  return (
    <VaccinesContext.Provider value={{ vaccines }}>{children}</VaccinesContext.Provider>
  )
}

export const useVaccines = () => useContext(VaccinesContext)
