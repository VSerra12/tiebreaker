import Table from '../../components/Table'
import './TicTacToe.css'

const TicTacToe = () => {

  const column = 3
  const row = 3

  return (
    <>
    <div>TicTacToe</div>
    <Table column={column} row={row}/>
    </>
  )
}

export default TicTacToe
