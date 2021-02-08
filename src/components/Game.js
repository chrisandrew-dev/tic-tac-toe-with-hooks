import React, { useState } from 'react'
import { calculateWinner } from '../helpers'
import Board from './Board'

const styles = {
  width: '200px',
  margin: '20px auto',
}

const listStyles = {
  listStyleType: 'none',
  padding: '0',
}

const Game = () => {
  const [ history, setHistory ] = useState([Array(9).fill(null)])
  const [ stepNum, setStepNum ] = useState(0)
  const [ xIsNext, setXIsNext ] = useState(true)
  const winner = calculateWinner(history[stepNum])

  const handleClick = i => {
    const pointInHistory = history.slice(0, stepNum + 1)
    const current = pointInHistory[stepNum]
    const squares = [...current]
    // If square occupied or game over, return
    if (winner || squares[i]) return
    // Render X or O on click
    squares[i] = xIsNext ? 'X' : 'O'
    // Update board state
    setHistory([...pointInHistory, squares])
    setStepNum(pointInHistory.length)
    // Update turn/player
    setXIsNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNum(step)
    setXIsNext(step % 2 === 0)
  }

  const renderMoves = () => (
    history.map((_step, move) => {
      const btnLabel = move 
        ? `Go to move #${move}`
        : 'Go to start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            {btnLabel}
          </button>
        </li>
      )
    })
  )

  return (
    <>
      <Board squares={history[stepNum]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {
            winner
            ? 'Winner: ' + winner
            : 'Next player: ' + (xIsNext ? 'X' : 'O')
          }
        </p>
        <ol style={listStyles}>
          {renderMoves()}
        </ol>
      </div>
    </>
  )
}

export default Game