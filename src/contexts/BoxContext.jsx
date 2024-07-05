import { createContext } from "react";

const BoxContext = createContext()

const BoxProvider = ({children}) => {

  const setMarker = () => {

  }

  const data = {
    setMarker
  }
  return <BoxContext.Provider value={data}>{children}</BoxContext.Provider>
}

export default BoxContext