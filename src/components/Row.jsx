/* eslint-disable react/prop-types */
import Box from "./Box"

const Row = ({values}) => {
  return (
    <>
    <div className="row">
            {values.map((value, index) => (
                <Box key={index} value={value} />
            ))}
        </div>
    </>
  )
}

export default Row