import React, {useState, useEffect} from 'react';
import './index.css';
import Board from './board'
import {calculateWinner, getRowWin, isFillList, getPosition} from './helpers'

const Game = () => {
  const squares = [{squares:Array(9).fill(null), position: {}}]
  const currentStatus = {letter: true, history:squares, stepMove:0}

  const [current, setCurrent] = useState()
  const [state, setState] = useState(currentStatus)
  const [info, setInfo] = useState({})

  useEffect(() => {
    const history = state.history
    const current = history[state.stepMove].squares
    const winner = calculateWinner(current);
    const winnerRows = winner ? getRowWin(current) : [] 
    let title
    if (winner) {
      title = 'Winner: ' + winner;
    } else {
      if (isFillList(current)) {
        title = 'It´s a tie'
      } else {
        title = 'Next player: ' + (state.letter ? 'X' : 'O');
      }
    }
    setInfo({title, winnerRows})
    setCurrent(current)
  }, [state])

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepMove + 1);
    const currents = history[history.length-1];
    const squares = currents.squares.slice();
    const position = getPosition(i)
    if (calculateWinner(squares) || squares[i]) {
     return 
    }

    squares[i] = state.letter ? 'X' : 'O';

    const newState = {
      letter: !state.letter,
      history: history.concat([{squares:squares, position:position}]),
      stepMove: history.length,
    }
    setState(newState)
  }

  const jumpTo = (s) => {
    const { value } = s.target;
    setState({
      ...state,
      letter:(value % 2) === 0,
      stepMove: parseInt(value,10)
    })
  }


  const moves = state.history.map((step, move) => {
    const desc = move ? 
      `Go to moce #${move} in fila: ${step.position.x} row ${step.position.y}`:
      'Go to game start';
    return (
      <li key={move}>
        <button value={move} onClick={jumpTo}>
          {(state.stepMove === move && move !== 0) ? (<strong>{desc}</strong>) : (desc)}
        </button>
      </li>
    );
  });

  
  return (
    <div className="game">

      <div className="game-board">
        { current ? (
            <Board
              winner={info.winnerRows}
              squares={current}
              onClick={handleClick}
            />
          ): "Loading..."
          
        }
      </div>
      <div className="game-info">
        <div>{info.title}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;