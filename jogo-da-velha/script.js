let player = 'X';

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

document.querySelectorAll('span').forEach(cell => {
  cell.addEventListener('click', (event) => {
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));

    cell.textContent = player
    play(row, col)
  })
})

function play(row, col) {
  if (makeMovie(row, col)) {
    if (checkWinner()) {
      alert('Jogador ' + player + ' Vencel!')
      return;
    }

    if (isBoardFull()) {
      alert('Empate!')
      return;
    }
    startPlayer()
  }
}

function startPlayer() {
  player = player === "X" ? 'O' : 'X';
}

function makeMovie(row, col) {
  if (board[row][col] === '') {
    board[row][col] = player
    return true;
  } else {
    console.log('Espaço já ocupado');
    return false;
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }

    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }

  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}

function isBoardFull() {
  for (let row of board) {
    for (let cell of row) {
      if (cell === '') return false;
    }
  }
  return true;
}

function reStart() {
  document.querySelectorAll('span').forEach(cell => {
    cell.textContent = '';
    player = "X"
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]
  })
}