/* eslint-disable react/prop-types */

import { useState } from "react"



const Box = ({ value }) => {
 
  

  const [box, setBox] = useState(Array(9).fill(''))

  const handleClick = () => {

    setBox('x')

  }

  return (
    <div id={value} className="box col-4 square" onClick={handleClick()}>{box}</div>
  )
}

export default Box