/* eslint-disable react/prop-types */
import { createContext } from "react";

const BoxContext = createContext()

// eslint-disable-next-line no-unused-vars
const BoxProvider = ({children}) => {

  const setMarker = () => {

  }

  const data = {
    setMarker
  }
  return <BoxContext.Provider value={data}>{children}</BoxContext.Provider>
}

export default BoxContext