import React from 'react';
import Square from './square.js'

const Board = ({squares,onClick,winner}) => {
  const list = winner.slice();
  const index = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
  ]
  return (
      <div>
        {
          index.map(item => 
            <div key={`key-${item[0]}`} className="board-row">
              {
                item.map(it =>{
                  let classwin = list.indexOf(it) >= 0 ? "game-win" : "";
                  return (
                    <Square key={it} value={squares[it]} winner={classwin} onClick={() => onClick(it)} /> 
                  )
                })
              }
            </div>
          )
        }
      </div>
    )
}

export default Board;