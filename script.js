document.addEventListener("DOMContentLoaded", function () {
    var restart = document.querySelector("#bt");
    var squares = document.querySelectorAll('td');
    var currentPlayer = 'X'; 
    var moves = 0;
  
    function clearBoard() {
      for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
      }
      currentPlayer = 'X';
      moves = 0;
    }
  
    restart.addEventListener('click', clearBoard);
    function change() {
      if (this.textContent === '') {
        this.textContent = currentPlayer;
        checkWin();
        moves++;
        if (moves === squares.length) {
          alert('A tie!');
          clearBoard();
        }
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; 
      }
    }
  
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', change);
    }
  
    function checkWin() {
      var winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];
  
      for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        var a = squares[combo[0]].textContent;
        var b = squares[combo[1]].textContent;
        var c = squares[combo[2]].textContent;
        if (a === 'X' && b === 'X' && c === 'X') {
          alert('Player X wins!');
          clearBoard();
          return;
        } else if (a === 'O' && b === 'O' && c === 'O') {
          alert('Player O wins!');
          clearBoard();
          return;
        }
      }
    }
  });
  