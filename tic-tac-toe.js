document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
      square.classList.add("square");
      square.addEventListener('click', () => {
        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
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
