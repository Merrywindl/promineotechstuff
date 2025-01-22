const startButton = document.getElementById('start'); // Each of these grabs the elements by their ID on the html page
const playerXInput = document.getElementById('playerX');
const playerOInput = document.getElementById('playerO');
const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const alertElement = document.getElementById('alert');
const restartButton = document.getElementById('restart');
const newGameButton = document.getElementById(`newGame`);
let playerXRename = document.getElementById(`player1`);
let playerORename = document.getElementById(`player2`);

function names () {
  playerXRename.innerText = playerX;
  playerORename.innerText = playerO;
} //function that changes the text on the player name elements

newGameButton.onclick = () => {
  // Shows the player name inputs and start button and hides the gameboard and other buttons
  playerXInput.style.display = 'inline';
  playerOInput.style.display = 'inline';
  startButton.style.display = 'inline';
  restartButton.style.display = 'none';
  newGameButton.style.display = 'none';
  boardElement.style.display = 'none';
  
  // Resets the player name displays upon starting a brand new game
  playerXRename.style.display = 'none';
  playerORename.style.display = 'none';
  
  // Reset the game state to blank original
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusElement.textContent = '';
  alertElement.style.display = 'none';
  renderBoard(); // Updates the gameboard to show empty cells but is still hidden
};


let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let storedPlayer = 'X'; // Store the current player before switching to next player

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const renderBoard = () => {
  boardElement.innerHTML = '';
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.onclick = () => handleCellClick(i); // Attached an event listener outside the function
    boardElement.appendChild(cellElement);
    cells.push(cellElement);
  }
  cells.forEach((cell, index) => {
    if (board[index] === 'X') {
      cell.classList.add('X');
    } else if (board[index] === 'O') {
      cell.classList.add('O');
    }
    cell.textContent = board[index];
  });
}; //this shows the gameboard upon starting a new game

const renderBoardOnRestart = () => {
  boardElement.innerHTML = '';
  const cells = [];
  for (let i = 0; i < 9; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.onclick = () => handleCellClick(i); 
    boardElement.appendChild(cellElement);
    cells.push(cellElement);
  }
  cells.forEach((cell, index) => {
    cell.textContent = '';
  });
  renderBoard(); // Call renderBoard to update the board
}; //this renders the board when restarting the current game

const startGame = () => {
    playerX = playerXInput.value.trim(); //starts the game and grabs player names
    playerO = playerOInput.value.trim();

    // Validates that both names are provided before starting the game
    if (playerX === `` || playerO === ``) {
        alert("Both player names must be filled in.");
        return;
    }

    names(); // calls the names function

    // Hide input fields only after successful validation
    playerXInput.style.display = 'none';
    playerOInput.style.display = 'none';
    startButton.style.display = 'none';

    playerXRename.style.display = 'block'; // Show player 1 name
    playerORename.style.display = 'block'; // Show player 2 name


    // Reset the game board and state
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X'; // X starts first
    statusElement.textContent = `${playerX}'s Turn`;
    statusElement.style.display = 'block';

    alertElement.style.display = 'none'; // Hides any existing alerts
    renderBoard();
    boardElement.style.display = 'grid'; // these three lines set the board element and relevant buttons to viewable
    restartButton.style.display = 'inline';
    newGameButton.style.display = 'inline';
};

const handleCellClick = (index) => {
  if (board[index] !== '' || !gameActive) return;

  board[index] = currentPlayer;
  storedPlayer = currentPlayer; // Store the current player before switching
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusElement.textContent = `${currentPlayer === 'X' ? playerX : playerO}'s Turn`;
  checkResult();
  renderBoard();
};

const checkResult = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== '') {
      gameActive = false;
      alertElement.textContent = `${storedPlayer === 'X' ? playerX : playerO} Wins!`;
      alertElement.classList.add('alert-success');
      alertElement.style.display = 'block';
      
      return;
    }
  }
  
  if (!board.includes('')) {
    gameActive = false;
    alertElement.textContent = `It's a Draw!`;
    alertElement.classList.remove('alert-success');
    alertElement.classList.add('alert-warning');
    alertElement.style.display = 'block';
  } //alerts based upon conditions of tie
};

const restartGame = () => {
  storedPlayer = 'X';
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  alertElement.style.display = 'none';
  statusElement.textContent = `${currentPlayer}'s Turn`;
  renderBoardOnRestart(); // Call renderBoardOnRestart to update the board on restart
}; //restarts the game with current player names

startButton.onclick = startGame;
restartButton.onclick = restartGame;
renderBoard();