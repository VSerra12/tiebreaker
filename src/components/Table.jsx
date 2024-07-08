/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Row from "./Row"
import { useState } from "react";

const Table = () => {

    // const row1Values = [1, 2, 3];
    // const row2Values = [4, 5, 6];
    // const row3Values = [7, 8, 9];

    // return (
    //     <>
    //         <div className="container">
    //             <Row values={row1Values} />
    //             <Row values={row2Values} />
    //             <Row values={row3Values} />
    //         </div>
    //     </>
    // )

    const winCodes = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

    const x = 'X'
    const o = 'O'
    const player = [
        {
            symbol: x,
            moves: [],
            number: 1
        },
        {
            symbol: o,
            moves: [],
            number: 2
        }
    ]


    const [celdas, setCeldas] = useState(Array(9).fill('')); // Inicializa con celdas vacías
    const [turn, setTurn] = useState(player[0])

    const putSymbol = () => {

        turn.symbol === x ? setTurn(player[1]) : setTurn(player[0])
    }

    const handleClic = (indice) => {
        const nuevasCeldas = [...celdas];
        if (nuevasCeldas[indice] === '') {
            nuevasCeldas[indice] = turn.symbol;
        }
        putSymbol()
        setCeldas(nuevasCeldas);
        checkWin()
    };

    const checkWin = () => {
        for (let i = 0; i < winCodes.length; i++) {
            const element = winCodes[i];
            console.log(element)
            
        }
        return false;
    }

    const filas = [];
    for (let i = 0; i < 3; i++) {
        const celdasFila = [];
        for (let j = 0; j < 3; j++) {
            const indice = i * 3 + j;
            celdasFila.push(
                <td className="box col-4 square" key={indice} onClick={() => handleClic(indice)}>
                    {celdas[indice]}
                </td>
            );
        }
        filas.push(<tr key={i} className="row">{celdasFila}</tr>);
    }

    return (
        <table>
            <tbody>{filas}</tbody>
        </table>
    );

}

export default Table