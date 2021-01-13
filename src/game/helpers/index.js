const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

export const calculateWinner = (squares) => {

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const getRowWin = (squares) => {
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export const isFillList = (table) => {
  let isFill = true
  let i = 0
  while(isFill && i < table.length) {
    if (table[i] === null) {
      isFill = false
    }
    i++
  }
  return isFill
}

export const getPosition = (i) => {
  let position = {}
  if (i === 2 || i === 5 || i === 8) {
    position.y = 3
  } else if (i === 1 || i === 4 || i === 7) {
    position.y = 2
  } else {
    position.y = 1
  }
  position.x = parseInt((i/3), 10) + 1
  return position
}

export const getLetter = (letter) => {
  if (letter) {
    return 'X'
  }
  return 'O'
}
