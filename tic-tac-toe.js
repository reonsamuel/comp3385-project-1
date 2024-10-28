document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
      square.classList.add("square");
      square.addEventListener('click', () => {
        if (!square.textContent && !gameOver) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          checkWinner();
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
      
      // Add hover effect event listeners
      square.addEventListener('mouseenter', () => {
        if (!square.textContent) {
          square.classList.add('hover');
        }
      });
      square.addEventListener('mouseleave', () => {
        square.classList.remove('hover');
      });
    });

    // Add event listener for new game button
    const newGameButton = document.querySelector('.btn');
    newGameButton.addEventListener('click', resetGame);
});

let currentPlayer = 'X';
let gameOver = false;

const checkWinner = () => {
    const squares = document.querySelectorAll('.square');
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    lines.forEach(line => {
      const [a, b, c] = line;
      if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
        document.getElementById('status').textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
        document.getElementById('status').classList.add('you-won');
        gameOver = true;
      }
    });
};

const resetGame = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O', 'hover');
    });
    document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
    document.getElementById('status').classList.remove('you-won');
    currentPlayer = 'X'; // Reset currentPlayer to X
    gameOver = false; // Reset gameOver flag
};
