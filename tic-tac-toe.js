document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
      square.classList.add("square");
      square.addEventListener('click', () => {
        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          checkWinner();
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      });
      
      // Add hover effect event listeners
      square.addEventListener('mouseenter', () => {
        square.classList.add('hover');
      });
      square.addEventListener('mouseleave', () => {
        square.classList.remove('hover');
      });
    });
});

let currentPlayer = 'X';

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
      }
    });
};
