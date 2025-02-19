const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
const players = ['X', 'O'];
let currentPlayer = players[0];
let gameOver = false;

const endMessage = document.getElementById('statusMessage');

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (gameOver || squares[i].textContent !== '') return;

        squares[i].textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            endMessage.textContent = `Game over! ${currentPlayer} wins!`;
            highlightWinningSquares(currentPlayer);
            gameOver = true;
            return;
        }

        if (checkTie()) {
            endMessage.textContent = `Game is tied!`;
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
        endMessage.textContent = `${currentPlayer}'s turn!`;
    });
}

function checkWin(currentPlayer) {
    for (let i = 0; i < winning_combinations.length; i++) {
        const [a, b, c] = winning_combinations[i];
        if (squares[a].textContent === currentPlayer &&
            squares[b].textContent === currentPlayer &&
            squares[c].textContent === currentPlayer) {
            return [a, b, c]; // Return the winning indices
        }
    }
    return null;
}

function highlightWinningSquares() {
    const winningSquares = checkWin(currentPlayer);
    if (winningSquares) {
        winningSquares.forEach(index => {
            squares[index].style.backgroundColor = "#90EE90";
        });
    }
}

function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function restartButton() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
        squares[i].style.backgroundColor = "#F5F5F5"; // Reset to default color
    }
    endMessage.textContent = `X's turn!`;
    currentPlayer = players[0];
    gameOver = false;
}
