/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Row from "./Row"

const Table = () => {

    const row1Values = [1, 2, 3];
    const row2Values = [4, 5, 6];
    const row3Values = [7, 8, 9];

    return (
        <>
            <div className="container">
                <Row values={row1Values} />
                <Row values={row2Values} />
                <Row values={row3Values} />
            </div>
        </>
    )
}

export default Table